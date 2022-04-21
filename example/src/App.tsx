import React from 'react'

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
          fullname: 'JG'
      },
      first_level_response: [
          {
              id: 1,

              user: {
                  firstName: "Sadio",
                  lastName: "Sanghare",
                  avatar: '/mediafiles/avatars/default.png',
                  fullname: "SS"
              },
              content: "Comment 1",
              created_at: "6/04/2022",
              second_level_response: [
              {
                id: 1,
                  user: {
                      firstName: "Ndeye",
                      lastName: "Faye",
                      avatar: '/mediafiles/avatars/default.png',
                      fullname: "NF"
                  },
                  content: "Reponse 7 deus",
              }
              ]
          },
          {
              id: 2,
              user: {
                  firstName: "Amadou",
                  lastName: "Sall",
                  avatar: '/mediafiles/avatars/default.png',
                  fullname: "AS"
              },
              content: "Reponse 2",
              created_at: "6/04/2022",
              second_level_response: [
              {
                  id: 1,
                  user: {
                      firstName: "Fatou",
                      lastName: "Samb",
                      avatar: '/mediafiles/avatars/default.png',
                      fullname: "FS"
                  },
                  content: "Reponse 10",
              },
              {
                  id: 2,
                  user: {
                      firstName: "Modou",
                      lastName: "Ndiaye",
                      avatar: '/mediafiles/avatars/default.png',
                      fullname: "MN"
                  },
                  content: "Reponse 18",
              }
            ]
          },
          {
              id: 3,
              user: {
                  firstName: "Aïssatou",
                  lastName: "Diallo",
                  avatar: '/mediafiles/avatars/default.png',
                  fullname: "AD"
              },
              content: "Reponse 12",
              created_at: "21/04/2022",
              second_level_response: [
              {
                  id: 1,
                  user: {
                      firstName: "Fatou",
                      lastName: "Samb",
                      avatar: '/mediafiles/avatars/default.png',
                      fullname: "FS"
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
                  fullname: 'SS'
              },
          },
          {   
              id: 2,
              user: {
                  firstName: "Paul",
                  lastName: "Gomis",
                  avatar: '/mediafiles/avatars/default.png',
                  fullname: 'PG'
              },
          },
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
            fullname: 'MF'
        },
        first_level_response: [
            {
                id: 1,
                user: {
                    firstName: "Paul",
                    lastName: "Gomis",
                    avatar: '/mediafiles/avatars/default.png',
                    fullname: "PG"
                },
                content: "Reponse 1",
                created_at: "6/04/2022",
                second_level_response: [
                {
                    id: 1,
                    user: {
                        firstName: "Alpha",
                        lastName: "Diallo",
                        avatar: "/mediafiles/avatars/default.png",
                        fullname: "AD"
                    },
                    content: "Reponse 3",
                }
                ]
            },
            {
                id: 2,
                user: {
                    firstName: "Sadio",
                    lastName: "Sangh",
                    avatar: '/mediafiles/avatars/default.png',
                    fullname: "SS"
                },
                content: "Reponse 2",
                created_at: "6/04/2022",
                second_level_response: [
                {
                    id: 1,
                    user: {
                        firstName: "Cheikh",
                        lastName: "Dieng",
                        avatar: '/mediafiles/avatars/default.png',
                        fullname: "FS"
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
                    lastName: "Sanghare",
                    avatar: '/mediafiles/avatars/default.png',
                    fullname: 'SS'
                },
            },
            {   
                id: 2,
                user: {
                    firstName: "Paul",
                    lastName: "Gomis",
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
