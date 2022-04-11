export declare const DatasForum: {
    titre: string;
    contenu: string;
    id: number;
    created_at: string;
    author: {
        prenom: string;
        nom: string;
        avatar: string;
        fullname: string;
    };
    comments: {
        id: number;
        user: {
            prenom: string;
            nom: string;
            avatar: string;
            fullname: string;
        };
        text: string;
        created_at: string;
        reponse_commentaire: {
            user: {
                prenom: string;
                nom: string;
                user_avatar: string;
                fullname: string;
            };
            contenu: string;
        }[];
    }[];
    user_comments: {
        id: number;
        user: {
            prenom: string;
            nom: string;
            avatar: string;
            fullname: string;
        };
    }[];
}[];
export declare const DatasUserSession: {
    id: number;
    user: {
        prenom: string;
        nom: string;
        fullname: string;
        avatar: string;
    };
}[];
