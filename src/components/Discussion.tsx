import React from 'react'
import styles from '../styles.module.css'
import AjoutComments from './AjoutComments'
import FrontCommentItem from './FrontCommentItem'
import { IoReturnDownBackOutline } from 'react-icons/io5'
import { AiOutlineClockCircle } from 'react-icons/ai'
import { DatasForum, DatasUserSession } from './DatasForum'

function Discussion() {
  console.log('user data', DatasUserSession)

  return (
    <div className='component-liste-projet'>
      {/* <FrontHeaderV2 /> */}
      <div className={styles.contentViewStart}>
        <div className={styles.containerCayore}>
          <div className='row align-items-center' style={{ margin: '3rem 0' }}>
            {/* {isLoading ? (
							<ArticleSkeleton />
						) : ( */}
            <div
              className={
                // card card-body
                styles.forumCardSommaire
              }
            >
              <div className={styles.cardDiscussionHeureVu}>
                <span>
                  <AiOutlineClockCircle className='mr-1' />{' '}
                  {DatasForum?.[0].created_at}
                </span>
              </div>
              <div className={styles.sommaireAvatarTitre}>
                <div className=''>
                  <div className='p1'>
                    <img
                      // src={
                      // 	dataArticle
                      // 		?.author
                      // 		?.avatar
                      // 		? baseUrl +
                      // 		  dataArticle
                      // 				?.author
                      // 				?.avatar
                      // 		: ProjetImg
                      // }
                      src={
                        DatasForum?.[0]?.author?.avatar ===
                        '/mediafiles/avatars/default.png'
                          ? `https://ui-avatars.com/api/?name=${DatasForum?.[0]?.author?.fullname}`
                          : `${DatasForum?.[0]?.author?.avatar}`
                      }
                      alt='user-avatar'
                      className={styles.imgSommaireForumDiscussion}
                    />
                  </div>
                </div>
                <div className=''>
                  {/* <h3 className='card-title titre-sommaire-forum pt-md-2'>Comment gérer son temps?</h3> */}
                  <h3
                    className={
                      // card-title
                      styles.titreSommaireForum
                      // pt-md-2
                    }
                  >
                    {
                      DatasForum?.[0].titre
                      // ??
                      // 	""
                    }
                  </h3>
                  <div className={styles.forumSommairAauteurCard}>
                    <IoReturnDownBackOutline className='mr-1' /> Par{' '}
                    {DatasForum?.[0]?.author?.prenom !== undefined ||
                    DatasForum?.[0]?.author?.nom !== undefined
                      ? DatasForum?.[0]?.author?.prenom +
                        ' ' +
                        DatasForum?.[0]?.author?.nom
                      : 'Anonyme'}
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-12 pt-3'>
                  <p
                    className={
                      // card-text
                      styles.textSommaireForum
                    }
                  >
                    {DatasForum?.[0].contenu}
                  </p>
                </div>
              </div>
            </div>
            {/* )} */}

            <FrontCommentItem />

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

            <span
              className={
                styles.divSeparateur
                // w-100 mb-4
              } />
            ></span>

            <hr className='divider' />

            <div
              className={
                // "row "
                styles.rowReponse
              }
            >
              <div className='row'>
                <div className='col-2'>
                  <div className={styles.sommaireAvatarTitre}>
                    <div className=''>
                      <div className='p1'>
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
                          src={
                            DatasUserSession?.[0]?.user?.avatar ===
                            '/mediafiles/avatars/default.png'
                              ? `https://ui-avatars.com/api/?name=${DatasUserSession?.[0]?.user?.fullname}`
                              : `${DatasUserSession?.[0]?.user?.avatar}`
                          }
                          alt='user-avatar'
                          className={styles.imgSommaireForumDiscussion2}
                        />
                      </div>
                    </div>
                    <div className=' d-flex align-item-md-center'>
                      <div
                        className={
                          styles.forumSommaireAuteurCard
                          // mt-1
                        }
                      >
                        {DatasUserSession?.[0]?.user?.prenom !== undefined ||
                        DatasUserSession?.[0]?.user?.nom !== undefined
                          ? DatasUserSession?.[0]?.user?.prenom +
                            ' ' +
                            DatasUserSession?.[0]?.user?.nom
                          : 'Anonyme'}
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-10'>
                  <AjoutComments
                  // articleID={id}
                  // fetchComments={
                  // 	fetchComments
                  // }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* <FrontFooterV2 /> */}
    </div>
  )
}

export default Discussion
