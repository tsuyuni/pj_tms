import { useRef } from "react";
import InputBox from "../../components/molecules/InputBox";
import styles from "../../styles/organisms/DailyDone.module.css";

type DailyDoneProps = {
  date: string
}

const DailyDone = (props: DailyDoneProps) => {
  console.log("re-rendered DailyDone.tsx")

  const {date} = props;
  const titles = ["やったこと", "わかったこと、学んだこと", "次にやりたいこと"];
  const [done, learn, next] = titles.map(() => useRef<string>(""));

  return (
    <details className={styles.details}>
      <summary className={styles.summary}>{date}</summary>
      <div className={styles.details_inner}>
        {
          titles.map((title) => {
            return (
              <InputBox title={title} onClick={() => {console.log("click")}} />
            )
          })
        }
      </div>
    </details>
  )
}

export default DailyDone;
