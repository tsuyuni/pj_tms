import { ChangeEvent, useEffect, useRef, useState } from "react";
import styles from "../styles/test.module.css";
import axios from "axios";

const test = (): JSX.Element => {

  axios.patch("http://localhost:8080/members/1", {
    reflection: JSON.stringify([{
      date: "7月19日",
      fun: "",
      done: "",
      learn: ""
    }, {
      date: "7月26日",
      fun: "",
      done: "",
      learn: ""
    }, {
      date: "8月2日",
      fun: "",
      done: "",
      learn: ""
    }, {
      date: "8月30日",
      fun: "",
      done: "",
      learn: ""
    }, {
      date: "9月6日",
      fun: "",
      done: "",
      learn: ""
    }, {
      date: "9月13日",
      fun: "",
      done: "",
      learn: ""
    }, {
      date: "9月20日",
      fun: "",
      done: "",
      learn: ""
    }])
  })

  return (
    <></>
  );
}

export default test;
