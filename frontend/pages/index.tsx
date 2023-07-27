import { ChangeEvent, useCallback, useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/index.module.css";
import InputForm from "../components/molecules/InputForm";
import Header from "../components/organisms/Header";
import TextAreaForm from "../components/molecules/TextAreaForm";
import Button from "../components/atoms/Button";

type MemberData = {
  name: string,
  img: string,
  goal: string,
  reflection: Reflection[]
}

type Reflection = {
  date: string,
  fun: string,
  done: string,
  learn: string
}

const index = (): JSX.Element => {
  console.log("rendering index");

  const [selectedMember, setSelectedMember] = useState<number>();
  const [memberData, setMemberData] = useState<MemberData>();
  // const schedules = ["7月19日", "7月26日", "8月2日", "8月30日", "9月6日", "9月13日", "9月20日"];
  
  useEffect(() => {
    {selectedMember! &&
      axios.get(`http://localhost:8080/members/${selectedMember}`).then((res) => {
        if (res.data.reflection){
          setMemberData({...res.data, reflection: JSON.parse(res.data.reflection)});
        } else {
          setMemberData({...res.data, reflection: JSON.parse('[{\"date\":\"7月19日\",\"fun\":\"\",\"done\":\"\",\"learn\":\"\"},{\"date\":\"7月26日\",\"fun\":\"\",\"done\":\"\",\"learn\":\"\"},{\"date\":\"8月2日\",\"fun\":\"\",\"done\":\"\",\"learn\":\"\"},{\"date\":\"8月30日\",\"fun\":\"\",\"done\":\"\",\"learn\":\"\"},{\"date\":\"9月6日\",\"fun\":\"\",\"done\":\"\",\"learn\":\"\"},{\"date\":\"9月13日\",\"fun\":\"\",\"done\":\"\",\"learn\":\"\"},{\"date\":\"9月20日\",\"fun\":\"\",\"done\":\"\",\"learn\":\"\"}]')});
        }
        
      });
    }
  }, [selectedMember]);

  const onChangeGoal = (event: ChangeEvent<HTMLInputElement>): void => {
    setMemberData({...memberData!, goal: event.target.value});
  }

  const SaveData = (): void => {
    axios.patch(`http://localhost:8080/members/${selectedMember}`, {...memberData, reflection: JSON.stringify(memberData?.reflection)});
  }

  const test = () => {
    console.log("rendering test");

    return (
      memberData! &&
      memberData.reflection.map((value, index) => (
      <details>
        <summary>{value.date}</summary>
        <>
        <TextAreaForm
        value={memberData.reflection[index].fun}
        onChange={(event) => {
          memberData.reflection[index] = {...memberData.reflection[index], fun: event.target.value};
          setMemberData({...memberData});
        }}
        onClickButton={SaveData}
        title={"Fun"} />
        <TextAreaForm
        value={value.done}
        onChange={(event) => {
          memberData.reflection[index] = {...memberData.reflection[index], done: event.target.value};
          setMemberData({...memberData});
        }}
        onClickButton={SaveData}
        title={"Done"} />
        <TextAreaForm
        value={value.learn}
        onChange={(event) => {
          memberData.reflection[index] = {...memberData.reflection[index], learn: event.target.value};
          setMemberData({...memberData});
        }}
        onClickButton={SaveData}
        title={"Learn"} />
        </>
      </details>
      ))
    );
  }

  const onClickMemberImage = useCallback((index: number) => {
    setSelectedMember(index);
  }, []);
  
  return (
    <>
    <Header onClickMemberImage={onClickMemberImage} />
    <main className={styles.main}>
      <Button label="test" onClick={() => {console.log(memberData)}}/>
      {memberData! && <h1>{memberData.name}のTMS</h1>}
      {memberData! && <InputForm value={memberData! && memberData.goal} onClickButton={SaveData} onChangeInput={onChangeGoal} />}
      {memberData! && test()}
    </main>
    </>
  );
}

export default index;
