import { useState } from "react";
import Button from "../components/atoms/Button";
import Input from "../components/atoms/Input";

const Login = ():JSX.Element => {
  type Member = {
    userId: string,
    password: string
  }

  const [loginInfo, setLoginInfo] = useState<Member>({userId: "", password: ""})

  return (
    <div>
      <Input style="medium" value={loginInfo.userId} onChange={(event) => {
        setLoginInfo({...loginInfo, userId: event.target.value});
      }}/>
      <Input style="medium" value={loginInfo.password} onChange={(event) => {
        setLoginInfo({...loginInfo, password: event.target.value});
      }}/>
      <Button label="Login" onClick={() => {
        console.log(loginInfo);
      }} />
    </div>
  );
}

export default Login;
