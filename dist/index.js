function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactRouterDom = require('react-router-dom');
var bi = require('react-icons/bi');
var ai = require('react-icons/ai');
var io5 = require('react-icons/io5');
var reactHookForm = require('react-hook-form');
var bs = require('react-icons/bs');

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var styles = {"test":"_styles-module__test__3ybTi","contentViewStart":"_styles-module__contentViewStart__vMiGT","navigationLink":"_styles-module__navigationLink__3BNu_","containerCayore":"_styles-module__containerCayore__zRBck","bannerListeProjet":"_styles-module__bannerListeProjet__zERCC","titreBannerListeProjet":"_styles-module__titreBannerListeProjet__cjRbQ","forumCardSommaire":"_styles-module__forumCardSommaire__3HiKz","forum-card-taille":"_styles-module__forum-card-taille__1eBJ7","forumCardSommaireFixWidth":"_styles-module__forumCardSommaireFixWidth__2uXL-","forum-card-skeleton-fix-width":"_styles-module__forum-card-skeleton-fix-width__2V2Qy","avatarSkeleton":"_styles-module__avatarSkeleton__1jx2o","avatarArticleSkeleton":"_styles-module__avatarArticleSkeleton__vRP36","contentSkeleton":"_styles-module__contentSkeleton__3H1kl","contentSkeleton2":"_styles-module__contentSkeleton2__10yh-","contentSkeletonUser":"_styles-module__contentSkeletonUser__zGOQu","contentSkeletonPara":"_styles-module__contentSkeletonPara__186w2","contentSkeletonPara2":"_styles-module__contentSkeletonPara2__3ncCE","cardSommaireDateAjout":"_styles-module__cardSommaireDateAjout__3TZlv","imgSommaireForum":"_styles-module__imgSommaireForum__3wJ3U","imgSommaireForumDiscussion":"_styles-module__imgSommaireForumDiscussion__10Qyd","titreSommaireForum":"_styles-module__titreSommaireForum__lypzQ","forumSommaireAuteurCard":"_styles-module__forumSommaireAuteurCard__3ovWR","textSommaireForum":"_styles-module__textSommaireForum__R0WUA","sommaireForumUserChat":"_styles-module__sommaireForumUserChat__2fmvg","divNombreCommentaireSommaireForum":"_styles-module__divNombreCommentaireSommaireForum__3VGq1","divSommaireForumUserChat1":"_styles-module__divSommaireForumUserChat1__3AK7B","divSommaireSorumUserChat2":"_styles-module__divSommaireSorumUserChat2__2fhuF","divSommaireForumUserChat3":"_styles-module__divSommaireForumUserChat3__1qa_i","divSommaireForumUserChat4":"_styles-module__divSommaireForumUserChat4__2PTKK","divSommaireForumUserChat5":"_styles-module__divSommaireForumUserChat5__Ms10U","divSommaireForumUserChat2":"_styles-module__divSommaireForumUserChat2__n-NHS","imgSommaireForumUserChat":"_styles-module__imgSommaireForumUserChat__WUnJj","nombreCommentaireSommaireForum":"_styles-module__nombreCommentaireSommaireForum__CZnT8","troisPoints":"_styles-module__troisPoints__1NUMh","sommaireAvatarTitre":"_styles-module__sommaireAvatarTitre__pLURL","cardDiscussionHeureVu":"_styles-module__cardDiscussionHeureVu__2l2Yb","cardDiscussionHeureCommentaire":"_styles-module__cardDiscussionHeureCommentaire__1W3UV","cardDiscussionHeureVuLaurhille":"_styles-module__cardDiscussionHeureVuLaurhille__prVaz","cardDiscussionCommentaire":"_styles-module__cardDiscussionCommentaire__8e0yO","imgSommaireForumDiscussion2":"_styles-module__imgSommaireForumDiscussion2__1nB31","divSeparateur":"_styles-module__divSeparateur__3S7lS","row-input":"_styles-module__row-input__GLjv2","rowReponse":"_styles-module__rowReponse__15pjE","row-reponse-ligne-union":"_styles-module__row-reponse-ligne-union__2905Z","row-reponse-ligne-union1":"_styles-module__row-reponse-ligne-union1__2_YyU","forum-discussion-ligne-union":"_styles-module__forum-discussion-ligne-union___ranC","offline-alert-card":"_styles-module__offline-alert-card__wh7If","offline-alert-textual":"_styles-module__offline-alert-textual__3oC-v","redirect-to-login-btn":"_styles-module__redirect-to-login-btn__1ZnBs","cardParent":"_styles-module__cardParent__nRyJj","formAddCguButtonAjouter":"_styles-module__formAddCguButtonAjouter__2H-xZ","ButtonAjouter":"_styles-module__ButtonAjouter__2SDRe","ajouterSujet":"_styles-module__ajouterSujet__3gpYW","ajouter":"_styles-module__ajouter__L83xr","forumContainer":"_styles-module__forumContainer__1-B4b","forumTitle":"_styles-module__forumTitle__1Tjly","authForm":"_styles-module__authForm__JFfPL","inputCol":"_styles-module__inputCol__9zGxr","submitBtnRow":"_styles-module__submitBtnRow__2wz7g","authSubmitBtn":"_styles-module__authSubmitBtn__1IFDi","formAddCguInput":"_styles-module__formAddCguInput__1ICK-","formControl":"_styles-module__formControl__1vyEq","img-sommaire-forum":"_styles-module__img-sommaire-forum__CKiSb"};

