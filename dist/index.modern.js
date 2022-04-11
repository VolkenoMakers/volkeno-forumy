import React__default, { useState, createElement } from 'react';
import { useLocation, NavLink, BrowserRouter, Routes, Route } from 'react-router-dom';
import { BiComment } from 'react-icons/bi';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { IoReturnDownBackOutline } from 'react-icons/io5';
import { BsChat } from 'react-icons/bs';

var styles = {"test":"_styles-module__test__3ybTi","contentViewStart":"_styles-module__contentViewStart__vMiGT","navigationLink":"_styles-module__navigationLink__3BNu_","containerCayore":"_styles-module__containerCayore__zRBck","bannerListeProjet":"_styles-module__bannerListeProjet__zERCC","titreBannerListeProjet":"_styles-module__titreBannerListeProjet__cjRbQ","forumCardSommaire":"_styles-module__forumCardSommaire__3HiKz","forum-card-taille":"_styles-module__forum-card-taille__1eBJ7","forumCardSommaireFixWidth":"_styles-module__forumCardSommaireFixWidth__2uXL-","forum-card-skeleton-fix-width":"_styles-module__forum-card-skeleton-fix-width__2V2Qy","avatarSkeleton":"_styles-module__avatarSkeleton__1jx2o","avatarArticleSkeleton":"_styles-module__avatarArticleSkeleton__vRP36","contentSkeleton":"_styles-module__contentSkeleton__3H1kl","contentSkeleton2":"_styles-module__contentSkeleton2__10yh-","contentSkeletonUser":"_styles-module__contentSkeletonUser__zGOQu","contentSkeletonPara":"_styles-module__contentSkeletonPara__186w2","contentSkeletonPara2":"_styles-module__contentSkeletonPara2__3ncCE","cardSommaireDateAjout":"_styles-module__cardSommaireDateAjout__3TZlv","imgSommaireForum":"_styles-module__imgSommaireForum__3wJ3U","imgSommaireForumDiscussion":"_styles-module__imgSommaireForumDiscussion__10Qyd","titreSommaireForum":"_styles-module__titreSommaireForum__lypzQ","forumSommaireAuteurCard":"_styles-module__forumSommaireAuteurCard__3ovWR","textSommaireForum":"_styles-module__textSommaireForum__R0WUA","sommaireForumUserChat":"_styles-module__sommaireForumUserChat__2fmvg","divNombreCommentaireSommaireForum":"_styles-module__divNombreCommentaireSommaireForum__3VGq1","divSommaireForumUserChat1":"_styles-module__divSommaireForumUserChat1__3AK7B","divSommaireSorumUserChat2":"_styles-module__divSommaireSorumUserChat2__2fhuF","divSommaireForumUserChat3":"_styles-module__divSommaireForumUserChat3__1qa_i","divSommaireForumUserChat4":"_styles-module__divSommaireForumUserChat4__2PTKK","divSommaireForumUserChat5":"_styles-module__divSommaireForumUserChat5__Ms10U","divSommaireForumUserChat2":"_styles-module__divSommaireForumUserChat2__n-NHS","imgSommaireForumUserChat":"_styles-module__imgSommaireForumUserChat__WUnJj","nombreCommentaireSommaireForum":"_styles-module__nombreCommentaireSommaireForum__CZnT8","troisPoints":"_styles-module__troisPoints__1NUMh","sommaireAvatarTitre":"_styles-module__sommaireAvatarTitre__pLURL","cardDiscussionHeureVu":"_styles-module__cardDiscussionHeureVu__2l2Yb","cardDiscussionHeureCommentaire":"_styles-module__cardDiscussionHeureCommentaire__1W3UV","cardDiscussionHeureVuLaurhille":"_styles-module__cardDiscussionHeureVuLaurhille__prVaz","cardDiscussionCommentaire":"_styles-module__cardDiscussionCommentaire__8e0yO","imgSommaireForumDiscussion2":"_styles-module__imgSommaireForumDiscussion2__1nB31","divSeparateur":"_styles-module__divSeparateur__3S7lS","row-input":"_styles-module__row-input__GLjv2","rowReponse":"_styles-module__rowReponse__15pjE","row-reponse-ligne-union":"_styles-module__row-reponse-ligne-union__2905Z","row-reponse-ligne-union1":"_styles-module__row-reponse-ligne-union1__2_YyU","forum-discussion-ligne-union":"_styles-module__forum-discussion-ligne-union___ranC","offline-alert-card":"_styles-module__offline-alert-card__wh7If","offline-alert-textual":"_styles-module__offline-alert-textual__3oC-v","redirect-to-login-btn":"_styles-module__redirect-to-login-btn__1ZnBs","cardParent":"_styles-module__cardParent__nRyJj","formAddCguButtonAjouter":"_styles-module__formAddCguButtonAjouter__2H-xZ","img-sommaire-forum":"_styles-module__img-sommaire-forum__CKiSb"};

