import React from 'react'
import Acerca from "@/components/Acerca";
import Clinica from "@/components/Clinica";
import Finanza from '@/components/Finanza';
import Equipo from '@/components/Equipo';

export const metadata = {
  title: "Nosotros - Clínica Dental",
  description:
    "Dedicados a ofrecer una aplicación odontológica de alta calidad en odontología estándar, restauradora y general.",
};

const Nosotros = () => {
  return (
    <>
      <Acerca />
      <Clinica />
      <Equipo />
      <Finanza />
    </>
  )
}

export default Nosotros
