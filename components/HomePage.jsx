import styles from '../styles/homepage.module.css'
import Link from 'next/link'
import Image from 'next/image'
import character from '../public/Charater-Mobil.webp'
import characterDesktop from '../public/Character_desktop.webp'
import Boton from './Boton'

const HomePage = () => {

  const href = "https://api.whatsapp.com/send?phone=+58 412-8661929&text=Si%20tiene%20una%20empresa%20que%20busca%20presencia%20en%20la%20web%20o%20est%C3%A1%20buscando%20contratar,%20cont%C3%A1cteme%20aqui";


  return (
    <section className={styles.homepage}>
      <div className='contenedor'>
        <div className={styles.grid}>
          <div className={styles.container_text}>
            <h1 className={styles.title}>Sonríe con confianza
              <br />
                tu salud bucal
              <br />
                es nuestra prioridad
            </h1>
            <p className={styles.parrafo}>Lorem Ipsum There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humor. If you are going to use text.</p>
            <Boton href={href}>
              {"CONTÁTANOS"}
            </Boton> 
            {/* <div className={styles.container_btn}>
              <Link className={styles.btn_home} href="/">CONTÁTANOS</Link>
            </div> */}
          </div>
          <div className={styles.container_imagen}>
            <Image className={styles.imagen} src={character} alt="doctor" width={450} height={450} />
            <Image className={styles.imagen_desktop} src={characterDesktop} alt="doctor" width={600} height={600} />
          </div>
        </div>
      </div>

    </section>
  )
}

export default HomePage