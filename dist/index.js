function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactRouterDom = require('react-router-dom');
var bi = require('react-icons/bi');
var ai = require('react-icons/ai');
var io5 = require('react-icons/io5');
var bs = require('react-icons/bs');

var styles = {"test":"_styles-module__test__3ybTi","contentViewStart":"_styles-module__contentViewStart__vMiGT","navigationLink":"_styles-module__navigationLink__3BNu_","containerCayore":"_styles-module__containerCayore__zRBck","bannerListeProjet":"_styles-module__bannerListeProjet__zERCC","titreBannerListeProjet":"_styles-module__titreBannerListeProjet__cjRbQ","forumCardSommaire":"_styles-module__forumCardSommaire__3HiKz","forum-card-taille":"_styles-module__forum-card-taille__1eBJ7","forumCardSommaireFixWidth":"_styles-module__forumCardSommaireFixWidth__2uXL-","forum-card-skeleton-fix-width":"_styles-module__forum-card-skeleton-fix-width__2V2Qy","avatarSkeleton":"_styles-module__avatarSkeleton__1jx2o","avatarArticleSkeleton":"_styles-module__avatarArticleSkeleton__vRP36","contentSkeleton":"_styles-module__contentSkeleton__3H1kl","contentSkeleton2":"_styles-module__contentSkeleton2__10yh-","contentSkeletonUser":"_styles-module__contentSkeletonUser__zGOQu","contentSkeletonPara":"_styles-module__contentSkeletonPara__186w2","contentSkeletonPara2":"_styles-module__contentSkeletonPara2__3ncCE","cardSommaireDateAjout":"_styles-module__cardSommaireDateAjout__3TZlv","imgSommaireForum":"_styles-module__imgSommaireForum__3wJ3U","imgSommaireForumDiscussion":"_styles-module__imgSommaireForumDiscussion__10Qyd","titreSommaireForum":"_styles-module__titreSommaireForum__lypzQ","forumSommaireAuteurCard":"_styles-module__forumSommaireAuteurCard__3ovWR","textSommaireForum":"_styles-module__textSommaireForum__R0WUA","sommaireForumUserChat":"_styles-module__sommaireForumUserChat__2fmvg","divNombreCommentaireSommaireForum":"_styles-module__divNombreCommentaireSommaireForum__3VGq1","divSommaireForumUserChat1":"_styles-module__divSommaireForumUserChat1__3AK7B","divSommaireSorumUserChat2":"_styles-module__divSommaireSorumUserChat2__2fhuF","divSommaireForumUserChat3":"_styles-module__divSommaireForumUserChat3__1qa_i","divSommaireForumUserChat4":"_styles-module__divSommaireForumUserChat4__2PTKK","divSommaireForumUserChat5":"_styles-module__divSommaireForumUserChat5__Ms10U","divSommaireForumUserChat2":"_styles-module__divSommaireForumUserChat2__n-NHS","imgSommaireForumUserChat":"_styles-module__imgSommaireForumUserChat__WUnJj","nombreCommentaireSommaireForum":"_styles-module__nombreCommentaireSommaireForum__CZnT8","troisPoints":"_styles-module__troisPoints__1NUMh","sommaireAvatarTitre":"_styles-module__sommaireAvatarTitre__pLURL","cardDiscussionHeureVu":"_styles-module__cardDiscussionHeureVu__2l2Yb","cardDiscussionHeureCommentaire":"_styles-module__cardDiscussionHeureCommentaire__1W3UV","cardDiscussionHeureVuLaurhille":"_styles-module__cardDiscussionHeureVuLaurhille__prVaz","cardDiscussionCommentaire":"_styles-module__cardDiscussionCommentaire__8e0yO","imgSommaireForumDiscussion2":"_styles-module__imgSommaireForumDiscussion2__1nB31","divSeparateur":"_styles-module__divSeparateur__3S7lS","row-input":"_styles-module__row-input__GLjv2","rowReponse":"_styles-module__rowReponse__15pjE","row-reponse-ligne-union":"_styles-module__row-reponse-ligne-union__2905Z","row-reponse-ligne-union1":"_styles-module__row-reponse-ligne-union1__2_YyU","forum-discussion-ligne-union":"_styles-module__forum-discussion-ligne-union___ranC","offline-alert-card":"_styles-module__offline-alert-card__wh7If","offline-alert-textual":"_styles-module__offline-alert-textual__3oC-v","redirect-to-login-btn":"_styles-module__redirect-to-login-btn__1ZnBs","cardParent":"_styles-module__cardParent__nRyJj","formAddCguButtonAjouter":"_styles-module__formAddCguButtonAjouter__2H-xZ","img-sommaire-forum":"_styles-module__img-sommaire-forum__CKiSb"};

