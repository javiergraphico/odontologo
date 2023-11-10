"use client";
import { useState } from "react";
import styles from "../styles/navbar.module.css";
import Link from "next/link";
import { RiMenu4Fill, RiCloseFill } from "react-icons/ri";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const router = useRouter();

  const closeMenu = () => {
    setOpen(false);
    router.refresh();
  }

  
  return (
    <header className={styles.header}>
      

      <div className='contenedor'>
        <div className={styles.grid}>
          <div>
            <Link className={styles.logo} href="/">Clinica Dental</Link>
          </div>
          {open ? (
            <RiCloseFill className={styles.header_icon} onClick={() => setOpen(!open)} />
              ) : (
            <RiMenu4Fill className={styles.header_icon} onClick={() => setOpen(!open)} />
          )}
          <nav className={styles.header_nav}>
            <ul className={styles.header_ul + (open ? ' ' + styles.show : '')}>
              <li>
                <Link onClick={closeMenu} className={styles.header_link} href={"/"}>Inicio</Link>
              </li>
              <li>
                <Link onClick={closeMenu} className={styles.header_link} href={"/nosotros"}>Nosotros</Link>
              </li>
              <li>
                <Link onClick={closeMenu} className={styles.header_link} href={"/tratamiento"}>Tratamientos</Link>
              </li>
              <li>
                <Link onClick={closeMenu} className={styles.header_link} href={"/contacto"}>Contacto</Link>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
