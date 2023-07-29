import { ChangeEvent, MutableRefObject, useRef, useState } from "react";
import styles from "../../styles/atoms/Input.module.css";

type InputProps = {
  style: "large" | "medium",
  value: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,
  placeholder?: string
}

const Input = (props: InputProps): JSX.Element => {
  const {style, value, onChange, placeholder} = props;

  return (
    <input
      type="text"
      className={`${styles.input} ${style == "large" && styles.input_large}`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export default Input;
