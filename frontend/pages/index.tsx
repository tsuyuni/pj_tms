import { ChangeEvent, useEffect, useRef, useState } from "react";
import axios from "axios";
import styles from "../styles/index.module.css";
import Form from "../components/molecules/Form";
import Header from "../components/organisms/Header";

type MemberData = {
  name: string,
  img: string,
  goal: string,
  mentor_id: number
}

const test = (): JSX.Element => {
  const [selectedMember, setSelectedMember] = useState<number>(0);
  const [memberData, setMemberData] = useState<MemberData>();

  useEffect(() => {
    console.log(selectedMember)
    if (selectedMember > 0) {
      axios.get(`http://localhost:8080/members/${selectedMember}`).then((res) => {
        setMemberData(res.data);
      });
    }
  }, [selectedMember])

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setMemberData({...memberData!, goal: event.target.value})
  }

  const SaveData = () => {
    axios.patch(`http://localhost:8080/members/${selectedMember}`, memberData).then((res) => {
      console.log(res.data);
    });
  }

  return (
    <>
    <Header onClickMemberImage={(index: number) => {setSelectedMember(index)}}/>
    <main className={styles.main}>
      <Form value={memberData! && memberData.goal} onClickButton={SaveData} onChangeInput={onChangeInput} type="input"/>
    </main>
    </>
  );
}

export default test;
