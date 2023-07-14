import axios from "axios";
import styles from "../../styles/molecules/Form.module.css";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import { useEffect } from "react";

type GoalProps = {
  value: string,
  onChangeInput: any,
  onClickButton: any,
  type: "input" | "textarea"
}

const Goal = (props: GoalProps): JSX.Element => {
  const {value, onChangeInput, onClickButton} = props;

  return (
    <div className={styles.block}>
      <h2 className={styles.heading}>目標:</h2>
      <Input style="large" value={value} onChange={onChangeInput}/>
      <Button label="保存" onClick={onClickButton}/>
    </div>
  )
}

export default Goal;
