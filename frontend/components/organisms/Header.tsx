import { Dispatch, SetStateAction } from "react";
import styles from "../../styles/organisms/Header.module.css";

type HeaderProps = {
  onClickMemberImage: (index: number) => void
}

const Header = (props: HeaderProps):JSX.Element => {
  const {onClickMemberImage} = props;

  return (
    <header className={styles.header}>
      <img src="https://litmembers.s3.amazonaws.com/uploads/student/profile_picture/29120/mini_magick20210827-21429-esrgvk.jpg" className={styles.img} onClick={() => onClickMemberImage(1)} />
      <img src="https://litmembers.s3.amazonaws.com/uploads/student/profile_picture/29954/mini_magick20221019-5188-181syj.jpg" className={styles.img} onClick={() => onClickMemberImage(2)} />
      <img src="https://litmembers.s3.amazonaws.com/uploads/student/profile_picture/30677/mini_magick20230329-20510-38m2iq.jpg" className={styles.img} onClick={() => onClickMemberImage(3)} />
      <img src="https://litmembers.s3.amazonaws.com/uploads/student/profile_picture/31130/mini_magick20230315-15713-c5p1ch.png" className={styles.img} onClick={() => onClickMemberImage(4)} />
      <img src="https://litmembers.s3.amazonaws.com/uploads/student/profile_picture/31219/mini_magick20230328-20510-flx9r6.jpg" className={styles.img} onClick={() => onClickMemberImage(5)} />
    </header>
  )
}

export default Header;
