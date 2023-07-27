import { ChangeEvent } from "react";
import styles from "../../styles/molecules/TextAreaForm.module.css";
import Button from "../atoms/Button";
import TextArea from "../atoms/TextArea";

type TextAreaFormProps = {
  value: string,
  title: string,
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void,
  onClickButton: any
}

const TextAreaForm = (props: TextAreaFormProps): JSX.Element => {
  console.log("rendering TextAreaForm");

  const {value, title, onChange, onClickButton} = props;

  return (
    <div className={styles.block}>
      <h3 className={styles.heading}>{title}</h3>
      <div className={styles.block_inner}>
        <TextArea
        value={value}
        onChange={onChange} />
        <Button
        label="保存"
        onClick={onClickButton}/>
      </div>
    </div>
  )
}

export default TextAreaForm;
