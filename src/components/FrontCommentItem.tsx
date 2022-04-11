import React from 'react'
import styles from '../styles.module.css'
import { DatasUserSession } from './DatasForum';
import { BiComment } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import AjoutComments from './AjoutComments';

const FrontCommentItem: React.FC<any> = (
    { donnees, onAddResponseComment }
    ): JSX.Element => {

        console.log('donnéee 5',donnees)
       

	return (
        
		<div className={styles.cardParent}>
            {
                donnees?.comments.map((donnee: any)=>{
                    return(
                        <div>
                        <div className="row" key={donnee.id}>
                            <div className="col-2">
                                <div className={styles.sommaireAvatarTitre}>
                                    <div className="">
                                        <div className="p1">
                                            <img
                                                // src={
                                                // 	!item
                                                // 		?.user
                                                // 		?.avatar ||
                                                // 		item
                                                // 		?.user
                                                // 		?.avatar?.includes(
                                                // 				"default.png"
                                                // 			)
                                                // 			? ProjetImg
                                                // 			: baseUrl +
                                                // 			item
                                                // 				?.user
                                                // 				?.avatar
                                                // }
                                                src={donnee?.user?.avatar === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${donnee?.user?.fullname}` : `${donnee?.user?.avatar}`}
                                                alt="user-avatar"
                                                className={styles.imgSommaireForumDiscussion2}
                                            />
                                        </div>
                                    </div>
                                    <div className=" d-flex align-item-md-center">
                                        <div className={
                                            styles.forumSommaireAuteurCard 
                                            // mt-1
                                            }>
                                            {donnee?.user?.prenom +
                                                " " +
                                                donnee?.user?.nom}
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
                                                        // card-text 
                                                        styles.textSommaireForum}>
                                                        {donnee?.text}{" "}
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
                                                    {donnee?.reponse_commentaire?.length}{" "}
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
                                {donnee.reponse_commentaire?.map((item:any) => {
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
                                                                src={item?.user?.user_avatar === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${item?.user?.fullname}` : `${item?.user?.user_avatar}`}
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
                                                                ?.prenom +
                                                                " " +
                                                                item
                                                                    ?.user
                                                                    ?.nom} 
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
                                                                    item?.contenu
                                                                }{" "}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}

                                <div 
                                    className='row'
                                >
                                    <div className="col-3">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="p1 d-flex justify-content-end">
                                                    <img
                                                        src={DatasUserSession?.[0]?.user?.avatar === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${DatasUserSession?.[0]?.user?.fullname}` : `${DatasUserSession?.[0]?.user?.avatar}`}
                                                        alt="user-avatar"
                                                        className={styles.imgSommaireForumDiscussion2}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6 d-flex align-item-md-center">
                                                <div className={
                                                    styles.forumSommaireAuteurCard 
                                                    }>
                                                    {DatasUserSession?.[0]
                                                        ?.user
                                                        ?.prenom !==
                                                        undefined ||
                                                        DatasUserSession?.[0]
                                                        ?.user
                                                        ?.nom !==
                                                        undefined
                                                        ? DatasUserSession?.[0]
                                                        ?.user
                                                                ?.prenom +
                                                            " " +
                                                            DatasUserSession?.[0]
                                                        ?.user
                                                                ?.nom
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
                            </div>
                        </div>
                    )
                })
            }


			
		</div>
	);
};

export default FrontCommentItem