"use client"
import React from 'react'
import styles from './tratamiento.module.css'
import Carrusel from '@/components/Carrusel'
import Testimonio from '@/components/Testimonio'

export const metadata = {
  title: "tratamiento - Cliínica Dental",
  description:
    "Dedicados a ofrecer una aplicación odontológica de alta calidad en odontología estándar, restauradora y general.",
};

const Tratamiento = () => {
  return (
    <section>
      <Carrusel />
      <Testimonio />
    </section>
  )
}

export default Tratamiento
