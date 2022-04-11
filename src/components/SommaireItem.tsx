import React from 'react'
import styles from '../styles.module.css'
import { DatasForum } from './DatasForum';
import { BsChat } from "react-icons/bs";
import { IoReturnDownBackOutline } from "react-icons/io5";


function SommaireItem() {
  return (
      <div>

    {
        DatasForum.length > 0  ? (
          DatasForum.map((item) => {
            return(

                <div className={
                    // card card-body 
                    styles.forumCardSommaire 
                    // styles.forumCardSommaireFixWidth
                    } key={item?.id}>
                  <div className={styles.cardSommaireDateAjout}>
                    {item?.created_at}
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
                          // src={item?.author?.avatar}
                          src={item?.author?.avatar === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${item?.author?.fullname}` : `${item?.author?.avatar}`}
                          alt="user-avatar"
                          className={styles.imgSommaireForum}
                        />
                      </div>
                    </div>
                    <div className="">
                      <h3 className={
                        //   card-title 
                          styles.titreSommaireForum 
                        //   pt-md-2
                          }>
                        {item?.titre} 
                      </h3>
                      <div className={styles.forumSommaireAuteurCard}>
                        <IoReturnDownBackOutline className="mr-1" /> 
                        Par{" "}
                        {item?.author?.prenom !== undefined ||
                        item?.author?.nom !== undefined
                          ? item?.author?.prenom + " " + item?.author?.nom
                          : "Anonyme"}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-9 pt-3">
                      <p className={
                        //   card-text 
                          styles.textSommaireForum
                          }>
                        {item?.contenu} 
                      </p>
                    </div>
                    <div className="col-lg-3">
                      <div className={styles.sommaireForumUserChat}>
                        {item?.user_comments
                          .slice(0, 4)
                          .map((comment) => (
                            <img
                              src={comment?.user?.avatar === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${comment?.user?.fullname}` : `${comment?.user?.avatar}`}
                              key={comment?.id}
                              alt="user-avatar"
                              className={
                                // imgSommaireForumUserChat 
                                styles.divSommaireForumUserChat2}
                            />
                          ))} 
                          {
                            console.log( 'user comment',item?.user_comments)
                          }
                        <div className={
                            // styles.imgSommaireForumUserChat 
                            styles.divSommaireForumUserChat5
                            }>
                          <div className={styles.troisPoints}>
                          {`
                                ${item?.user_comments.length > 4 ?  item?.user_comments.length - 4 + "+"  : "..."}
                            `}
                          </div>
                        </div>
                      </div>
                      <div className={styles.divNombreCommentaireSommaireForum}>
                        <p className={styles.nombreCommentaireSommaireForum}>
                          <BsChat className="mr-1" />{" "}
                          {item?.comments.length} Commentaires
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              
            )
          })
        ) : (
          <div className="card-contacts-main-content">
            <div className="row div-card">
              <div className="col-12">
                <h4 className="admin-contacts-title text-center">
                  Pas de sujet de discussion
                </h4>
              </div>
            </div>
          </div>
        )
      }

</div>



    
  )
}


export default SommaireItem