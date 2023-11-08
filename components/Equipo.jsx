import React from 'react'
import styles from '../styles/equipo.module.css'
import Image from 'next/image'
import Titulo from './Titulo'
import { BiLogoTwitter } from 'react-icons/bi'
import { BiLogoFacebookSquare } from 'react-icons/bi'
import { BiLogoLinkedinSquare } from 'react-icons/bi'
import PersonImg from '../public/Person_01.jpg'
import PersonImg2 from '../public/Person_02.jpg'
import PersonImg3 from '../public/Person_03.jpg'
import Boton from './Boton'

const Equipo = () => {

  const href = "https://www.linkedin.com/in/javier-tovar-46687a177/" 


  return (
    <section className={styles.equipo}>
      <div className='contenedor'>
        <Titulo 
          title="Nuestro equipo"
          text="Profesionales con amplia experiencia en todo tipo de tratamientos bucodentales"
          />
        <div className={styles.grid}>

          <div className={styles.card}>
            <Image className={styles.imagen} src={PersonImg3} alt="doctor" width={300} height={300} />
            <div className={styles.conten_info}>
              <h3 className={styles.equipo_h3}>Sadi Suárez Lara</h3>
              <p className={styles.equipo_p}>General y odontopediatra</p>
              <div className={styles.redes}>
                <BiLogoTwitter />
                <BiLogoFacebookSquare />
                <BiLogoLinkedinSquare />
              </div>
            </div>

          </div>

          <div className={styles.card}>
            <Image className={styles.imagen} src={PersonImg} alt="doctor" width={300} height={300} />
            <div className={styles.conten_info}>
              <h3 className={styles.equipo_h3}>Jose Miralles</h3>
              <p className={styles.equipo_p}>Cirujano, PSI, Estética Dental</p>
              <div className={styles.redes}>
                <BiLogoTwitter />
                <BiLogoFacebookSquare />
                <BiLogoLinkedinSquare />
              </div>
            </div>

          </div>

          <div className={styles.card}>
            <Image className={styles.imagen} src={PersonImg2} alt="doctor" width={300} height={300} priority/>
            <div className={styles.conten_info}>
              <h3 className={styles.equipo_h3}>Paola Pedraza</h3>
              <p className={styles.equipo_p}>Ortodoncista</p>
              <div className={styles.redes}>
                <BiLogoTwitter />
                <BiLogoFacebookSquare />
                <BiLogoLinkedinSquare />
              </div>
            </div>

          </div>

        </div>
        <div className={styles.conten_btn}>
          <Boton
            children="CONTÁCTANOS"
            href={href}
          />
        </div>
      </div>
      

    </section>
  )
}

export default Equipo