import React from 'react'
import styles from '../styles.module.css'
import AjoutComments from './AjoutComments';
import FrontCommentItem from './FrontCommentItem';
import { IoReturnDownBackOutline } from 'react-icons/io5';
import { AiOutlineClockCircle } from "react-icons/ai";
// import { DatasUserSession } from './DatasForum';
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
  // console.log('location',location)

  const donnees:any = location?.state;
  // console.log('donnééé',donnees)
 
  // console.log( 'user data',DatasUserSession)

  const DatasUserSession = [
	{
		id: 1,
		user: {
			prenom: "Mes",
			nom: "",
			fullname: "Me",
			avatar: '/mediafiles/avatars/default.png'
		}
	}
  ]

  return (
		<div className="component-liste-projet">
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
												donnees?.initialTitle
											} 
										</h3>
										<div className={styles.forumSommairAauteurCard}>
											<IoReturnDownBackOutline className="mr-1" />{" "}
											Par{" "}
											{donnees
												?.author
												?.firstName !==
												undefined ||
                        						donnees
												?.author
												?.lastName !==
												undefined
												? donnees
														?.author
														?.firstName +
												  " " +
												  donnees
														?.author
														?.lastName
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
                        						donnees.initialContent
											} 
										</p>
									</div>
								</div>
							</div>
            
            			<FrontCommentItem donnees={donnees} onAddResponseComment={onAddResponseComment} DatasUserSession={DatasUserSession} />

						{/* =========================================================== FIN COLLAPSE ============================================================================ */}

						<span className={
						styles.divSeparateur
						}></span>

						<div className={
						// "row "
						styles.rowReponse
						}>
							{
								DatasUserSession?.map((item: any)=>{
									return(

										<div className='row' key={item.id}>
											<div className="col-2">
												<div className={styles.sommaireAvatarTitre}>
													<div className="">
														<div className="p1">
															<img
																src={item?.user?.avatar === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${item?.user?.fullname}` : `${item?.user?.avatar}`}
																alt="user-avatar"
																className={styles.imgSommaireForumDiscussion2}
															/>
														</div>
													</div>
													<div className=" d-flex align-item-md-center">
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

											<div className="col-10">
												<AjoutComments
													onSubmit={(comment: string)=>{
													onAddComment(donnees, comment)
													}}
												/>
											</div>
										</div>

									)
								})
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Discussion