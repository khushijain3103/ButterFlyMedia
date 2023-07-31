import React, { useState } from "react";

// ICONS
// import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
// import * as AiIcons from "react-icons/ai";

// import { IconContext } from "react-icons";

// ROUTING

// import { Link } from "react-router-dom";
import Link from "next/link";

// STYLES
import styles from '../styles/NavBar.module.css';

const SidebarData = [
    {
      title: "Home",
      path: "/",
    //   icon: <AiIcons.AiFillHome />,
      cName: "nav-text"
    },
    {
      title: "Reports",
      path: "/reports",
    //   icon: <IoIcons.IoIosPaper />,
      cName: "nav-text"
    },
    
  ];

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
        {/* All the icons now are white */}
        <div className={styles.nb423Container}>
          <Link href="/"  className={styles.nb769MenuBar}>
            <button onClick={showSidebar} >=</button>
          </Link>
        </div>
        <nav className={sidebar ? `${styles.nb251MenuActive}` : `${styles.nb251Menu}`}>
          <ul className={styles.nb609MenuItems} onClick={showSidebar}>
           

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={styles.nb023Text}>
                  <Link href="/" >
                    {/* {item.icon} */}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
    </>
  );
}