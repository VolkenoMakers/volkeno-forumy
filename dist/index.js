function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactRouterDom = require('react-router-dom');
var bi = require('react-icons/bi');
var ai = require('react-icons/ai');
var io5 = require('react-icons/io5');
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

var styles = {"test":"_styles-module__test__3ybTi","contentViewStart":"_styles-module__contentViewStart__vMiGT","navigationLink":"_styles-module__navigationLink__3BNu_","containerCayore":"_styles-module__containerCayore__zRBck","bannerListeProjet":"_styles-module__bannerListeProjet__zERCC","titreBannerListeProjet":"_styles-module__titreBannerListeProjet__cjRbQ","forumCardSommaire":"_styles-module__forumCardSommaire__3HiKz","forum-card-taille":"_styles-module__forum-card-taille__1eBJ7","forumCardSommaireFixWidth":"_styles-module__forumCardSommaireFixWidth__2uXL-","forum-card-skeleton-fix-width":"_styles-module__forum-card-skeleton-fix-width__2V2Qy","avatarSkeleton":"_styles-module__avatarSkeleton__1jx2o","avatarArticleSkeleton":"_styles-module__avatarArticleSkeleton__vRP36","contentSkeleton":"_styles-module__contentSkeleton__3H1kl","contentSkeleton2":"_styles-module__contentSkeleton2__10yh-","contentSkeletonUser":"_styles-module__contentSkeletonUser__zGOQu","contentSkeletonPara":"_styles-module__contentSkeletonPara__186w2","contentSkeletonPara2":"_styles-module__contentSkeletonPara2__3ncCE","cardSommaireDateAjout":"_styles-module__cardSommaireDateAjout__3TZlv","imgSommaireForum":"_styles-module__imgSommaireForum__3wJ3U","imgSommaireForumDiscussion":"_styles-module__imgSommaireForumDiscussion__10Qyd","titreSommaireForum":"_styles-module__titreSommaireForum__lypzQ","forumSommaireAuteurCard":"_styles-module__forumSommaireAuteurCard__3ovWR","textSommaireForum":"_styles-module__textSommaireForum__R0WUA","sommaireForumUserChat":"_styles-module__sommaireForumUserChat__2fmvg","divNombreCommentaireSommaireForum":"_styles-module__divNombreCommentaireSommaireForum__3VGq1","divSommaireForumUserChat1":"_styles-module__divSommaireForumUserChat1__3AK7B","divSommaireSorumUserChat2":"_styles-module__divSommaireSorumUserChat2__2fhuF","divSommaireForumUserChat3":"_styles-module__divSommaireForumUserChat3__1qa_i","divSommaireForumUserChat4":"_styles-module__divSommaireForumUserChat4__2PTKK","divSommaireForumUserChat5":"_styles-module__divSommaireForumUserChat5__Ms10U","divSommaireForumUserChat2":"_styles-module__divSommaireForumUserChat2__n-NHS","imgSommaireForumUserChat":"_styles-module__imgSommaireForumUserChat__WUnJj","nombreCommentaireSommaireForum":"_styles-module__nombreCommentaireSommaireForum__CZnT8","troisPoints":"_styles-module__troisPoints__1NUMh","sommaireAvatarTitre":"_styles-module__sommaireAvatarTitre__pLURL","cardDiscussionHeureVu":"_styles-module__cardDiscussionHeureVu__2l2Yb","cardDiscussionHeureCommentaire":"_styles-module__cardDiscussionHeureCommentaire__1W3UV","cardDiscussionHeureVuLaurhille":"_styles-module__cardDiscussionHeureVuLaurhille__prVaz","cardDiscussionCommentaire":"_styles-module__cardDiscussionCommentaire__8e0yO","imgSommaireForumDiscussion2":"_styles-module__imgSommaireForumDiscussion2__1nB31","divSeparateur":"_styles-module__divSeparateur__3S7lS","row-input":"_styles-module__row-input__GLjv2","rowReponse":"_styles-module__rowReponse__15pjE","row-reponse-ligne-union":"_styles-module__row-reponse-ligne-union__2905Z","row-reponse-ligne-union1":"_styles-module__row-reponse-ligne-union1__2_YyU","forum-discussion-ligne-union":"_styles-module__forum-discussion-ligne-union___ranC","offline-alert-card":"_styles-module__offline-alert-card__wh7If","offline-alert-textual":"_styles-module__offline-alert-textual__3oC-v","redirect-to-login-btn":"_styles-module__redirect-to-login-btn__1ZnBs","cardParent":"_styles-module__cardParent__nRyJj","formAddCguButtonAjouter":"_styles-module__formAddCguButtonAjouter__2H-xZ","componentListeProjet":"_styles-module__componentListeProjet__2kuVE","btnAjoutResponse":"_styles-module__btnAjoutResponse__3QrOw","btnAjoutSujet":"_styles-module__btnAjoutSujet__21AVM","emptySubjectMessage":"_styles-module__emptySubjectMessage__sJRRl","emptySubjectMessageBtnPlus":"_styles-module__emptySubjectMessageBtnPlus__3XTjZ","forumDiscussionLigneUnion":"_styles-module__forumDiscussionLigneUnion__3LwA7","rowReponseLigneUnion":"_styles-module__rowReponseLigneUnion__1ZzMD","rowReponseLigneUnion1":"_styles-module__rowReponseLigneUnion1__kbaQR","btnConnexion":"_styles-module__btnConnexion__1C7_U","hideButton":"_styles-module__hideButton__2Zx1G","img-sommaire-forum":"_styles-module__img-sommaire-forum__CKiSb"};

