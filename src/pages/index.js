import { Navbar } from "@/elements/navbar";
import { Quote } from "@/elements/quote";
import { Top } from "@/elements/top";
import { Footer } from "@/elements/footer";

export default function Home() {
  return (
    <div id="main">
      <Navbar title="Home" />
      <div
        id="content"
        className="content">
        <Quote />
        <Top />
      </div>
      <Footer />
    </div>
  );
}
