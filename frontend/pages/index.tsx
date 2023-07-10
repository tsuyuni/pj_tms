import { useState } from "react";
import styles from "../styles/index.module.css";
import Input from "../components/atoms/Input";
import Header from "../components/organisms/Header";
import axios from "axios";
import Main from "../components/organisms/Main";

const index = () => {
  const members = ["suika", "kotoha", "akkun", "natsuki", "kishimoto"];
  let data: any[] = [];
  const [selectedMember, setSelectedMember] = useState<number>(); 

  const onClickMemberImage = (index: number) => {
    setSelectedMember(index);
  }

  const saveGoal = () => {

  }

  return (
    <main className={styles.main}>
      <Header onClickMemberImage={onClickMemberImage} />
      <Main selectedMember={selectedMember} />
    </main>
  )
}

export default index;
