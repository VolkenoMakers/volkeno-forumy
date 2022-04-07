export declare const DatasForum: ({
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
        };
        text: string;
        created_at: string;
        reponse_commentaire: {
            user: string;
            user_avatar: string;
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
} | {
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
        user: {
            prenom: string;
            nom: string;
            avatar: string;
        };
        text: string;
        created_at: string;
        reponse_commentaire: {
            user: string;
            user_avatar: string;
            contenu: string;
        }[];
    }[];
    user_comments?: undefined;
})[];
