import React from 'react'
import styles from '../styles.module.css'
import SommaireItem from './SommaireItem'

const Sommaire: React.FC<DatasType> = ({ Datas }): JSX.Element => {
  return (
    <div className='component-liste-projet'>
      <div className={styles.contentViewStart}>
        <div className={styles.containerCayore}>
          <div className='row align-items-center' style={{ margin: '3rem 0' }}>
            <div className='col-12'>
              <SommaireItem Datas={Datas} />

              <button
                type='button'
                className='btn btn-primary'
                data-toggle='modal'
                data-target='#exampleModal'
              >
                Ajouter un sujet
              </button>

              <div
                className='modal fade'
                id='exampleModal'
                aria-labelledby='exampleModalLabel'
                aria-hidden='true'
              >
                <div className='modal-dialog'>
                  <div className='modal-content'>
                    <div className='modal-header'>
                      <h5 className='modal-title' id='exampleModalLabel'>
                        Modal title
                      </h5>
                      <button
                        type='button'
                        className='close'
                        data-dismiss='modal'
                        aria-label='Close'
                      >
                        <span aria-hidden='true'>&times;</span>
                      </button>
                    </div>
                    <div className='modal-body'>...</div>
                    <div className='modal-footer'>
                      <button
                        type='button'
                        className='btn btn-secondary'
                        data-dismiss='modal'
                      >
                        Annuler
                      </button>
                      <button type='button' className='btn btn-primary'>
                        Enrégistrer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sommaire
