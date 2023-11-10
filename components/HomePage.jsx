import styles from '../styles/homepage.module.css'
import { motion } from "framer-motion"
import Image from 'next/image'
import character from '../public/Charater-Mobil.webp'
import characterDesktop from '../public/Character_desktop.webp'
import Boton from './Boton'

const HomePage = () => {

  const href = "https://api.whatsapp.com/send?phone=+58 412-8661929&text=Si%20tiene%20una%20empresa%20que%20busca%20presencia%20en%20la%20web%20o%20est%C3%A1%20buscando%20contratar,%20cont%C3%A1cteme%20aqui";

  const item = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -200 },
  }
  
  return (
    <section className={styles.homepage}>
      <div className='contenedor'>
        <div className={styles.grid}>
          <div className={styles.container_text}>
            <motion.h1 
              variants={item} initial="hidden" animate="enter" exit="exit" className={styles.title}>Sonríe con confianza
              <br />
                tu salud bucal
              <br />
                es nuestra prioridad
            </motion.h1>
            <motion.p
              variants={item} initial="hidden" animate="enter" exit="exit" transition={{ duration: 0.5 }} 
              className={styles.parrafo}>Lorem Ipsum There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor. If you are going to use text.</motion.p>
            <Boton href={href}>
              {"CONTÁTANOS"}
            </Boton> 
          </div>
          <div className={styles.container_imagen}>
            <Image className={styles.imagen} src={character} alt="doctor" width={400} height={400} priority />
            <Image 
              className={styles.imagen_desktop} 
              src={characterDesktop} 
              alt="Odontologo" 
              width={600} height={600} 
              priority 
              layout="responsive"
              objectFit="cover"
              />
          </div>
        </div>
      </div>

    </section>
  )
}

export default HomePage