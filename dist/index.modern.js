import React__default, { createElement } from 'react';
import { BsChat } from 'react-icons/bs';
import { IoReturnDownBackOutline } from 'react-icons/io5';

var styles = {"test":"_styles-module__test__3ybTi","contentViewStart":"_styles-module__contentViewStart__vMiGT","containerCayore":"_styles-module__containerCayore__zRBck","bannerListeProjet":"_styles-module__bannerListeProjet__zERCC","titreBannerListeProjet":"_styles-module__titreBannerListeProjet__cjRbQ","forumCardSommaire":"_styles-module__forumCardSommaire__3HiKz","forum-card-taille":"_styles-module__forum-card-taille__1eBJ7","forumCardSommaireFixWidth":"_styles-module__forumCardSommaireFixWidth__2uXL-","forum-card-skeleton-fix-width":"_styles-module__forum-card-skeleton-fix-width__2V2Qy","avatarSkeleton":"_styles-module__avatarSkeleton__1jx2o","avatarArticleSkeleton":"_styles-module__avatarArticleSkeleton__vRP36","contentSkeleton":"_styles-module__contentSkeleton__3H1kl","contentSkeleton2":"_styles-module__contentSkeleton2__10yh-","contentSkeletonUser":"_styles-module__contentSkeletonUser__zGOQu","contentSkeletonPara":"_styles-module__contentSkeletonPara__186w2","contentSkeletonPara2":"_styles-module__contentSkeletonPara2__3ncCE","cardSommaireDateAjout":"_styles-module__cardSommaireDateAjout__3TZlv","img-sommaire-forum":"_styles-module__img-sommaire-forum__CKiSb","img-sommaire-forum-discussion":"_styles-module__img-sommaire-forum-discussion__1lAQf","titreSommaireForum":"_styles-module__titreSommaireForum__lypzQ","forumSommaireAuteurCard":"_styles-module__forumSommaireAuteurCard__3ovWR","textSommaireForum":"_styles-module__textSommaireForum__R0WUA","sommaireForumUserChat":"_styles-module__sommaireForumUserChat__2fmvg","divNombreCommentaireSommaireForum":"_styles-module__divNombreCommentaireSommaireForum__3VGq1","divSommaireForumUserChat1":"_styles-module__divSommaireForumUserChat1__3AK7B","divSommaireSorumUserChat2":"_styles-module__divSommaireSorumUserChat2__2fhuF","divSommaireForumUserChat3":"_styles-module__divSommaireForumUserChat3__1qa_i","divSommaireForumUserChat4":"_styles-module__divSommaireForumUserChat4__2PTKK","divSommaireForumUserChat5":"_styles-module__divSommaireForumUserChat5__Ms10U","divSommaireForumUserChat2":"_styles-module__divSommaireForumUserChat2__n-NHS","imgSommaireForumUserChat":"_styles-module__imgSommaireForumUserChat__WUnJj","nombreCommentaireSommaireForum":"_styles-module__nombreCommentaireSommaireForum__CZnT8","troisPoints":"_styles-module__troisPoints__1NUMh","sommaireAvatarTitre":"_styles-module__sommaireAvatarTitre__pLURL","imgSommaireForum":"_styles-module__imgSommaireForum__3wJ3U","card-discussion-heure-vu":"_styles-module__card-discussion-heure-vu__3dK_D","card-discussion-heure-commentaire":"_styles-module__card-discussion-heure-commentaire__ha-BC","card-discussion-heure-vu-laurhille":"_styles-module__card-discussion-heure-vu-laurhille__35Bmn","card-discussion-commentaire":"_styles-module__card-discussion-commentaire__17jE_","img-sommaire-forum-discussion2":"_styles-module__img-sommaire-forum-discussion2__3Wu6c","div-separateur":"_styles-module__div-separateur__JqWLR","row-input":"_styles-module__row-input__GLjv2","row-reponse":"_styles-module__row-reponse__x3w6R","row-reponse-ligne-union":"_styles-module__row-reponse-ligne-union__2905Z","row-reponse-ligne-union1":"_styles-module__row-reponse-ligne-union1__2_YyU","forum-discussion-ligne-union":"_styles-module__forum-discussion-ligne-union___ranC","offline-alert-card":"_styles-module__offline-alert-card__wh7If","offline-alert-textual":"_styles-module__offline-alert-textual__3oC-v","redirect-to-login-btn":"_styles-module__redirect-to-login-btn__1ZnBs","card-parent":"_styles-module__card-parent__9AC6h","sommaire-avatar-titre":"_styles-module__sommaire-avatar-titre__39Vol"};

