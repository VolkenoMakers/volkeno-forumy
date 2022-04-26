import React, { useState } from 'react'
import styles from '../styles.module.css'
// import AjoutComments from './AjoutComments';
import FrontCommentItem from './FrontCommentItem';
import { IoReturnDownBackOutline } from 'react-icons/io5';
import { AiOutlineClockCircle } from "react-icons/ai";
import { useLocation } from 'react-router-dom';


type discussionProps = {
  onAddComment: (subject: any, commentText: string)=> any
  onAddResponseComment: (subject: any, comment:any, commentText: string )=> any
}

const Discussion= ({
//   onAddComment,
  onAddResponseComment
}: discussionProps) => {

  let location = useLocation();
  const [donnees, setDonnees]:any = useState(location?.state)
  let donneesInt = donnees

  const [responseContent, setResponseContent] = useState('')
  const [firstNameUser, setFirstNameUser] = useState('')
  const [lastNameUser, setLastNameUser] = useState('')


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

  const onAddComments = (e:any) => {
	e.preventDefault()
	if(responseContent.trim().length > 0 && firstNameUser.trim().length > 0 ){
		let fields: any = {
			content: responseContent,
			id: generateUniqueID(),
			slug: generateUniqueID(),
			created_at: '22/04/2022',
			user: {
				firstName: firstNameUser,
				lastName: lastNameUser,
				avatar: '/mediafiles/avatars/default.png',
			},
			second_level_response: []
		}
	
		donneesInt.first_level_response.push(fields)
		setDonnees(donneesInt)
		resetForm()
		setFirstNameUser('')
		setLastNameUser('')
		setResponseContent('')
	}
  }

 

  const DatasUserSession = [
	{
		id: 1,
		user: {
			firstName: "Me",
			lastName: "",
			avatar: '/mediafiles/avatars/default.png'
		}
	}
  ]

  const [comment, setComment] = useState('')

  const submitComment = (e: any) => {
	e.preventDefault()
	if(comment.trim().length > 0 ){

		let field: any = {
			content: comment,
			id: generateUniqueID(),
			slug: generateUniqueID(),
			created_at: '22/04/2022',
			user: {
				firstName: "Bamba",
				lastName: "Fall",
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
            
            			<FrontCommentItem donnees={donnees} onAddResponseComment={onAddResponseComment} DatasUserSession={DatasUserSession} />

						{/* =========================================================== FIN COLLAPSE ============================================================================ */}
						<button type="button" className={`btn ${styles.btnAjoutResponse}` }data-toggle="modal" data-target="#exampleModal2">
							+
						</button>

						<div className="modal fade" id="exampleModal2"  aria-labelledby="exampleModalLabel2" aria-hidden="true">
							<div className="modal-dialog">
								<div className="modal-content">
								<div className="modal-header">
									<h5 className="modal-title" id="exampleModalLabel2">Ajouter un commentaire</h5>
									<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<form>
								<div className="modal-body">
									<div className="form-group">
									<label htmlFor="exampleFormControlInputcinq">First name</label>
									<input type="text" className="form-control" id="exampleFormControlInputcinq" placeholder="FirstName"
									value={firstNameUser}
									onChange={(e)=>{
										setFirstNameUser(e.target.value)
									}}
									/>
									</div>
									<div className="form-group">
									<label htmlFor="exampleFormControlInputsix">Last name</label>
									<input type="text" className="form-control" id="exampleFormControlInputsix" placeholder="LastName"
									value={lastNameUser}
									onChange={(e)=>{
										setLastNameUser(e.target.value)
									}}
									/>
									</div>
									<div className="form-group">
									<label htmlFor="exampleFormControlTextareaquatre">Contenu</label>
									<textarea className="form-control" id="exampleFormControlTextareaquatre" rows={3}
									value={responseContent}
									onChange={(e)=>{
										setResponseContent(e.target.value)
									}}
									></textarea>
									</div>
									
								</div>

								<div className="modal-footer">
									<button type="button" className="btn btn-secondary" data-dismiss="modal">Annuler</button>
									<button type="submit" className="btn btn-primary"
										onClick={onAddComments}
										data-dismiss="modal"
									>Ajouter</button>
								</div>
								</form>
								</div>
							</div>
						</div>

						<span className={
						styles.divSeparateur
						}></span>

						<div className={`
						row
						${styles.rowReponse}
						`}>
							{
								DatasUserSession?.map((item: any)=>{
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
												{/* <AjoutComments
													onSubmitMessageResponse={(comment: string)=>{
													onAddComment(donnees, comment)
													}}
												/> */}

													<form className='mb-3'>
														<div className={
															`${styles.forumCardSommaire}` 
															}>
															<div className='row'>
																<div className='col-12 pt-3 mb-md-4 mb-5'>
																	<textarea className='form-control'
																	placeholder='Répondre' name='content' 
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
					</div>
				</div>
			</div>
		</div>
	);
}

export default Discussion