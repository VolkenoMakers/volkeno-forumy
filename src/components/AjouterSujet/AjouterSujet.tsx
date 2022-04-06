import React from 'react'
// import { useForm } from 'react-hook-form'
import styles from '../styles.module.css'

const Ajoutersujet = () => {
  // const { register, handleSubmit } = useForm()

  // const onSubmit = (data: any) => {
  //   setLoginInProgress(true)

  //   const setApiBase = props.setApiBase
  //   const setEndpoint = props.setEndpoint

  //   if (setApiBase && setEndpoint) {
  //     var url = setApiBase + setEndpoint

  //     axios
  //       .post(url, data)
  //       .then(
  //         (response: {
  //           status: number
  //           data: { success: boolean; token: string }
  //           success: any
  //         }) => {
  //           setLoginInProgress(false)
  //           setLoginSuccess(true)
  //           if (
  //             response.status >= 200 ||
  //             response.status <= 299 ||
  //             response.data.success ||
  //             response.success
  //           ) {
  //             if (props.toastSuccessText) {
  //               toast.success(`${props.toastSuccessText}`)
  //             } else {
  //               toast.success('Bravo! Vous êtes connecté.')
  //             }

  //             window.sessionStorage.setItem(
  //               `${props.keyToken}`,
  //               response.data.token
  //             )

  //             setTimeout(() => {
  //               setLoginSuccess(false)
  //               props.onSuccessLogin()
  //             }, 2500)
  //           }
  //         }
  //       )
  //       .catch((error: any) => {
  //         setLoginError(true)
  //         setLoginInProgress(false)
  //         if (error) {
  //           if (props.toastErrorText) {
  //             toast.error(`${props.toastErrorText}`)
  //           } else {
  //             toast.error('Oups! Une erreur est survenu. Veuillez réessayer!')
  //           }

  //           setTimeout(() => {
  //             setLoginError(false)
  //             props.onFailLogin()
  //           }, 2500)
  //         }
  //       })
  //   } else {
  //     console.log("Veuillez renseigner la base de l'api ainsi que le endpoint")
  //   }
  // }

  return (
    <div className={styles.loginContainer}>
      <div className='auth-form-body'>
        <div className='auth-row-container'>
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
