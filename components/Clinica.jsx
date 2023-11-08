import React from 'react'
import Image from 'next/image'
import Titulo from './Titulo'
import styles from '../styles/clinica.module.css'
import imgClinica01 from '../public/clinica_01.jpg'
import imgClinica02 from '../public/clinica_02.jpg'
import imgClinica03 from '../public/clinica_03.jpg'
import imgClinica04 from '../public/clinica_04.jpg'

const Clinica = () => {
  return (
    <section className={styles.clinica}>
      <div className='contenedor'>
        <Titulo 
          title="Nuestra Clínica"
          text="Instalaciones modernas y la mejor tecnología para poder atenderte de manera adecuada"
        />
        
        <div className={styles.grid}>

          <picture className={styles.img_conten}>
            <Image src={imgClinica01} alt="clinica" width={250} height={375} className={styles.img_clinica} />
          </picture>
          <picture className={styles.img_conten}>
            <Image src={imgClinica02} alt="clinica" width={250} height={375} className={styles.img_clinica} />
          </picture>
          <picture className={styles.img_conten}>
            <Image src={imgClinica03} alt="clinica" width={250} height={375} className={styles.img_clinica} />
          </picture>
          <picture className={styles.img_conten}>
            <Image src={imgClinica04} alt="clinica" width={250} height={375} className={styles.img_clinica} />
          </picture>
        </div>
      </div>
    </section>
  )
}

export default Clinica