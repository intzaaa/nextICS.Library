import { IBM_Plex_Sans } from "next/font/google";
import styles from "./top.module.scss";
import { useState } from "react";

const fontIPS = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export function Top() {
  return (
    <div className={`${styles.section} section`}>
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="columns">
            <div className={`column is-3 has-text-white ${fontIPS.className}`}>test</div>
            <div className={`column has-text-white ${fontIPS.className}`}>test</div>
          </div>
        </div>
      </div>
    </div>
  );
}
