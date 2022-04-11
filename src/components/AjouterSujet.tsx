import React from 'react'
import styles from '../styles.module.css'

const Ajoutersujet = () => {
  return (
    <div className={styles.loginContainer}>
      <div className='auth-form-body'>
        <div className={styles.containerCayore}>
          <div className={styles.forumContainer}>
            <div className='log-div'>
              <h2 className={styles.forumTitle}>Ajoutez un sujet</h2>
            </div>
            <form className={styles.loginForm}>
              <div className={styles.authForm}>
                <div className={styles.inputCol}>
                  <div className='form-group'>
                    <label>Titre</label>
                    <input
                      type='text'
                      className={styles.formControl}
                      placeholder='Ajouter un titre'
                    />
                  </div>
                </div>

                <div className={styles.inputCol}>
                  <div className='form-group'>
                    <label>Contenu</label>
                    <textarea
                      style={{ height: 150 }}
                      className={styles.formControl}
                      id='riskAndChallenge'
                      name='contenu'
                      placeholder='Contenu'
                    />
                  </div>
                </div>
              </div>
              <div className={styles.submitBtnRow}>
                <div className='col-md-12 auth-submit-col'>
                  <button type='submit' className={styles.authSubmitBtn}>
                    Ajouter
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ajoutersujet
