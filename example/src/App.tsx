import React, { useState } from 'react'

import { VolkenoForumy } from 'volkeno-forumy'
import 'volkeno-forumy/dist/index.css'

const App = () => {

    

//   let datas = [
//     {
//       initialTitle: "Quels sont les avantages d'utiliser le vélo comme moyen de transport ?",
//       initialContent: " Le vélo est un moyen de transport silencieux et écologique. C'est un engin qui ne présente pas beaucoup de danger. D'une part, le vélo ne nous fait pas respirer les vapeurs d'essence, mais les vapeurs du matin et du soir. D'autre part, il se moque des règlements, il ignore les interdits.",
//       id: 1,
//       slug: 'avantage_velo',
//       created_at: "6/04/2022",
//       author: {
//           firstName: "Joël ",
//           lastName: "Gomis",
//           avatar: '/mediafiles/avatars/default.png',
//       },
//       first_level_response: [
//           {
//               id: 1,
//               slug: 'initial_message_slug',
//               user: {
//                   firstName: "Sadio",
//                   lastName: "Sanghare",
//                   avatar: '/mediafiles/avatars/default.png',
//               },
//               content: "Comment 1",
//               created_at: "6/04/2022",
//               second_level_response: [
//               {
//                 id: 1,
//                 slug: 'first_level_message_slug',
//                   user: {
//                       firstName: "Ndeye",
//                       lastName: "Faye",
//                       avatar: '/mediafiles/avatars/default.png',
//                   },
//                   content: "Reponse 7 deus",
//               }
//               ]
//           }
//   ]

  const [Datas, setDatas] = useState<string[]>([])

//======================= AJOUT SUJET ===================================

  const [initialContent, setInitialContent] = useState('')
  const [initialTitle, setInitialTitle] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const [responseContent, setResponseContent] = useState('')
  const [firstNameUser, setFirstNameUser] = useState('')
  const [lastNameUser, setLastNameUser] = useState('')

  const [responseContent2, setResponseContent2] = useState('')
  const [firstNameUser2, setFirstNameUser2] = useState('')
  const [lastNameUser2, setLastNameUser2] = useState('')


  function generateUniqueID() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

  const resetForm = () => {
    (document.getElementById('add_msg_form') as HTMLFormElement).reset();
  }

    const onAdd = (e:any) => {
        e.preventDefault()
        if(initialTitle.trim().length > 0 ){
            
            let fields: any = {
                initialTitle: initialTitle,
                initialContent: initialContent,
                id: generateUniqueID(),
                slug: generateUniqueID(),
                created_at: '22/04/2022',
                author: {
                    firstName: firstName,
                    lastName: lastName,
                    avatar: '/mediafiles/avatars/default.png',
                }
                
                ,
                first_level_response: [
                  {
                    user: {
                      firstName: firstNameUser,
                      lastName: lastNameUser,
                      avatar: '/mediafiles/avatars/default.png',
                    },
                    content: responseContent,
                    second_level_response: [
                      {
                        user: {
                        firstName: firstNameUser2,
                        lastName: lastNameUser2,
                        avatar: '/mediafiles/avatars/default.png',
                      },
                      content: responseContent2,
                      }
                    ]
                  }
                ]
            }

            setDatas([...Datas, fields])
            resetForm()
            setInitialContent('')
            setInitialTitle('')
            setFirstName('')
            setLastName('')

            setFirstNameUser('')
            setLastNameUser('')
            setResponseContent('')

            setFirstNameUser2('')
            setLastNameUser2('')
            setResponseContent2('')
            
            
        }
    }

    const onAddComment = (e:any) => {
      e.preventDefault()
      console.log(firstName, lastName , responseContent)

      let fields: any = {
        content: responseContent,
        id: generateUniqueID(),
        slug: generateUniqueID(),
        created_at: '22/04/2022',
        user: {
            firstName: firstName,
            lastName: lastName,
            avatar: '/mediafiles/avatars/default.png',
        }
      }

      let interm = Datas
      console.log(interm, fields)
      
      
    }
  
  return (
      <div className='forum-container'>
          <VolkenoForumy Datas={Datas}  />

          {/* ======================== AJOUT SUJET ========================= */}

            <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className='modal-dialog' role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <form id='add_msg_form'> 
                  <div className="modal-body">

                  <div className={`addSubjectFormGroup mb-3`}>
                    <div className={`addSubjectTitle`}>Add subject</div>

                    <div className='d-flex w-100'>
                      <div className="form-group mr-3 w-100">
                        <label htmlFor="exampleFormControlInputdeux">First name</label>
                        <input type="text" className="form-control" id="exampleFormControlInputdeux" placeholder="FirstName"
                        value={firstName}
                        onChange={(e)=>{
                          setFirstName(e.target.value)
                        }}
                        />
                      </div>
                      <div className="form-group w-100">
                        <label htmlFor="exampleFormControlInputtrois">Last name</label>
                        <input type="text" className="form-control" id="exampleFormControlInputtrois" placeholder="LastName"
                        value={lastName}
                        onChange={(e)=>{
                          setLastName(e.target.value)
                        }}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="examphtmlFor=''mControlInput1">Titre</label>
                      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Titre du sujet"
                      value={initialTitle}
                      onChange={(e)=>{
                        setInitialTitle(e.target.value)
                      }}
                       />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlTextarea1">Contenu</label>
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows={1}
                       value={initialContent}
                       onChange={(e)=>{
                        setInitialContent(e.target.value)
                       }}
                      ></textarea>
                    </div>

                  </div>

                  {/* ============================================================ */}

                  <div className={`addSubjectFormGroup mb-3`}>
                    <div className={`addSubjectTitle`}>Add comment</div>

                    <div className='d-flex w-100'>

                      <div className="form-group w-100 mr-3">
                        <label htmlFor="exampleFormControlInputcinq">First name</label>
                        <input type="text" className="form-control" id="exampleFormControlInputcinq" placeholder="FirstName"
                        value={firstNameUser}
                        onChange={(e)=>{
                          setFirstNameUser(e.target.value)
                        }}
                        />
                      </div>
                      <div className="form-group w-100">
                        <label htmlFor="exampleFormControlInputsix">Last name</label>
                        <input type="text" className="form-control" id="exampleFormControlInputsix" placeholder="LastName"
                        value={lastNameUser}
                        onChange={(e)=>{
                          setLastNameUser(e.target.value)
                        }}
                        />
                      </div>

                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="exampleFormControlTextareaquatre">Contenu</label>
                      <textarea className="form-control" id="exampleFormControlTextareaquatre" rows={1}
                       value={responseContent}
                       onChange={(e)=>{
                        setResponseContent(e.target.value)
                       }}
                      ></textarea>
                    </div>

                  </div>

                  {/* ========================================= */}

                  <div className={`addSubjectFormGroup`}>
                    <div className={`addSubjectTitle`}>Add response</div>

                    <div className='d-flex w-100'>

                      <div className="form-group w-100 mr-3">
                        <label htmlFor="exampleFormControlInputsept">First name</label>
                        <input type="text" className="form-control" id="exampleFormControlInputsept" placeholder="FirstName"
                        value={firstNameUser2}
                        onChange={(e)=>{
                          setFirstNameUser2(e.target.value)
                        }}
                        />
                      </div>
                      <div className="form-group w-100">
                        <label htmlFor="exampleFormControlInputhuit">Last name</label>
                        <input type="text" className="form-control" id="exampleFormControlInputhuit" placeholder="LastName"
                        value={lastNameUser2}
                        onChange={(e)=>{
                          setLastNameUser2(e.target.value)
                        }}
                        />
                      </div>

                    </div>
                    
                    <div className="form-group">
                      <label htmlFor="exampleFormControlTextareaneuf">Contenu</label>
                      <textarea className="form-control" id="exampleFormControlTextareaneuf" rows={1}
                       value={responseContent2}
                       onChange={(e)=>{
                        setResponseContent2(e.target.value)
                       }}
                      ></textarea>
                    </div>

                  </div>
                    
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Annuler</button>
                    <button type="submit" className="btn btn-primary"
                        onClick={onAdd}
                        data-dismiss="modal"
                    >Enrégistrer</button>
                  </div>
                  </form>
                </div>
              </div>
            </div>


            {/* ============================ AJOUT COMMENT ============================ */}


            <div className="modal fade" id="exampleModal2"  aria-labelledby="exampleModalLabel2" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel2">Modal title</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <form>
                  <div className="modal-body">

                    <div className="form-group">
                      <label htmlFor="exampleFormControlInputcinq">First name</label>
                      <input type="text" className="form-control" id="exampleFormControlInputcinq" placeholder="FirstName"
                      value={firstName}
                      onChange={(e)=>{
                        setFirstName(e.target.value)
                      }}
                       />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlInputsix">Last name</label>
                      <input type="text" className="form-control" id="exampleFormControlInputsix" placeholder="LastName"
                      value={lastName}
                      onChange={(e)=>{
                        setLastName(e.target.value)
                      }}
                       />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlTextareaquatre">Contenu</label>
                      <textarea className="form-control" id="exampleFormControlTextareaquatre" rows={3}
                       value={responseContent}
                       onChange={(e)=>{
                        setResponseContent(e.target.value)
                       }}
                      ></textarea>
                    </div>
                    
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Annuler</button>
                    <button type="submit" className="btn btn-primary"
                        onClick={onAddComment}
                        data-dismiss="modal"
                    >Enrégistrer</button>
                  </div>
                  </form>
                </div>
              </div>
            </div>


      </div>
  )

}

export default App
