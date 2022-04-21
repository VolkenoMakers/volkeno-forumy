import React from 'react'
import styles from '../styles.module.css'
import AjouterSujetModal from './AjouterSujetModal'
import SommaireItem from './SommaireItem'

const Sommaire: React.FC<DatasType> = ({ Datas }): JSX.Element => {
  return (
    <div className='component-liste-projet'>
      <div className={styles.contentViewStart}>
        <div className={styles.containerCayore}>
          <div className='row align-items-center' style={{ margin: '3rem 0' }}>
            <div className={styles.ajouterSujet}>
              {' '}
              <button
                className={styles.ButtonAjouter}
                data-bs-toggle='modal'
                data-bs-target='#detailModal'
              >
                Ajouter un sujet
              </button>
            </div>
            <div className='col-12'>
              <SommaireItem Datas={Datas} />
            </div>
          </div>
        </div>
      </div>
      <AjouterSujetModal />
    </div>
  )
}

export default Sommaire
