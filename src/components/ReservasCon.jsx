import React from 'react'
import { BsWhatsapp } from 'react-icons/bs';
import styles from './ReservasCon.module.css';

const ReservasCon = () => {
  return (
    <div className={styles.container}>
        <div className='text-white col-4 text-center p-4 card-body'>
        <h1>Reservas</h1>
        <p>Podes enviarnos un mensaje directo al whatsapp:</p>
        <a href='https://wa.me/541125891957?text=Me%20interesa%20hacer%20una%20reserva'>
        <BsWhatsapp />
        </a>
        </div>

        <div>

        </div>
    </div>
  )
}

export default ReservasCon;