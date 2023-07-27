import { ChangeEvent, useRef } from "react";
import styles from "../../styles/atoms/TextArea.module.css";
import React from "react";

type TextAreaProps = {
  value: string,
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea = React.memo(
  (props: TextAreaProps): JSX.Element => {
    console.log("rendering TextArea");
  
    const {value, onChange} = props;
    const textareaRef = useRef<HTMLTextAreaElement>(null);
  
    const calculateTextAreaHeight = () => {
      textareaRef.current!.style.height = "auto";
      textareaRef.current!.style.height = `calc(${textareaRef.current?.scrollHeight}px - 1.2rem)`;
    }
  
    return (
      <textarea
      value={value}
      className={styles.textarea}
      onChange={(event) => {
        calculateTextAreaHeight();
        onChange(event);
      }}
      ref={textareaRef} />
    );
  }
);

export default TextArea;
