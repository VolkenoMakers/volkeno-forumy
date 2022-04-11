import React from 'react'
import styles from '../styles.module.css'
import AjoutComments from './AjoutComments';
import FrontCommentItem from './FrontCommentItem';
import { IoReturnDownBackOutline } from 'react-icons/io5';
import { AiOutlineClockCircle } from "react-icons/ai";
import { DatasUserSession } from './DatasForum';
import { useLocation } from 'react-router-dom';


type discussionProps = {
  onAddComment: (subject: any, commentText: string)=> any
  onAddResponseComment: (subject: any, comment:any, commentText: string )=> any
}

const Discussion= ({
  onAddComment,
  onAddResponseComment
}: discussionProps) => {

  let location = useLocation();
  console.log('location',location)

  const donnees:any = location?.state;
  console.log('donnééé',donnees)
 
  console.log( 'user data',DatasUserSession)

  return (
		<div className="component-liste-projet">
			{/* <FrontHeaderV2 /> */}
			<div className={styles.contentViewStart}>
				<div className={styles.containerCayore}>
					<div
						className="row align-items-center"
						style={{ margin: "3rem 0" }}
					>
							<div className={
                styles.forumCardSommaire
                }>
								<div className={styles.cardDiscussionHeureVu}>
									<span>
										<AiOutlineClockCircle className="mr-1" />{" "}
										{donnees?.created_at}
									</span>
								</div>
								<div className={styles.sommaireAvatarTitre}>
									<div className="">
										<div className="p1">
											<img
                        src={donnees?.author?.avatar === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${donnees?.author?.fullname}` : `${donnees?.author?.avatar}`}
												alt="user-avatar"
												className={styles.imgSommaireForumDiscussion}
											/>
										</div>
									</div>
									<div className="">
										<h3 className={
                      styles.titreSommaireForum 
                      }>
											{
                        donnees?.titre 
                      } 
										</h3>
										<div className={styles.forumSommairAauteurCard}>
											<IoReturnDownBackOutline className="mr-1" />{" "}
											Par{" "}
											{donnees
												?.author
												?.prenom !==
												undefined ||
                        donnees
												?.author
												?.nom !==
												undefined
												? donnees
														?.author
														?.prenom +
												  " " +
												  donnees
														?.author
														?.nom
												: "Anonyme"}  
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-12 pt-3">
										<p className={
                      // card-text 
                      styles.textSommaireForum
                      }>
											{
                        donnees.contenu
											} 
										</p>
									</div>
								</div>
							</div>
						{/* )} */}
            
            <FrontCommentItem donnees={donnees} onAddResponseComment={onAddResponseComment} />

						{/* =========================================================== FIN COLLAPSE ============================================================================ */}

						<span className={
              styles.divSeparateur
              }></span>

						<div className={
              // "row "
              styles.rowReponse
            }>
							<div className='row'>
              <div className="col-2">
								<div className={styles.sommaireAvatarTitre}>
									<div className="">
										<div className="p1">
											<img
                        src={DatasUserSession?.[0]?.user?.avatar === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${DatasUserSession?.[0]?.user?.fullname}` : `${DatasUserSession?.[0]?.user?.avatar}`}
												alt="user-avatar"
												className={styles.imgSommaireForumDiscussion2}
											/>
										</div>
									</div>
									<div className=" d-flex align-item-md-center">
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

							<div className="col-10">
								<AjoutComments
                onSubmit={(comment: string)=>{
                  onAddComment(donnees, comment)
                }}
								/>
							</div>
              </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Discussion