var FrontCommentItem = function FrontCommentItem(_ref) {
  var _DataInt$first_level_;

  var donnees = _ref.donnees,
      DatasUserSession = _ref.DatasUserSession;

  var _useState = React.useState(donnees),
      DataInt = _useState[0],
      setDataInt = _useState[1];

  var _useState2 = React.useState(false),
      showLinks = _useState2[0];

  function generateUniqueID() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  var resetForm = function resetForm() {
    document.getElementById('form-response').reset();
  };

  var _useState3 = React.useState(''),
      response = _useState3[0],
      setResponse = _useState3[1];

  var submitReponse = function submitReponse(e, msg_id, _rps_id) {
    e.preventDefault();

    if (response.trim().length > 0) {
      var firstNameUserSession = DatasUserSession[0].user.firstName;
      var lastNameUserSession = DatasUserSession[0].user.lastName;
      var field = {
        content: response,
        id: generateUniqueID(),
        slug: generateUniqueID(),
        created_at: '22/04/2022',
        user: {
          firstName: firstNameUserSession,
          lastName: lastNameUserSession,
          avatar: '/mediafiles/avatars/default.png'
        }
      };
      var foundItem = DataInt.first_level_response.find(function (element) {
        return element.id === msg_id;
      });
      foundItem.second_level_response.push(field);
      setDataInt(DataInt);
      resetForm();
      setResponse('');
    }
  };

  return React__default.createElement("div", {
    className: styles.cardParent
  }, DataInt === null || DataInt === void 0 ? void 0 : (_DataInt$first_level_ = DataInt.first_level_response) === null || _DataInt$first_level_ === void 0 ? void 0 : _DataInt$first_level_.map(function (donnee) {
    var _donnee$user, _donnee$user2, _donnee$user3, _donnee$user4, _donnee$user5, _donnee$user6, _donnee$second_level_, _donnee$second_level_2;

    return React__default.createElement("div", {
      key: donnee.id
    }, React__default.createElement("div", {
      className: "row " + (showLinks ? styles.forumDiscussionLigneUnion : '')
    }, React__default.createElement("div", {
      className: "col-2"
    }, React__default.createElement("div", {
      className: styles.sommaireAvatarTitre
    }, React__default.createElement("div", {
      className: ""
    }, React__default.createElement("div", {
      className: "p1"
    }, React__default.createElement("img", {
      src: (donnee === null || donnee === void 0 ? void 0 : (_donnee$user = donnee.user) === null || _donnee$user === void 0 ? void 0 : _donnee$user.avatar) === '/mediafiles/avatars/default.png' ? "https://ui-avatars.com/api/?name=" + (donnee === null || donnee === void 0 ? void 0 : (_donnee$user2 = donnee.user) === null || _donnee$user2 === void 0 ? void 0 : _donnee$user2.firstName) + " + " + (donnee === null || donnee === void 0 ? void 0 : (_donnee$user3 = donnee.user) === null || _donnee$user3 === void 0 ? void 0 : _donnee$user3.lastName) : "" + (donnee === null || donnee === void 0 ? void 0 : (_donnee$user4 = donnee.user) === null || _donnee$user4 === void 0 ? void 0 : _donnee$user4.avatar),
      alt: "user-avatar",
      className: styles.imgSommaireForumDiscussion2
    }))), React__default.createElement("div", {
      className: " d-flex align-item-md-center"
    }, React__default.createElement("div", {
      className: styles.forumSommaireAuteurCard
    }, (donnee === null || donnee === void 0 ? void 0 : (_donnee$user5 = donnee.user) === null || _donnee$user5 === void 0 ? void 0 : _donnee$user5.firstName) + " " + (donnee === null || donnee === void 0 ? void 0 : (_donnee$user6 = donnee.user) === null || _donnee$user6 === void 0 ? void 0 : _donnee$user6.lastName))))), React__default.createElement("div", {
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
      "aria-controls": "collapseExample" + (donnee === null || donnee === void 0 ? void 0 : donnee.id),
      onClick: function onClick() {
      }
    }, React__default.createElement(bi.BiComment, {
      className: "mr-1"
    }), donnee === null || donnee === void 0 ? void 0 : (_donnee$second_level_ = donnee.second_level_response) === null || _donnee$second_level_ === void 0 ? void 0 : _donnee$second_level_.length, " ", "commentaires"), React__default.createElement("span", null, React__default.createElement(ai.AiOutlineClockCircle, {
      className: "mr-1"
    }), " ", donnee === null || donnee === void 0 ? void 0 : donnee.created_at))))), React__default.createElement("div", {
      className: "collapse",
      id: "collapseExample" + (donnee === null || donnee === void 0 ? void 0 : donnee.id)
    }, (_donnee$second_level_2 = donnee.second_level_response) === null || _donnee$second_level_2 === void 0 ? void 0 : _donnee$second_level_2.map(function (item) {
      var _item$user, _item$user2, _item$user3, _item$user4, _item$user5, _item$user6;

      return React__default.createElement("div", {
        key: item.id,
        className: "row " + (showLinks ? styles.forumDiscussionLigneUnion : '') + "\n                                            mb-3"
      }, React__default.createElement("div", {
        className: "col-3"
      }, React__default.createElement("div", {
        className: "row " + (showLinks ? styles.rowReponseLigneUnion1 : '')
      }, React__default.createElement("div", {
        className: "col-md-6"
      }, React__default.createElement("div", {
        className: "p1 d-flex justify-content-end"
      }, React__default.createElement("img", {
        src: (item === null || item === void 0 ? void 0 : (_item$user = item.user) === null || _item$user === void 0 ? void 0 : _item$user.avatar) === '/mediafiles/avatars/default.png' ? "https://ui-avatars.com/api/?name=" + (item === null || item === void 0 ? void 0 : (_item$user2 = item.user) === null || _item$user2 === void 0 ? void 0 : _item$user2.firstName) + " + " + (item === null || item === void 0 ? void 0 : (_item$user3 = item.user) === null || _item$user3 === void 0 ? void 0 : _item$user3.lastName) : "" + (item === null || item === void 0 ? void 0 : (_item$user4 = item.user) === null || _item$user4 === void 0 ? void 0 : _item$user4.avatar),
        alt: "user-avatar",
        className: styles.imgSommaireForumDiscussion2
      }))), React__default.createElement("div", {
        className: "col-md-6 d-flex align-item-md-center"
      }, React__default.createElement("div", {
        className: styles.forumSommaireAuteurCard
      }, (item === null || item === void 0 ? void 0 : (_item$user5 = item.user) === null || _item$user5 === void 0 ? void 0 : _item$user5.firstName) + " " + (item === null || item === void 0 ? void 0 : (_item$user6 = item.user) === null || _item$user6 === void 0 ? void 0 : _item$user6.lastName))))), React__default.createElement("div", {
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
      var _item$user7, _item$user8, _item$user9, _item$user10, _item$user11, _item$user12, _item$user13, _item$user14;

      return React__default.createElement("div", {
        className: "row " + (showLinks ? styles.rowReponseLigneUnion : ''),
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
        src: (item === null || item === void 0 ? void 0 : (_item$user7 = item.user) === null || _item$user7 === void 0 ? void 0 : _item$user7.avatar) === '/mediafiles/avatars/default.png' ? "https://ui-avatars.com/api/?name=" + (item === null || item === void 0 ? void 0 : (_item$user8 = item.user) === null || _item$user8 === void 0 ? void 0 : _item$user8.firstName) + " + " + (item === null || item === void 0 ? void 0 : (_item$user9 = item.user) === null || _item$user9 === void 0 ? void 0 : _item$user9.lastName) : "" + (item === null || item === void 0 ? void 0 : (_item$user10 = item.user) === null || _item$user10 === void 0 ? void 0 : _item$user10.avatar),
        alt: "user-avatar",
        className: styles.imgSommaireForumDiscussion2
      }))), React__default.createElement("div", {
        className: "col-md-6 d-flex align-item-md-center"
      }, React__default.createElement("div", {
        className: styles.forumSommaireAuteurCard
      }, (item === null || item === void 0 ? void 0 : (_item$user11 = item.user) === null || _item$user11 === void 0 ? void 0 : _item$user11.firstName) !== undefined || (item === null || item === void 0 ? void 0 : (_item$user12 = item.user) === null || _item$user12 === void 0 ? void 0 : _item$user12.lastName) !== undefined ? (item === null || item === void 0 ? void 0 : (_item$user13 = item.user) === null || _item$user13 === void 0 ? void 0 : _item$user13.firstName) + " " + (item === null || item === void 0 ? void 0 : (_item$user14 = item.user) === null || _item$user14 === void 0 ? void 0 : _item$user14.lastName) : "Anonyme")))), React__default.createElement("div", {
        className: "col-9"
      }, React__default.createElement("form", {
        className: 'mb-3',
        id: 'form-response'
      }, React__default.createElement("div", {
        className: "" + styles.forumCardSommaire
      }, React__default.createElement("div", {
        className: 'row'
      }, React__default.createElement("div", {
        className: 'col-12 pt-3 mb-md-4 mb-5'
      }, React__default.createElement("textarea", {
        className: 'form-control',
        placeholder: "R\xE9pondre",
        name: 'content',
        value: response,
        onChange: function onChange(e) {
          setResponse(e.target.value);
        }
      })))), React__default.createElement("button", {
        className: styles.formAddCguButtonAjouter,
        onClick: function onClick(e) {
          return submitReponse(e, donnee.id);
        }
      }, "Ajouter"))));
    })));
  }));
};