function AjoutComments() {
  return React__default.createElement("form", null, React__default.createElement("div", {
    className: styles.forumCardSommaire
  }, React__default.createElement("div", {
    className: 'row'
  }, React__default.createElement("div", {
    className: 'col-12 pt-3 mb-md-4 mb-5'
  }, React__default.createElement("textarea", {
    className: 'form-control',
    placeholder: "R\xE9pondre",
    name: 'text'
  })))), React__default.createElement("button", {
    className: styles.formAddCguButtonAjouter,
    type: 'submit'
  }, "Ajouter"));
}

function AjoutReponseComment() {
  return React__default.createElement("form", null, React__default.createElement("div", {
    className: styles.forumCardSommaire
  }, React__default.createElement("div", {
    className: "row"
  }, React__default.createElement("div", {
    className: "col-12 pt-3 mb-md-4 mb-5"
  }, React__default.createElement("textarea", {
    className: "form-control",
    placeholder: "R\xE9pondre",
    name: "text"
  })))), React__default.createElement("button", {
    className: styles.formAddCguButtonAjouter,
    type: "submit"
  }, "Ajouter"));
}

var DatasForum = [{
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
var DatasUserSession = [{
  id: 1,
  user: {
    prenom: "Me",
    nom: "",
    fullname: "Me",
    avatar: '/mediafiles/avatars/default.png'
  }
}];

var FrontCommentItem = function FrontCommentItem() {
  var _DatasForum$0$comment, _DatasForum$0$comment2, _DatasForum$0$comment3, _DatasForum$0$comment4, _DatasForum$0$comment5, _DatasForum$0$comment6, _DatasForum$0$comment7, _DatasForum$0$comment8, _DatasForum$0$comment9, _DatasForum$0$comment10, _DatasForum$0$comment11, _DatasForum$0$comment12, _DatasForum$0$comment13, _DatasForum$0$comment14, _DatasForum$0$comment15, _DatasForum$0$comment16, _DatasForum$0$comment17, _DatasForum$0$comment18, _DatasForum$0$comment19, _DatasForum$0$comment20, _DatasForum$0$comment21, _DatasForum$0$comment22, _DatasForum$0$comment23, _DatasForum$0$comment24, _DatasForum$0$comment25, _DatasForum$0$comment26, _DatasForum$0$comment27, _DatasForum$0$comment28, _DatasForum$0$comment29, _DatasForum$0$comment30, _DatasForum$0$comment31, _DatasForum$0$comment32, _DatasForum$0$comment33, _DatasForum$0$comment34, _DatasForum$0$comment35, _DatasForum$0$comment36, _DatasForum$0$comment37, _DatasForum$0$comment38, _DatasForum$0$comment39, _DatasForum$0$comment40, _DatasForum$0$comment41, _DatasForum$0$comment42, _DatasForum$0$comment43, _DatasForum$0$comment44, _DatasForum$0$comment45, _DatasForum$0$comment46, _DatasUserSession$, _DatasUserSession$$us, _DatasUserSession$2, _DatasUserSession$2$u, _DatasUserSession$3, _DatasUserSession$3$u, _DatasUserSession$4, _DatasUserSession$4$u, _DatasUserSession$5, _DatasUserSession$5$u, _DatasUserSession$6, _DatasUserSession$6$u, _DatasUserSession$7, _DatasUserSession$7$u;

  return React__default.createElement("div", {
    className: styles.cardParent
  }, React__default.createElement("div", {
    className: "row"
  }, React__default.createElement("div", {
    className: "col-2"
  }, React__default.createElement("div", {
    className: styles.sommaireAvatarTitre
  }, React__default.createElement("div", {
    className: ""
  }, React__default.createElement("div", {
    className: "p1"
  }, React__default.createElement("img", {
    src: (DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$0$comment = DatasForum[0].comments) === null || _DatasForum$0$comment === void 0 ? void 0 : (_DatasForum$0$comment2 = _DatasForum$0$comment[0].user) === null || _DatasForum$0$comment2 === void 0 ? void 0 : _DatasForum$0$comment2.avatar) === '/mediafiles/avatars/default.png' ? "https://ui-avatars.com/api/?name=" + (DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$0$comment3 = DatasForum[0].comments) === null || _DatasForum$0$comment3 === void 0 ? void 0 : (_DatasForum$0$comment4 = _DatasForum$0$comment3[0].user) === null || _DatasForum$0$comment4 === void 0 ? void 0 : _DatasForum$0$comment4.fullname) : "" + (DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$0$comment5 = DatasForum[0].comments) === null || _DatasForum$0$comment5 === void 0 ? void 0 : (_DatasForum$0$comment6 = _DatasForum$0$comment5[0].user) === null || _DatasForum$0$comment6 === void 0 ? void 0 : _DatasForum$0$comment6.avatar),
    alt: "user-avatar",
    className: styles.imgSommaireForumDiscussion2
  }))), React__default.createElement("div", {
    className: " d-flex align-item-md-center"
  }, React__default.createElement("div", {
    className: styles.forumSommaireAuteurCard
  }, (DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$0$comment7 = DatasForum[0].comments) === null || _DatasForum$0$comment7 === void 0 ? void 0 : (_DatasForum$0$comment8 = _DatasForum$0$comment7[0].user) === null || _DatasForum$0$comment8 === void 0 ? void 0 : _DatasForum$0$comment8.prenom) + " " + (DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$0$comment9 = DatasForum[0].comments) === null || _DatasForum$0$comment9 === void 0 ? void 0 : (_DatasForum$0$comment10 = _DatasForum$0$comment9[0].user) === null || _DatasForum$0$comment10 === void 0 ? void 0 : _DatasForum$0$comment10.nom))))), React__default.createElement("div", {
    className: "col-10"
  }, React__default.createElement("div", {
    className: styles.forumCardSommaire
  }, React__default.createElement("div", {
    className: "row"
  }, React__default.createElement("div", {
    className: "col-12 pt-3 mb-md-4 mb-5"
  }, React__default.createElement("p", {
    className: styles.textSommaireForum
  }, DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$0$comment11 = DatasForum[0].comments) === null || _DatasForum$0$comment11 === void 0 ? void 0 : (_DatasForum$0$comment12 = _DatasForum$0$comment11[0]) === null || _DatasForum$0$comment12 === void 0 ? void 0 : _DatasForum$0$comment12.text, " "))), React__default.createElement("div", {
    className: styles.cardDiscussionHeureCommentaire
  }, React__default.createElement("a", {
    className: styles.cardDiscussionCommentaire,
    "data-toggle": "collapse",
    href: "#collapseExample" + (DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$0$comment13 = DatasForum[0].comments) === null || _DatasForum$0$comment13 === void 0 ? void 0 : (_DatasForum$0$comment14 = _DatasForum$0$comment13[0]) === null || _DatasForum$0$comment14 === void 0 ? void 0 : _DatasForum$0$comment14.id),
    role: "button",
    "aria-expanded": "false",
    "aria-controls": "collapseExample" + (DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$0$comment15 = DatasForum[0].comments) === null || _DatasForum$0$comment15 === void 0 ? void 0 : (_DatasForum$0$comment16 = _DatasForum$0$comment15[0]) === null || _DatasForum$0$comment16 === void 0 ? void 0 : _DatasForum$0$comment16.id)
  }, React__default.createElement(bi.BiComment, {
    className: "mr-1"
  }), DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$0$comment17 = DatasForum[0].comments) === null || _DatasForum$0$comment17 === void 0 ? void 0 : (_DatasForum$0$comment18 = _DatasForum$0$comment17[0]) === null || _DatasForum$0$comment18 === void 0 ? void 0 : (_DatasForum$0$comment19 = _DatasForum$0$comment18.reponse_commentaire) === null || _DatasForum$0$comment19 === void 0 ? void 0 : _DatasForum$0$comment19.length, " ", "commentaires"), React__default.createElement("span", null, React__default.createElement(ai.AiOutlineClockCircle, {
    className: "mr-1"
  }), " ", DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$0$comment20 = DatasForum[0].comments) === null || _DatasForum$0$comment20 === void 0 ? void 0 : (_DatasForum$0$comment21 = _DatasForum$0$comment20[0]) === null || _DatasForum$0$comment21 === void 0 ? void 0 : _DatasForum$0$comment21.created_at))))), React__default.createElement("div", {
    className: "collapse",
    id: "collapseExample" + (DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$0$comment22 = DatasForum[0].comments) === null || _DatasForum$0$comment22 === void 0 ? void 0 : (_DatasForum$0$comment23 = _DatasForum$0$comment22[0]) === null || _DatasForum$0$comment23 === void 0 ? void 0 : _DatasForum$0$comment23.id)
  }, React__default.createElement("div", {
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
    src: (DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$0$comment24 = DatasForum[0].comments) === null || _DatasForum$0$comment24 === void 0 ? void 0 : (_DatasForum$0$comment25 = _DatasForum$0$comment24[0]) === null || _DatasForum$0$comment25 === void 0 ? void 0 : (_DatasForum$0$comment26 = _DatasForum$0$comment25.reponse_commentaire[0]) === null || _DatasForum$0$comment26 === void 0 ? void 0 : (_DatasForum$0$comment27 = _DatasForum$0$comment26.user) === null || _DatasForum$0$comment27 === void 0 ? void 0 : _DatasForum$0$comment27.user_avatar) === '/mediafiles/avatars/default.png' ? "https://ui-avatars.com/api/?name=" + (DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$0$comment28 = DatasForum[0].comments) === null || _DatasForum$0$comment28 === void 0 ? void 0 : (_DatasForum$0$comment29 = _DatasForum$0$comment28[0]) === null || _DatasForum$0$comment29 === void 0 ? void 0 : (_DatasForum$0$comment30 = _DatasForum$0$comment29.reponse_commentaire[0]) === null || _DatasForum$0$comment30 === void 0 ? void 0 : (_DatasForum$0$comment31 = _DatasForum$0$comment30.user) === null || _DatasForum$0$comment31 === void 0 ? void 0 : _DatasForum$0$comment31.fullname) : "" + (DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$0$comment32 = DatasForum[0].comments) === null || _DatasForum$0$comment32 === void 0 ? void 0 : (_DatasForum$0$comment33 = _DatasForum$0$comment32[0]) === null || _DatasForum$0$comment33 === void 0 ? void 0 : (_DatasForum$0$comment34 = _DatasForum$0$comment33.reponse_commentaire[0]) === null || _DatasForum$0$comment34 === void 0 ? void 0 : (_DatasForum$0$comment35 = _DatasForum$0$comment34.user) === null || _DatasForum$0$comment35 === void 0 ? void 0 : _DatasForum$0$comment35.user_avatar),
    alt: "user-avatar",
    className: styles.imgSommaireForumDiscussion2
  }))), React__default.createElement("div", {
    className: "col-md-6 d-flex align-item-md-center"
  }, React__default.createElement("div", {
    className: styles.forumSommaireAuteurCard
  }, (DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$0$comment36 = DatasForum[0].comments) === null || _DatasForum$0$comment36 === void 0 ? void 0 : (_DatasForum$0$comment37 = _DatasForum$0$comment36[0]) === null || _DatasForum$0$comment37 === void 0 ? void 0 : (_DatasForum$0$comment38 = _DatasForum$0$comment37.reponse_commentaire[0]) === null || _DatasForum$0$comment38 === void 0 ? void 0 : (_DatasForum$0$comment39 = _DatasForum$0$comment38.user) === null || _DatasForum$0$comment39 === void 0 ? void 0 : _DatasForum$0$comment39.prenom) + " " + (DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$0$comment40 = DatasForum[0].comments) === null || _DatasForum$0$comment40 === void 0 ? void 0 : (_DatasForum$0$comment41 = _DatasForum$0$comment40[0]) === null || _DatasForum$0$comment41 === void 0 ? void 0 : (_DatasForum$0$comment42 = _DatasForum$0$comment41.reponse_commentaire[0]) === null || _DatasForum$0$comment42 === void 0 ? void 0 : (_DatasForum$0$comment43 = _DatasForum$0$comment42.user) === null || _DatasForum$0$comment43 === void 0 ? void 0 : _DatasForum$0$comment43.nom))))), React__default.createElement("div", {
    className: "col-9"
  }, React__default.createElement("div", {
    className: styles.forumCardSommaire
  }, React__default.createElement("div", {
    className: "row"
  }, React__default.createElement("div", {
    className: "col-12 pt-3 mb-md-4 mb-5"
  }, React__default.createElement("p", {
    className: styles.textSommaireForum
  }, DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$0$comment44 = DatasForum[0].comments) === null || _DatasForum$0$comment44 === void 0 ? void 0 : (_DatasForum$0$comment45 = _DatasForum$0$comment44[0]) === null || _DatasForum$0$comment45 === void 0 ? void 0 : (_DatasForum$0$comment46 = _DatasForum$0$comment45.reponse_commentaire[0]) === null || _DatasForum$0$comment46 === void 0 ? void 0 : _DatasForum$0$comment46.contenu, " ")))))), React__default.createElement("div", {
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
    src: (DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$ = DatasUserSession[0]) === null || _DatasUserSession$ === void 0 ? void 0 : (_DatasUserSession$$us = _DatasUserSession$.user) === null || _DatasUserSession$$us === void 0 ? void 0 : _DatasUserSession$$us.avatar) === '/mediafiles/avatars/default.png' ? "https://ui-avatars.com/api/?name=" + (DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$2 = DatasUserSession[0]) === null || _DatasUserSession$2 === void 0 ? void 0 : (_DatasUserSession$2$u = _DatasUserSession$2.user) === null || _DatasUserSession$2$u === void 0 ? void 0 : _DatasUserSession$2$u.fullname) : "" + (DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$3 = DatasUserSession[0]) === null || _DatasUserSession$3 === void 0 ? void 0 : (_DatasUserSession$3$u = _DatasUserSession$3.user) === null || _DatasUserSession$3$u === void 0 ? void 0 : _DatasUserSession$3$u.avatar),
    alt: "user-avatar",
    className: styles.imgSommaireForumDiscussion2
  }))), React__default.createElement("div", {
    className: "col-md-6 d-flex align-item-md-center"
  }, React__default.createElement("div", {
    className: styles.forumSommaireAuteurCard
  }, (DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$4 = DatasUserSession[0]) === null || _DatasUserSession$4 === void 0 ? void 0 : (_DatasUserSession$4$u = _DatasUserSession$4.user) === null || _DatasUserSession$4$u === void 0 ? void 0 : _DatasUserSession$4$u.prenom) !== undefined || (DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$5 = DatasUserSession[0]) === null || _DatasUserSession$5 === void 0 ? void 0 : (_DatasUserSession$5$u = _DatasUserSession$5.user) === null || _DatasUserSession$5$u === void 0 ? void 0 : _DatasUserSession$5$u.nom) !== undefined ? (DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$6 = DatasUserSession[0]) === null || _DatasUserSession$6 === void 0 ? void 0 : (_DatasUserSession$6$u = _DatasUserSession$6.user) === null || _DatasUserSession$6$u === void 0 ? void 0 : _DatasUserSession$6$u.prenom) + " " + (DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$7 = DatasUserSession[0]) === null || _DatasUserSession$7 === void 0 ? void 0 : (_DatasUserSession$7$u = _DatasUserSession$7.user) === null || _DatasUserSession$7$u === void 0 ? void 0 : _DatasUserSession$7$u.nom) : "Anonyme")))), React__default.createElement("div", {
    className: "col-9"
  }, React__default.createElement(AjoutReponseComment, null)))));
};

