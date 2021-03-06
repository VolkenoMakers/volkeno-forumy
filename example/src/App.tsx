import React, { useState } from 'react'
import { VolkenoForumy } from 'volkeno-forumy'
import 'volkeno-forumy/dist/index.css'
import moment from 'moment'

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

let datasUserSession = [
  {
    id: generateUniqueID(),
    slug: generateUniqueID(),
    created_at: moment().format('DD/MM/yyyy'),
    user: {
      firstName: 'Lorem',
      lastName: 'Ipsum',
      avatar: '/mediafiles/avatars/default.png',
    }
  }
]

  const [Datas, setDatas] = useState<string[]>([])
  const [DatasUserSession, setDatasUserSession] = useState(datasUserSession)

//======================= AJOUT SUJET ===================================

  const [initialContent, setInitialContent] = useState('')
  const [initialTitle, setInitialTitle] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  const [firstNameUserSession, setFirstNameUserSession] = useState('')
  const [lastNameUserSession, setLastNameUserSession] = useState('')

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
  const resetForm2 = () => {
    (document.getElementById('add_msg_form2') as HTMLFormElement).reset();
  }
  const [display, setDisplay] = useState(false)
  const launchAlert = () => {
    setDisplay(!display)
  }

    const onAdd = (e:any) => {
        e.preventDefault()
        if(initialTitle.trim().length > 0 ){

            let fields: any = {
                initialTitle: initialTitle,
                initialContent: initialContent,
                id: generateUniqueID(),
                slug: generateUniqueID(),
                created_at: moment().format('DD/MM/yyyy'),
                author: {
                    firstName: firstName,
                    lastName: lastName,
                    avatar: '/mediafiles/avatars/default.png',
                }
                ,
                first_level_response: []
            }

            setDatas([...Datas, fields])
            resetForm()
            setInitialContent('')
            setInitialTitle('')
            setFirstName('')
            setLastName('')
        }
    }

    const onAddUserSession = (e:any) => {
        e.preventDefault()
        if(firstNameUserSession.trim().length > 0 && firstNameUserSession.trim().length > 0 ){

            let fields: any = {
                id: generateUniqueID(),
                slug: generateUniqueID(),
                created_at: '22/04/2022',
                user: {
                    firstName: firstNameUserSession,
                    lastName: lastNameUserSession,
                    avatar: '/mediafiles/avatars/default.png',
                }
            }

            setDatasUserSession([...DatasUserSession, fields])

            resetForm2()
            setFirstNameUserSession('')
            setLastNameUserSession('')

            launchAlert()
        }
    }


  return (
      <div className='forum-container'>
          <VolkenoForumy
            Datas={Datas}
            hasThirdLevel={true}
            DatasUserSession={DatasUserSession}
          />

          {
            (display) ? (
              <div className="alert alert-success alert-dismissible fade show display-alert-connexion" role="alert">
                <strong>Vous êtes connecté!</strong> Veuillez ajouter un sujet pour continuer.
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
            ) : ('')
          }

          {/* ======================== MODALE AJOUT SUJET ========================= */}

            <button type="button" className={`btn btnAjoutSujet` }data-toggle="modal" data-target="#exampleModal">
              +
            </button>

            <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className='modal-dialog' role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Ajouter un sujet</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <form id='add_msg_form'>
                    <div className="modal-body">
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
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}
                        value={initialContent}
                        onChange={(e)=>{
                          setInitialContent(e.target.value)
                        }}
                        ></textarea>
                      </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Annuler</button>
                    <button type="submit" className="btn btn-primary"
                        onClick={onAdd}
                        data-dismiss="modal"
                    >Ajouter</button>
                  </div>
                  </form>
                </div>
              </div>
            </div>

            {/* ========================== MODALE USER SESSION ======================== */}

            <div className="modal fade" id="exampleModalhuit"  aria-labelledby="exampleModalLabelhuit" aria-hidden="true">
              <div className='modal-dialog' role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabelhuit">Se connecter</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <form id='add_msg_form2'>
                    <div className="modal-body">
                        <div className="form-group mr-3 w-100">
                          <label htmlFor="exampleFormControlInputdeux">First name</label>
                          <input type="text" className="form-control" id="exampleFormControlInputdeux" placeholder="FirstName"
                          value={firstNameUserSession}
                          onChange={(e)=>{
                            setFirstNameUserSession(e.target.value)
                          }}
                          />
                        </div>
                        <div className="form-group w-100">
                          <label htmlFor="exampleFormControlInputtrois">Last name</label>
                          <input type="text" className="form-control" id="exampleFormControlInputtrois" placeholder="LastName"
                          value={lastNameUserSession}
                          onChange={(e)=>{
                            setLastNameUserSession(e.target.value)
                          }}
                          />
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Annuler</button>
                        <button type="submit" className="btn btn-primary"
                            onClick={onAddUserSession}
                            data-dismiss="modal"
                        >Se connecter</button>
                      </div>
                  </form>
                </div>
              </div>
            </div>

      </div>
  )

}

export default App
