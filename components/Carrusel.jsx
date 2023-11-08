"use client";
import React from "react";
import Titulo from "./Titulo";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../styles/carrusel.module.css";
import Image from "next/image";
import { Pagination, Navigation } from "swiper/modules";
import Data from "../DataCarrusel.json";
import "swiper/css";
import "swiper/css/pagination";

const Carrusel = () => {
  return (
    <section className={styles.carrusel}>
      <div className="contenedor">
        <Titulo 
          title="Descubre todos nuestros tratamientos"
          text="Confía en nuestros profesionales con una gran experiencia"
        />
        
        <Swiper
          slidesPerView={3}
          spaceBetween={15}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          breakpoints={{
            "@0.15": {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        
        >
          {Data.map((result, index) => (
            <SwiperSlide key={index}>
              <div className={styles.card}>
                <Image
                className={styles.imagen}
                src={result.path}
                alt="clinica"
                width={300}
                height={300}
                priority
                />
                <div className={styles.body}>
                  <h3 className={styles.title}>{result.title}</h3>
                  <p className={styles.parrafo}>{result.description}</p>
                </div>
              </div>
          </SwiperSlide>
          ))}
        
        
        </Swiper>
      </div>
    </section>
  );
};

export default Carrusel;