const DatasForum = [{
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
  comments: [{
    id: 1,
    user: {
      prenom: "Sadio",
      nom: "Sanghare",
      avatar: '/mediafiles/avatars/default.png'
    },
    text: "Reponse 1",
    created_at: "6/04/2022",
    reponse_commentaire: [{
      user: "Sadio",
      user_avatar: "image3",
      contenu: "Reponse 3"
    }]
  }, {
    id: 2,
    user: {
      prenom: "Sadio",
      nom: "Sangh",
      avatar: '/mediafiles/avatars/default.png'
    },
    text: "Reponse 2",
    created_at: "6/04/2022",
    reponse_commentaire: [{
      user: "Sadio",
      user_avatar: "image3",
      contenu: "Reponse 3"
    }]
  }],
  user_comments: [{
    id: 1,
    user: {
      prenom: "Sadio",
      nom: "Sanghare",
      avatar: '/mediafiles/avatars/default.png',
      fullname: 'SS'
    }
  }, {
    id: 2,
    user: {
      prenom: "Paul",
      nom: "Gomis",
      avatar: '/mediafiles/avatars/default.png',
      fullname: 'PG'
    }
  }]
}, {
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
  comments: [{
    user: {
      prenom: "Paul",
      nom: "Gomis",
      avatar: '/mediafiles/avatars/default.png'
    },
    text: "Reponse 1",
    created_at: "6/04/2022",
    reponse_commentaire: [{
      user: "Sadio",
      user_avatar: "image3",
      contenu: "Reponse 3"
    }]
  }, {
    user: {
      prenom: "Sadio",
      nom: "Sangh",
      avatar: '/mediafiles/avatars/default.png'
    },
    text: "Reponse 2",
    created_at: "6/04/2022",
    reponse_commentaire: [{
      user: "Sadio",
      user_avatar: "image3",
      contenu: "Reponse 3"
    }]
  }],
  user_comments: [{
    id: 1,
    user: {
      prenom: "Sadio",
      nom: "Sanghare",
      avatar: '/mediafiles/avatars/default.png',
      fullname: 'SS'
    }
  }, {
    id: 2,
    user: {
      prenom: "Paul",
      nom: "Gomis",
      avatar: '/mediafiles/avatars/default.png',
      fullname: 'PG'
    }
  }]
}];

