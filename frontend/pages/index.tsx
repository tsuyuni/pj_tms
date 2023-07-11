import { useRef, useState } from "react";
import styles from "../styles/index.module.css";
import Input from "../components/atoms/Input";
import Header from "../components/organisms/Header";
import axios from "axios";
import Main from "../components/organisms/Main";

type Data = {
  id: number,
  name: string,
  goal: string
}

const index = () => {
  const members = ["suika", "kotoha", "akkun", "natsuki", "kishimoto"];
  let data: any[] = [];
  const [selectedMember, setSelectedMember] = useState<number>();
  const [memberData, setMemberData] = useState<Data>();
  const goal = useRef("");

  const onClickMemberImage = (index: number) => {
    setSelectedMember(index);
    axios.get(`http://localhost:8080/members/${index+1}`).then((res) => {
      setMemberData(res.data);
      goal.current = memberData?.goal!;
    }).catch();
  }

  return (
    <main className={styles.main}>
      <Header onClickMemberImage={onClickMemberImage} />
      <Main selectedMember={selectedMember} memberData={memberData} goal={goal} />
    </main>
  )
}

export default index;
