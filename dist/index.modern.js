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

  return React__default.createElement("form", null, React__default.createElement("div", {
    className: `${styles.forumCardSommaire}`
  }, React__default.createElement("div", {
    className: 'row'
  }, React__default.createElement("div", {
    className: 'col-12 pt-3 mb-md-4 mb-5'
  }, React__default.createElement("textarea", {
    className: 'form-control',
    placeholder: 'R\u00E9pondre',
    name: 'content',
    value: comment,
    onChange: e => {
      setComment(e.target.value);
    }
  })))), React__default.createElement("button", {
    className: styles.formAddCguButtonAjouter,
    onClick: submitReponse
  }, "Ajouter"));
}

const FrontCommentItem = ({
  donnees,
  onAddResponseComment,
  DatasUserSession
}) => {
  var _donnees$first_level_;

  return React__default.createElement("div", {
    className: styles.cardParent
  }, donnees === null || donnees === void 0 ? void 0 : (_donnees$first_level_ = donnees.first_level_response) === null || _donnees$first_level_ === void 0 ? void 0 : _donnees$first_level_.map(donnee => {
    var _donnee$user, _donnee$user2, _donnee$user3, _donnee$user4, _donnee$user5, _donnee$user6, _donnee$second_level_, _donnee$second_level_2;

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
      src: (donnee === null || donnee === void 0 ? void 0 : (_donnee$user = donnee.user) === null || _donnee$user === void 0 ? void 0 : _donnee$user.avatar) === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${donnee === null || donnee === void 0 ? void 0 : (_donnee$user2 = donnee.user) === null || _donnee$user2 === void 0 ? void 0 : _donnee$user2.firstName} + ${donnee === null || donnee === void 0 ? void 0 : (_donnee$user3 = donnee.user) === null || _donnee$user3 === void 0 ? void 0 : _donnee$user3.lastName}` : `${donnee === null || donnee === void 0 ? void 0 : (_donnee$user4 = donnee.user) === null || _donnee$user4 === void 0 ? void 0 : _donnee$user4.avatar}`,
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
      href: `#collapseExample${donnee === null || donnee === void 0 ? void 0 : donnee.id}`,
      role: "button",
      "aria-expanded": "false",
      "aria-controls": `collapseExample${donnee === null || donnee === void 0 ? void 0 : donnee.id}`
    }, React__default.createElement(BiComment, {
      className: "mr-1"
    }), donnee === null || donnee === void 0 ? void 0 : (_donnee$second_level_ = donnee.second_level_response) === null || _donnee$second_level_ === void 0 ? void 0 : _donnee$second_level_.length, " ", "commentaires"), React__default.createElement("span", null, React__default.createElement(AiOutlineClockCircle, {
      className: "mr-1"
    }), " ", donnee === null || donnee === void 0 ? void 0 : donnee.created_at))))), React__default.createElement("div", {
      className: "collapse",
      id: `collapseExample${donnee.id}`
    }, (_donnee$second_level_2 = donnee.second_level_response) === null || _donnee$second_level_2 === void 0 ? void 0 : _donnee$second_level_2.map(item => {
      var _item$user, _item$user2, _item$user3, _item$user4, _item$user5, _item$user6;

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
        src: (item === null || item === void 0 ? void 0 : (_item$user = item.user) === null || _item$user === void 0 ? void 0 : _item$user.avatar) === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${item === null || item === void 0 ? void 0 : (_item$user2 = item.user) === null || _item$user2 === void 0 ? void 0 : _item$user2.firstName} + ${item === null || item === void 0 ? void 0 : (_item$user3 = item.user) === null || _item$user3 === void 0 ? void 0 : _item$user3.lastName}` : `${item === null || item === void 0 ? void 0 : (_item$user4 = item.user) === null || _item$user4 === void 0 ? void 0 : _item$user4.avatar}`,
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
    }), DatasUserSession.map(item => {
      var _item$user7, _item$user8, _item$user9, _item$user10, _item$user11, _item$user12, _item$user13, _item$user14;

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
        src: (item === null || item === void 0 ? void 0 : (_item$user7 = item.user) === null || _item$user7 === void 0 ? void 0 : _item$user7.avatar) === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${item === null || item === void 0 ? void 0 : (_item$user8 = item.user) === null || _item$user8 === void 0 ? void 0 : _item$user8.firstName} + ${item === null || item === void 0 ? void 0 : (_item$user9 = item.user) === null || _item$user9 === void 0 ? void 0 : _item$user9.lastName}` : `${item === null || item === void 0 ? void 0 : (_item$user10 = item.user) === null || _item$user10 === void 0 ? void 0 : _item$user10.avatar}`,
        alt: "user-avatar",
        className: styles.imgSommaireForumDiscussion2
      }))), React__default.createElement("div", {
        className: "col-md-6 d-flex align-item-md-center"
      }, React__default.createElement("div", {
        className: styles.forumSommaireAuteurCard
      }, (item === null || item === void 0 ? void 0 : (_item$user11 = item.user) === null || _item$user11 === void 0 ? void 0 : _item$user11.firstName) !== undefined || (item === null || item === void 0 ? void 0 : (_item$user12 = item.user) === null || _item$user12 === void 0 ? void 0 : _item$user12.lastName) !== undefined ? (item === null || item === void 0 ? void 0 : (_item$user13 = item.user) === null || _item$user13 === void 0 ? void 0 : _item$user13.firstName) + " " + (item === null || item === void 0 ? void 0 : (_item$user14 = item.user) === null || _item$user14 === void 0 ? void 0 : _item$user14.lastName) : "Anonyme")))), React__default.createElement("div", {
        className: "col-9"
      }, React__default.createElement(AjoutComments, {
        onSubmit: comment => {
          onAddResponseComment(donnees, donnee, comment);
        }
      })));
    })));
  }));
};

