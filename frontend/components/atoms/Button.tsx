import styles from "../../styles/atoms/Button.module.css";

type ButtonProps = {
  label: string,
  onClick?: any,
  isDisabled?: boolean
}

const Button = (props: ButtonProps): JSX.Element => {
  const {label, onClick, isDisabled} = props;

  return (
    <input type="button" value={label} onClick={onClick} className={`${styles.button} ${isDisabled && styles.button_disabled}`} disabled={isDisabled} />
  )
}

export default Button;
