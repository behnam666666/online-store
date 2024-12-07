
import { ButtonProps } from '@mui/material/Button';

export interface IButtonProps  extends ButtonProps{
    children: React.ReactNode;
    bgcolor?: string;
    fontcolor?:string;
}