import React from 'react'
import styles from '../styles/titulo.module.css'
import Reveal from './Reveal'
const Titulo = ({title, text}) => {

  return (
    <Reveal>
      <article className={styles.conten_text}>
        <h2 className={styles.title_h2}>{title}</h2>
        <p className={styles.text_p}>{text}</p>
      </article>
    </Reveal>
  )
}

export default Titulo