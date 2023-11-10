"use client";
import React from "react";
import Image from "next/image";
import Titulo from "./Titulo";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "../styles/testimonio.module.css";
import Data from "DataTestimonio.json";

const Testimonio = () => {
  return (
    <div className={styles.testimonio}>
      <div className="contenedor">
        <Titulo
          title="Lo que dicen nuestros clientes satisfechos"
          text="Si necesitas tú odontológica de alta calidad, profesional y amable, no busques más" 
        />
        
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            "@0.15": {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            "@2.00": {
              slidesPerView: 4,
              spaceBetween: 30,
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
                  <h4 className={styles.title_h3}>{result.title}</h4>
                  <p className={styles.parrafo}>{result.description}</p>
                </div>
              </div>
          </SwiperSlide>
          ))}
        
        
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonio;