var Discussion = function Discussion(_ref) {
  var _donnees$author, _donnees$author2, _donnees$author3, _donnees$author4, _donnees$author5, _donnees$author6, _donnees$author7, _donnees$author8;

  var onAddResponseComment = _ref.onAddResponseComment,
      datasUserSession = _ref.datasUserSession;

  var _useParams = reactRouterDom.useParams(),
      slug = _useParams.slug;

  var location = reactRouterDom.useLocation();
  var Datas = location === null || location === void 0 ? void 0 : location.state;
  var msg_item = Datas === null || Datas === void 0 ? void 0 : Datas.filter(function (ele) {
    return ele.slug === slug;
  });

  var _useState = React.useState(msg_item[0]),
      donnees = _useState[0],
      setDonnees = _useState[1];

  var donneesInt = donnees;

  function generateUniqueID() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  }

  var resetForm = function resetForm() {
    document.getElementById('add_msg_form').reset();
  };

  var _useState2 = React.useState(''),
      comment = _useState2[0],
      setComment = _useState2[1];

  var submitComment = function submitComment(e) {
    e.preventDefault();

    if (comment.trim().length > 0) {
      var firstNameUserSession = datasUserSession[0].user.firstName;
      var lastNameUserSession = datasUserSession[0].user.lastName;
      var field = {
        content: comment,
        id: generateUniqueID(),
        slug: generateUniqueID(),
        created_at: '22/04/2022',
        user: {
          firstName: firstNameUserSession,
          lastName: lastNameUserSession,
          avatar: '/mediafiles/avatars/default.png'
        },
        second_level_response: []
      };
      donneesInt.first_level_response.push(field);
      setDonnees(donneesInt);
      resetForm();
      setComment('');
    }
  };

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
    src: (donnees === null || donnees === void 0 ? void 0 : (_donnees$author = donnees.author) === null || _donnees$author === void 0 ? void 0 : _donnees$author.avatar) === '/mediafiles/avatars/default.png' ? "https://ui-avatars.com/api/?name=" + (donnees === null || donnees === void 0 ? void 0 : (_donnees$author2 = donnees.author) === null || _donnees$author2 === void 0 ? void 0 : _donnees$author2.firstName) + " + " + (donnees === null || donnees === void 0 ? void 0 : (_donnees$author3 = donnees.author) === null || _donnees$author3 === void 0 ? void 0 : _donnees$author3.lastName) : "" + (donnees === null || donnees === void 0 ? void 0 : (_donnees$author4 = donnees.author) === null || _donnees$author4 === void 0 ? void 0 : _donnees$author4.avatar),
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
  }), " ", "Par", " ", (donnees === null || donnees === void 0 ? void 0 : (_donnees$author5 = donnees.author) === null || _donnees$author5 === void 0 ? void 0 : _donnees$author5.firstName) !== undefined || (donnees === null || donnees === void 0 ? void 0 : (_donnees$author6 = donnees.author) === null || _donnees$author6 === void 0 ? void 0 : _donnees$author6.lastName) !== undefined ? (donnees === null || donnees === void 0 ? void 0 : (_donnees$author7 = donnees.author) === null || _donnees$author7 === void 0 ? void 0 : _donnees$author7.firstName) + " " + (donnees === null || donnees === void 0 ? void 0 : (_donnees$author8 = donnees.author) === null || _donnees$author8 === void 0 ? void 0 : _donnees$author8.lastName) : "Anonyme"))), React__default.createElement("div", {
    className: "row"
  }, React__default.createElement("div", {
    className: "col-12 pt-3"
  }, React__default.createElement("p", {
    className: styles.textSommaireForum
  }, donnees.initialContent)))), React__default.createElement(FrontCommentItem, {
    donnees: donnees,
    onAddResponseComment: onAddResponseComment,
    DatasUserSession: datasUserSession
  }), React__default.createElement("span", {
    className: styles.divSeparateur
  }), React__default.createElement("div", {
    className: "\n\t\t\t\t\t\t\trow\n\t\t\t\t\t\t\t" + styles.rowReponse + "\n\t\t\t\t\t\t"
  }, datasUserSession === null || datasUserSession === void 0 ? void 0 : datasUserSession.map(function (item) {
    var _item$user, _item$user2, _item$user3, _item$user4, _item$user5, _item$user6, _item$user7, _item$user8;

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
      src: (item === null || item === void 0 ? void 0 : (_item$user = item.user) === null || _item$user === void 0 ? void 0 : _item$user.avatar) === '/mediafiles/avatars/default.png' ? "https://ui-avatars.com/api/?name=" + (item === null || item === void 0 ? void 0 : (_item$user2 = item.user) === null || _item$user2 === void 0 ? void 0 : _item$user2.firstName) + " + " + (item === null || item === void 0 ? void 0 : (_item$user3 = item.user) === null || _item$user3 === void 0 ? void 0 : _item$user3.lastName) : "" + (item === null || item === void 0 ? void 0 : (_item$user4 = item.user) === null || _item$user4 === void 0 ? void 0 : _item$user4.avatar),
      alt: "user-avatar",
      className: styles.imgSommaireForumDiscussion2
    }))), React__default.createElement("div", {
      className: " d-flex align-item-md-center"
    }, React__default.createElement("div", {
      className: styles.forumSommaireAuteurCard
    }, (item === null || item === void 0 ? void 0 : (_item$user5 = item.user) === null || _item$user5 === void 0 ? void 0 : _item$user5.firstName) !== undefined || (item === null || item === void 0 ? void 0 : (_item$user6 = item.user) === null || _item$user6 === void 0 ? void 0 : _item$user6.lastName) !== undefined ? (item === null || item === void 0 ? void 0 : (_item$user7 = item.user) === null || _item$user7 === void 0 ? void 0 : _item$user7.firstName) + " " + (item === null || item === void 0 ? void 0 : (_item$user8 = item.user) === null || _item$user8 === void 0 ? void 0 : _item$user8.lastName) : "Anonyme")))), React__default.createElement("div", {
      className: "col-10"
    }, React__default.createElement("form", {
      className: 'mb-3'
    }, React__default.createElement("div", {
      className: "" + styles.forumCardSommaire
    }, React__default.createElement("div", {
      className: 'row'
    }, React__default.createElement("div", {
      className: 'col-12 pt-3 mb-md-4 mb-5'
    }, React__default.createElement("textarea", {
      className: 'form-control',
      placeholder: "R\xE9pondre",
      name: 'content',
      value: comment,
      onChange: function onChange(e) {
        setComment(e.target.value);
      }
    })))), React__default.createElement("button", {
      className: styles.formAddCguButtonAjouter,
      onClick: submitComment
    }, "Ajouter"))));
  }))))));
};

