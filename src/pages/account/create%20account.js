import { Navbar } from "@/elements/navbar";
import { IBM_Plex_Mono } from "next/font/google";
import styles from "./create%20account.module.scss";

const fontIPM = IBM_Plex_Mono({ subsets: ["latin"], weight: ["200", "400"] });

export default function CreateAccount() {
  return (
    <>
      <Navbar title="Create Account" />
      <Form />
    </>
  );
}

function Form() {
  return (
    <section className={`section ${styles.section} ${fontIPM.className}`}>
      <div className={`${styles.columns} columns`}>
        <div
          className={`${styles.ca} column is-two-thirds has-text-white has-text-centered is-flex is-flex-wrap-wrap is-flex-direction-column is-align-content-center is-justify-content-center`}>
          <div className="animate__animated animate__flip">
            <div>Create</div>
            <div>Account</div>
          </div>
        </div>
        <div
          className={`${styles.formFather} column is-narrow has-text-centered is-flex is-flex-wrap-wrap is-flex-direction-column is-align-content-center is-justify-content-center`}>
          <div className={`${styles.form} is-flex is-flex-direction-column is-align-content-center is-justify-content-center`}>
            <input
              id="username"
              placeholder="username"
              className={`${styles.input} ${fontIPM.className}`}></input>
            <input
              id="email"
              placeholder="email"
              className={`${styles.input} ${fontIPM.className}`}></input>
            <input
              id="password"
              placeholder="password"
              type="password"
              className={`${styles.input} ${fontIPM.className}`}></input>
            <input
              id="password-again"
              placeholder="password confirm"
              className={`${styles.input} ${fontIPM.className}`}></input>
          </div>
        </div>
      </div>
    </section>
  );
}
