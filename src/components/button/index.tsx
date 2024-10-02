import { ComponentProps } from "react";
import * as styles from './styles.module.css'

type ButtonProps = ComponentProps<'button'>;

function Button({ children, ...props}: ButtonProps) {
    return <button {...props} className={styles.container}>{children}</button>
}

export default Button