function AjoutComments({
  onSubmit
}) {
  const [comment, setComment] = useState('');

  const submitReponse = e => {
    e.preventDefault();

    if (comment.trim().length > 0) {
      onSubmit(comment);
    }
  };

  return React__default.createElement("div", null, React__default.createElement("div", {
    className: styles.forumCardSommaire
  }, React__default.createElement("div", {
    className: 'row'
  }, React__default.createElement("div", {
    className: 'col-12 pt-3 mb-md-4 mb-5'
  }, React__default.createElement("textarea", {
    className: 'form-control',
    placeholder: 'R\u00E9pondre',
    name: 'text',
    value: comment,
    onChange: e => {
      setComment(e.target.value);
    }
  })))), React__default.createElement("button", {
    className: styles.formAddCguButtonAjouter,
    onClick: submitReponse
  }, "Ajouter"));
}

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
      avatar: '/mediafiles/avatars/default.png',
      fullname: "SS"
    },
    text: "Comment 1",
    created_at: "6/04/2022",
    reponse_commentaire: [{
      user: {
        prenom: "Ndeye",
        nom: "Faye",
        user_avatar: '/mediafiles/avatars/default.png',
        fullname: "NF"
      },
      contenu: "Reponse 7 deus"
    }]
  }, {
    id: 2,
    user: {
      prenom: "Amadou",
      nom: "Sall",
      avatar: '/mediafiles/avatars/default.png',
      fullname: "AS"
    },
    text: "Reponse 2",
    created_at: "6/04/2022",
    reponse_commentaire: [{
      user: {
        prenom: "Fatou",
        nom: "Samb",
        user_avatar: '/mediafiles/avatars/default.png',
        fullname: "FS"
      },
      contenu: "Reponse 10"
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
    id: 1,
    user: {
      prenom: "Paul",
      nom: "Gomis",
      avatar: '/mediafiles/avatars/default.png',
      fullname: "PG"
    },
    text: "Reponse 1",
    created_at: "6/04/2022",
    reponse_commentaire: [{
      user: {
        prenom: "Alpha",
        nom: "Diallo",
        user_avatar: "image5",
        fullname: "AD"
      },
      contenu: "Reponse 3"
    }]
  }, {
    id: 2,
    user: {
      prenom: "Sadio",
      nom: "Sangh",
      avatar: '/mediafiles/avatars/default.png',
      fullname: "SS"
    },
    text: "Reponse 2",
    created_at: "6/04/2022",
    reponse_commentaire: [{
      user: {
        prenom: "Cheikh",
        nom: "Dieng",
        user_avatar: '/mediafiles/avatars/default.png',
        fullname: "FS"
      },
      contenu: "Reponse 6"
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
const DatasUserSession = [{
  id: 1,
  user: {
    prenom: "Me",
    nom: "",
    fullname: "Me",
    avatar: '/mediafiles/avatars/default.png'
  }
}];

const FrontCommentItem = ({
  donnees,
  onAddResponseComment
}) => {
  return React__default.createElement("div", {
    className: styles.cardParent
  }, donnees === null || donnees === void 0 ? void 0 : donnees.comments.map(donnee => {
    var _donnee$user, _donnee$user2, _donnee$user3, _donnee$user4, _donnee$user5, _donnee$reponse_comme, _donnee$reponse_comme2, _DatasUserSession$, _DatasUserSession$$us, _DatasUserSession$2, _DatasUserSession$2$u, _DatasUserSession$3, _DatasUserSession$3$u, _DatasUserSession$4, _DatasUserSession$4$u, _DatasUserSession$5, _DatasUserSession$5$u, _DatasUserSession$6, _DatasUserSession$6$u, _DatasUserSession$7, _DatasUserSession$7$u;

    return React__default.createElement("div", {
      key: donnee.id
    }, React__default.createElement("div", {
      className: "row",
      key: donnee.id
    }, React__default.createElement("div", {
      className: "col-2"
    }, React__default.createElement("div", {
      className: styles.sommaireAvatarTitre
    }, React__default.createElement("div", {
      className: ""
    }, React__default.createElement("div", {
      className: "p1"
    }, React__default.createElement("img", {
      src: (donnee === null || donnee === void 0 ? void 0 : (_donnee$user = donnee.user) === null || _donnee$user === void 0 ? void 0 : _donnee$user.avatar) === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${donnee === null || donnee === void 0 ? void 0 : (_donnee$user2 = donnee.user) === null || _donnee$user2 === void 0 ? void 0 : _donnee$user2.fullname}` : `${donnee === null || donnee === void 0 ? void 0 : (_donnee$user3 = donnee.user) === null || _donnee$user3 === void 0 ? void 0 : _donnee$user3.avatar}`,
      alt: "user-avatar",
      className: styles.imgSommaireForumDiscussion2
    }))), React__default.createElement("div", {
      className: " d-flex align-item-md-center"
    }, React__default.createElement("div", {
      className: styles.forumSommaireAuteurCard
    }, (donnee === null || donnee === void 0 ? void 0 : (_donnee$user4 = donnee.user) === null || _donnee$user4 === void 0 ? void 0 : _donnee$user4.prenom) + " " + (donnee === null || donnee === void 0 ? void 0 : (_donnee$user5 = donnee.user) === null || _donnee$user5 === void 0 ? void 0 : _donnee$user5.nom))))), React__default.createElement("div", {
      className: "col-10"
    }, React__default.createElement("div", {
      className: styles.forumCardSommaire
    }, React__default.createElement("div", {
      className: "row"
    }, React__default.createElement("div", {
      className: "col-12 pt-3 mb-md-4 mb-5"
    }, React__default.createElement("p", {
      className: styles.textSommaireForum
    }, donnee === null || donnee === void 0 ? void 0 : donnee.text, " "))), React__default.createElement("div", {
      className: styles.cardDiscussionHeureCommentaire
    }, React__default.createElement("a", {
      className: styles.cardDiscussionCommentaire,
      "data-toggle": "collapse",
      href: `#collapseExample${donnee === null || donnee === void 0 ? void 0 : donnee.id}`,
      role: "button",
      "aria-expanded": "false",
      "aria-controls": `collapseExample${donnee === null || donnee === void 0 ? void 0 : donnee.id}`
    }, React__default.createElement(BiComment, {
      className: "mr-1"
    }), donnee === null || donnee === void 0 ? void 0 : (_donnee$reponse_comme = donnee.reponse_commentaire) === null || _donnee$reponse_comme === void 0 ? void 0 : _donnee$reponse_comme.length, " ", "commentaires"), React__default.createElement("span", null, React__default.createElement(AiOutlineClockCircle, {
      className: "mr-1"
    }), " ", donnee === null || donnee === void 0 ? void 0 : donnee.created_at))))), React__default.createElement("div", {
      className: "collapse",
      id: `collapseExample${donnee.id}`
    }, (_donnee$reponse_comme2 = donnee.reponse_commentaire) === null || _donnee$reponse_comme2 === void 0 ? void 0 : _donnee$reponse_comme2.map(item => {
      var _item$user, _item$user2, _item$user3, _item$user4, _item$user5;

      return React__default.createElement("div", {
        key: item.id,
        className: 'row'
      }, React__default.createElement("div", {
        className: "col-3"
      }, React__default.createElement("div", {
        className: 'row'
      }, React__default.createElement("div", {
        className: "col-md-6"
      }, React__default.createElement("div", {
        className: "p1 d-flex justify-content-end"
      }, React__default.createElement("img", {
        src: (item === null || item === void 0 ? void 0 : (_item$user = item.user) === null || _item$user === void 0 ? void 0 : _item$user.user_avatar) === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${item === null || item === void 0 ? void 0 : (_item$user2 = item.user) === null || _item$user2 === void 0 ? void 0 : _item$user2.fullname}` : `${item === null || item === void 0 ? void 0 : (_item$user3 = item.user) === null || _item$user3 === void 0 ? void 0 : _item$user3.user_avatar}`,
        alt: "user-avatar",
        className: styles.imgSommaireForumDiscussion2
      }))), React__default.createElement("div", {
        className: "col-md-6 d-flex align-item-md-center"
      }, React__default.createElement("div", {
        className: styles.forumSommaireAuteurCard
      }, (item === null || item === void 0 ? void 0 : (_item$user4 = item.user) === null || _item$user4 === void 0 ? void 0 : _item$user4.prenom) + " " + (item === null || item === void 0 ? void 0 : (_item$user5 = item.user) === null || _item$user5 === void 0 ? void 0 : _item$user5.nom))))), React__default.createElement("div", {
        className: "col-9"
      }, React__default.createElement("div", {
        className: styles.forumCardSommaire
      }, React__default.createElement("div", {
        className: "row"
      }, React__default.createElement("div", {
        className: "col-12 pt-3 mb-md-4 mb-5"
      }, React__default.createElement("p", {
        className: styles.textSommaireForum
      }, item === null || item === void 0 ? void 0 : item.contenu, " "))))));
    }), React__default.createElement("div", {
      className: 'row'
    }, React__default.createElement("div", {
      className: "col-3"
    }, React__default.createElement("div", {
      className: "row"
    }, React__default.createElement("div", {
      className: "col-md-6"
    }, React__default.createElement("div", {
      className: "p1 d-flex justify-content-end"
    }, React__default.createElement("img", {
      src: (DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$ = DatasUserSession[0]) === null || _DatasUserSession$ === void 0 ? void 0 : (_DatasUserSession$$us = _DatasUserSession$.user) === null || _DatasUserSession$$us === void 0 ? void 0 : _DatasUserSession$$us.avatar) === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$2 = DatasUserSession[0]) === null || _DatasUserSession$2 === void 0 ? void 0 : (_DatasUserSession$2$u = _DatasUserSession$2.user) === null || _DatasUserSession$2$u === void 0 ? void 0 : _DatasUserSession$2$u.fullname}` : `${DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$3 = DatasUserSession[0]) === null || _DatasUserSession$3 === void 0 ? void 0 : (_DatasUserSession$3$u = _DatasUserSession$3.user) === null || _DatasUserSession$3$u === void 0 ? void 0 : _DatasUserSession$3$u.avatar}`,
      alt: "user-avatar",
      className: styles.imgSommaireForumDiscussion2
    }))), React__default.createElement("div", {
      className: "col-md-6 d-flex align-item-md-center"
    }, React__default.createElement("div", {
      className: styles.forumSommaireAuteurCard
    }, (DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$4 = DatasUserSession[0]) === null || _DatasUserSession$4 === void 0 ? void 0 : (_DatasUserSession$4$u = _DatasUserSession$4.user) === null || _DatasUserSession$4$u === void 0 ? void 0 : _DatasUserSession$4$u.prenom) !== undefined || (DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$5 = DatasUserSession[0]) === null || _DatasUserSession$5 === void 0 ? void 0 : (_DatasUserSession$5$u = _DatasUserSession$5.user) === null || _DatasUserSession$5$u === void 0 ? void 0 : _DatasUserSession$5$u.nom) !== undefined ? (DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$6 = DatasUserSession[0]) === null || _DatasUserSession$6 === void 0 ? void 0 : (_DatasUserSession$6$u = _DatasUserSession$6.user) === null || _DatasUserSession$6$u === void 0 ? void 0 : _DatasUserSession$6$u.prenom) + " " + (DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$7 = DatasUserSession[0]) === null || _DatasUserSession$7 === void 0 ? void 0 : (_DatasUserSession$7$u = _DatasUserSession$7.user) === null || _DatasUserSession$7$u === void 0 ? void 0 : _DatasUserSession$7$u.nom) : "Anonyme")))), React__default.createElement("div", {
      className: "col-9"
    }, React__default.createElement(AjoutComments, {
      onSubmit: comment => {
        onAddResponseComment(donnees, donnee, comment);
      }
    })))));
  }));
};

const Discussion = ({
  onAddComment,
  onAddResponseComment
}) => {
  var _donnees$author, _donnees$author2, _donnees$author3, _donnees$author4, _donnees$author5, _donnees$author6, _donnees$author7, _DatasUserSession$, _DatasUserSession$$us, _DatasUserSession$2, _DatasUserSession$2$u, _DatasUserSession$3, _DatasUserSession$3$u, _DatasUserSession$4, _DatasUserSession$4$u, _DatasUserSession$5, _DatasUserSession$5$u, _DatasUserSession$6, _DatasUserSession$6$u, _DatasUserSession$7, _DatasUserSession$7$u;

  let location = useLocation();
  const donnees = location === null || location === void 0 ? void 0 : location.state;
  return React__default.createElement("div", {
    className: "component-liste-projet"
  }, React__default.createElement("div", {
    className: styles.contentViewStart
  }, React__default.createElement("div", {
    className: styles.containerCayore
  }, React__default.createElement("div", {
    className: "row align-items-center",
    style: {
      margin: "3rem 0"
    }
  }, React__default.createElement("div", {
    className: styles.forumCardSommaire
  }, React__default.createElement("div", {
    className: styles.cardDiscussionHeureVu
  }, React__default.createElement("span", null, React__default.createElement(AiOutlineClockCircle, {
    className: "mr-1"
  }), " ", donnees === null || donnees === void 0 ? void 0 : donnees.created_at)), React__default.createElement("div", {
    className: styles.sommaireAvatarTitre
  }, React__default.createElement("div", {
    className: ""
  }, React__default.createElement("div", {
    className: "p1"
  }, React__default.createElement("img", {
    src: (donnees === null || donnees === void 0 ? void 0 : (_donnees$author = donnees.author) === null || _donnees$author === void 0 ? void 0 : _donnees$author.avatar) === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${donnees === null || donnees === void 0 ? void 0 : (_donnees$author2 = donnees.author) === null || _donnees$author2 === void 0 ? void 0 : _donnees$author2.fullname}` : `${donnees === null || donnees === void 0 ? void 0 : (_donnees$author3 = donnees.author) === null || _donnees$author3 === void 0 ? void 0 : _donnees$author3.avatar}`,
    alt: "user-avatar",
    className: styles.imgSommaireForumDiscussion
  }))), React__default.createElement("div", {
    className: ""
  }, React__default.createElement("h3", {
    className: styles.titreSommaireForum
  }, donnees === null || donnees === void 0 ? void 0 : donnees.titre), React__default.createElement("div", {
    className: styles.forumSommairAauteurCard
  }, React__default.createElement(IoReturnDownBackOutline, {
    className: "mr-1"
  }), " ", "Par", " ", (donnees === null || donnees === void 0 ? void 0 : (_donnees$author4 = donnees.author) === null || _donnees$author4 === void 0 ? void 0 : _donnees$author4.prenom) !== undefined || (donnees === null || donnees === void 0 ? void 0 : (_donnees$author5 = donnees.author) === null || _donnees$author5 === void 0 ? void 0 : _donnees$author5.nom) !== undefined ? (donnees === null || donnees === void 0 ? void 0 : (_donnees$author6 = donnees.author) === null || _donnees$author6 === void 0 ? void 0 : _donnees$author6.prenom) + " " + (donnees === null || donnees === void 0 ? void 0 : (_donnees$author7 = donnees.author) === null || _donnees$author7 === void 0 ? void 0 : _donnees$author7.nom) : "Anonyme"))), React__default.createElement("div", {
    className: "row"
  }, React__default.createElement("div", {
    className: "col-12 pt-3"
  }, React__default.createElement("p", {
    className: styles.textSommaireForum
  }, donnees.contenu)))), React__default.createElement(FrontCommentItem, {
    donnees: donnees,
    onAddResponseComment: onAddResponseComment
  }), React__default.createElement("span", {
    className: styles.divSeparateur
  }), React__default.createElement("div", {
    className: styles.rowReponse
  }, React__default.createElement("div", {
    className: 'row'
  }, React__default.createElement("div", {
    className: "col-2"
  }, React__default.createElement("div", {
    className: styles.sommaireAvatarTitre
  }, React__default.createElement("div", {
    className: ""
  }, React__default.createElement("div", {
    className: "p1"
  }, React__default.createElement("img", {
    src: (DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$ = DatasUserSession[0]) === null || _DatasUserSession$ === void 0 ? void 0 : (_DatasUserSession$$us = _DatasUserSession$.user) === null || _DatasUserSession$$us === void 0 ? void 0 : _DatasUserSession$$us.avatar) === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$2 = DatasUserSession[0]) === null || _DatasUserSession$2 === void 0 ? void 0 : (_DatasUserSession$2$u = _DatasUserSession$2.user) === null || _DatasUserSession$2$u === void 0 ? void 0 : _DatasUserSession$2$u.fullname}` : `${DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$3 = DatasUserSession[0]) === null || _DatasUserSession$3 === void 0 ? void 0 : (_DatasUserSession$3$u = _DatasUserSession$3.user) === null || _DatasUserSession$3$u === void 0 ? void 0 : _DatasUserSession$3$u.avatar}`,
    alt: "user-avatar",
    className: styles.imgSommaireForumDiscussion2
  }))), React__default.createElement("div", {
    className: " d-flex align-item-md-center"
  }, React__default.createElement("div", {
    className: styles.forumSommaireAuteurCard
  }, (DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$4 = DatasUserSession[0]) === null || _DatasUserSession$4 === void 0 ? void 0 : (_DatasUserSession$4$u = _DatasUserSession$4.user) === null || _DatasUserSession$4$u === void 0 ? void 0 : _DatasUserSession$4$u.prenom) !== undefined || (DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$5 = DatasUserSession[0]) === null || _DatasUserSession$5 === void 0 ? void 0 : (_DatasUserSession$5$u = _DatasUserSession$5.user) === null || _DatasUserSession$5$u === void 0 ? void 0 : _DatasUserSession$5$u.nom) !== undefined ? (DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$6 = DatasUserSession[0]) === null || _DatasUserSession$6 === void 0 ? void 0 : (_DatasUserSession$6$u = _DatasUserSession$6.user) === null || _DatasUserSession$6$u === void 0 ? void 0 : _DatasUserSession$6$u.prenom) + " " + (DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$7 = DatasUserSession[0]) === null || _DatasUserSession$7 === void 0 ? void 0 : (_DatasUserSession$7$u = _DatasUserSession$7.user) === null || _DatasUserSession$7$u === void 0 ? void 0 : _DatasUserSession$7$u.nom) : "Anonyme")))), React__default.createElement("div", {
    className: "col-10"
  }, React__default.createElement(AjoutComments, {
    onSubmit: comment => {
      onAddComment(donnees, comment);
    }
  }))))))));
};

