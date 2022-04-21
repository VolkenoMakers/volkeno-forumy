import React from 'react'
import styles from '../styles.module.css'

function AjoutReponseComment() {
	
	return (
		<form>
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
						></textarea>
					</div>
				</div>
			</div>

			<button
				className={
					styles.formAddCguButtonAjouter
					//  mt-0 mb-3
					}
				type="submit"
			>
				Ajouter
			</button>
		</form>
	);
}

export default AjoutReponseComment