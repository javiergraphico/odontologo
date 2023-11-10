import React from 'react'
import styles from '../styles/amable.module.css'
import Image from 'next/image'
import imagenPaciente from '../public/paciente_01.webp'
import Boton from './Boton'
import { motion } from 'framer-motion'

const Amable = () => {

  const href = "https://www.linkedin.com/in/javier-tovar-46687a177/" 

  return (
    <section className={styles.amable}>
      <div className='contenedor'>
        <div className={styles.grid}>
          <article className={styles.conten_text}>
            <h2 className={styles.amable_h2}>Trato amable y personalizado</h2>
            <p className={styles.amable_p}>Lorem Ipsum There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor. If you are going to use a passage, you need to be sure there anything embarrassing hidden in the middle of text.</p>
            <p className={styles.amable_p}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Distribution of letters, as opposed to using will uncover many web sites still in their infancy.</p>
            <h3 className={styles.amable_h3}>Consigue una valoración completa
          
              <br />
              <strong>GRATUITA</strong> en tu primera visita
            </h3>
            <Boton href={href}>
              {"Solicitar Cita"}
            </Boton>
              
          </article>
          <motion.picture 
            initial={{ opacity: 0, scale: 0.5 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            className={styles.conten_imagen}>
            <Image className={styles.imagen_amable} src={imagenPaciente} alt="doctor" width={400} height={250} />
          </motion.picture>
        </div>
      </div>
    </section>
  )
}

export default Amable