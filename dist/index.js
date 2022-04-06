function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var styles = {"test":"_styles-module__test__3ybTi","contentViewStart":"_styles-module__contentViewStart__vMiGT","containerCayore":"_styles-module__containerCayore__zRBck","bannerListeProjet":"_styles-module__bannerListeProjet__zERCC","titreBannerListeProjet":"_styles-module__titreBannerListeProjet__cjRbQ","forumCardSommaire":"_styles-module__forumCardSommaire__3HiKz","forum-card-taille":"_styles-module__forum-card-taille__1eBJ7","forumCardSommaireFixWidth":"_styles-module__forumCardSommaireFixWidth__2uXL-","forum-card-skeleton-fix-width":"_styles-module__forum-card-skeleton-fix-width__2V2Qy","avatarSkeleton":"_styles-module__avatarSkeleton__1jx2o","avatarArticleSkeleton":"_styles-module__avatarArticleSkeleton__vRP36","contentSkeleton":"_styles-module__contentSkeleton__3H1kl","contentSkeleton2":"_styles-module__contentSkeleton2__10yh-","contentSkeletonUser":"_styles-module__contentSkeletonUser__zGOQu","contentSkeletonPara":"_styles-module__contentSkeletonPara__186w2","contentSkeletonPara2":"_styles-module__contentSkeletonPara2__3ncCE","cardSommaireDateAjout":"_styles-module__cardSommaireDateAjout__3TZlv","img-sommaire-forum":"_styles-module__img-sommaire-forum__CKiSb","img-sommaire-forum-discussion":"_styles-module__img-sommaire-forum-discussion__1lAQf","titreSommaireForum":"_styles-module__titreSommaireForum__lypzQ","forumSommaireAuteurCard":"_styles-module__forumSommaireAuteurCard__3ovWR","textSommaireForum":"_styles-module__textSommaireForum__R0WUA","sommaireForumUserChat":"_styles-module__sommaireForumUserChat__2fmvg","divNombreCommentaireSommaireForum":"_styles-module__divNombreCommentaireSommaireForum__3VGq1","div-sommaire-forum-user-chat1":"_styles-module__div-sommaire-forum-user-chat1__3rVPT","div-sommaire-forum-user-chat2":"_styles-module__div-sommaire-forum-user-chat2__112Ze","div-sommaire-forum-user-chat3":"_styles-module__div-sommaire-forum-user-chat3__PIEgK","div-sommaire-forum-user-chat4":"_styles-module__div-sommaire-forum-user-chat4__2-YEl","divSommaireForumUserChat5":"_styles-module__divSommaireForumUserChat5__Ms10U","divSommaireForumUserChat2":"_styles-module__divSommaireForumUserChat2__n-NHS","divSommaireForumUserChat3":"_styles-module__divSommaireForumUserChat3__1qa_i","divSommaireForumUserChat4":"_styles-module__divSommaireForumUserChat4__2PTKK","imgSommaireForumUserChat":"_styles-module__imgSommaireForumUserChat__WUnJj","nombreCommentaireSommaireForum":"_styles-module__nombreCommentaireSommaireForum__CZnT8","troisPoints":"_styles-module__troisPoints__1NUMh","sommaireAvatarTitre":"_styles-module__sommaireAvatarTitre__pLURL","card-discussion-heure-vu":"_styles-module__card-discussion-heure-vu__3dK_D","card-discussion-heure-commentaire":"_styles-module__card-discussion-heure-commentaire__ha-BC","card-discussion-heure-vu-laurhille":"_styles-module__card-discussion-heure-vu-laurhille__35Bmn","card-discussion-commentaire":"_styles-module__card-discussion-commentaire__17jE_","img-sommaire-forum-discussion2":"_styles-module__img-sommaire-forum-discussion2__3Wu6c","div-separateur":"_styles-module__div-separateur__JqWLR","row-input":"_styles-module__row-input__GLjv2","row-reponse":"_styles-module__row-reponse__x3w6R","row-reponse-ligne-union":"_styles-module__row-reponse-ligne-union__2905Z","row-reponse-ligne-union1":"_styles-module__row-reponse-ligne-union1__2_YyU","forum-discussion-ligne-union":"_styles-module__forum-discussion-ligne-union___ranC","offline-alert-card":"_styles-module__offline-alert-card__wh7If","offline-alert-textual":"_styles-module__offline-alert-textual__3oC-v","redirect-to-login-btn":"_styles-module__redirect-to-login-btn__1ZnBs","card-parent":"_styles-module__card-parent__9AC6h","sommaire-avatar-titre":"_styles-module__sommaire-avatar-titre__39Vol","loginContainer":"_styles-module__loginContainer__m4gZP","forumContainer":"_styles-module__forumContainer__1-B4b","forumTitle":"_styles-module__forumTitle__1Tjly","authForm":"_styles-module__authForm__JFfPL","inputCol":"_styles-module__inputCol__9zGxr","submitBtnRow":"_styles-module__submitBtnRow__2wz7g","authSubmitBtn":"_styles-module__authSubmitBtn__1IFDi","formAddCguInput":"_styles-module__formAddCguInput__1ICK-","formControl":"_styles-module__formControl__1vyEq"};

var Ajoutersujet = function Ajoutersujet() {
  return React__default.createElement("div", {
    className: styles.loginContainer
  }, React__default.createElement("div", {
    className: 'auth-form-body'
  }, React__default.createElement("div", {
    className: 'auth-row-container'
  }, React__default.createElement("div", {
    className: styles.forumContainer
  }, React__default.createElement("div", {
    className: 'log-div'
  }, React__default.createElement("h2", {
    className: styles.forumTitle
  }, "Ajoutez un sujet")), React__default.createElement("form", {
    className: 'login-form'
  }, React__default.createElement("div", {
    className: styles.authForm
  }, React__default.createElement("div", {
    className: styles.inputCol
  }, React__default.createElement("div", {
    className: 'form-group'
  }, React__default.createElement("label", null, "Titre"), React__default.createElement("input", {
    type: 'text',
    className: styles.formControl,
    placeholder: 'Ajouter un titre'
  }))), React__default.createElement("div", {
    className: styles.inputCol
  }, React__default.createElement("div", {
    className: 'form-group'
  }, React__default.createElement("label", null, "Contenu"), React__default.createElement("textarea", {
    style: {
      height: 150
    },
    className: styles.formControl,
    id: 'riskAndChallenge',
    name: 'contenu',
    placeholder: 'Contenu'
  })))), React__default.createElement("div", {
    className: styles.submitBtnRow
  }, React__default.createElement("div", {
    className: 'col-md-12 auth-submit-col'
  }, React__default.createElement("button", {
    type: 'submit',
    className: styles.authSubmitBtn
  }, "Ajouter"))))))));
};

var VolkenoForumy = function VolkenoForumy() {
  return React.createElement("div", null, React.createElement(Ajoutersujet, null));
};

exports.VolkenoForumy = VolkenoForumy;
//# sourceMappingURL=index.js.map
