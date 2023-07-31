import styles from '../../styles/SideDetails.module.css'
import Image from 'next/image'
import { GoMoon, GoSearch } from "react-icons/go";
import { FaHome } from "react-icons/fa"
import { useState, useEffect } from "react";
import { IoIosNotificationsOutline } from 'react-icons/io';
import { MdOutlineExplore } from 'react-icons/md';
import { BiSolidMessageRounded } from 'react-icons/bi';
import { FcViewDetails } from 'react-icons/fc';


export default function SideDetails() {

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
        <div className={styles.sd428Container}>
            <div>
                <h1>BUTTERFLY</h1>
            </div>

            <div className={styles.sd728Menu}>
                <span className={styles.sd628MenuItem}><FaHome size={20} />Home</span>
                <span className={styles.sd628MenuItem}><GoSearch size={20} />Search</span>
                <span className={styles.sd628MenuItem}><FcViewDetails size={20} />Details</span>
                <span className={styles.sd628MenuItem}><MdOutlineExplore size={20} />Explore</span>
                <span className={styles.sd628MenuItem}><BiSolidMessageRounded size={20} />Messages</span>
                <span className={styles.sd628MenuItem}><IoIosNotificationsOutline size={20} />Notifications</span>
            </div>
            <div className={styles.sd294User}>
                <div className={styles.sd829UserName}>
                    <div className={styles.sd194Image}>
                        <Image
                            loading="lazy"
                            src="https://images.unsplash.com/profile-1609545740442-928866556c38image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64"
                            alt="profilepic"
                            width={30}
                            height={30}
                            className={styles.sd847ProfileImage}

                        />
                    </div>
                    <div className={styles.sd456HeaderText}>
                        <p>NEOM</p>
                    </div>
                </div>
                <GoMoon onClick={toggleDarkMode} size={20} />
            </div>
        </div>
    )
}