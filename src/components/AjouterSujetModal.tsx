import React, { useCallback } from 'react'
import styles from '../styles.module.css'
import { useForm } from 'react-hook-form'

interface AddFormData {
  titre?: string
  contenu?: string
  ref: any
}

const AjouterSujetModal = () => {
  const { register, handleSubmit } = useForm<AddFormData>()
  const onSubmit = useCallback((formValues: AddFormData) => {
    console.log(formValues)
  }, [])

  return (
    <div
      className='modal fade'
      id='detailModal'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div className={styles.loginContainer}>
        <div className='auth-form-body'>
          <div className={styles.containerCayore}>
            <div className={styles.forumContainer}>
              <div className='log-div'>
                <h2 className={styles.forumTitle}>Ajoutez un sujet</h2>
              </div>
              <form
                className={styles.loginForm}
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className={styles.authForm}>
                  <div className={styles.inputCol}>
                    <div className='form-group'>
                      <label>Titre</label>
                      <input
                        type='text'
                        className={styles.formControl}
                        placeholder='Ajouter un titre'
                        {...register('titre')}
                      />
                    </div>
                  </div>

                  <div className={styles.inputCol}>
                    <div className='form-group'>
                      <label>Contenu</label>
                      <textarea
                        style={{ height: 150 }}
                        className={styles.formControl}
                        {...register('contenu')}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.submitBtnRow}>
                  <button type='submit' className={styles.authSubmitBtn}>
                    Ajouter
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AjouterSujetModal
