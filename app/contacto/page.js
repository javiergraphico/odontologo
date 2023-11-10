import React from 'react'
import Formulario from '@/components/Formulario'
import styles from './contacto.module.css'
import { IoLocationOutline } from 'react-icons/io5'
import { AiOutlinePhone } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
import { BsWhatsapp } from 'react-icons/bs'

export const metadata = {
  title: "Contacto - Clínica Dental",
  description:
    "Dedicados a ofrecer una aplicación odontológica de alta calidad en odontología estándar, restauradora y general.",
};


const Contacto = () => {
  return (
    <>
      <section>
        <div className={styles.container_text}>
          <h2 className={styles.title}>Contactanos</h2>
        </div>
        <div className='contenedor'>
          <div className={styles.grid}>
            <article className={styles.conten_text}>
              <h2>Solicitar Cita</h2>
              <h3 className={styles.title_h3}>Consigue una valoración completa GRATUITA en tu primera visita</h3>
              <p className={styles.parrafo}>
              Si tienes cualquier problema dental o simplemente quieres acudir a una revisión periódica, solicita ya tu cita.
              </p>
              <p className={styles.parrafo}>
                Lorem Ipsum There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.
              </p>

              <div className={styles.conten_info}>
                <div>
                  <IoLocationOutline className={styles.info_icon} />
                  <p className={styles.info_title}>Localización</p>
                  <p>Calle Alem 5678, Mar del Plata</p>
                </div>
                <div>
                  <AiOutlinePhone className={styles.info_icon} />
                  <p className={styles.info_title}>Telefonos</p>
                  <p>012 345 678</p>
                </div>
                <div>
                  < HiOutlineMail className={styles.info_icon} />
                  <p className={styles.info_title}>Email</p>
                  <p>info@javiergrafico.com</p>
                </div>
                <div>
                  <BsWhatsapp className={styles.info_icon} />
                  <p className={styles.info_title}>WhatsApp</p>
                  <p>012 567 890</p>
                </div>
              </div>
          
            </article>
            <div className={styles.conten_formulario}>
              <Formulario />
            </div>
          </div>
          
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6286.488398125884!2d-57.53243056607351!3d-38.01808611585957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sve!4v1699477281201!5m2!1ses!2sve" 
            style={{ width: "100%", height: "450px", border: "0", paddingBottom: "2rem" }}
            allowfullscreen=""
            loading="lazy" referrerpolicy="no-referrer-when-downgrade">
          </iframe>
          
          
        </div>
        
      </section>
    </>
  )
}

export default Contacto
