import * as React from 'react'
import Ajoutersujet from './components/AjouterSujet/AjouterSujet'
// import Discussion from './components/Discussion'
import Sommaire from './components/Sommaire'
// import styles from './styles.module.css'

// interface Props {
//   text: string
// }

export const VolkenoForumy = () => {
  return (
    // <div className={styles.test}>Example Component: {text}</div>
    <div>
      <Sommaire />
      {/* {/* <Discussion /> */}
      <Ajoutersujet />
    </div>
  )
}
