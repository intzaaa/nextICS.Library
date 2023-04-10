import { Marck_Script } from "next/font/google";

const fontMS = Marck_Script({ subsets: ["latin"], weight: ["400"] });

export function Quote() {
  return (
    <div className="section">
      <div className="colums">
        <div className={`box column is-10 is-offset-1 has-background-black-bis has-text-white ${fontMS.className}`}>
          <div className="is-size-3 ml-5 mt-2">Quote</div>
          <div className="is-size-1 has-text-centered">"Don't be evil"</div>
          <div className="is-size-3 has-text-right mr-5 mb-2">- Google</div>
        </div>
      </div>
    </div>
  );
}
