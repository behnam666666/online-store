export interface SigninDataItem {
    label: string; 
    column: number;
  }
  
  export const SigninData: SigninDataItem[]| undefined = [
    { label: "username", column: 10 },
    { label: "password", column: 10 },
  ];

  export const SignupData: SigninDataItem[]| undefined = [
    { label: "firstname", column: 6 },
    { label: "lastname", column: 6 },
    { label: "username", column: 6 },
    { label: "phone", column: 6 },
    { label: "email", column: 12 },
    { label: "password", column: 6 },
    { label: "passwordconfirm", column: 6 },
  ];