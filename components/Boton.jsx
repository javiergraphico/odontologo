import React from 'react'
import styles from '../styles/boton.module.css'

const Boton = ({ children, href }) => {
  return (
      <div className={styles.conten_btn}>
        
          <a href={href} className={styles.boton} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        
      </div>
    
  )
}

export default Boton