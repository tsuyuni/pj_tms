import axios from "axios";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

type TestProps = {
  selectedMember: number | undefined,
  memberData: any,
  goal: any
}

const Main = (props: TestProps): JSX.Element => {
  const {selectedMember, memberData, goal} = props;
  const dates = ["7月20日", "7月27日", "8月3日", "8月10日"];
  
  useEffect(() => {
    goal.current = memberData?.goal!;
  }, [memberData])

  const saveGoal = () => {
    memberData!.goal = goal.current;
    axios.patch(`http://localhost:8080/members/${memberData?.id}`, memberData).then((res) => {
      console.log(res);
    }).catch();
  }

  const onChangeGoal = (event: ChangeEvent<HTMLInputElement>): void => {
    goal.current = event.target.value;
    console.log(goal.current)
  }

  return (
    <div>
      <h1>目標</h1>
      <Input style="large" value={goal.current} onChange={onChangeGoal} />
      <Button onClick={() => saveGoal()} label="保存"/>
      {
      dates.map((date: string) => {
        return (
          <></>
        )
      })
    }
    </div>
  )
}

export default Main;