function AjoutComments(_ref) {
  var onSubmit = _ref.onSubmit;

  var _useState = React.useState(''),
      comment = _useState[0],
      setComment = _useState[1];

  var submitReponse = function submitReponse(e) {
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
    placeholder: "R\xE9pondre",
    name: 'text',
    value: comment,
    onChange: function onChange(e) {
      setComment(e.target.value);
    }
  })))), React__default.createElement("button", {
    className: styles.formAddCguButtonAjouter,
    onClick: submitReponse
  }, "Ajouter"));
}

var FrontCommentItem = function FrontCommentItem(_ref) {
  var donnees = _ref.donnees,
      onAddResponseComment = _ref.onAddResponseComment,
      DatasUserSession = _ref.DatasUserSession;
  return React__default.createElement("div", {
    className: styles.cardParent
  }, donnees === null || donnees === void 0 ? void 0 : donnees.first_level_response.map(function (donnee) {
    var _donnee$user, _donnee$user2, _donnee$user3, _donnee$user4, _donnee$user5, _donnee$second_level_, _donnee$second_level_2;

    return React__default.createElement("div", {
      key: donnee.id
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
      src: (donnee === null || donnee === void 0 ? void 0 : (_donnee$user = donnee.user) === null || _donnee$user === void 0 ? void 0 : _donnee$user.avatar) === '/mediafiles/avatars/default.png' ? "https://ui-avatars.com/api/?name=" + (donnee === null || donnee === void 0 ? void 0 : (_donnee$user2 = donnee.user) === null || _donnee$user2 === void 0 ? void 0 : _donnee$user2.fullname) : "" + (donnee === null || donnee === void 0 ? void 0 : (_donnee$user3 = donnee.user) === null || _donnee$user3 === void 0 ? void 0 : _donnee$user3.avatar),
      alt: "user-avatar",
      className: styles.imgSommaireForumDiscussion2
    }))), React__default.createElement("div", {
      className: " d-flex align-item-md-center"
    }, React__default.createElement("div", {
      className: styles.forumSommaireAuteurCard
    }, (donnee === null || donnee === void 0 ? void 0 : (_donnee$user4 = donnee.user) === null || _donnee$user4 === void 0 ? void 0 : _donnee$user4.firstName) + " " + (donnee === null || donnee === void 0 ? void 0 : (_donnee$user5 = donnee.user) === null || _donnee$user5 === void 0 ? void 0 : _donnee$user5.lastName))))), React__default.createElement("div", {
      className: "col-10"
    }, React__default.createElement("div", {
      className: styles.forumCardSommaire
    }, React__default.createElement("div", {
      className: "row"
    }, React__default.createElement("div", {
      className: "col-12 pt-3 mb-md-4 mb-5"
    }, React__default.createElement("p", {
      className: styles.textSommaireForum
    }, donnee === null || donnee === void 0 ? void 0 : donnee.content, " "))), React__default.createElement("div", {
      className: styles.cardDiscussionHeureCommentaire
    }, React__default.createElement("a", {
      className: styles.cardDiscussionCommentaire,
      "data-toggle": "collapse",
      href: "#collapseExample" + (donnee === null || donnee === void 0 ? void 0 : donnee.id),
      role: "button",
      "aria-expanded": "false",
      "aria-controls": "collapseExample" + (donnee === null || donnee === void 0 ? void 0 : donnee.id)
    }, React__default.createElement(bi.BiComment, {
      className: "mr-1"
    }), donnee === null || donnee === void 0 ? void 0 : (_donnee$second_level_ = donnee.second_level_response) === null || _donnee$second_level_ === void 0 ? void 0 : _donnee$second_level_.length, " ", "commentaires"), React__default.createElement("span", null, React__default.createElement(ai.AiOutlineClockCircle, {
      className: "mr-1"
    }), " ", donnee === null || donnee === void 0 ? void 0 : donnee.created_at))))), React__default.createElement("div", {
      className: "collapse",
      id: "collapseExample" + donnee.id
    }, (_donnee$second_level_2 = donnee.second_level_response) === null || _donnee$second_level_2 === void 0 ? void 0 : _donnee$second_level_2.map(function (item) {
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
        src: (item === null || item === void 0 ? void 0 : (_item$user = item.user) === null || _item$user === void 0 ? void 0 : _item$user.avatar) === '/mediafiles/avatars/default.png' ? "https://ui-avatars.com/api/?name=" + (item === null || item === void 0 ? void 0 : (_item$user2 = item.user) === null || _item$user2 === void 0 ? void 0 : _item$user2.fullname) : "" + (item === null || item === void 0 ? void 0 : (_item$user3 = item.user) === null || _item$user3 === void 0 ? void 0 : _item$user3.avatar),
        alt: "user-avatar",
        className: styles.imgSommaireForumDiscussion2
      }))), React__default.createElement("div", {
        className: "col-md-6 d-flex align-item-md-center"
      }, React__default.createElement("div", {
        className: styles.forumSommaireAuteurCard
      }, (item === null || item === void 0 ? void 0 : (_item$user4 = item.user) === null || _item$user4 === void 0 ? void 0 : _item$user4.firstName) + " " + (item === null || item === void 0 ? void 0 : (_item$user5 = item.user) === null || _item$user5 === void 0 ? void 0 : _item$user5.lastName))))), React__default.createElement("div", {
        className: "col-9"
      }, React__default.createElement("div", {
        className: styles.forumCardSommaire
      }, React__default.createElement("div", {
        className: "row"
      }, React__default.createElement("div", {
        className: "col-12 pt-3 mb-md-4 mb-5"
      }, React__default.createElement("p", {
        className: styles.textSommaireForum
      }, item === null || item === void 0 ? void 0 : item.content, " "))))));
    }), DatasUserSession.map(function (item) {
      var _item$user6, _item$user7, _item$user8, _item$user9, _item$user10, _item$user11, _item$user12;

      return React__default.createElement("div", {
        className: 'row',
        key: item.id
      }, React__default.createElement("div", {
        className: "col-3"
      }, React__default.createElement("div", {
        className: "row"
      }, React__default.createElement("div", {
        className: "col-md-6"
      }, React__default.createElement("div", {
        className: "p1 d-flex justify-content-end"
      }, React__default.createElement("img", {
        src: (item === null || item === void 0 ? void 0 : (_item$user6 = item.user) === null || _item$user6 === void 0 ? void 0 : _item$user6.avatar) === '/mediafiles/avatars/default.png' ? "https://ui-avatars.com/api/?name=" + (item === null || item === void 0 ? void 0 : (_item$user7 = item.user) === null || _item$user7 === void 0 ? void 0 : _item$user7.fullname) : "" + (item === null || item === void 0 ? void 0 : (_item$user8 = item.user) === null || _item$user8 === void 0 ? void 0 : _item$user8.avatar),
        alt: "user-avatar",
        className: styles.imgSommaireForumDiscussion2
      }))), React__default.createElement("div", {
        className: "col-md-6 d-flex align-item-md-center"
      }, React__default.createElement("div", {
        className: styles.forumSommaireAuteurCard
      }, (item === null || item === void 0 ? void 0 : (_item$user9 = item.user) === null || _item$user9 === void 0 ? void 0 : _item$user9.prenom) !== undefined || (item === null || item === void 0 ? void 0 : (_item$user10 = item.user) === null || _item$user10 === void 0 ? void 0 : _item$user10.nom) !== undefined ? (item === null || item === void 0 ? void 0 : (_item$user11 = item.user) === null || _item$user11 === void 0 ? void 0 : _item$user11.prenom) + " " + (item === null || item === void 0 ? void 0 : (_item$user12 = item.user) === null || _item$user12 === void 0 ? void 0 : _item$user12.nom) : "Anonyme")))), React__default.createElement("div", {
        className: "col-9"
      }, React__default.createElement(AjoutComments, {
        onSubmit: function onSubmit(comment) {
          onAddResponseComment(donnees, donnee, comment);
        }
      })));
    })));
  }));
};

