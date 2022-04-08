import React from 'react'
import styles from '../styles.module.css'
import AjoutReponseComment from './AjoutResponseCommente';
import { DatasForum, DatasUserSession } from './DatasForum';
import { BiComment } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";

const FrontCommentItem = (
    // { item }
    ) => {

    

	// const user_data = useSelector((state) => state.user);
	// const [responses, setResponses] = useState();
	// const [showLinks, setShowLinks] = useState(false);

	// const toogleShowLinks = () => {
	// 	setShowLinks(!showLinks)
	// }

	// useEffect(() => {
	// 	setResponses(item?.responses);
	// }, [item]);

	// const fetchResponsesToComment = async (id) => {
	// 	const config = {
	// 		headers: {
	// 			Authorization: `Bearer ${window.sessionStorage.getItem(
	// 				"userToken"
	// 			)}`,
	// 		},
	// 	};
	// 	const request = Axios.get(`${api}responsebycomment/${id}`, config);
	// 	await request
	// 		.then(async (res) => {
	// 			console.log(res);
	// 			await setResponses(res?.data?.results);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// };

       

	return (
        
		<div className={styles.cardParent}>
			{/* <div className={`row ${
				showLinks
					? "forum-discussion-ligne-union"
					: ""
			} `}
			> */}
            <div className="row">
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
                                    src={DatasForum?.[0].comments?.[0].user?.avatar === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${DatasForum?.[0].comments?.[0].user?.fullname}` : `${DatasForum?.[0].comments?.[0].user?.avatar}`}
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
								{DatasForum?.[0].comments?.[0].user?.prenom +
									" " +
									DatasForum?.[0].comments?.[0].user?.nom}
							</div>
						</div>
					</div>
				</div>

				<div className="col-10">
					<div className={
                        // card card-body 
                        styles.forumCardSommaire 
                        // styles.forumCardSommaireDiscussion
                        }>
						<div className="row">
							<div className="col-12 pt-3 mb-md-4 mb-5">
								<p className={
                                    // card-text 
                                    styles.textSommaireForum}>
									{DatasForum?.[0].comments?.[0]?.text}{" "}
								</p>
							</div>
						</div>
						<div className={
                            styles.cardDiscussionHeureCommentaire 
                            // d-flex
                            }>
							<a
								className={styles.cardDiscussionCommentaire}
								data-toggle="collapse"
								href={`#collapseExample${DatasForum?.[0].comments?.[0]?.id}`}
								role="button"
								aria-expanded="false"
								aria-controls={`collapseExample${DatasForum?.[0].comments?.[0]?.id}`}
								// onClick={() => {
								// 	toogleShowLinks();
								// }}
							>
								<BiComment className="mr-1" />
								{DatasForum?.[0].comments?.[0]?.reponse_commentaire?.length}{" "}
								commentaires
							</a>
							<span>
								<AiOutlineClockCircle className="mr-1" />{" "}
								{DatasForum?.[0].comments?.[0]?.created_at}
							</span>
						</div>
					</div>
				</div>
			</div>

			{/* =========================================================== COLLAPSE ============================================================================ */}

			<div className="collapse" 
            id={`collapseExample${DatasForum?.[0].comments?.[0]?.id}`}
            >
				{/* {responses?.map((item) => {
					return ( */}
						<div
							// className={`row ${
							// 	showLinks
							// 		? "forum-discussion-ligne-union"
							// 		: ""
							// } `}
							// key={item.id}
                            className='row'
						>
							<div className="col-3">
								<div 
                                // className={`row ${
								// 	showLinks
								// 		? "row-reponse-ligne-union1"
								// 		: ""
								// 	} `}
                                className='row'
								>
									<div className="col-md-6">
										<div className="p1 d-flex justify-content-end">
											<img
												// src={
												// 	!item
												// 	?.user
												// 	?.avatar ||
												// 	item
												// 	?.user
												// 	?.avatar?.includes(
												// 			"default.png"
												// 		)
												// 		? ProjetImg
												// 		: baseUrl +
												// 		item
												// 			?.user
												// 			?.avatar

												// }
                                                src={DatasForum?.[0].comments?.[0]?.reponse_commentaire[0]?.user?.user_avatar === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${DatasForum?.[0].comments?.[0]?.reponse_commentaire[0]?.user?.fullname}` : `${DatasForum?.[0].comments?.[0]?.reponse_commentaire[0]?.user?.user_avatar}`}
												alt="user-avatar"
												className={styles.imgSommaireForumDiscussion2}
											/>
										</div>
									</div>
									<div className="col-md-6 d-flex align-item-md-center">
										<div className={
                                            styles.forumSommaireAuteurCard 
                                            // mt-1
                                            }>
											{DatasForum?.[0].comments?.[0]?.reponse_commentaire[0]?.user
												?.prenom +
												" " +
												DatasForum?.[0].comments?.[0]?.reponse_commentaire[0]
													?.user
													?.nom} 
										</div>
									</div>
								</div>
							</div>

							<div className="col-9">
								<div className={
                                    // card card-body 
                                    styles.forumCardSommaire
                                    }>
									<div className="row">
										<div className="col-12 pt-3 mb-md-4 mb-5">
											<p className={
                                                // card-text 
                                                styles.textSommaireForum
                                                }>
												{
													DatasForum?.[0].comments?.[0]?.reponse_commentaire[0]?.contenu
												}{" "}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					{/* );
				})} */}

				<div 
                // className={`row row-reponse ${
				// 	showLinks
				// 		? "row-reponse-ligne-union"
				// 		: ""
				// } `}
                className='row'
                >
					<div className="col-3">
						<div className="row">
							<div className="col-md-6">
								<div className="p1 d-flex justify-content-end">
									<img
										// src={
										// 	user_data
										// 		?.data
										// 		?.avatar
										// 		? baseUrl +
										// 		  user_data
										// 				?.data
										// 				?.avatar
										// 		: ProjetImg
										// }
                                        src={DatasUserSession?.[0]?.user?.avatar === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${DatasUserSession?.[0]?.user?.fullname}` : `${DatasUserSession?.[0]?.user?.avatar}`}
										alt="user-avatar"
										className={styles.imgSommaireForumDiscussion2}
									/>
								</div>
							</div>
							<div className="col-md-6 d-flex align-item-md-center">
								<div className={
                                    styles.forumSommaireAuteurCard 
                                    // mt-1
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
						<AjoutReponseComment
							// commentID={item?.id}
							// fetchResponsesToComment={
							// 	fetchResponsesToComment
							// }
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FrontCommentItem