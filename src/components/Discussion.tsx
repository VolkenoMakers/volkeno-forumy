import React from 'react'
// import styles from '../styles.module.css'

function Discussion() {
  return (
		<div className="component-liste-projet">
			{/* <FrontHeaderV2 /> */}
			<div className="content-view-start">
				<div className="container-cayore">
					<div
						className="row align-items-center"
						style={{ margin: "3rem 0" }}
					>
						{/* {isLoading ? (
							<ArticleSkeleton />
						) : ( */}
							<div className="card card-body forum-card-sommaire">
								<div className="card-discussion-heure-vu">
									<span>
										{/* <AiOutlineClockCircle className="mr-1" />{" "}
										{moment(
											dataArticle?.created_at
										).from(new Date())} */} Date
									</span>
								</div>
								<div className="sommaire-avatar-titre">
									<div className="">
										<div className="p1">
											{/* <img
												src={
													dataArticle
														?.author
														?.avatar
														? baseUrl +
														  dataArticle
																?.author
																?.avatar
														: ProjetImg
												}
												alt="user-avatar"
												className="img-sommaire-forum-discussion"
											/> */} img
										</div>
									</div>
									<div className="">
										{/* <h3 className='card-title titre-sommaire-forum pt-md-2'>Comment gérer son temps?</h3> */}
										<h3 className="card-title titre-sommaire-forum pt-md-2">
											{/* {dataArticle?.titre ??
												""} */} titre
										</h3>
										<div className="forum-sommaire-auteur-card">
											{/* <IoReturnDownBackOutline className="mr-1" />{" "}
											Par{" "}
											{dataArticle
												?.author
												?.prenom !==
												undefined ||
											dataArticle
												?.author
												?.nom !==
												undefined
												? dataArticle
														?.author
														?.prenom +
												  " " +
												  dataArticle
														?.author
														?.nom
												: "Anonyme"} */} autheur
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-12 pt-3">
										<p className="card-text text-sommaire-forum">
											{/* {
												dataArticle?.contenu
											} */} contenu
										</p>
									</div>
								</div>
							</div>
						{/* )} */}

						{/* {isLoading ? (
							[...Array(3)].map((item, index) => (
								<CommentSkeleton key={index} />
							))
						) : dataComments.length ? (
							dataComments?.map((item) => (
								<FrontCommentIem item={item} key={item?.id} />
							))
						) : ( */}
							{/* <div className="gfa-rowy mt-5">
								<div className="alert alert-warning gfa-warning">
									Aucun commentaire
								</div>
							</div> */}
						{/* )} */}

						{/* =========================================================== FIN COLLAPSE ============================================================================ */}

						<span className="div-separateur w-100 mb-4"></span>

						<div className="row row-reponse">
							<div className="col-2">
								<div className="sommaire-avatar-titre">
									<div className="">
										<div className="p1">
											{/* <img
												src={
													user_data
														?.data
														?.avatar
														? baseUrl +
														  user_data
																?.data
																?.avatar
														: ProjetImg
												}
												alt="user-avatar"
												className="img-sommaire-forum-discussion2"
											/> */} img
										</div>
									</div>
									<div className=" d-flex align-item-md-center">
										<div className="forum-sommaire-auteur-card mt-1">
											{/* {user_data
												?.data
												?.prenom !==
												undefined ||
											user_data
												?.data
												?.nom !==
												undefined
												? user_data
														?.data
														?.prenom +
												  " " +
												  user_data
														?.data
														?.nom
												: "Anonyme"} */} autheur
										</div>
									</div>
								</div>
							</div>

							<div className="col-10">
								{/* <AjoutReponse
									articleID={id}
									fetchComments={
										fetchComments
									}
								/> */}
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <FrontFooterV2 /> */}
		</div>
	);
}

export default Discussion