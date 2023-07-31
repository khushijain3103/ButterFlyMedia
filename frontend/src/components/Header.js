import styles from '../styles/Header.module.css';
import { GoMoon } from "react-icons/go";
import { useState, useEffect } from "react";
import Link from 'next/link';

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
        <Link href="/"><li className={styles.h391Item}>
          Posts
        </li></Link>
        <Link href="/404"><li className={styles.h391Item}>
          Profile
        </li></Link>
        <li  onClick={toggleDarkMode} className={styles.h391Item}>
          <GoMoon size={20} />
        </li>
      </ul>
    </div>
  )
}