const Discussion = ({
  onAddComment,
  onAddResponseComment
}) => {
  var _donnees$author, _donnees$author2, _donnees$author3, _donnees$author4, _donnees$author5, _donnees$author6, _donnees$author7, _donnees$author8;

  let location = useLocation();
  const donnees = location === null || location === void 0 ? void 0 : location.state;
  const DatasUserSession = [{
    id: 1,
    user: {
      firstName: "Me",
      lastName: "",
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
  }, React__default.createElement("span", null, React__default.createElement(AiOutlineClockCircle, {
    className: "mr-1"
  }), " ", donnees === null || donnees === void 0 ? void 0 : donnees.created_at)), React__default.createElement("div", {
    className: styles.sommaireAvatarTitre
  }, React__default.createElement("div", {
    className: ""
  }, React__default.createElement("div", {
    className: "p1"
  }, React__default.createElement("img", {
    src: (donnees === null || donnees === void 0 ? void 0 : (_donnees$author = donnees.author) === null || _donnees$author === void 0 ? void 0 : _donnees$author.avatar) === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${donnees === null || donnees === void 0 ? void 0 : (_donnees$author2 = donnees.author) === null || _donnees$author2 === void 0 ? void 0 : _donnees$author2.firstName} + ${donnees === null || donnees === void 0 ? void 0 : (_donnees$author3 = donnees.author) === null || _donnees$author3 === void 0 ? void 0 : _donnees$author3.lastName}` : `${donnees === null || donnees === void 0 ? void 0 : (_donnees$author4 = donnees.author) === null || _donnees$author4 === void 0 ? void 0 : _donnees$author4.avatar}`,
    alt: "user-avatar",
    className: styles.imgSommaireForumDiscussion
  }))), React__default.createElement("div", {
    className: ""
  }, React__default.createElement("h3", {
    className: styles.titreSommaireForum
  }, donnees === null || donnees === void 0 ? void 0 : donnees.initialTitle), React__default.createElement("div", {
    className: styles.forumSommairAauteurCard
  }, React__default.createElement(IoReturnDownBackOutline, {
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
    DatasUserSession: DatasUserSession
  }), React__default.createElement("span", {
    className: styles.divSeparateur
  }), React__default.createElement("div", {
    className: styles.rowReponse
  }, DatasUserSession === null || DatasUserSession === void 0 ? void 0 : DatasUserSession.map(item => {
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
      src: (item === null || item === void 0 ? void 0 : (_item$user = item.user) === null || _item$user === void 0 ? void 0 : _item$user.avatar) === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${item === null || item === void 0 ? void 0 : (_item$user2 = item.user) === null || _item$user2 === void 0 ? void 0 : _item$user2.firstName} + ${item === null || item === void 0 ? void 0 : (_item$user3 = item.user) === null || _item$user3 === void 0 ? void 0 : _item$user3.lastName}` : `${item === null || item === void 0 ? void 0 : (_item$user4 = item.user) === null || _item$user4 === void 0 ? void 0 : _item$user4.avatar}`,
      alt: "user-avatar",
      className: styles.imgSommaireForumDiscussion2
    }))), React__default.createElement("div", {
      className: " d-flex align-item-md-center"
    }, React__default.createElement("div", {
      className: styles.forumSommaireAuteurCard
    }, (item === null || item === void 0 ? void 0 : (_item$user5 = item.user) === null || _item$user5 === void 0 ? void 0 : _item$user5.firstName) !== undefined || (item === null || item === void 0 ? void 0 : (_item$user6 = item.user) === null || _item$user6 === void 0 ? void 0 : _item$user6.lastName) !== undefined ? (item === null || item === void 0 ? void 0 : (_item$user7 = item.user) === null || _item$user7 === void 0 ? void 0 : _item$user7.firstName) + " " + (item === null || item === void 0 ? void 0 : (_item$user8 = item.user) === null || _item$user8 === void 0 ? void 0 : _item$user8.lastName) : "Anonyme")))), React__default.createElement("div", {
      className: "col-10"
    }, React__default.createElement(AjoutComments, {
      onSubmit: comment => {
        onAddComment(donnees, comment);
      }
    })));
  }))))));
};

