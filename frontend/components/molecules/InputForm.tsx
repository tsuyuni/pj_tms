import styles from "../../styles/molecules/InputForm.module.css";
import Button from "../atoms/Button";
import Input from "../atoms/Input";

type InputFormProps = {
  value: string,
  onChangeInput: any,
  onClickButton: any
}

const InputForm = (props: InputFormProps): JSX.Element => {
  const {value, onChangeInput, onClickButton} = props;

  return (
    <div className={styles.block}>
      <h2 className={styles.heading}>目標:</h2>
      <Input style="large" value={value} onChange={onChangeInput}/>
      <Button label="保存" onClick={onClickButton}/>
    </div>
  )
}

export default InputForm;
