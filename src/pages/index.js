import { Navbar } from "@/elements/navbar";
import { Quote } from "@/elements/quote";
import { Top } from "@/elements/top";
import { Footer } from "@/elements/foot";

export default function Home() {
  return (
    <div id="main">
      <Navbar />
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
