import styles from '../styles/homepage.module.css'
import Link from 'next/link'
import Image from 'next/image'
import character from '../public/Charater-Mobil.webp'
import characterDesktop from '../public/Character_desktop.webp'

const HomePage = () => {
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
            <div className={styles.container_btn}>
              <Link className={styles.btn_home} href="/">CONTÁTANOS</Link>
            </div>
          </div>
          <div className={styles.container_imagen}>
            <Image className={styles.imagen} src={character} alt="doctor" width={350} height={350} />
            <Image className={styles.imagen_desktop} src={characterDesktop} alt="doctor" width={500} height={500} />
          </div>
        </div>
      </div>

    </section>
  )
}

export default HomePage