import { Navbar } from "@/elements/navbar";
import { IBM_Plex_Mono } from "next/font/google";
import styles from "./login.module.scss";

const fontIPM = IBM_Plex_Mono({ subsets: ["latin"], weight: ["200", "400"] });

export default function Login() {
  return (
    <>
      <Navbar />
      <Form />
    </>
  );
}

function Form() {
  return (
    <div className="section">
      <div className={`container has-text-centered has-text-white ${fontIPM.className}`}>
        <div className="is-size-5">Login</div>
        <form>
          <div>
            <input
              id="username"
              className={`${styles.input} ${fontIPM.className} mt-1 mb-1`}></input>
          </div>
          <div>
            <input
              id="password"
              className={`${styles.input} ${fontIPM.className} mt-1 mb-1`}></input>
          </div>
          <div>
            <input
              type="submit"
              className={`${styles.submit} ${fontIPM.className} is-size-5 mt-3`}
              value={`sumbit`}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
