import { ChangeEvent, MutableRefObject, useState } from "react";
import styles from "../../styles/atoms/Input.module.css";

type InputProps = {
  style: "large",
  placeholder?: string,
  value: string,
  onChange: any
}

const Input = (props: InputProps): JSX.Element => {
  const {style, placeholder, value, onChange} = props;

  return (
    <input
      type="text"
      className={`${styles.input} ${style == "large" && styles.input_large}`}
      placeholder={placeholder}
      onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
      defaultValue={value}
      key={value}
    />
  )
}

export default Input;
