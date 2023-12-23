"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className= "pt-20 mx-20">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center"
        >
          <h1 className="ml-5 pb-5 text-4xl sm:text-7xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="">
              Bem-vindo! {" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "DressUp...",
                3000,
                "Inovador.",
                2000,
                "Versátil.",
                2000,
                "Dinâmico.",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text- border-t border-b text-sm pt-5 pb-5 px-20">
          O DressUp, simplifica a escolha de roupas com sugestões diárias personalizáveis. Permite o gerenciamento de peças, cuidados com as roupas e promove a sustentabilidade ao facilitar a doação ou reciclagem. Mantém um registro detalhado das datas de uso e histórico de conjuntos, oferecendo uma gestão eficaz. Para viagens, possui uma função de planejamento de roupas baseada na previsão do tempo e localização.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 mt-4 lg:mt-0"
        >
          <div className="border-l">
            <Image
              src="/images/teste4_fs.png"
              alt="hero image"
              className=""
              width={500}
              height={500}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;