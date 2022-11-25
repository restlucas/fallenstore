import React, { useEffect, useState } from 'react'

import { ArrowCircleUp } from '@mui/icons-material/'

import styles from './SendToTopButton.module.css';

const SendToTopButton = () => {

  useEffect(() => {
  }, [])

  return (
    <button className={styles.button}>
        <ArrowCircleUp fontSize="large" sx={{ color: 'red' }} hidden />
    </button>
  )
}

export default SendToTopButton