var SommaireItem = function SommaireItem(_ref) {
  var Datas = _ref.Datas;
  return React__default.createElement("div", null, Datas.length > 0 ? Datas.map(function (item) {
    var _item$author, _item$author2, _item$author3, _item$author4, _item$author5, _item$author6, _item$author7, _item$author8, _item$user_comments, _item$user_comments2, _item$user_comments3, _item$first_level_res;

    return React__default.createElement(reactRouterDom.NavLink, {
      className: styles.navigationLink,
      to: {
        pathname: "/forum-discussion/" + item.slug
      },
      state: Datas,
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
      src: (item === null || item === void 0 ? void 0 : (_item$author = item.author) === null || _item$author === void 0 ? void 0 : _item$author.avatar) === '/mediafiles/avatars/default.png' ? "https://ui-avatars.com/api/?name=" + (item === null || item === void 0 ? void 0 : (_item$author2 = item.author) === null || _item$author2 === void 0 ? void 0 : _item$author2.firstName) + " + " + (item === null || item === void 0 ? void 0 : (_item$author3 = item.author) === null || _item$author3 === void 0 ? void 0 : _item$author3.lastName) : "" + (item === null || item === void 0 ? void 0 : (_item$author4 = item.author) === null || _item$author4 === void 0 ? void 0 : _item$author4.avatar),
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
    }), "Par", " ", (item === null || item === void 0 ? void 0 : (_item$author5 = item.author) === null || _item$author5 === void 0 ? void 0 : _item$author5.firstName) !== undefined || (item === null || item === void 0 ? void 0 : (_item$author6 = item.author) === null || _item$author6 === void 0 ? void 0 : _item$author6.lastName) !== undefined ? (item === null || item === void 0 ? void 0 : (_item$author7 = item.author) === null || _item$author7 === void 0 ? void 0 : _item$author7.firstName) + " " + (item === null || item === void 0 ? void 0 : (_item$author8 = item.author) === null || _item$author8 === void 0 ? void 0 : _item$author8.lastName) : "Anonyme"))), React__default.createElement("div", {
      className: "row"
    }, React__default.createElement("div", {
      className: "col-lg-9 pt-3"
    }, React__default.createElement("p", {
      className: styles.textSommaireForum
    }, item === null || item === void 0 ? void 0 : item.initialContent)), React__default.createElement("div", {
      className: "col-lg-3"
    }, React__default.createElement("div", {
      className: styles.sommaireForumUserChat
    }, item === null || item === void 0 ? void 0 : (_item$user_comments = item.user_comments) === null || _item$user_comments === void 0 ? void 0 : _item$user_comments.slice(0, 4).map(function (comment) {
      var _comment$user, _comment$user2, _comment$user3, _comment$user4;

      return React__default.createElement("img", {
        src: (comment === null || comment === void 0 ? void 0 : (_comment$user = comment.user) === null || _comment$user === void 0 ? void 0 : _comment$user.avatar) === '/mediafiles/avatars/default.png' ? "https://ui-avatars.com/api/?name=" + (comment === null || comment === void 0 ? void 0 : (_comment$user2 = comment.user) === null || _comment$user2 === void 0 ? void 0 : _comment$user2.firstName) + " + " + (comment === null || comment === void 0 ? void 0 : (_comment$user3 = comment.user) === null || _comment$user3 === void 0 ? void 0 : _comment$user3.lastName) : "" + (comment === null || comment === void 0 ? void 0 : (_comment$user4 = comment.user) === null || _comment$user4 === void 0 ? void 0 : _comment$user4.avatar),
        key: comment === null || comment === void 0 ? void 0 : comment.id,
        alt: "user-avatar",
        className: styles.divSommaireForumUserChat2
      });
    }), React__default.createElement("div", {
      className: styles.divSommaireForumUserChat5
    }, React__default.createElement("div", {
      className: styles.troisPoints
    }, "\n                                    " + ((item === null || item === void 0 ? void 0 : (_item$user_comments2 = item.user_comments) === null || _item$user_comments2 === void 0 ? void 0 : _item$user_comments2.length) > 4 ? (item === null || item === void 0 ? void 0 : (_item$user_comments3 = item.user_comments) === null || _item$user_comments3 === void 0 ? void 0 : _item$user_comments3.length) - 4 + "+" : "...") + "\n                                "))), React__default.createElement("div", {
      className: styles.divNombreCommentaireSommaireForum
    }, React__default.createElement("p", {
      className: styles.nombreCommentaireSommaireForum
    }, React__default.createElement(bs.BsChat, {
      className: "mr-1"
    }), " ", item === null || item === void 0 ? void 0 : (_item$first_level_res = item.first_level_response) === null || _item$first_level_res === void 0 ? void 0 : _item$first_level_res.length, " Commentaires"))))));
  }) : React__default.createElement("div", {
    className: "card-contacts-main-content mt-5"
  }, React__default.createElement("div", {
    className: "row div-card"
  }, React__default.createElement("div", {
    className: "col-12 " + styles.emptySubjectMessage + " alert alert-warning",
    role: "alert"
  }, React__default.createElement("h4", {
    className: "admin-contacts-title text-center"
  }, "Pas de sujet de discussion"), React__default.createElement("p", null, "Appuyer sur le boutton ", React__default.createElement("span", {
    className: "" + styles.emptySubjectMessageBtnPlus
  }, "+"), " en bas pour ajouter des sujet !!")))));
};

