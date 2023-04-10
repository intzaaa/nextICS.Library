import Link from "next/link";
import { IBM_Plex_Mono } from "next/font/google";
import { IBM_Plex_Sans } from "next/font/google";
import { useState } from "react";
import { user } from "@/handlers/user";

const fontIPM = IBM_Plex_Mono({ subsets: ["latin"], weight: ["200", "400"] });
const fontIPS = IBM_Plex_Sans({ subsets: ["latin"], weight: ["200", "400"] });

export function Navbar() {
  // 初始化移动端菜单样式
  // Initialize the style of the menu on mobile devices
  const [burger, setBurger] = useState({
    state: false,
    className: "",
  });
  function switchBurger() {
    const active = "is-active";
    if (burger.state) {
      setBurger({ state: false, className: "" });
    } else {
      setBurger({ state: true, className: active });
    }
  }

  // 检测用户状态
  // Check user status
  // TODO
  return (
    <nav
      className={`${fontIPM.className} navbar is-black`}
      role="navigation"
      aria-label="main navigation">
      <div className="navbar-brand">
        <a
          className={`navbar-item`}
          href="https://ics.library">
          ICS.Library
        </a>
        <a
          onClick={switchBurger}
          className={`navbar-burger ${burger.className}`}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${burger.className}`}>
        <div className="navbar-start">
          <Link
            href="/"
            className="navbar-item">
            Home
          </Link>
          <Link
            href="/docs"
            className="navbar-item">
            Docs
          </Link>
        </div>

        <div className={`navbar-end + ${fontIPS.className}`}>
          {/* <AccountInfo /> */}
          <a className="navbar-item">Create Account</a>
          <a className="navbar-item">Log in</a>
        </div>
      </div>
    </nav>
  );
}

/* function AccountInfo() {
  return (
    <div id="account-info">
      <Image src={new user().avater} />
      <div id="username">{new user().username}</div>
    </div>
  );
} */
