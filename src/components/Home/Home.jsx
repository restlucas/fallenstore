import React from 'react'
import SwiperCarousel from '../SwiperCarousel/SwiperCarousel';

import advantage_trophie from '../../assets/advantage_trophie.png';
import advantage_www from '../../assets/advantage_www.png';
import advantage_network from '../../assets/advantage_network.png';

import * as Icon from '@mui/icons-material/'

import styles from './Home.module.css'

const Home = () => {
  return (
    <>
      <section className={styles.swiper}>
        <SwiperCarousel />
      </section>

      <section className={styles.advantages}>
        <div>
          <img src={advantage_trophie} alt=""/>
          <p>Produtos exclusivos e de alta performance</p>
        </div>
        <div>
          <img src={advantage_www} alt=""/>
          <p>Grandes marcas do mercado e de várias partes do mundo</p>
        </div>
        <div>
          <img src={advantage_network} alt=""/>
          <p>Loja multimarcas pioneira de ESPORTS no Brasil.</p>
        </div>
      </section>

      <section className={styles.movie}>
        {/* <Icon.LiveTv fontSize="large" color="white" /> */}
        <div className={styles.responsiveVideo}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/3SmtToIv6eM" title="Fallen Gear | Headset Gamer Fallen Morcego Lightpro 2021" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>  
      </section>
    </>
  )
}

export default Home