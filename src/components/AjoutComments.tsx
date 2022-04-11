import React, { useState } from 'react'
import styles from '../styles.module.css'

function AjoutComments(
    {onSubmit}: {onSubmit: ((comment: string)=>any)}
    ) {

    // const history = useHistory();
    // const [submitedForm, setSubmitedForm] = useState(false);
    // const [isSuccessfullySubmittedForm, setIsSuccessfullySubmittedForm] = useState(false);

    // const params=useParams()
    // let id = params?.id;
    // const dispatch = useDispatch();

    // const validationSchema = yup.object().shape({
    //     text: yup.string().required('This field is required'),
    //   });

    const [comment, setComment] = useState('')

    //   const {
    //     // register,
    //     handleSubmit,
    //     // reset,
    //   } = useForm({
    //     mode: "onBlur",
    //     resolver: yupResolver(validationSchema)
    //   });

    //   const config = {
    //         headers: {
    //         Authorization: `Bearer ${window.sessionStorage.getItem("userToken")}`,
    //         },
    //     };
    //   const userID = window.sessionStorage.getItem("userID");
      
      

    const submitReponse = (
        e: any
        ) => {
            e.preventDefault()
            if(comment.trim().length > 0 ){

                onSubmit(comment)
            }


      }

  return (
    
        <div
            // onSubmit={submitReponse}
        >
            <div className={
                // card card-body 
                styles.forumCardSommaire 
                // styles.forumCardSommaireDiscussion
                }>
                <div className='row'>
                    <div className='col-12 pt-3 mb-md-4 mb-5'>
                        <textarea className='form-control' 
                        // rows='4' 
                        placeholder='Répondre' name='text' 
                        value={comment}
                        onChange={(e)=>{
                            setComment(e.target.value)
                        }}
                        // {...register("text")}
                         ></textarea>                       
                    </div>                  
                </div>
            </div>

            {/* {!isSuccessfullySubmittedForm ? ( */}
                <button className={
                    styles.formAddCguButtonAjouter 
                }
                    onClick={submitReponse}
                >
                    Ajouter
                </button>

                {/* ) : (
                <button className="form-add-cgu-button-ajouter trans-0-2">
                    <i className="fas fa-spin fa-spinner"></i>
                    &nbsp;&nbsp;&nbsp;In progress...
                </button>
            )} */}
        </div>
    )
}

export default AjoutComments