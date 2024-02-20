import React from 'react'
import styles from './rightbar.module.css'
import Image from 'next/image'
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md'

export default function Rightbar() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image className={styles.bg} src='/astra.png' alt='astronaut' fill/>
        </div>
        <div className={styles.text}>
          <span className={styles.notifications}>🔥Available Now</span>
          <h3 className={styles.title}>
            How to use the new version of the admin dashboard?
          </h3>
          <span className={styles.subtitles}>
            Takes 4 minutes to learn
          </span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Nisi nihil eius magnam atque assumenda!
          </p>
          <button className={styles.button}>
            <MdPlayCircleFilled/>
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.text}>
          <span className={styles.notifications}>🚀 Coming Soon</span>
          <h3 className={styles.title}>
            New server actions are available, partial pre-rendering is coming up!
          </h3>
          <span className={styles.subtitles}>
           Boost your productivity
          </span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ullam labore dolor similique numquam veritatis aut dolorem! Totam.
          </p>
          <button className={styles.button}>
            <MdReadMore/>
            Learn
          </button>
        </div>
      </div>
    </div>
  )
}
