import React, { useState } from 'react'
import styles from '../styles.module.css'
// import AjoutComments from './AjoutComments';
import FrontCommentItem from './FrontCommentItem';
import { IoReturnDownBackOutline } from 'react-icons/io5';
import { AiOutlineClockCircle } from "react-icons/ai";
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import moment from 'moment';


type discussionProps = {
  datasUserSession: any
  hasThirdLevel: boolean
}

const Discussion= ({
	datasUserSession,
	hasThirdLevel
	}: discussionProps) => {

	const {slug} = useParams() 

	let location = useLocation();
	const Datas:any = location?.state
	const msg_item = Datas?.filter((ele:any) => ele.slug === slug)
	const [donnees, setDonnees]:any = useState(msg_item[0])
	let donneesInt = donnees
  

	function generateUniqueID() {
		var text = "";
		var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	
		for (var i = 0; i < 5; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	
		return text;
	}

	const resetForm = () => {
		(document.getElementById('add_msg_form') as HTMLFormElement).reset();
	}

	const [comment, setComment] = useState('')

  const submitComment = (e: any) => {
	e.preventDefault()
	if(comment.trim().length > 0 ){

		let firstNameUserSession = datasUserSession[0].user.firstName
		let lastNameUserSession = datasUserSession[0].user.lastName

		let field: any = {
			content: comment,
			id: generateUniqueID(),
			slug: generateUniqueID(),
			// created_at: '22/04/2022',
			created_at: moment().format('DD/MM/yyyy'),
			user: {
				firstName: firstNameUserSession,
				lastName: lastNameUserSession,
				avatar: '/mediafiles/avatars/default.png',
			},
			second_level_response: []
		}
		donneesInt.first_level_response.push(field)
		setDonnees(donneesInt)
		resetForm()
		setComment('')
	}
	}

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
                        						src={donnees?.author?.avatar === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${donnees?.author?.firstName} + ${donnees?.author?.lastName}` : `${donnees?.author?.avatar}`}
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
            
            			<FrontCommentItem donnees={donnees} DatasUserSession={datasUserSession} hasThirdLevel={hasThirdLevel} />

						{/* =========================================================== FIN COLLAPSE ============================================================================ */}
						
						<span className={styles.divSeparateur}></span>

						{

						// datasUserSession.length > 0 ? (

							<div className={`
								row
								${styles.rowReponse}
								`}>
								{
									datasUserSession?.map((item: any)=>{
										return(

											<div className='row' key={item.id}>
												<div className="col-2">
													<div className={styles.sommaireAvatarTitre}>
														<div className="">
															<div className="p1">
																<img
																	src={item?.user?.avatar === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${item?.user?.firstName} + ${item?.user?.lastName}` : `${item?.user?.avatar}`}
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
													<form className='mb-3'>
														<div className={
															`${styles.forumCardSommaire}` 
															}>
															<div className='row'>
																<div className='col-12 pt-3 mb-md-4 mb-5'>
																	<textarea className='form-control'
																	placeholder='Répondre' name='contents' 
																	value={comment}
																	onChange={(e)=>{
																		setComment(e.target.value)
																	}}
																	></textarea>                       
																</div>                  
															</div>
														</div>

														<button className={
															styles.formAddCguButtonAjouter 
														}
															onClick={submitComment}
														>
															Ajouter
														</button>
													</form>

												</div>
											</div>

										)
									})
								}
								</div>

						// ) : (
						// 	<div className="alert alert-warning" role="alert">
						// 		Vous êtes déconnecté! Veuillez vous <a href="/" className="alert-link">reconnecté</a> pour continuer.
						// 	</div>
						// )



						}
						
					</div>
				</div>
			</div>
		</div>
	);
}

export default Discussion