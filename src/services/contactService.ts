import axios from "axios";
import Cookies from "js-cookie";
import type { SignupFormValues ,SigninFormValues } from "../type/signformvalue.type";
import type { IProduct } from "../type/products.type";
import type { IUser } from "../type/Iuser.type";
import { CartProduct } from "../type/CartProduct.type";


// const SERVER_URL = "https://fakestoreapi.com";
const SERVER_URL = import.meta.env.VITE_SERVER_URL;
console.log("Server URL:", SERVER_URL);




let TOKEN: string | null = null;
 TOKEN = localStorage.getItem("token");
if (TOKEN) {
  axios.defaults.headers.common["Authorization"] = `${TOKEN}`;
}




export const getAllProducts = async (): Promise<{ data: IProduct[]; status: number }> => {
  const url = `${SERVER_URL}/products`;
  try {
    const response = await axios.get<IProduct[]>(url);
    return {
      data: response.data,   
      status: response.status,   
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;  
}};


export const getProduct = async (id:number): Promise<{ data: IProduct; status: number }> => {
  const url = `${SERVER_URL}/products/${id}`;
  try {
    const response = await axios.get<IProduct>(url);
    return {
      data: response.data,   
      status: response.status,   
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;  
}};





export const addCart = async (productid: number): Promise<number> => {
  const userId = Cookies.get("userId");      
  if (!userId) {
    console.error("User ID is not available");
    return 400;      
  }
  const url = `${SERVER_URL}/carts`;  
  const currentDate = new Date().toISOString().split('T')[0];  

  console.log(currentDate)
  const newCart = {
    userId: userId,
    date: currentDate,    
    products: [{ productId: productid, quantity: 1 }],
  };

  try {
    const response = await axios.post(url, newCart);
    return response.status;
  } catch (error) {
    console.error("Error adding to cart:", error);
    if (axios.isAxiosError(error) && error.response) {
      return error.response.status;   
    }
    return 500;
  }
};


export const usercart = async (): Promise<{ status: number; data: any }> => {
  const userId = Cookies.get("userId");      
  if (!userId) {
    console.error("User ID is not available");
    return { status: 400, data: null };  
  }
  const url = `${SERVER_URL}/carts/user/${userId}`;  
  try {
    const response = await axios.get(url);
    return { 
      status: response.status, 
      data: response.data,  
    };
  } catch (error) {
    console.error("Error adding to cart:", error);
    if (axios.isAxiosError(error) && error.response) {
      return { 
        status: error.response.status, 
        data: error.response.data || null, 
      };
    }
    return { status: 500, data: null };  
  }
};




export const signupUser = async (user: SignupFormValues): Promise<{ status: number }> => {
  const url  = `${SERVER_URL}/users`;
  console.log(user);
  const response = await axios.post(url, user);
  console.log(response)
  return { status: response.status };
};






export const loginUser = async (
  user: SigninFormValues
): Promise<{ status: number; }> => {
  const url = `${SERVER_URL}/auth/login`;
  try {
    const response = await axios.post(url, user);
    const token = response.data.token as string; //
    TOKEN = token;  
    localStorage.setItem("token", TOKEN);   
    axios.defaults.headers.common["Authorization"] = `Bearer ${TOKEN}`;
    console.log(TOKEN , response);
    await  getUserIdByName(user.username)
    return { status: response.status  };  
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
       
      console.error("Login error:", error);
      return { status: error.response.status  };
    } else {
      
      console.error("Unexpected error:", error);
      return { status: 500 };       
    }      
  }
};

export const getUserIdByName = async (name: string): Promise<void> => {
  const url = `${SERVER_URL}/users`;
  try {
    const response = await axios.get(url);
    const users = response.data;
    const user = users.find((user: { username: string }) => user.username === name);
    if (user) {
      const userId = user.id;
      Cookies.set("userId", userId.toString(), { expires: 7 }); 
      console.log("User ID stored in cookies:", userId);
    }
 
  } catch (error) {
    console.error("Error fetching users:", error);

  }
};



export const getuser = async (id: number): Promise<IUser| undefined> => {
  const url = `${SERVER_URL}/users/${id}`;
  try {
    const response = await axios.get(url);
    const users = response.data; 
    return users

  } catch (error) {
    console.error("Error fetching users:", error);
    return undefined;
  }
};

export const getAllCategory = async (): Promise<{ data: any; status: number }> => {
  const url = `${SERVER_URL}/products/categories`;
  try {
    const response = await axios.get(url);
    return { data: response.data, status: response.status };
  } catch (error) {
    console.error("Error fetching users:", error);
    return { data: [], status: 500 }; // مقدار پیش‌فرض در صورت خطا
  }
};





export const fetchCartDetails = async (cartItems: CartProduct[]) => {
  console.log(cartItems)
  try {
    const responses = await Promise.all(
      cartItems.map(async (item) => {
        const product = await axios.get(`https://fakestoreapi.com/products/${item.productId}`).then(res => res.data);
        return { ...product, quantity: item.quantity };
      })
    );
    return responses;
  } catch (error) {
    console.error("Error fetching cart details:", error);
    throw error; 
  }
};
















// export const logoutUser = () => {
//   TOKEN = null;
//   localStorage.removeItem("token");
//   delete axios.defaults.headers.common["Authorization"];
//   const url = `${SERVER_URL}/user/logout`;
//   console.log("logout");

//   return axios.post(url);
// };
