import styles from "../../styles/atoms/Button.module.css";

type ButtonProps = {
  onClick: any
}

const Button = (props: ButtonProps): JSX.Element => {
  const {onClick} = props;
  return (
    <input type="button" value="保存" onClick={onClick} className={styles.button} />
  )
}

export default Button;
