import React from 'react'

import styles from './CardItem.module.css';

const CardItem = ({ key, type, description, imgSrc, imgHoverSrc, price, priceDiscount, inStock }) => {

  function handleSendToProduct () {
  }

  return (
    <div className={styles.card}>
      <img src={imgSrc} />
      <div className={styles.cardContent}>
        <p>{description}</p>
        {priceDiscount ? 
            <>
              <span className={styles.priceDiscount}>DE {price}</span>
              <h1>{priceDiscount}</h1>
            </>
            :
            <>
              <h1>{price}</h1>
            </>
        }
        <p>À vista no boleto com 10% de desconto</p>
        <div className={styles.valorParcela}>ou em até <strong>6x de R$99,99</strong> s/ juros no cartão</div>
        {inStock ? <button onClick={handleSendToProduct} className={styles.button}>COMPRAR</button> : <button className={styles.button} disabled>NÃO DISPONÍVEL</button> }
      </div>
    </div>
  )
}

export default CardItem