import Link from "next/link";
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
    <section
      id="quote"
      className="section has-background-black-bis">
      <div className="columns">
        <div className={`column is-10 is-offset-1 is-mobile has-text-white ${fontIPS.className}`}>
          <div className={`is-size-4 is-size-6-mobile ml-5 mt-2 md-1 is-italic`}>
            <Link
              id="quote-source"
              className={`${styles.quoteSource} has-text-white`}
              href={quote.source.url}>
              {quote.source.a}
            </Link>
          </div>
          <div className={`${styles.quoteA} is-size-1 is-size-4-mobile has-text-centered`}>
            <span className="mr-1">“</span>
            {quote.a}
            <span className="ml-1">”</span>
          </div>
          <div className="is-size-4 is-size-6-mobile mr-5 mb-2 md-1 has-text-right">{quote.author}</div>
        </div>
      </div>
    </section>
  );
}
