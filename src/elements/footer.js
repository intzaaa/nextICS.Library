import { IBM_Plex_Mono } from "next/font/google";
import styles from "./footer.module.scss";

const fontIPM = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export function Footer() {
  return (
    <footer className={`${styles.footer} ${fontIPM.className} footer has-text-white has-background-black-ter has-text-centered`}>
      <div>
        ICS.Library is an <b>ICS Project.</b>
      </div>
      <div>© 2019 - {new Date().getFullYear()} ICS All Rights Reserved.</div>
    </footer>
  );
}
