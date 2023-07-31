import styles from '../styles/Header.module.css';
import { GoMoon } from "react-icons/go";
import { useState, useEffect } from "react";

export default function Header() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevIsDarkTheme) => !prevIsDarkTheme);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={styles.h302Container}>
      <ul className={styles.h139List}>
        <li className={styles.h391Item}>
          Posts
        </li>
        <li className={styles.h391Item}>
          Profile
        </li>
        <li className={styles.h391Item}>
          <GoMoon onClick={toggleDarkMode} size={20} />
        </li>
      </ul>
    </div>
  )
}