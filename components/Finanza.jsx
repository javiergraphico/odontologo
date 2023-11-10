import React from 'react'
import styles from '../styles/finanza.module.css'
import Titulo from './Titulo'
import Image from 'next/image'
import { BiLike } from 'react-icons/bi'
import { BsCalendar2Week } from 'react-icons/bs'
import { BsPiggyBank } from 'react-icons/bs'

const Finanza = () => {
  return (
    <section className={styles.finanza}>
      <div className='contenedor'>
        <Titulo 
          title="Por qué elegir nuestra clínica dental"
          text="Dedicados a ofrecer una aplicación odontológica de alta calidad en odontología estándar, restauradora y general."
        />
        
        <article className={styles.grid}>
{/* tarjeta 01 */}
          <div className={styles.card_content}>
            <div className={styles.icon}>
              <BsPiggyBank />
            </div>
            <h3 className={styles.title_h3}>
              Financiación <br />
              sin intereses</h3>
            <p>Lorem Ipsum There are many es sencillo con nuestros planes de dinanciación sin intereses.</p>
          </div>
{/* tarjeta 02 */}
          <div className={styles.card_content}>
            <div className={styles.icon}>
              <BiLike /> 
            </div>
            <h3 className={styles.title_h3}>
              Valoración previa  <br />
              GRATUITA</h3>
            <p>Lorem Ipsum There are many es sencillo con nuestros planes de dinanciación sin intereses.</p>
          </div>
{/* tarjeta 03 */}
          <div className={styles.card_content}>
            <div className={styles.icon}>
              <BsCalendar2Week />
            </div>
            <h3 className={styles.title_h3}>
              Tu tiempo <br />
              es importante</h3>
            <p>Lorem Ipsum There are many es sencillo con nuestros planes de dinanciación sin intereses.</p>
          </div>

        </article>
      </div>
    </section>
  )
}

export default Finanza