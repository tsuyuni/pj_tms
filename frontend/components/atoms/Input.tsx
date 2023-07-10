import { ChangeEvent, MutableRefObject } from "react";
import styles from "../../styles/atoms/Input.module.css";

type InputProps = {
  style: "large",
  placeholder?: string,
  defaultValue?: string,
  value: string
}

const Input = (props: InputProps): JSX.Element => {
  const {style, placeholder, defaultValue, value} = props;

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    //
  }

  return (
    <input
      type="text"
      className={`${styles.input} ${style == "large" && styles.input_large}`}
      placeholder={placeholder}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeInput(e)}
    />
  )
}

export default Input;
