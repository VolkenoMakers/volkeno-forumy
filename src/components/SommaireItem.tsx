import React from 'react'
import styles from '../styles.module.css'
import { BsChat } from "react-icons/bs";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';


const SommaireItem: React.FC<any> = ({ Datas }): JSX.Element => {

  
  return (
      <div>

        {
            Datas?.length > 0  ? (
            Datas.map((item: any) => {
                return(

                    <NavLink
                        className={styles.navigationLink}
                        to={{
                          pathname: `/forum-discussion/${item.slug}`,
                        }}
                        state={item}
                        key={item.id}
                      >

                    <div className={
                        styles.forumCardSommaire 
                        } key={item?.id}>
                    <div className={styles.cardSommaireDateAjout}>
                        {item?.created_at}
                    </div>
                    <div className={styles.sommaireAvatarTitre}>
                        <div className="">
                        <div className="p1">
                            <img
                            src={item?.author?.avatar === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${item?.author?.firstName} + ${item?.author?.lastName}` : `${item?.author?.avatar}`}
                            alt="user-avatar"
                            className={styles.imgSommaireForum}
                            />
                        </div>
                        </div>
                        <div className="">
                        <h3 className={
                            styles.titreSommaireForum 
                            }>
                            {item?.initialTitle} 
                        </h3>
                        <div className={styles.forumSommaireAuteurCard}>
                            <IoReturnDownBackOutline className="mr-1" /> 
                            Par{" "}
                            {item?.author?.firstName !== undefined ||
                            item?.author?.lastName !== undefined
                            ? item?.author?.firstName + " " + item?.author?.lastName
                            : "Anonyme"}
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-9 pt-3">
                        <p className={
                            styles.textSommaireForum
                            }>
                            {item?.initialContent} 
                        </p>
                        </div>
                        <div className="col-lg-3">
                        <div className={styles.sommaireForumUserChat}>
                            {item?.user_comments?.slice(0, 4)
                            .map((comment:any) => (
                                <img
                                src={comment?.user?.avatar === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${comment?.user?.firstName} + ${comment?.user?.lastName}` : `${comment?.user?.avatar}`}
                                key={comment?.id}
                                alt="user-avatar"
                                className={
                                    styles.divSommaireForumUserChat2}
                                />
                            ))} 
                            
                            <div className={
                                styles.divSommaireForumUserChat5
                                }>
                            <div className={styles.troisPoints}>
                                {`
                                    ${item?.user_comments?.length > 4 ?  item?.user_comments?.length - 4 + "+"  : "..."}
                                `}
                            </div>
                            </div>
                        </div>
                        <div className={styles.divNombreCommentaireSommaireForum}>
                            <p className={styles.nombreCommentaireSommaireForum}>
                            <BsChat className="mr-1" />{" "}
                            {item?.first_level_response?.length} Commentaires
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>

                    </NavLink>
                
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