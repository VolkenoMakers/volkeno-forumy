import React, { useEffect, useState } from 'react'

import { VolkenoForumy } from 'volkeno-forumy'
import 'volkeno-forumy/dist/index.css'

const App = () => {

    const Datas = [
        {
            initialTitle: "Quels sont les avantages d'utiliser le vélo comme moyen de transport ?",
            initialContent: " Le vélo est un moyen de transport silencieux et écologique. C'est un engin qui ne présente pas beaucoup de danger. D'une part, le vélo ne nous fait pas respirer les vapeurs d'essence, mais les vapeurs du matin et du soir. D'autre part, il se moque des règlements, il ignore les interdits.",
            id: 1,
            slug: 'avantage_velo',
            created_at: "6/04/2022",
            author: {
                firstName: "Joël ",
                lastName: "Gomis",
                avatar: '/mediafiles/avatars/default.png',
            },
            first_level_response: [
                {
                    id: 1,
                    slug: 'initial_message_slug',
                    user: {
                        firstName: "Sadio",
                        lastName: "Sanghare",
                        avatar: '/mediafiles/avatars/default.png',
                    },
                    content: "Comment 1",
                    created_at: "6/04/2022",
                    second_level_response: [
                        {
                            id: 1,
                            slug: 'first_level_message_slug',
                            user: {
                                firstName: "Ndeye",
                                lastName: "Faye",
                                avatar: '/mediafiles/avatars/default.png',
                            },
                            content: "Reponse 7 deus",
                        }
                    ]
                },
                {
                    id: 2,
                    slug: 'initial_message_slug',
                    user: {
                        firstName: "Amadou",
                        lastName: "Sall",
                        avatar: '/mediafiles/avatars/default.png',
                    },
                    content: "Reponse 2",
                    created_at: "6/04/2022",
                    second_level_response: [
                        {
                            id: 1,
                            slug: 'first_level_message_slug',
                            user: {
                                firstName: "Fatou",
                                lastName: "Samb",
                                avatar: '/mediafiles/avatars/default.png',
                            },
                            content: "Reponse 10",
                        },
                        {
                            id: 2,
                            slug: 'first_level_message_slug',
                            user: {
                                firstName: "Modou",
                                lastName: "Ndiaye",
                                avatar: '/mediafiles/avatars/default.png',
                            },
                            content: "Reponse 18",
                        }
                    ]
                },
                {
                    id: 3,
                    slug: 'initial_message_slug',
                    user: {
                        firstName: "Aïssatou",
                        lastName: "Diallo",
                        avatar: '/mediafiles/avatars/default.png',
                    },
                    content: "Reponse 12",
                    created_at: "21/04/2022",
                    second_level_response: [
                        {
                            id: 1,
                            slug: 'first_level_message_slug',
                            user: {
                                firstName: "Fatou",
                                lastName: "Samb",
                                avatar: '/mediafiles/avatars/default.png',
                            },
                            content: "Reponse 10",
                        }
                    ]
                }
            ],
            user_comments: [
                {
                    id: 1,
                    user: {
                        firstName: "Sadio",
                        lastName: "Sanghare",
                        avatar: '/mediafiles/avatars/default.png',
                    },
                },
                {
                    id: 2,
                    user: {
                        firstName: "Amadou",
                        lastName: "Sall",
                        avatar: '/mediafiles/avatars/default.png',
                    },
                },
                {
                    id: 3,
                    user: {
                        firstName: "Aïssatou",
                        lastName: "Diallo",
                        avatar: '/mediafiles/avatars/default.png',
                    },
                }
            ]

        },
        {
            initialTitle: "Quels sont les arguments du travail ?",
            initialContent: "Il éloigne l'ennui, le vice et le besoin. Il humanise par le lien social qu'il crée et maintient nos capacités intellectuelles en éveil. Il redresse le perverti, moralise le dévoyé, rend l'homme vertueux.",
            id: 2,
            slug: 'arguments_travail',
            created_at: "6/04/2022",
            author: {
                firstName: "Moussa",
                lastName: "Fall",
                avatar: '/mediafiles/avatars/default.png',
            },
            first_level_response: [
                {
                    id: 1,
                    slug: 'initial_message_slug',
                    user: {
                        firstName: "Paul",
                        lastName: "Gomis",
                        avatar: '/mediafiles/avatars/default.png',
                    },
                    content: "Reponse 1",
                    created_at: "6/04/2022",
                    second_level_response: [
                        {
                            id: 1,
                            slug: 'first_level_message_slug',
                            user: {
                                firstName: "Alpha",
                                lastName: "Diallo",
                                avatar: '/mediafiles/avatars/default.png',
                            },
                            content: "Reponse 3",
                        }
                    ]
                },
                {
                    id: 2,
                    slug: 'initial_message_slug',
                    user: {
                        firstName: "Sadio",
                        lastName: "Sangh",
                        avatar: '/mediafiles/avatars/default.png',
                    },
                    content: "Reponse 2",
                    created_at: "6/04/2022",
                    second_level_response: [
                        {
                            id: 1,
                            slug: 'first_level_message_slug',
                            user: {
                                firstName: "Cheikh",
                                lastName: "Dieng",
                                avatar: '/mediafiles/avatars/default.png',
                            },
                            content: "Reponse 6",
                        }
                    ]
                }
            ],
            user_comments: [
                {
                    id: 1,
                    user: {
                        firstName: "Sadio",
                        lastName: "Sangh",
                        avatar: '/mediafiles/avatars/default.png',
                    },
                },
                {
                    id: 2,
                    user: {
                        firstName: "Paul",
                        lastName: "Gomis",
                        avatar: '/mediafiles/avatars/default.png',
                    },
                }
            ]

        }
    ]

    useEffect(() => {
        const donnee = {
            id: 4,
            slug: 'initial_message_slug',
            user: {
                firstName: "Joachim",
                lastName: "Sarr",
                avatar: '/mediafiles/avatars/default.png',
            },
            content: "Comment 2",
            created_at: "6/04/2022",
            second_level_response: [
                {
                    id: 1,
                    slug: 'first_level_message_slug',
                    user: {
                        firstName: "Merry",
                        lastName: "Martial",
                        avatar: '/mediafiles/avatars/default.png',
                    },
                    content: "Reponse 7",
                }
            ]
        }

        Datas[0]?.first_level_response?.push(donnee)
        // console.log('data',Datas)
    }, [Datas])


    const [contenu, setContenu] = useState('')
    const [titre, setTitre] = useState('')

    // const onAdd = (e: any) => {
    //     e.preventDefault()
    //     // if(contenu.trim().length > 0 &&  titre.trim().length > 0){
    //     //     console.log(contenu)
    //     // }
    //     console.log(titre)
    //     console.log(contenu)
    // }
    // const onAdd =(titre : string, contenu : string)=>{
    //     Datas.push()
    //     console.log(titre);
    //     console.log(contenu);
    // }
  
    const onAdd = () => {
        const initialTitle = titre  //store value from name input into name variable
        const initialContent = contenu //store value from age input into age variable
        const newPerson = { initialTitle, initialContent } // create new person object
        Datas.push() //push the new person object into the array
        console.log(newPerson) //render the data again so it reflects the new data
      }


    return (
        <div>
            <VolkenoForumy data={Datas} />
            <div style={{display : "flex", justifyContent: "flex-end", alignItems : "flex-end", marginRight : 10}}>
                <button style={{backgroundColor: "#115C67", border: "none"}} type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                    Ajouter un sujet
                </button>
            </div>
            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Ajouter un sujet </h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">

                            <form>
                                <div className="form-group">
                                    <label htmlFor="examphtmlFor=''mControlInput1">Titre</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Titre du sujet"
                                        value={titre}
                                        onChange={(e) => {
                                            setTitre(e.target.value)
                                        }}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Contenu</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows={3}
                                        value={contenu}
                                        onChange={(e) => {
                                            setContenu(e.target.value)
                                        }}
                                    ></textarea>
                                </div>
                            </form>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Annuler</button>
                            <button type="submit" className="btn btn-primary"
                                onClick={onAdd}
                            >Enregistrer</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
