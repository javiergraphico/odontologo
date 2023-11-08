import React from 'react'
import styles from '../styles/titulo.module.css'

const Titulo = ({title, text}) => {
  return (
    <div className={styles.conten_text}>
      <h2 className={styles.title_h2}>{title}</h2>
      <p className={styles.text_p}>{text}</p>
    </div>
  )
}

export default Titulo