import React from 'react'
import styles from '../styles/footer.module.css'
import Link from 'next/link'
import { BsInstagram } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='contenedor'>
        <div className={styles.grid}>
          <div className={styles.conten_text}>
            <h3 className={styles.footer_h3}>Logotipo</h3>
            <p>Dirección: Calle del Dr. 
            <br />
              Fleming, 14, 28821 Coslada, Madrid</p>
            <p>Teléfono: 123 45 67 89</p>
            <p>Email: info@clinicadental.com</p>
            <p>Horario de apertura:
            <br />
              – Lunes a Jueves mañanas 
            <br />
              de 10:00 a 13:30, 
            <br />
              tardes de 16:00 a 20:00
            <br />
              – Viernes de 10:00 a 18:00</p>
          </div>
          <div className={styles.conten_text}>
            <h3 className={styles.footer_h3}>Sobre</h3>
            <nav className={styles.nav}>
              <Link className={styles.enlace} href={"/"}>Inicio</Link>
              <Link className={styles.enlace} href={"/nosotros"}>Nosotros</Link>
              <Link className={styles.enlace} href={"/tratamiento"}>Tratamientos</Link>
              <Link className={styles.enlace} href={"/contacto"}>Contactos</Link>
              <Link className={styles.enlace} href={"/"}>Pedir Cita</Link>
            </nav>
          </div>
          <div className={styles.conten_text}>
            <h3 className={styles.footer_h3}>Textos Legales</h3>
            <nav className={styles.navigation}>
              <Link className={styles.footer_enlace} href={"/"}>Política de privacidad</Link>
              <Link className={styles.footer_enlace} href={"/"}>Términos y Condiciones</Link>
              <Link className={styles.footer_enlace} href={"/"}>Aviso Legal</Link>
            </nav>
            <div className={styles.conten_redes}>
              <Link className={styles.footer_social}  href={"/"}>
                <BsInstagram  />
              </Link>
              <Link className={styles.footer_social} href={"/"}>
                <BsFacebook  />
              </Link>
            </div>
          </div>
        </div>
        <p className={styles.copyright}>Copyright © clinicadental.com</p>
      </div>

    </footer>
  )
}
