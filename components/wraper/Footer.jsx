import React from 'react'
import styles from '../../styles/Footer.module.css'

export default function Footer() {
    return (
        <>
            <section className={styles.footer}>
                <div className={styles.footerText}>
                    <h4>Stay in the loop</h4>
                    <p>Join our mailing list to stay in the loop with our newest feature releases,<br></br>
                        NFT drops, and tips and tricks for navigating Tokentree.</p>
                </div>
                <div className={styles.footerBox}>

                    <label className={styles.login__label}>
                        <span>Your email adress</span>
                        <input type="email" name="email" class={styles.input} />
                    </label>

                    <a>Sign up</a>
                </div>
            </section>
        </>
    )
}