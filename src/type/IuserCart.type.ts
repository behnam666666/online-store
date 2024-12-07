interface IProduct {
    productId: number;
    quantity: number;
  }
  
export  interface IUserCart {
    id: number;
    userId: number;
    date: string;      
    products: IProduct[];
    __v: number;
  }
  
