import React from 'react'
import styles from '../styles.module.css'
import SommaireItem from './SommaireItem'

const Sommaire: React.FC<DatasType> = (): JSX.Element => {
  return (
    <div className='component-liste-projet'>
      <div className={styles.contentViewStart}>
        <div className={styles.containerCayore}>
          <div className='row align-items-center' style={{ margin: '3rem 0' }}>
            <div className='col-12'>
              <SommaireItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sommaire
