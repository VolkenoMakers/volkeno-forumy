import React from 'react'
import styles from '../styles.module.css'
// import { DatasUserSession } from './DatasForum';
import { BiComment } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import AjoutComments from './AjoutComments';

const FrontCommentItem: React.FC<any> = (
    { donnees, onAddResponseComment, DatasUserSession }
    ): JSX.Element => {

	return (
        
		<div className={styles.cardParent}>
            {
                donnees?.first_level_response?.map((donnee: any)=>{
                    return(
                        <div key={donnee.id}>
                        <div className="row">
                            <div className="col-2">
                                <div className={styles.sommaireAvatarTitre}>
                                    <div className="">
                                        <div className="p1">
                                            <img
                                                src={donnee?.user?.avatar === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${donnee?.user?.firstName} + ${donnee?.user?.lastName}` : `${donnee?.user?.avatar}`}
                                                alt="user-avatar"
                                                className={styles.imgSommaireForumDiscussion2}
                                            />
                                        </div>
                                    </div>
                                    <div className=" d-flex align-item-md-center">
                                        <div className={
                                            styles.forumSommaireAuteurCard 
                                            }>
                                            {donnee?.user?.firstName +
                                                " " +
                                                donnee?.user?.lastName}
                                        </div>
                                    </div>
                                </div>
                                </div>

                                    <div className="col-10">
                                        <div className={
                                            styles.forumCardSommaire 
                                            }>
                                            <div className="row">
                                                <div className="col-12 pt-3 mb-md-4 mb-5">
                                                    <p className={
                                                        styles.textSommaireForum}>
                                                        {donnee?.content}{" "}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className={
                                                styles.cardDiscussionHeureCommentaire 
                                                }>
                                                <a
                                                    className={styles.cardDiscussionCommentaire}
                                                    data-toggle="collapse"
                                                    href={`#collapseExample${donnee?.id}`}
                                                    role="button"
                                                    aria-expanded="false"
                                                    aria-controls={`collapseExample${donnee?.id}`}
                                                >
                                                    <BiComment className="mr-1" />
                                                    {donnee?.second_level_response?.length}{" "}
                                                    commentaires
                                                </a>
                                                <span>
                                                    <AiOutlineClockCircle className="mr-1" />{" "}
                                                    {donnee?.created_at}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>


			{/* =========================================================== COLLAPSE ============================================================================ */}

                                <div className="collapse" 
                                    id={`collapseExample${donnee.id}`}
                                >
                                {donnee.second_level_response?.map((item:any) => {
                                    return (
                                        <div
                                            key={item.id}
                                            className='row'
                                        >
                                            <div className="col-3">
                                                <div 
                                                className='row'
                                                >
                                                    <div className="col-md-6">
                                                        <div className="p1 d-flex justify-content-end">
                                                            <img
                                                                src={item?.user?.avatar === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${item?.user?.firstName} + ${item?.user?.lastName}` : `${item?.user?.avatar}`}
                                                                alt="user-avatar"
                                                                className={styles.imgSommaireForumDiscussion2}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 d-flex align-item-md-center">
                                                        <div className={
                                                            styles.forumSommaireAuteurCard 
                                                            }>
                                                            {item?.user
                                                                ?.firstName +
                                                                " " +
                                                                item
                                                                    ?.user
                                                                    ?.lastName} 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-9">
                                                <div className={
                                                    styles.forumCardSommaire
                                                    }>
                                                    <div className="row">
                                                        <div className="col-12 pt-3 mb-md-4 mb-5">
                                                            <p className={
                                                                styles.textSommaireForum
                                                                }>
                                                                {
                                                                    item?.content
                                                                }{" "}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}

                                {
                                    DatasUserSession.map((item: any) => {
                                        return(

                                            <div 
                                                className='row' key={item.id}
                                            >
                                                <div className="col-3">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="p1 d-flex justify-content-end">
                                                                <img
                                                                    src={item?.user?.avatar === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${item?.user?.firstName} + ${item?.user?.lastName}` : `${item?.user?.avatar}`}
                                                                    alt="user-avatar"
                                                                    className={styles.imgSommaireForumDiscussion2}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 d-flex align-item-md-center">
                                                            <div className={
                                                                styles.forumSommaireAuteurCard 
                                                                }>
                                                                {item
                                                                    ?.user
                                                                    ?.firstName !==
                                                                    undefined ||
                                                                    item
                                                                    ?.user
                                                                    ?.lastName !==
                                                                    undefined
                                                                    ? item
                                                                    ?.user
                                                                            ?.firstName +
                                                                        " " +
                                                                        item
                                                                    ?.user
                                                                            ?.lastName
                                                                    : "Anonyme"} 
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-9">
                                                <AjoutComments
                                                    onSubmit={(comment: string)=>{
                                                    onAddResponseComment(donnees, donnee, comment)
                                                    }} />
                                                </div>
                                            </div>

                                        )
                                    })
                                }
                            </div>
                        </div>
                    )
                })
            }
			
		</div>
	);
};

export default FrontCommentItem