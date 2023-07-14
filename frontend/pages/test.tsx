import { ChangeEvent, useEffect, useRef, useState } from "react";
import axios from "axios";
import Form from "../components/molecules/Form";

type MemberData = {
  name: string,
  img: string,
  goal: string,
  mentor_id: number
}

const test = (): JSX.Element => {
  const [memberData, setMemberData] = useState<MemberData>();

  useEffect(() => {
    axios.get("http://localhost:8080/members/1").then((res) => {
      setMemberData(res.data);
    });
  }, [])

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setMemberData({...memberData!, goal: event.target.value})
  }

  const SaveData = () => {
    axios.patch("http://localhost:8080/members/1", memberData).then((res) => {
      console.log(res.data);
    });
  }

  return (
    <>
    <Form value={memberData! && memberData.goal} onClickButton={SaveData} onChangeInput={onChangeInput} type="input"/>
    </>
  );
}

export default test;
