import React from 'react'
import styles from '../../styles/Banner.module.css'

export default function Banner() {
    return (
        <>
            <section className={styles.home}>
                <div className={styles.banner1}>
                    <img src="static/img/arvore.png" />
                </div>
                <div>
                    <h1>Exibe suas NFT’s nas arvores!</h1>
                </div>
            </section>

            <section className={styles.services}>
                <main className={styles.container}>
                    <div className={styles.container1}>
                        <img src="/static/img/user.png" alt="" />
                        <h2>Creat an <br></br>account.</h2>
                    </div>

                    <div className={styles.container2}>
                        <img src="/static/img/wallet.png" alt="" />
                        <h2>Connect your <br></br> walllet</h2>
                    </div>

                    <div className={styles.container3}>
                        <img src="/static/img/connect.png" alt="" />
                        <h2>Add your unique <br></br> TokenTree.com <br></br> URLto your Instagram<br></br> and social media bios.<br></br> Tell your friends!</h2>
                    </div>
                </main>
            </section>
        </>
    )
}