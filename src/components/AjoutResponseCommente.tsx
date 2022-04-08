import React from 'react'
import styles from '../styles.module.css'

function AjoutReponseComment(
    // { commentID, fetchResponsesToComment }
    ) {
	// const [isSuccessfullySubmittedForm, setIsSuccessfullySubmittedForm] =
	// 	useState(false);

	// const validationSchema = yup.object().shape({
	// 	text: yup.string().required("This field is required"),
	// });

	// const { register, handleSubmit, reset } = useForm({
	// 	mode: "onBlur",
	// 	resolver: yupResolver(validationSchema),
	// });

	// const config = {
	// 	headers: {
	// 		Authorization: `Bearer ${window.sessionStorage.getItem(
	// 			"userToken"
	// 		)}`,
	// 	},
	// };
	// const userID = window.sessionStorage.getItem("userID");

	// const onSubmitComment = (data) => {
	// 	setIsSuccessfullySubmittedForm(true);
	// 	// setSubmitedForm(true)

	// 	data["user"] = userID ? userID : "null";
	// 	data["parent"] = commentID;
	// 	var request = Axios.post(`${api}comment_article/`, data, config);

	// 	request
	// 		.then(async (res) => {
	// 			console.log(res);
	// 			// history.push(`/forum-discussion/${id}`);
	// 			reset();
	// 			// dispatch(fetchFrontForumComments());
	// 			fetchResponsesToComment(commentID);
	// 			setIsSuccessfullySubmittedForm(false);
	// 			// setSubmitedForm(false)
	// 		})
	// 		.catch((error) => {
	// 			setIsSuccessfullySubmittedForm(false);
	// 		});
	// };

	return (
		<form 
        // onSubmit={handleSubmit(onSubmitComment)}
        >
			<div className={
                // card card-body 
                styles.forumCardSommaire
                }>
				<div className="row">
					<div className="col-12 pt-3 mb-md-4 mb-5">
						<textarea
							className="form-control"
							// rows="4"
							placeholder="Répondre"
							name="text"
							// {...register("text")}
						></textarea>
					</div>
				</div>
			</div>

			{/* {!isSuccessfullySubmittedForm ? ( */}
				<button
					className={
                        styles.formAddCguButtonAjouter
                        //  mt-0 mb-3
                        }
					type="submit"
				>
					Ajouter
				</button>
			{/* ) : (
				<button className="form-add-cgu-button-ajouter trans-0-2">
					<i className="fas fa-spin fa-spinner"></i>
					&nbsp;&nbsp;&nbsp;In progress...
				</button>
			)} */}
		</form>
	);
}

export default AjoutReponseComment