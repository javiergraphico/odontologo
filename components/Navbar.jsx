"use client"
import { useEffect, useState } from 'react'
import styles from '../styles/navbar.module.css'
import Link from 'next/link'
import { RiMenu4Fill } from 'react-icons/ri'

const Navbar = () => {

  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className='contenedor'>
        <div className={styles.grid}>
          <div>
            <Link className={styles.logo} href="/">Clinica Dental</Link>
          </div>
          <RiMenu4Fill className={styles.header_icon} onClick={() => setOpen(!open)} />
          <nav className={styles.header_nav}>
            <ul className={styles.header_ul + (open ? ' ' + styles.show : '')}>
              <li>
                <Link className={styles.header_link} href={"/"}>Inicio</Link>
              </li>
              <li>
                <Link className={styles.header_link} href={"/nosotros"}>Nosotros</Link>
              </li>
              <li>
                <Link className={styles.header_link} href={"/tratamiento"}>Tratamientos</Link>
              </li>
              <li>
                <Link className={styles.header_link} href={"/contacto"}>Contacto</Link>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    </header>
  )
}

export default Navbar