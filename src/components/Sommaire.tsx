import React from 'react'
import styles from '../styles.module.css'
// import avatar from './avatar.jpeg'

// interface Props {
//     text: string
// }

function Sommaire() {
    return (
        <div className="component-liste-projet">
          {/* <FrontHeaderV2 /> */}
          <div className={styles.contentViewStart}>
            <div className={styles.bannerListeProjet}>
              <h3 className={styles.titreBannerListeProjet}>
                De la discussion, jaillit la lumière
              </h3>
            </div>
            <div className={styles.containerCayore}>
              <div className="row align-items-center" style={{ margin: "3rem 0" }}>
              <div className="col-12">
                {/* {hasTokenExpired ||
                hasTokenExpired === undefined ||
                hasTokenExpired === null ? ( */}
                  {/* <div className="card-contacts-main-content offline-alert-container">
                    <div className="row div-card offline-alert-card">
                      <div className="col-12 offline-alert-col">
                        <div className="admin-contacts-title text-center offline-alert-textual">
                          <span>
                            Vous devez être connecté pour participer au forum.
                          </span>
                          <Link
                            to="/connexion"
                            className="btn btn-success redirect-to-login-btn"
                          >
                            Se connecter
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div> */}
                {/* ) : forum_data.isLoading ? (
                    [...Array(3)].map((item, index) => (
                        <SommaireSkeleton key={index}/>
                    ))
                  
                ) : forum_data.data.length > 0 ? (
                  forum_data.data.map((item) => { */}
                    {/* return ( */}
                      {/* <NavLink
                        className=""
                        to={{
                          pathname: `/forum-discussion/${item.id}`,
                          state: { item },
                        }}
                        key={item.id}
                        onClick={() => {
                          getForumData(item);
                        }}
                      > */}
                        
                        <div className={
                            // card card-body 
                            styles.forumCardSommaire 
                            // styles.forumCardSommaireFixWidth
                            }>
                          <div className={styles.cardSommaireDateAjout}>
                            {/* {moment(item?.created_at).format("DD/MM/YYYY")} */} date
                          </div>
                          <div className={styles.sommaireAvatarTitre}>
                            <div className="">
                              <div className="p1">
                                <img
                                //   src={
                                //       !item?.author?.avatar ||
                                //         item?.author?.avatar?.includes(
                                //             "default.png"
                                //         )
                                //         ? ProjetImg
                                //         : baseUrl +
                                //         item?.author?.avatar
                                //   }
                                // src={avatar}
                                  alt="user-sept"
                                  className="img-sommaire-forum"
                                />
                                img
                              </div>
                            </div>
                            <div className="">
                              <h3 className={
                                //   card-title 
                                  styles.titreSommaireForum 
                                //   pt-md-2
                                  }>
                                {/* {item?.titre} */} titre
                              </h3>
                              <div className={styles.forumSommaireAuteurCard}>
                                {/* <IoReturnDownBackOutline className="mr-1" /> */} icone
                                Par{" "}
                                {/* {item?.author?.prenom !== undefined ||
                                item?.author?.nom !== undefined
                                  ? item?.author?.prenom + " " + item?.author?.nom
                                  : "Anonyme"} */} autheur
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-9 pt-3">
                              <p className={
                                //   card-text 
                                  styles.textSommaireForum
                                  }>
                                {/* {item?.contenu} */} 

                                Le vélo est un moyen de transport silencieux et écologique. C'est un engin qui ne présente pas beaucoup de danger. D'une part, le vélo ne nous fait pas respirer les vapeurs d'essence, mais les vapeurs du matin et du soir. D'autre part, il se moque des règlements, il ignore les interdits.

                              </p>
                            </div>
                            <div className="col-lg-3">
                              <div className={styles.sommaireForumUserChat}>
                                {/* {item?.user_comments
                                  .slice(0, 4)
                                  .map((comment, index) => (
                                    <img
                                      src={
                                        !comment?.avatar ||
                                        comment?.avatar?.includes(
                                          "default.png"
                                        )
                                          ? ProjetImg
                                          : baseUrl + comment?.avatar
                                      }
                                      key={comment?.id}
                                      alt="user-avatar"
                                      className={`img-sommaire-forum-user-chat div-sommaire-forum-user-chat${
                                        index + 1
                                      }`}
                                    />
                                  ))} */} img
                                <div className={
                                    // styles.imgSommaireForumUserChat 
                                    styles.divSommaireForumUserChat5
                                    }>
                                  <div className={styles.troisPoints}>
                                  {/* {`
                                        ${item?.user_comments.length > 4 ?  item?.user_comments.length - 4 + "+"  : "..."}
                                    `} */} ...
                                  </div>
                                </div>
                              </div>
                              <div className={styles.divNombreCommentaireSommaireForum}>
                                <p className={styles.nombreCommentaireSommaireForum}>
                                  {/* <BsChat className="mr-1" />{" "} */}icone
                                  {/* {item?.comments.length} Commentaires */} Commentaires
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      {/* </NavLink> */}
                    {/* );
                  })
                ) : ( */}
                  {/* <div className="card-contacts-main-content">
                    <div className="row div-card">
                      <div className="col-12">
                        <h4 className="admin-contacts-title text-center">
                          Pas de sujet de discussion
                        </h4>
                      </div>
                    </div>
                  </div>
                )} */}
              </div>
            </div>
            </div>
          </div>
          {/* <FrontFooterV2 /> */}
        </div>
      );
}

export default Sommaire