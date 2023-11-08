import React from 'react'
import styles from '../styles/amable.module.css'
import Image from 'next/image'
import imagenPaciente from '../public/paciente_01.webp'
import Boton from './Boton'

const Amable = () => {

  const href = "https://www.linkedin.com/in/javier-tovar-46687a177/" 

  return (
    <section className={styles.amable}>
      <div className='contenedor'>
        <div className={styles.grid}>
          <div className={styles.conten_text}>
            <h2 className={styles.amable_h2}>Trato amable y personalizado</h2>
            <p className={styles.amable_p}>Lorem Ipsum There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor. If you are going to use a passage, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
            <p className={styles.amable_p}>Lorem Ipsum There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor. If you are going to use a passage, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
            <h3 className={styles.amable_h3}>Consigue una valoración completa
          
              <br />
              <strong>GRATUITA</strong> en tu primera visita
            </h3>
            <Boton href={href}>
              {"Solicitar Cita"}
            </Boton>
              
          </div>
          <picture className={styles.conten_imagen}>
            <Image className={styles.imagen_amable} src={imagenPaciente} alt="doctor" width={400} height={250} />
          </picture>
        </div>
      </div>
    </section>
  )
}

export default Amable