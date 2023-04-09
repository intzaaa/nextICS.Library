import { IBM_Plex_Mono } from "next/font/google";
import { IBM_Plex_Sans } from "next/font/google";
import { Noto_Sans } from "next/font/google";
import Link from "next/link";

const fontIPM = IBM_Plex_Mono({ subsets: ["latin"], weight: ["200", "400"] });
const fontIPS = IBM_Plex_Sans({ subsets: ["latin"], weight: ["200", "400"] });
const fontNs = Noto_Sans({ subsets: ["latin"], weight: ["400", "700", "900"] });

export default function Home() {
  return (
    <div id="main">
      <Navbar />
      <Info />
    </div>
  );
}

function Navbar() {
  return (
    <nav
      className={`${fontIPM.className} navbar is-black is-transparent`}
      role="navigation"
      aria-label="main navigation">
      <div class="navbar-brand">
        <a
          className={`navbar-item`}
          href="https://ics.library">
          ICS.Library
        </a>

        <a class="navbar-burger">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <Link
            href="/"
            class="navbar-item">
            Home
          </Link>
          <Link
            href="/docs"
            class="navbar-item">
            Docs
          </Link>
        </div>

        <div className={`navbar-end + ${fontIPS.className}`}>
          <a class="navbar-item">Sign up</a>
          <a class="navbar-item">Log in</a>
        </div>
      </div>
    </nav>
  );
}

function Info() {
  return (
    <section
      id="info"
      className={`${fontNs.className} section`}>
      <article className={`has-text-white`}>
        <p>
          中美关系是当今世界最重要的双边关系之一，也是最复杂和最具挑战性的关系之一。中美两国在历史上经历了多次合作与对抗的转变，从第二次世界大战时期的同盟，到朝鲜战争和冷战时期的敌对，再到1972年尼克松访华和1979年建交后的接触与交流，以及1990年代后的经贸合作与战略竞争。中美关系的发展不仅影响着两国的利益和安全，也牵动着全球和平与稳定。
        </p>
        <p>
          当前，中美关系正处于一个十分敏感和危机的时刻。自2018年以来，特朗普政府对华采取了一系列强硬和敌对的措施，包括加征关税、限制科技交流、打压华为等中国企业、干涉香港、台湾、新疆等中国内政、指责中国在新冠疫情中隐瞒信息等。这些行动导致了中美关系的急剧恶化，引发了两国在多个领域和地区的对抗和摩擦，甚至有人担心出现新的冷战或热战。
        </p>
        <p>
          面对这种局面，中美两国都需要理性和冷静地审视彼此的意图和目标，寻找共同利益和合作空间，避免误判和冲突，维护两国和世界的福祉。中美关系不可能回到过去的状态，也不应该陷入零和博弈的陷阱。中美关系的未来取决于两国是否能够尊重彼此的主权和发展权利，建立相互信任和理解，处理好分歧和敏感问题，推动合作与竞争并存、协调与平衡的新型大国关系。
        </p>
      </article>
    </section>
  );
}
