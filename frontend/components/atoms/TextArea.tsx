import { useRef } from "react";
import styles from "../../styles/atoms/TextArea.module.css";

type TextAreaProps = {
  title?: string
}

const TextArea = (props: TextAreaProps): JSX.Element => {
  const {title} = props;
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const onChange = () => {
    textareaRef.current!.style.height = "auto";
    textareaRef.current!.style.height = `calc(${textareaRef.current?.scrollHeight}px - 1.2rem)`;
  }

  return (
    <>
      <h2>{title}</h2>
      <textarea className={styles.textarea} onChange={onChange} ref={textareaRef} />
    </>
  )
}

export default TextArea;
