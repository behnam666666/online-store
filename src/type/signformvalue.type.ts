export interface SignupFormValues extends SigninFormValues {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
    passwordconfirm: string;
  }

  export interface SigninFormValues {
    username: string;
    password: string;
  }

