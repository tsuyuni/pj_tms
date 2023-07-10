import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

type TestProps = {
  selectedMember: number | undefined
}

type Data = {
  id: number,
  name: string,
  goal: string
}

const Main = (props: TestProps): JSX.Element => {
  const {selectedMember} = props;
  const [memberData, setMemberData] = useState<Data>();
  const [goal, setGoal] = useState<string>("");


  useEffect(() => {
    axios.get(`http://localhost:8080/members/${selectedMember!+1}`).then((res) => {
      setMemberData(res.data);
    }).catch();
  }, [selectedMember]);

  const saveGoal = () => {
    memberData!.goal = goal;
    axios.patch(`http://localhost:8080/members/${memberData?.id}`, memberData).then((res) => {

    }).catch();
  }

  return (
    <div>
      <h1>目標</h1>
      <Input style="large" value={goal} />
      <Button onClick={() => saveGoal()}/>
      {memberData && memberData.name}
    </div>
  )
}

export default Main;