function Sommaire() {
  console.log('data forum', DatasForum);
  return React__default.createElement("div", {
    className: "component-liste-projet"
  }, React__default.createElement("div", {
    className: styles.contentViewStart
  }, React__default.createElement("div", {
    className: styles.bannerListeProjet
  }, React__default.createElement("h3", {
    className: styles.titreBannerListeProjet
  }, "De la discussion, jaillit la lumi\u00E8re")), React__default.createElement("div", {
    className: styles.containerCayore
  }, React__default.createElement("div", {
    className: "row align-items-center",
    style: {
      margin: "3rem 0"
    }
  }, React__default.createElement("div", {
    className: "col-12"
  }, DatasForum.length > 0 ? DatasForum.map(item => {
    var _item$author, _item$author2, _item$author3, _item$author4, _item$author5, _item$author6, _item$author7;

    return React__default.createElement("div", {
      className: styles.forumCardSommaire,
      key: item === null || item === void 0 ? void 0 : item.id
    }, React__default.createElement("div", {
      className: styles.cardSommaireDateAjout
    }, item === null || item === void 0 ? void 0 : item.created_at), React__default.createElement("div", {
      className: styles.sommaireAvatarTitre
    }, React__default.createElement("div", {
      className: ""
    }, React__default.createElement("div", {
      className: "p1"
    }, React__default.createElement("img", {
      src: (item === null || item === void 0 ? void 0 : (_item$author = item.author) === null || _item$author === void 0 ? void 0 : _item$author.avatar) === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${item === null || item === void 0 ? void 0 : (_item$author2 = item.author) === null || _item$author2 === void 0 ? void 0 : _item$author2.fullname}` : `${item === null || item === void 0 ? void 0 : (_item$author3 = item.author) === null || _item$author3 === void 0 ? void 0 : _item$author3.avatar}`,
      alt: "user-avatar",
      className: styles.imgSommaireForum
    }))), React__default.createElement("div", {
      className: ""
    }, React__default.createElement("h3", {
      className: styles.titreSommaireForum
    }, item === null || item === void 0 ? void 0 : item.titre), React__default.createElement("div", {
      className: styles.forumSommaireAuteurCard
    }, React__default.createElement(IoReturnDownBackOutline, {
      className: "mr-1"
    }), "Par", " ", (item === null || item === void 0 ? void 0 : (_item$author4 = item.author) === null || _item$author4 === void 0 ? void 0 : _item$author4.prenom) !== undefined || (item === null || item === void 0 ? void 0 : (_item$author5 = item.author) === null || _item$author5 === void 0 ? void 0 : _item$author5.nom) !== undefined ? (item === null || item === void 0 ? void 0 : (_item$author6 = item.author) === null || _item$author6 === void 0 ? void 0 : _item$author6.prenom) + " " + (item === null || item === void 0 ? void 0 : (_item$author7 = item.author) === null || _item$author7 === void 0 ? void 0 : _item$author7.nom) : "Anonyme"))), React__default.createElement("div", {
      className: "row"
    }, React__default.createElement("div", {
      className: "col-lg-9 pt-3"
    }, React__default.createElement("p", {
      className: styles.textSommaireForum
    }, item === null || item === void 0 ? void 0 : item.contenu)), React__default.createElement("div", {
      className: "col-lg-3"
    }, React__default.createElement("div", {
      className: styles.sommaireForumUserChat
    }, item === null || item === void 0 ? void 0 : item.user_comments.slice(0, 4).map((comment, index) => {
      var _comment$user, _comment$user2, _comment$user3;

      return React__default.createElement("img", {
        src: (comment === null || comment === void 0 ? void 0 : (_comment$user = comment.user) === null || _comment$user === void 0 ? void 0 : _comment$user.avatar) === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${comment === null || comment === void 0 ? void 0 : (_comment$user2 = comment.user) === null || _comment$user2 === void 0 ? void 0 : _comment$user2.fullname}` : `${comment === null || comment === void 0 ? void 0 : (_comment$user3 = comment.user) === null || _comment$user3 === void 0 ? void 0 : _comment$user3.avatar}`,
        key: comment === null || comment === void 0 ? void 0 : comment.id,
        alt: "user-avatar",
        className: `img-sommaire-forum-user-chat divSommaireForumUserChat${index + 1}`
      });
    }), console.log('user comment', item === null || item === void 0 ? void 0 : item.user_comments), React__default.createElement("div", {
      className: styles.divSommaireForumUserChat5
    }, React__default.createElement("div", {
      className: styles.troisPoints
    }))), React__default.createElement("div", {
      className: styles.divNombreCommentaireSommaireForum
    }, React__default.createElement("p", {
      className: styles.nombreCommentaireSommaireForum
    }, React__default.createElement(BsChat, {
      className: "mr-1"
    }), " ", item === null || item === void 0 ? void 0 : item.comments.length, " Commentaires")))));
  }) : React__default.createElement("div", {
    className: "card-contacts-main-content"
  }, React__default.createElement("div", {
    className: "row div-card"
  }, React__default.createElement("div", {
    className: "col-12"
  }, React__default.createElement("h4", {
    className: "admin-contacts-title text-center"
  }, "Pas de sujet de discussion")))))))));
}

const VolkenoForumy = () => {
  return createElement("div", null, createElement(Sommaire, null));
};

export { VolkenoForumy };
//# sourceMappingURL=index.modern.js.map
