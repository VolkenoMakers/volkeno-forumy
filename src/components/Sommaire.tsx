import React from 'react'
import styles from '../styles.module.css'

// interface Props {
//     text: string
// }

function Sommaire({ text }: Props) {
  return (
    <div className={styles.test}>Sommaire: {text}</div>
  )
}

export default Sommaire