function Discussion(props) {
  var _DatasForum$, _DatasForum$$author, _DatasForum$2, _DatasForum$2$author, _DatasForum$3, _DatasForum$3$author, _DatasForum$4, _DatasForum$4$author, _DatasForum$5, _DatasForum$5$author, _DatasForum$6, _DatasForum$6$author, _DatasForum$7, _DatasForum$7$author, _DatasUserSession$, _DatasUserSession$$us, _DatasUserSession$2, _DatasUserSession$2$u, _DatasUserSession$3, _DatasUserSession$3$u, _DatasUserSession$4, _DatasUserSession$4$u, _DatasUserSession$5, _DatasUserSession$5$u, _DatasUserSession$6, _DatasUserSession$6$u, _DatasUserSession$7, _DatasUserSession$7$u;

  console.log(props);
  var location = reactRouterDom.useLocation();
  console.log('location', location);
  console.log('user data', DatasUserSession);
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
  }, React__default.createElement("span", null, React__default.createElement(ai.AiOutlineClockCircle, {
    className: "mr-1"
  }), " ", DatasForum === null || DatasForum === void 0 ? void 0 : DatasForum[0].created_at)), React__default.createElement("div", {
    className: styles.sommaireAvatarTitre
  }, React__default.createElement("div", {
    className: ""
  }, React__default.createElement("div", {
    className: "p1"
  }, React__default.createElement("img", {
    src: (DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$ = DatasForum[0]) === null || _DatasForum$ === void 0 ? void 0 : (_DatasForum$$author = _DatasForum$.author) === null || _DatasForum$$author === void 0 ? void 0 : _DatasForum$$author.avatar) === '/mediafiles/avatars/default.png' ? "https://ui-avatars.com/api/?name=" + (DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$2 = DatasForum[0]) === null || _DatasForum$2 === void 0 ? void 0 : (_DatasForum$2$author = _DatasForum$2.author) === null || _DatasForum$2$author === void 0 ? void 0 : _DatasForum$2$author.fullname) : "" + (DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$3 = DatasForum[0]) === null || _DatasForum$3 === void 0 ? void 0 : (_DatasForum$3$author = _DatasForum$3.author) === null || _DatasForum$3$author === void 0 ? void 0 : _DatasForum$3$author.avatar),
    alt: "user-avatar",
    className: styles.imgSommaireForumDiscussion
  }))), React__default.createElement("div", {
    className: ""
  }, React__default.createElement("h3", {
    className: styles.titreSommaireForum
  }, DatasForum === null || DatasForum === void 0 ? void 0 : DatasForum[0].titre), React__default.createElement("div", {
    className: styles.forumSommairAauteurCard
  }, React__default.createElement(io5.IoReturnDownBackOutline, {
    className: "mr-1"
  }), " ", "Par", " ", (DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$4 = DatasForum[0]) === null || _DatasForum$4 === void 0 ? void 0 : (_DatasForum$4$author = _DatasForum$4.author) === null || _DatasForum$4$author === void 0 ? void 0 : _DatasForum$4$author.prenom) !== undefined || (DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$5 = DatasForum[0]) === null || _DatasForum$5 === void 0 ? void 0 : (_DatasForum$5$author = _DatasForum$5.author) === null || _DatasForum$5$author === void 0 ? void 0 : _DatasForum$5$author.nom) !== undefined ? (DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$6 = DatasForum[0]) === null || _DatasForum$6 === void 0 ? void 0 : (_DatasForum$6$author = _DatasForum$6.author) === null || _DatasForum$6$author === void 0 ? void 0 : _DatasForum$6$author.prenom) + " " + (DatasForum === null || DatasForum === void 0 ? void 0 : (_DatasForum$7 = DatasForum[0]) === null || _DatasForum$7 === void 0 ? void 0 : (_DatasForum$7$author = _DatasForum$7.author) === null || _DatasForum$7$author === void 0 ? void 0 : _DatasForum$7$author.nom) : "Anonyme"))), React__default.createElement("div", {
    className: "row"
  }, React__default.createElement("div", {
    className: "col-12 pt-3"
  }, React__default.createElement("p", {
    className: styles.textSommaireForum
  }, DatasForum === null || DatasForum === void 0 ? void 0 : DatasForum[0].contenu)))), React__default.createElement(FrontCommentItem, null), React__default.createElement("span", {
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
    src: (DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$ = DatasUserSession[0]) === null || _DatasUserSession$ === void 0 ? void 0 : (_DatasUserSession$$us = _DatasUserSession$.user) === null || _DatasUserSession$$us === void 0 ? void 0 : _DatasUserSession$$us.avatar) === '/mediafiles/avatars/default.png' ? "https://ui-avatars.com/api/?name=" + (DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$2 = DatasUserSession[0]) === null || _DatasUserSession$2 === void 0 ? void 0 : (_DatasUserSession$2$u = _DatasUserSession$2.user) === null || _DatasUserSession$2$u === void 0 ? void 0 : _DatasUserSession$2$u.fullname) : "" + (DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$3 = DatasUserSession[0]) === null || _DatasUserSession$3 === void 0 ? void 0 : (_DatasUserSession$3$u = _DatasUserSession$3.user) === null || _DatasUserSession$3$u === void 0 ? void 0 : _DatasUserSession$3$u.avatar),
    alt: "user-avatar",
    className: styles.imgSommaireForumDiscussion2
  }))), React__default.createElement("div", {
    className: " d-flex align-item-md-center"
  }, React__default.createElement("div", {
    className: styles.forumSommaireAuteurCard
  }, (DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$4 = DatasUserSession[0]) === null || _DatasUserSession$4 === void 0 ? void 0 : (_DatasUserSession$4$u = _DatasUserSession$4.user) === null || _DatasUserSession$4$u === void 0 ? void 0 : _DatasUserSession$4$u.prenom) !== undefined || (DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$5 = DatasUserSession[0]) === null || _DatasUserSession$5 === void 0 ? void 0 : (_DatasUserSession$5$u = _DatasUserSession$5.user) === null || _DatasUserSession$5$u === void 0 ? void 0 : _DatasUserSession$5$u.nom) !== undefined ? (DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$6 = DatasUserSession[0]) === null || _DatasUserSession$6 === void 0 ? void 0 : (_DatasUserSession$6$u = _DatasUserSession$6.user) === null || _DatasUserSession$6$u === void 0 ? void 0 : _DatasUserSession$6$u.prenom) + " " + (DatasUserSession === null || DatasUserSession === void 0 ? void 0 : (_DatasUserSession$7 = DatasUserSession[0]) === null || _DatasUserSession$7 === void 0 ? void 0 : (_DatasUserSession$7$u = _DatasUserSession$7.user) === null || _DatasUserSession$7$u === void 0 ? void 0 : _DatasUserSession$7$u.nom) : "Anonyme")))), React__default.createElement("div", {
    className: "col-10"
  }, React__default.createElement(AjoutComments, null))))))));
}

