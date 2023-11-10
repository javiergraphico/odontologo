import React from 'react'
import styles from '../styles/footer.module.css'
import Link from 'next/link'
import { BsInstagram } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
export const Footer = () => {


  const href = "https://api.whatsapp.com/send?phone=+58 412-8661929&text=Si%20tiene%20una%20empresa%20que%20busca%20presencia%20en%20la%20web%20o%20est%C3%A1%20buscando%20contratar,%20cont%C3%A1cteme%20aqui";


  return (
    <footer className={styles.footer}>
      <div className='contenedor'>
        <div className={styles.grid}>
          <div className={styles.conten_text}>
            <h3 className={styles.footer_h3}>Logotipo</h3>
            <p className={styles.conten_p}><strong>Dirección:</strong> Calle Alem 5678, 
            <br />
              Mar del Plata </p>
            <p className={styles.conten_p}><strong>Teléfono:</strong> 123 45 67 89</p>
            <p className={styles.conten_p}><strong>Email:</strong> info@clinicadental.com</p>
            <p className={styles.conten_h}><strong>Horario de apertura:</strong></p>
            <p className={styles.conten_h}>Lunes a Jueves mañanas </p>
            <p className={styles.conten_h}>de 10:00 AM a 15:30 PM </p>
            <p className={styles.conten_h}>tardes de 16:00 PM a 20:00 PM</p>
            <p className={styles.conten_h}>Viernes de 10:00 AM a 18:00 PM</p>
          </div>
          <div className={styles.conten_text}>
            <h3 className={styles.footer_h3}>Sobre</h3>
            <nav className={styles.nav}>
              <Link className={styles.enlace} href={"/"}>Inicio</Link>
              <Link className={styles.enlace} href={"/nosotros"}>Nosotros</Link>
              <Link className={styles.enlace} href={"/tratamiento"}>Tratamientos</Link>
              <Link className={styles.enlace} href={"/contacto"}>Contactos</Link>
              <Link className={styles.enlace} href={href} target='_blank'>Pedir Cita</Link>
            </nav>
          </div>
          <div className={styles.conten_text}>
            <h3 className={styles.footer_h3}>Textos Legales</h3>
            <nav className={styles.navigation}>
              <Link className={styles.footer_enlace} href={"/privacidad"}>Política de privacidad</Link>
              <Link className={styles.footer_enlace} href={"/terminos"}>Términos y Condiciones</Link>
              <Link className={styles.footer_enlace} href={"/aviso-legar"}>Aviso Legal</Link>
            </nav>
            <div className={styles.conten_redes}>
              <Link className={styles.footer_social}  href={`https://www.linkedin.com/in/javier-tovar-46687a177/`} target='_blank'>
                <BsInstagram  />
              </Link>
              <Link className={styles.footer_social} href={`https://www.linkedin.com/in/javier-tovar-46687a177/`} target='_blank'>
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