var Discussion = function Discussion(_ref) {
  var _donnees$author, _donnees$author2, _donnees$author3, _donnees$author4, _donnees$author5, _donnees$author6, _donnees$author7;

  var onAddComment = _ref.onAddComment,
      onAddResponseComment = _ref.onAddResponseComment;
  var location = reactRouterDom.useLocation();
  var donnees = location === null || location === void 0 ? void 0 : location.state;
  var DatasUserSession = [{
    id: 1,
    user: {
      prenom: "Mes",
      nom: "",
      fullname: "Me",
      avatar: '/mediafiles/avatars/default.png'
    }
  }];
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
  }), " ", donnees === null || donnees === void 0 ? void 0 : donnees.created_at)), React__default.createElement("div", {
    className: styles.sommaireAvatarTitre
  }, React__default.createElement("div", {
    className: ""
  }, React__default.createElement("div", {
    className: "p1"
  }, React__default.createElement("img", {
    src: (donnees === null || donnees === void 0 ? void 0 : (_donnees$author = donnees.author) === null || _donnees$author === void 0 ? void 0 : _donnees$author.avatar) === '/mediafiles/avatars/default.png' ? "https://ui-avatars.com/api/?name=" + (donnees === null || donnees === void 0 ? void 0 : (_donnees$author2 = donnees.author) === null || _donnees$author2 === void 0 ? void 0 : _donnees$author2.fullname) : "" + (donnees === null || donnees === void 0 ? void 0 : (_donnees$author3 = donnees.author) === null || _donnees$author3 === void 0 ? void 0 : _donnees$author3.avatar),
    alt: "user-avatar",
    className: styles.imgSommaireForumDiscussion
  }))), React__default.createElement("div", {
    className: ""
  }, React__default.createElement("h3", {
    className: styles.titreSommaireForum
  }, donnees === null || donnees === void 0 ? void 0 : donnees.initialTitle), React__default.createElement("div", {
    className: styles.forumSommairAauteurCard
  }, React__default.createElement(io5.IoReturnDownBackOutline, {
    className: "mr-1"
  }), " ", "Par", " ", (donnees === null || donnees === void 0 ? void 0 : (_donnees$author4 = donnees.author) === null || _donnees$author4 === void 0 ? void 0 : _donnees$author4.firstName) !== undefined || (donnees === null || donnees === void 0 ? void 0 : (_donnees$author5 = donnees.author) === null || _donnees$author5 === void 0 ? void 0 : _donnees$author5.lastName) !== undefined ? (donnees === null || donnees === void 0 ? void 0 : (_donnees$author6 = donnees.author) === null || _donnees$author6 === void 0 ? void 0 : _donnees$author6.firstName) + " " + (donnees === null || donnees === void 0 ? void 0 : (_donnees$author7 = donnees.author) === null || _donnees$author7 === void 0 ? void 0 : _donnees$author7.lastName) : "Anonyme"))), React__default.createElement("div", {
    className: "row"
  }, React__default.createElement("div", {
    className: "col-12 pt-3"
  }, React__default.createElement("p", {
    className: styles.textSommaireForum
  }, donnees.initialContent)))), React__default.createElement(FrontCommentItem, {
    donnees: donnees,
    onAddResponseComment: onAddResponseComment,
    DatasUserSession: DatasUserSession
  }), React__default.createElement("span", {
    className: styles.divSeparateur
  }), React__default.createElement("div", {
    className: styles.rowReponse
  }, DatasUserSession === null || DatasUserSession === void 0 ? void 0 : DatasUserSession.map(function (item) {
    var _item$user, _item$user2, _item$user3, _item$user4, _item$user5, _item$user6, _item$user7;

    return React__default.createElement("div", {
      className: 'row',
      key: item.id
    }, React__default.createElement("div", {
      className: "col-2"
    }, React__default.createElement("div", {
      className: styles.sommaireAvatarTitre
    }, React__default.createElement("div", {
      className: ""
    }, React__default.createElement("div", {
      className: "p1"
    }, React__default.createElement("img", {
      src: (item === null || item === void 0 ? void 0 : (_item$user = item.user) === null || _item$user === void 0 ? void 0 : _item$user.avatar) === '/mediafiles/avatars/default.png' ? "https://ui-avatars.com/api/?name=" + (item === null || item === void 0 ? void 0 : (_item$user2 = item.user) === null || _item$user2 === void 0 ? void 0 : _item$user2.fullname) : "" + (item === null || item === void 0 ? void 0 : (_item$user3 = item.user) === null || _item$user3 === void 0 ? void 0 : _item$user3.avatar),
      alt: "user-avatar",
      className: styles.imgSommaireForumDiscussion2
    }))), React__default.createElement("div", {
      className: " d-flex align-item-md-center"
    }, React__default.createElement("div", {
      className: styles.forumSommaireAuteurCard
    }, (item === null || item === void 0 ? void 0 : (_item$user4 = item.user) === null || _item$user4 === void 0 ? void 0 : _item$user4.firstName) !== undefined || (item === null || item === void 0 ? void 0 : (_item$user5 = item.user) === null || _item$user5 === void 0 ? void 0 : _item$user5.lastName) !== undefined ? (item === null || item === void 0 ? void 0 : (_item$user6 = item.user) === null || _item$user6 === void 0 ? void 0 : _item$user6.firstName) + " " + (item === null || item === void 0 ? void 0 : (_item$user7 = item.user) === null || _item$user7 === void 0 ? void 0 : _item$user7.lastName) : "Anonyme")))), React__default.createElement("div", {
      className: "col-10"
    }, React__default.createElement(AjoutComments, {
      onSubmit: function onSubmit(comment) {
        onAddComment(donnees, comment);
      }
    })));
  }))))));
};

