"use client";
import React from "react";
import styles from "../styles/fomulario.module.css";
import { motion } from 'framer-motion'

const Formulario = () => {
  return (
    <>
      <form className={styles.formulario}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }} 
          className={styles.conten}>
          <label className={styles.label} for="nombre">Nombre:</label>
          <input className={styles.name} type="text" name="nombre"  />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }} 
          className={styles.conten}>
          <label className={styles.label} for="email">Email:</label>
          <input className={styles.name} type="email" name="email" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }} 
          className={styles.conten}>
          <label className={styles.label} for="telefono">Teléfono:</label>
          <input className={styles.name} type="tel" name="telefono" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.25 }} 
          className={styles.conten}>
          <label for="mensaje">Mensaje:</label>
          <textarea name="mensaje"  cols="30" rows="10"></textarea>
        </motion.div>

        <input className={styles.btn} type="submit" value="Enviar" />
      </form>
    </>
  );
};

export default Formulario;
