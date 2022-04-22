import React, { useEffect } from 'react'

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

  
  return <VolkenoForumy data={Datas}  />

}

export default App