var AjouterSujetModal = function AjouterSujetModal() {
  var _useForm = reactHookForm.useForm(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit;

  var onSubmit = React.useCallback(function (formValues) {
    console.log(formValues);
  }, []);
  return React__default.createElement("div", {
    className: 'modal fade',
    id: 'detailModal',
    "aria-labelledby": 'exampleModalLabel',
    "aria-hidden": 'true'
  }, React__default.createElement("div", {
    className: styles.loginContainer
  }, React__default.createElement("div", {
    className: 'auth-form-body'
  }, React__default.createElement("div", {
    className: styles.containerCayore
  }, React__default.createElement("div", {
    className: styles.forumContainer
  }, React__default.createElement("div", {
    className: 'log-div'
  }, React__default.createElement("h2", {
    className: styles.forumTitle
  }, "Ajoutez un sujet")), React__default.createElement("form", {
    className: styles.loginForm,
    onSubmit: handleSubmit(onSubmit)
  }, React__default.createElement("div", {
    className: styles.authForm
  }, React__default.createElement("div", {
    className: styles.inputCol
  }, React__default.createElement("div", {
    className: 'form-group'
  }, React__default.createElement("label", null, "Titre"), React__default.createElement("input", Object.assign({
    type: 'text',
    className: styles.formControl,
    placeholder: 'Ajouter un titre'
  }, register('titre'))))), React__default.createElement("div", {
    className: styles.inputCol
  }, React__default.createElement("div", {
    className: 'form-group'
  }, React__default.createElement("label", null, "Contenu"), React__default.createElement("textarea", Object.assign({
    style: {
      height: 150
    },
    className: styles.formControl
  }, register('contenu')))))), React__default.createElement("div", {
    className: styles.submitBtnRow
  }, React__default.createElement("button", {
    type: 'submit',
    className: styles.authSubmitBtn
  }, "Ajouter"))))))));
};

var SommaireItem = function SommaireItem(_ref) {
  var Datas = _ref.Datas;
  return React__default.createElement("div", null, Datas.length > 0 ? Datas.map(function (item) {
    var _item$author, _item$author2, _item$author3, _item$author4, _item$author5, _item$author6, _item$author7;

    return React__default.createElement(reactRouterDom.NavLink, {
      className: styles.navigationLink,
      to: {
        pathname: "/forum-discussion/" + item.id
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
      src: (item === null || item === void 0 ? void 0 : (_item$author = item.author) === null || _item$author === void 0 ? void 0 : _item$author.avatar) === '/mediafiles/avatars/default.png' ? "https://ui-avatars.com/api/?name=" + (item === null || item === void 0 ? void 0 : (_item$author2 = item.author) === null || _item$author2 === void 0 ? void 0 : _item$author2.fullname) : "" + (item === null || item === void 0 ? void 0 : (_item$author3 = item.author) === null || _item$author3 === void 0 ? void 0 : _item$author3.avatar),
      alt: "user-avatar",
      className: styles.imgSommaireForum
    }))), React__default.createElement("div", {
      className: ""
    }, React__default.createElement("h3", {
      className: styles.titreSommaireForum
    }, item === null || item === void 0 ? void 0 : item.initialTitle), React__default.createElement("div", {
      className: styles.forumSommaireAuteurCard
    }, React__default.createElement(io5.IoReturnDownBackOutline, {
      className: "mr-1"
    }), "Par", " ", (item === null || item === void 0 ? void 0 : (_item$author4 = item.author) === null || _item$author4 === void 0 ? void 0 : _item$author4.firstName) !== undefined || (item === null || item === void 0 ? void 0 : (_item$author5 = item.author) === null || _item$author5 === void 0 ? void 0 : _item$author5.lastName) !== undefined ? (item === null || item === void 0 ? void 0 : (_item$author6 = item.author) === null || _item$author6 === void 0 ? void 0 : _item$author6.firstName) + " " + (item === null || item === void 0 ? void 0 : (_item$author7 = item.author) === null || _item$author7 === void 0 ? void 0 : _item$author7.lastName) : "Anonyme"))), React__default.createElement("div", {
      className: "row"
    }, React__default.createElement("div", {
      className: "col-lg-9 pt-3"
    }, React__default.createElement("p", {
      className: styles.textSommaireForum
    }, item === null || item === void 0 ? void 0 : item.initialContent)), React__default.createElement("div", {
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
    }), React__default.createElement("div", {
      className: styles.divSommaireForumUserChat5
    }, React__default.createElement("div", {
      className: styles.troisPoints
    }, "\n                                    " + ((item === null || item === void 0 ? void 0 : item.user_comments.length) > 4 ? (item === null || item === void 0 ? void 0 : item.user_comments.length) - 4 + "+" : "...") + "\n                                "))), React__default.createElement("div", {
      className: styles.divNombreCommentaireSommaireForum
    }, React__default.createElement("p", {
      className: styles.nombreCommentaireSommaireForum
    }, React__default.createElement(bs.BsChat, {
      className: "mr-1"
    }), " ", item === null || item === void 0 ? void 0 : item.first_level_response.length, " Commentaires"))))));
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

