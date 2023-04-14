import Link from "next/link";
import Head from "next/head";
import config from "../../site.config";
import { IBM_Plex_Mono, Stylish } from "next/font/google";
import { IBM_Plex_Sans } from "next/font/google";
import { useState } from "react";
import styles from "./navbar.module.scss";
import { user } from "@/handlers/user";

const fontIPM = IBM_Plex_Mono({ subsets: ["latin"], weight: ["200", "400"] });
const fontIPS = IBM_Plex_Sans({ subsets: ["latin"], weight: ["200", "400"] });

export function Navbar({ title }) {
  // 初始化移动端菜单样式
  // Initialize the style of the menu on mobile devices
  const [burger, setBurger] = useState({
    state: false,
    className: "",
  });
  function switchBurger() {
    if (burger.state) {
      setBurger({ state: false, className: "" });
    } else {
      setBurger({ state: true, className: `is-active has-background-black` });
    }
  }

  // 检测用户状态
  // Check user status
  // TODO

  // 设置标题以及标题效果
  let setTitle = {
    name: title,
    className: {},
  };
  setTitle.className[String(title)] = styles.title;
  return (
    <nav
      className={`${fontIPM.className} navbar is-black`}
      role="navigation"
      aria-label="main navigation">
      <Head>
        <title>
          {title} - {config.name}
        </title>
      </Head>
      <div className="navbar-brand">
        <Link
          id="navbar-logo"
          href="/"
          className={`${styles.logo} ${setTitle.className.Home || ""} navbar-logo navbar-item`}>
          {config.name}
        </Link>
        <a
          onClick={switchBurger}
          className={`navbar-burger ${burger.className}`}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${burger.className} ${styles.menu}`}>
        <div className={`navbar-start`}>
          <Link
            href="/help"
            className={`navbar-item ${setTitle.className.Help || ""}`}>
            Help
          </Link>
        </div>

        <div className={`navbar-end ${fontIPS.className}`}>
          {/* <AccountInfo /> */}
          <Link
            href={`/account/createAccount`}
            className="navbar-item">
            Create Account
          </Link>
          <Link
            href={`/account/login`}
            className="navbar-item">
            Log in
          </Link>
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
