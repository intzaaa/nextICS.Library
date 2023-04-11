import { IBM_Plex_Sans } from "next/font/google";
import { useState } from "react";

const fontIPS = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export function Quote() {
  const [quote, setQuote] = useState({
    a: "One World, One Internet",
    author: "ICANN",
    date: "2023.04.11",
  });
  /* setQuote({
    a: "One World, One Internet",
    author: "ICANN",
    date: "2023.04.11",
  }); */
  return (
    <div className="section has-background-black-bis">
      <div className="colums">
        <div className={`column is-10 is-offset-1 has-text-white ${fontIPS.className}`}>
          <div className="is-size-5 ml-5 mt-2">{quote.date}</div>
          <div className="is-size-1 has-italic has-text-centered">“ {quote.a} ”</div>
          <div className="is-size-5 has-text-right mr-5 mb-2">{quote.author}</div>
        </div>
      </div>
    </div>
  );
}
