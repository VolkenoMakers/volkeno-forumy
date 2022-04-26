import React, { useState } from 'react'
import styles from '../styles.module.css'

function AjoutComments({ onSubmit }: { onSubmit: (comment: string) => any }) {
  const [comment, setComment] = useState('')

  const submitReponse = (e: any) => {
    e.preventDefault()
    if (comment.trim().length > 0) {
      onSubmit(comment)
    }
  }

  return (
    <form>
      <div className={`${styles.forumCardSommaire}`}>
        <div className='row'>
          <div className='col-12 pt-3 mb-md-4 mb-5'>
            <textarea
              className='form-control'
              placeholder='Réponses'
              name='content'
              value={comment}
              onChange={(e) => {
                setComment(e.target.value)
              }}
            />
          </div>
        </div>
      </div>

      <button
        className={styles.formAddCguButtonAjouter}
        onClick={submitReponse}
      >
        Ajouter
      </button>
    </form>
  )
}

export default AjoutComments
