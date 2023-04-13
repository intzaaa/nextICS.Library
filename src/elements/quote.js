import { IBM_Plex_Sans } from "next/font/google";
import { useState } from "react";
import styles from "./quote.module.scss";

const fontIPS = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "700"], style: ["italic", "normal"] });

export function Quote() {
  const [quote, setQuote] = useState({
    a: "One World, One Internet",
    source: {
      a: "Yeti Project Introduction",
      url: "https://yeti-dns.org",
    },
    author: "Yeti Project",
    date: "2023.04.11",
  });
  /* setQuote({
    a: "One World, One Internet",
    author: "ICANN",
    date: "2023.04.11",
  }); */
  return (
    <div
      id="quote"
      className="section has-background-black-bis">
      <div className="columns">
        <div className={`column is-10 is-offset-1 is-mobile has-text-white ${fontIPS.className}`}>
          <div className={`is-size-5 ml-5 mt-2 is-italic`}>
            <a
              id="quote-source"
              className={`${styles["quote-source"]} has-text-white`}
              href={quote.source.url}>
              {quote.source.a}
            </a>
          </div>
          <div className="is-size-1 has-italic has-text-centered">
            <span className="mr-1">“</span>
            {quote.a}
            <span className="ml-1">”</span>
          </div>
          <div className="is-size-5 mr-5 mb-2 has-text-right">{quote.author}</div>
        </div>
      </div>
    </div>
  );
}
