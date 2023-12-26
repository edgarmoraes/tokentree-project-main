import React from 'react'
import styles from '../../styles/Header.module.css'

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.logo}><a href="index.html"> <img src="/static/img/logo-header.png" /> </a> </div>
            <div className={styles.started}>
                <a href="/">Get Started</a>
            </div>
        </div>
    )

}