function Sommaire(props) {
  console.log(props);
  console.log('data forum', DatasForum);
  return React__default.createElement("div", {
    className: "component-liste-projet"
  }, React__default.createElement("div", {
    className: styles.contentViewStart
  }, React__default.createElement("div", {
    className: styles.bannerListeProjet
  }, React__default.createElement("h3", {
    className: styles.titreBannerListeProjet
  }, "De la discussion, jaillit la lumi\xE8re")), React__default.createElement("div", {
    className: styles.containerCayore
  }, React__default.createElement("div", {
    className: "row align-items-center",
    style: {
      margin: "3rem 0"
    }
  }, React__default.createElement("div", {
    className: "col-12"
  }, DatasForum.map(function (item) {
    return React__default.createElement(reactRouterDom.NavLink, {
      className: "",
      to: {
        pathname: "/forum-discussion/" + item.id
      },
      key: item.id
    }, DatasForum.length > 0 ? DatasForum.map(function (item) {
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
        src: (item === null || item === void 0 ? void 0 : (_item$author = item.author) === null || _item$author === void 0 ? void 0 : _item$author.avatar) === '/mediafiles/avatars/default.png' ? "https://ui-avatars.com/api/?name=" + (item === null || item === void 0 ? void 0 : (_item$author2 = item.author) === null || _item$author2 === void 0 ? void 0 : _item$author2.fullname) : "" + (item === null || item === void 0 ? void 0 : (_item$author3 = item.author) === null || _item$author3 === void 0 ? void 0 : _item$author3.avatar),
        alt: "user-avatar",
        className: styles.imgSommaireForum
      }))), React__default.createElement("div", {
        className: ""
      }, React__default.createElement("h3", {
        className: styles.titreSommaireForum
      }, item === null || item === void 0 ? void 0 : item.titre), React__default.createElement("div", {
        className: styles.forumSommaireAuteurCard
      }, React__default.createElement(io5.IoReturnDownBackOutline, {
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
      }, item === null || item === void 0 ? void 0 : item.user_comments.slice(0, 4).map(function (comment) {
        var _comment$user, _comment$user2, _comment$user3;

        return React__default.createElement("img", {
          src: (comment === null || comment === void 0 ? void 0 : (_comment$user = comment.user) === null || _comment$user === void 0 ? void 0 : _comment$user.avatar) === '/mediafiles/avatars/default.png' ? "https://ui-avatars.com/api/?name=" + (comment === null || comment === void 0 ? void 0 : (_comment$user2 = comment.user) === null || _comment$user2 === void 0 ? void 0 : _comment$user2.fullname) : "" + (comment === null || comment === void 0 ? void 0 : (_comment$user3 = comment.user) === null || _comment$user3 === void 0 ? void 0 : _comment$user3.avatar),
          key: comment === null || comment === void 0 ? void 0 : comment.id,
          alt: "user-avatar",
          className: styles.divSommaireForumUserChat2
        });
      }), console.log('user comment', item === null || item === void 0 ? void 0 : item.user_comments), React__default.createElement("div", {
        className: styles.divSommaireForumUserChat5
      }, React__default.createElement("div", {
        className: styles.troisPoints
      }, "\n                                            " + ((item === null || item === void 0 ? void 0 : item.user_comments.length) > 4 ? (item === null || item === void 0 ? void 0 : item.user_comments.length) - 4 + "+" : "...") + "\n                                        "))), React__default.createElement("div", {
        className: styles.divNombreCommentaireSommaireForum
      }, React__default.createElement("p", {
        className: styles.nombreCommentaireSommaireForum
      }, React__default.createElement(bs.BsChat, {
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
    }, "Pas de sujet de discussion")))));
  }))))));
}

var VolkenoForumy = function VolkenoForumy() {
  return React.createElement(reactRouterDom.BrowserRouter, null, React.createElement("div", {
    className: "router-container"
  }, React.createElement(reactRouterDom.Routes, null, React.createElement(reactRouterDom.Route, {
    path: "/",
    element: React.createElement(Sommaire, null)
  }), React.createElement(reactRouterDom.Route, {
    path: "/forum-discussion/:id",
    element: React.createElement(Discussion, null)
  }))));
};

exports.VolkenoForumy = VolkenoForumy;
//# sourceMappingURL=index.js.map
