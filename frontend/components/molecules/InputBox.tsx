import styles from "../../styles/molecules/InputBox.module.css";
import Button from "../atoms/Button";
import TextArea from "../atoms/Textarea";

type InputBoxProps = {
  title: string,
  onClick: () => void
}

const InputBox = (props: InputBoxProps) => {
  const {title, onClick} = props;

  return (
    <div className={styles.block}>
      <h3>{title}</h3>
      <div className={styles.block_inner}>
        <TextArea />
        <Button onClick={onClick} isDisabled={true} />
      </div>
    </div>
  )
}

export default InputBox;