const SommaireItem = () => {
  return React__default.createElement("div", null, DatasForum.length > 0 ? DatasForum.map(item => {
    var _item$author, _item$author2, _item$author3, _item$author4, _item$author5, _item$author6, _item$author7;

    return React__default.createElement(NavLink, {
      className: styles.navigationLink,
      to: {
        pathname: `/forum-discussion/${item.id}`
      },
      state: item,
      key: item.id
    }, React__default.createElement("div", {
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
    }, item === null || item === void 0 ? void 0 : item.user_comments.slice(0, 4).map(comment => {
      var _comment$user, _comment$user2, _comment$user3;

      return React__default.createElement("img", {
        src: (comment === null || comment === void 0 ? void 0 : (_comment$user = comment.user) === null || _comment$user === void 0 ? void 0 : _comment$user.avatar) === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${comment === null || comment === void 0 ? void 0 : (_comment$user2 = comment.user) === null || _comment$user2 === void 0 ? void 0 : _comment$user2.fullname}` : `${comment === null || comment === void 0 ? void 0 : (_comment$user3 = comment.user) === null || _comment$user3 === void 0 ? void 0 : _comment$user3.avatar}`,
        key: comment === null || comment === void 0 ? void 0 : comment.id,
        alt: "user-avatar",
        className: styles.divSommaireForumUserChat2
      });
    }), React__default.createElement("div", {
      className: styles.divSommaireForumUserChat5
    }, React__default.createElement("div", {
      className: styles.troisPoints
    }, `
                                    ${(item === null || item === void 0 ? void 0 : item.user_comments.length) > 4 ? (item === null || item === void 0 ? void 0 : item.user_comments.length) - 4 + "+" : "..."}
                                `))), React__default.createElement("div", {
      className: styles.divNombreCommentaireSommaireForum
    }, React__default.createElement("p", {
      className: styles.nombreCommentaireSommaireForum
    }, React__default.createElement(BsChat, {
      className: "mr-1"
    }), " ", item === null || item === void 0 ? void 0 : item.comments.length, " Commentaires"))))));
  }) : React__default.createElement("div", {
    className: "card-contacts-main-content"
  }, React__default.createElement("div", {
    className: "row div-card"
  }, React__default.createElement("div", {
    className: "col-12"
  }, React__default.createElement("h4", {
    className: "admin-contacts-title text-center"
  }, "Pas de sujet de discussion")))));
};

const Sommaire = () => {
  return React__default.createElement("div", {
    className: "component-liste-projet"
  }, React__default.createElement("div", {
    className: styles.contentViewStart
  }, React__default.createElement("div", {
    className: styles.containerCayore
  }, React__default.createElement("div", {
    className: "row align-items-center",
    style: {
      margin: "3rem 0"
    }
  }, React__default.createElement("div", {
    className: "col-12"
  }, React__default.createElement(SommaireItem, null))))));
};

const VolkenoForumy = () => {
  return createElement(BrowserRouter, null, createElement("div", {
    className: "router-container"
  }, createElement(Routes, null, createElement(Route, {
    path: "/",
    element: createElement(Sommaire, {
      titre: '',
      Contenu: '',
      id: 0,
      created_at: '',
      prenom: '',
      nom: '',
      avatar: '',
      fullname: '',
      text: '',
      item: [],
      state: [],
      donnees: []
    })
  }), createElement(Route, {
    path: "/forum-discussion/:id",
    element: createElement(Discussion, {
      onAddComment: (subject, commentText) => {
        console.log(subject, commentText);
      },
      onAddResponseComment: (subject, comment, commentText) => {
        console.log(subject, comment, commentText);
      }
    })
  }))));
};

export { VolkenoForumy };
//# sourceMappingURL=index.modern.js.map
