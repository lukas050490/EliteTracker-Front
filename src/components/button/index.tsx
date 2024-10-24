import { ComponentProps, forwardRef } from "react";
import  styles from './styles.module.css'
import clsx from "clsx";

type ButtonProps = ComponentProps<'button'> & {
    variant?: "info" | "error";
};


 function Button({ children,disabled, variant = "info", ...props}:ButtonProps) {
        return (
        <button 
        {...props} 
        className={clsx(
        styles.container,
         variant === "error" && styles.error,
        disabled && styles.disabled)}
        >
        {children}
        </button>)
    }

    export default Button
    