var Sommaire = function Sommaire(_ref) {
  var Datas = _ref.Datas;

  var _useState = React.useState(false),
      hideButton = _useState[0],
      setHideButton = _useState[1];

  var toggleHideButton = function toggleHideButton() {
    setHideButton(!hideButton);
  };

  return React__default.createElement("div", {
    className: styles.componentListeProjet
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
  }, React__default.createElement(SommaireItem, {
    Datas: Datas
  }), React__default.createElement("button", {
    type: "button",
    className: "btn " + styles.btnAjoutSujet,
    "data-toggle": "modal",
    "data-target": "#exampleModal"
  }, "+"), React__default.createElement("button", {
    type: "button",
    className: "btn " + styles.btnConnexion + " \n                " + (hideButton ? styles.hideButton : '') + "\n                  ",
    onClick: function onClick() {
      toggleHideButton();
    },
    "data-toggle": "modal",
    "data-target": "#exampleModalhuit"
  }, "Connection"))))));
};

var VolkenoForumy = function VolkenoForumy(_ref) {
  var props = _extends({}, _ref);

  var Datas = props.Datas,
      DatasUserSession = props.DatasUserSession;

  var onSubmitMessageResponse = function onSubmitMessageResponse(subject, commentText) {
    console.log('sujet', subject);
    var field = {
      content: commentText,
      user: {
        firstName: "Paul",
        lastName: "Gomis",
        avatar: '/mediafiles/avatars/default.png'
      }
    };
    Datas = subject.first_level_response.push(field);
    console.log('date', Datas);
  };

  var onAddResponseComment = function onAddResponseComment(subject, comment, commentText) {
    console.log(subject, comment, commentText);
  };

  return React.createElement(reactRouterDom.BrowserRouter, null, React.createElement("div", {
    className: "router-container"
  }, React.createElement(reactRouterDom.Routes, null, React.createElement(reactRouterDom.Route, {
    path: "/",
    element: React.createElement(Sommaire, {
      Datas: Datas
    })
  }), React.createElement(reactRouterDom.Route, {
    path: "/forum-discussion/:slug",
    element: React.createElement(Discussion, {
      onAddComment: onSubmitMessageResponse,
      onAddResponseComment: onAddResponseComment,
      datasUserSession: DatasUserSession
    })
  }))));
};

exports.VolkenoForumy = VolkenoForumy;
//# sourceMappingURL=index.js.map
