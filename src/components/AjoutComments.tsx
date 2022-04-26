import React, { useState } from 'react'

interface AcProps {
    onSubmitMessageResponse?:  (value: any) => void;
}

function AjoutComments({...props}: AcProps) {

    const [comment, setComment] = useState('')
    const {
        onSubmitMessageResponse
    } = props
   
    const submitReponse = (e: any) => {
        e.preventDefault()
        if(comment.trim().length > 0 ){
            if(onSubmitMessageResponse) {
                onSubmitMessageResponse(comment)
            }
        }
    }
  }

  return (
    
        <form className='mb-3'>
            <div className={
                `${styles.forumCardSommaire}` 
                }>
                <div className='row'>
                    <div className='col-12 pt-3 mb-md-4 mb-5'>
                        <textarea className='form-control'
                        placeholder='Répondre' name='content' 
                        value={comment}
                        onChange={(e)=>{
                            setComment(e.target.value)
                        }}
                         ></textarea>                       
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
