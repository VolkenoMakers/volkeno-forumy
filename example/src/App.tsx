import React from 'react'

import { VolkenoForumy } from 'volkeno-forumy'
import 'volkeno-forumy/dist/index.css'

const App = () => {
  const Datas = [
    {
      titre: "Quels sont les avantages d'utiliser le vélo comme moyen de transport ?",
      contenu: " Le vélo est un moyen de transport silencieux et écologique. C'est un engin qui ne présente pas beaucoup de danger. D'une part, le vélo ne nous fait pas respirer les vapeurs d'essence, mais les vapeurs du matin et du soir. D'autre part, il se moque des règlements, il ignore les interdits.",
      id: 1,
      created_at: "6/04/2022",
      author: {
          prenom: "Joël ",
          nom: "Gomis",
          avatar: '/mediafiles/avatars/default.png',
          fullname: 'JG'
      },
      comments: [
          {
              id: 1,
              user: {
                  prenom: "Sadio",
                  nom: "Sanghare",
                  avatar: '/mediafiles/avatars/default.png',
                  fullname: "SS"
              },
              text: "Comment 1",
              created_at: "6/04/2022",
              reponse_commentaire: [
              {
                id: 1,
                  user: {
                      prenom: "Ndeye",
                      nom: "Faye",
                      user_avatar: '/mediafiles/avatars/default.png',
                      fullname: "NF"
                  },
                  contenu: "Reponse 7 deus",
              }
              ]
          },
          {
              id: 2,
              user: {
                  prenom: "Amadou",
                  nom: "Sall",
                  avatar: '/mediafiles/avatars/default.png',
                  fullname: "AS"
              },
              text: "Reponse 2",
              created_at: "6/04/2022",
              reponse_commentaire: [
              {
                  id: 1,
                  user: {
                      prenom: "Fatou",
                      nom: "Samb",
                      user_avatar: '/mediafiles/avatars/default.png',
                      fullname: "FS"
                  },
                  contenu: "Reponse 10",
              },
              {
                  id: 2,
                  user: {
                      prenom: "Modou",
                      nom: "Ndiaye",
                      user_avatar: '/mediafiles/avatars/default.png',
                      fullname: "MN"
                  },
                  contenu: "Reponse 18",
              }
            ]
          },
          {
              id: 3,
              user: {
                  prenom: "Aïssatou",
                  nom: "Diallo",
                  avatar: '/mediafiles/avatars/default.png',
                  fullname: "AD"
              },
              text: "Reponse 12",
              created_at: "21/04/2022",
              reponse_commentaire: [
              {
                  id: 1,
                  user: {
                      prenom: "Fatou",
                      nom: "Samb",
                      user_avatar: '/mediafiles/avatars/default.png',
                      fullname: "FS"
                  },
                  contenu: "Reponse 10",
              }
              ]
          }
      ],
      user_comments: [
          {   
              id: 1,
              user: {
                  prenom: "Sadio",
                  nom: "Sanghare",
                  avatar: '/mediafiles/avatars/default.png',
                  fullname: 'SS'
              },
          },
          {   
              id: 2,
              user: {
                  prenom: "Paul",
                  nom: "Gomis",
                  avatar: '/mediafiles/avatars/default.png',
                  fullname: 'PG'
              },
          },
      ]

    },
    {
        titre: "Quels sont les arguments du travail ?",
        contenu: "Il éloigne l'ennui, le vice et le besoin. Il humanise par le lien social qu'il crée et maintient nos capacités intellectuelles en éveil. Il redresse le perverti, moralise le dévoyé, rend l'homme vertueux.",
        id: 2,
        created_at: "6/04/2022",
        author: {
            prenom: "Moussa",
            nom: "Fall",
            avatar: '/mediafiles/avatars/default.png',
            fullname: 'MF'
        },
        comments: [
            {
                id: 1,
                user: {
                    prenom: "Paul",
                    nom: "Gomis",
                    avatar: '/mediafiles/avatars/default.png',
                    fullname: "PG"
                },
                text: "Reponse 1",
                created_at: "6/04/2022",
                reponse_commentaire: [
                {
                    id: 1,
                    user: {
                        prenom: "Alpha",
                        nom: "Diallo",
                        user_avatar: "/mediafiles/avatars/default.png",
                        fullname: "AD"
                    },
                    contenu: "Reponse 3",
                }
                ]
            },
            {
                id: 2,
                user: {
                    prenom: "Sadio",
                    nom: "Sangh",
                    avatar: '/mediafiles/avatars/default.png',
                    fullname: "SS"
                },
                text: "Reponse 2",
                created_at: "6/04/2022",
                reponse_commentaire: [
                {
                    id: 1,
                    user: {
                        prenom: "Cheikh",
                        nom: "Dieng",
                        user_avatar: '/mediafiles/avatars/default.png',
                        fullname: "FS"
                    },
                    contenu: "Reponse 6",
                }
                ]
            }
        ],
        user_comments: [
            {   
                id: 1,
                user: {
                    prenom: "Sadio",
                    nom: "Sanghare",
                    avatar: '/mediafiles/avatars/default.png',
                    fullname: 'SS'
                },
            },
            {   
                id: 2,
                user: {
                    prenom: "Paul",
                    nom: "Gomis",
                    avatar: '/mediafiles/avatars/default.png',
                    fullname: 'PG'
                },
            },
        ]

    }
  ]

  


  return <VolkenoForumy data={Datas} />
}

export default App
