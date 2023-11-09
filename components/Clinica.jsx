"use client"
import React from 'react'
import Image from 'next/image'
import Titulo from './Titulo'
import styles from '../styles/clinica.module.css'
import imgClinica01 from '../public/clinica_01.jpg'
import imgClinica02 from '../public/clinica_02.jpg'
import imgClinica03 from '../public/clinica_03.jpg'
import imgClinica04 from '../public/clinica_04.jpg'
import { motion } from 'framer-motion'

const Clinica = () => {
  return (
    <section className={styles.clinica}>
      <div className='contenedor'>
        <Titulo 
          title="Nuestra Clínica"
          text="Instalaciones modernas y la mejor tecnología para poder atenderte de manera adecuada"
        />
        
        <div className={styles.grid}>

          <motion.picture 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}  
            className={styles.img_conten}>
            <Image src={imgClinica01} alt="clinica" width={250} height={375} className={styles.img_clinica} />
          </motion.picture>
          <motion.picture 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            className={styles.img_conten}>
            <Image src={imgClinica02} alt="clinica" width={250} height={375} className={styles.img_clinica} />
          </motion.picture>
          <motion.picture 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className={styles.img_conten}>
            <Image src={imgClinica03} alt="clinica" width={250} height={375} className={styles.img_clinica} />
          </motion.picture>
          <motion.picture 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.25 }}
            className={styles.img_conten}>
            <Image src={imgClinica04} alt="clinica" width={250} height={375} className={styles.img_clinica} />
          </motion.picture>
        </div>
      </div>
    </section>
  )
}

export default Clinica