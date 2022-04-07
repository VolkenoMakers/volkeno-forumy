
export const DatasForum = [
    {
        titre: "Quels sont les avantages d'utiliser le vélo comme moyen de transport ?",
        contenu: " Le vélo est un moyen de transport silencieux et écologique. C'est un engin qui ne présente pas beaucoup de danger. D'une part, le vélo ne nous fait pas respirer les vapeurs d'essence, mais les vapeurs du matin et du soir. D'autre part, il se moque des règlements, il ignore les interdits.",
        id: 1,
        created_at: "6/04/2022",
        author: {
            prenom: "Joël ",
            nom: "Gomis",
            // avatar: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kissclipart.com%2Fgsmnet-ro-clipart-computer-icons-user-avatar-064hvl%2F&psig=AOvVaw16-m3QehDhym_BJ_eY5I-r&ust=1649339519718000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCLD3w9PK__YCFQAAAAAdAAAAABAU"
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
                },
                text: "Reponse 1",
                created_at: "6/04/2022",
                reponse_commentaire: [
                {
                    user: "Sadio",
                    user_avatar: "image3",
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
                },
                text: "Reponse 2",
                created_at: "6/04/2022",
                reponse_commentaire: [
                {
                    user: "Sadio",
                    user_avatar: "image3",
                    contenu: "Reponse 3",
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
                user: {
                    prenom: "Paul",
                    nom: "Gomis",
                    avatar: '/mediafiles/avatars/default.png',
                },
                text: "Reponse 1",
                created_at: "6/04/2022",
                reponse_commentaire: [
                {
                    user: "Sadio",
                    user_avatar: "image3",
                    contenu: "Reponse 3",
                }
                ]
            },
            {
                user: {
                    prenom: "Sadio",
                    nom: "Sangh",
                    avatar: '/mediafiles/avatars/default.png',
                },
                text: "Reponse 2",
                created_at: "6/04/2022",
                reponse_commentaire: [
                {
                    user: "Sadio",
                    user_avatar: "image3",
                    contenu: "Reponse 3",
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