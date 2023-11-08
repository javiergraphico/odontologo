import React from 'react'
import styles from '../styles/acerca.module.css'
import Image from 'next/image'
import imagenNosotros from '../public/nosotrosImg.webp'

const Acerca = () => {
  return (
    
    <section className={styles.acerca}>
      <h2 className={styles.acerca_h2}>Acerca de Nosotros</h2>
      <div className='contenedor'>
        <div className={styles.grid}>
          <div className={styles.conten_text}>
            <h3 className={styles.acerca_h3}>Todo comienza con una sonrisa</h3>
            <p className={styles.acerca_p}>Lorem Ipsum There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor. If you are going to use a passage, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
            <p className={styles.acerca_p}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Distribution of letters, as opposed to using will uncover many web sites still in their infancy.</p>
            
          </div>
          <picture className={styles.conten_imagen}>
            <Image className={styles.imagen_amable} src={imagenNosotros} alt="doctor" width={400} height={250} />
          </picture>
        </div>
      </div>
    </section>
    
  )
}

export default Acerca