const SommaireItem = ({
  Datas
}) => {
  return React__default.createElement("div", null, (Datas === null || Datas === void 0 ? void 0 : Datas.length) > 0 ? Datas.map(item => {
    var _item$author, _item$author2, _item$author3, _item$author4, _item$author5, _item$author6, _item$author7, _item$author8, _item$user_comments, _item$user_comments2, _item$user_comments3, _item$first_level_res;

    return React__default.createElement(NavLink, {
      className: styles.navigationLink,
      to: {
        pathname: `/forum-discussion/${item.slug}`
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
      src: (item === null || item === void 0 ? void 0 : (_item$author = item.author) === null || _item$author === void 0 ? void 0 : _item$author.avatar) === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${item === null || item === void 0 ? void 0 : (_item$author2 = item.author) === null || _item$author2 === void 0 ? void 0 : _item$author2.firstName} + ${item === null || item === void 0 ? void 0 : (_item$author3 = item.author) === null || _item$author3 === void 0 ? void 0 : _item$author3.lastName}` : `${item === null || item === void 0 ? void 0 : (_item$author4 = item.author) === null || _item$author4 === void 0 ? void 0 : _item$author4.avatar}`,
      alt: "user-avatar",
      className: styles.imgSommaireForum
    }))), React__default.createElement("div", {
      className: ""
    }, React__default.createElement("h3", {
      className: styles.titreSommaireForum
    }, item === null || item === void 0 ? void 0 : item.initialTitle), React__default.createElement("div", {
      className: styles.forumSommaireAuteurCard
    }, React__default.createElement(IoReturnDownBackOutline, {
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
    }, item === null || item === void 0 ? void 0 : (_item$user_comments = item.user_comments) === null || _item$user_comments === void 0 ? void 0 : _item$user_comments.slice(0, 4).map(comment => {
      var _comment$user, _comment$user2, _comment$user3, _comment$user4;

      return React__default.createElement("img", {
        src: (comment === null || comment === void 0 ? void 0 : (_comment$user = comment.user) === null || _comment$user === void 0 ? void 0 : _comment$user.avatar) === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${comment === null || comment === void 0 ? void 0 : (_comment$user2 = comment.user) === null || _comment$user2 === void 0 ? void 0 : _comment$user2.firstName} + ${comment === null || comment === void 0 ? void 0 : (_comment$user3 = comment.user) === null || _comment$user3 === void 0 ? void 0 : _comment$user3.lastName}` : `${comment === null || comment === void 0 ? void 0 : (_comment$user4 = comment.user) === null || _comment$user4 === void 0 ? void 0 : _comment$user4.avatar}`,
        key: comment === null || comment === void 0 ? void 0 : comment.id,
        alt: "user-avatar",
        className: styles.divSommaireForumUserChat2
      });
    }), React__default.createElement("div", {
      className: styles.divSommaireForumUserChat5
    }, React__default.createElement("div", {
      className: styles.troisPoints
    }, `
                                    ${(item === null || item === void 0 ? void 0 : (_item$user_comments2 = item.user_comments) === null || _item$user_comments2 === void 0 ? void 0 : _item$user_comments2.length) > 4 ? (item === null || item === void 0 ? void 0 : (_item$user_comments3 = item.user_comments) === null || _item$user_comments3 === void 0 ? void 0 : _item$user_comments3.length) - 4 + "+" : "..."}
                                `))), React__default.createElement("div", {
      className: styles.divNombreCommentaireSommaireForum
    }, React__default.createElement("p", {
      className: styles.nombreCommentaireSommaireForum
    }, React__default.createElement(BsChat, {
      className: "mr-1"
    }), " ", item === null || item === void 0 ? void 0 : (_item$first_level_res = item.first_level_response) === null || _item$first_level_res === void 0 ? void 0 : _item$first_level_res.length, " Commentaires"))))));
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

const Sommaire = ({
  Datas
}) => {
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
  }, React__default.createElement(SommaireItem, {
    Datas: Datas
  }), React__default.createElement("button", {
    type: "button",
    className: "btn btn-primary btn-ajout-sujet",
    "data-toggle": "modal",
    "data-target": "#exampleModal"
  }, "Ajouter un sujet"))))));
};

const VolkenoForumy = ({ ...props
}) => {
  const {
    data
  } = props;

  const onAddComment = (subject, commentText) => {
    console.log(subject, commentText);
  };

  const onAddResponseComment = (subject, comment, commentText) => {
    console.log(subject, comment, commentText);
  };

  return createElement(BrowserRouter, null, createElement("div", {
    className: "router-container"
  }, createElement(Routes, null, createElement(Route, {
    path: "/",
    element: createElement(Sommaire, {
      Datas: data
    })
  }), createElement(Route, {
    path: "/forum-discussion/:id",
    element: createElement(Discussion, {
      onAddComment: onAddComment,
      onAddResponseComment: onAddResponseComment
    })
  }))));
};

export { VolkenoForumy };
//# sourceMappingURL=index.modern.js.map