var Sommaire = function Sommaire(_ref) {
  var Datas = _ref.Datas;
  return React__default.createElement("div", {
    className: 'component-liste-projet'
  }, React__default.createElement("div", {
    className: styles.contentViewStart
  }, React__default.createElement("div", {
    className: styles.containerCayore
  }, React__default.createElement("div", {
    className: 'row align-items-center',
    style: {
      margin: '3rem 0'
    }
  }, React__default.createElement("div", {
    className: styles.ajouterSujet
  }, ' ', React__default.createElement("button", {
    className: styles.ButtonAjouter,
    "data-bs-toggle": 'modal',
    "data-bs-target": '#detailModal'
  }, "Ajouter un sujet")), React__default.createElement("div", {
    className: 'col-12'
  }, React__default.createElement(SommaireItem, {
    Datas: Datas
  }))))), React__default.createElement(AjouterSujetModal, null));
};

var VolkenoForumy = function VolkenoForumy(_ref) {
  var props = _extends({}, _ref);

  var data = props.data;
  return React.createElement(reactRouterDom.BrowserRouter, null, React.createElement("div", {
    className: "router-container"
  }, React.createElement(reactRouterDom.Routes, null, React.createElement(reactRouterDom.Route, {
    path: "/",
    element: React.createElement(Sommaire, {
      Datas: data
    })
  }), React.createElement(reactRouterDom.Route, {
    path: "/forum-discussion/:id",
    element: React.createElement(Discussion, {
      onAddComment: function onAddComment(subject, commentText) {
        console.log(subject, commentText);
      },
      onAddResponseComment: function onAddResponseComment(subject, comment, commentText) {
        console.log(subject, comment, commentText);
      }
    })
  }))));
};

exports.VolkenoForumy = VolkenoForumy;
//# sourceMappingURL=index.js.map
