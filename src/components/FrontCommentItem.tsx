import React, { useState } from 'react'
import styles from '../styles.module.css'
// import { DatasUserSession } from './DatasForum';
import { BiComment } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
// import AjoutComments from './AjoutComments';
import moment from 'moment';


const FrontCommentItem: React.FC<any> = ({ donnees, DatasUserSession }): JSX.Element => {

        
        const [DataInt, setDataInt] = useState(donnees)

        const [showLinks, setShowLinks] = useState(false);

        const toogleShowLinks = () => {
            setShowLinks(!showLinks)
        }

        function generateUniqueID() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        
            for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        
            return text;
        }

        const resetForm = () => {
            (document.getElementById('form-response') as HTMLFormElement).reset();
        }

        const [response, setResponse] = useState('')
        

        const submitReponse = (e: any, msg_id:number, _rps_id:number) => {
            e.preventDefault()

            // console.log('msg',msg_id, 'rps',rps_id)

            if(response.trim().length > 0 ){
                let firstNameUserSession = DatasUserSession[0].user.firstName
		        let lastNameUserSession = DatasUserSession[0].user.lastName

                let field: any = {
                    content: response,
                    id: generateUniqueID(),
                    slug: generateUniqueID(),
                    created_at: moment().format('DD/MM/yyyy'),
                    user: {
                        firstName: firstNameUserSession,
                        lastName: lastNameUserSession,
                        avatar: '/mediafiles/avatars/default.png',
                    }
                }
                let foundItem = DataInt.first_level_response.find((element:any) => element.id === msg_id);

                foundItem.second_level_response.push(field)
                setDataInt(DataInt)
                resetForm()
                setResponse('')

            }
        }

        

	return (
        
		<div className={styles.cardParent}>
            {
                DataInt?.first_level_response?.map((donnee: any)=>{
                    return(
                        <div key={donnee.id}>
                        <div className={`row ${
                                showLinks
                                    ? styles.forumDiscussionLigneUnion
                                    : ''}`}>
                            <div className="col-2">
                                <div className={styles.sommaireAvatarTitre}>
                                    <div className="">
                                        <div className="p1">
                                            <img
                                                src={donnee?.user?.avatar === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${donnee?.user?.firstName} + ${donnee?.user?.lastName}` : `${donnee?.user?.avatar}`}
                                                alt="user-avatar"
                                                className={styles.imgSommaireForumDiscussion2}
                                            />
                                        </div>
                                    </div>
                                    <div className=" d-flex align-item-md-center">
                                        <div className={
                                            styles.forumSommaireAuteurCard 
                                            }>
                                            {donnee?.user?.firstName +
                                                " " +
                                                donnee?.user?.lastName}
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
                                                        styles.textSommaireForum}>
                                                        {donnee?.content}{" "}
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
                                                    onClick={() => {
                                                        toogleShowLinks;

                                                    }}
                                                >
                                                    <BiComment className="mr-1" />
                                                    {donnee?.second_level_response?.length}{" "}
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
                                    id={`collapseExample${donnee?.id}`}
                                >
                                {donnee.second_level_response?.map((item:any) => {
                                    return (
                                        <div
                                            key={item.id}
                                            className={`row ${
                                                showLinks
                                                    ? styles.forumDiscussionLigneUnion
                                                    : ''}
                                            mb-3`}
                                            
                                        >
                                            <div className="col-3">
                                                <div 
                                                className={`row ${
                                                    showLinks
                                                        ? styles.rowReponseLigneUnion1
                                                        : ''}`}
                                                >
                                                    <div className="col-md-6">
                                                        <div className="p1 d-flex justify-content-end">
                                                            <img
                                                                src={item?.user?.avatar === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${item?.user?.firstName} + ${item?.user?.lastName}` : `${item?.user?.avatar}`}
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
                                                                ?.firstName +
                                                                " " +
                                                                item
                                                                    ?.user
                                                                    ?.lastName} 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className={`col-9`}>
                                                <div className={
                                                    styles.forumCardSommaire
                                                    }>
                                                    <div className="row">
                                                        <div className="col-12 pt-3 mb-md-4 mb-5">
                                                            <p className={
                                                                styles.textSommaireForum
                                                                }>
                                                                {
                                                                    item?.content
                                                                }{" "}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}

                                {
                                    DatasUserSession.map((item: any) => {
                                        return(

                                            <div 
                                                className={`row ${
                                                    showLinks
                                                        ? styles.rowReponseLigneUnion
                                                        : ''}`} key={item.id}
                                            >
                                                <div className="col-3">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="p1 d-flex justify-content-end">
                                                                <img
                                                                    src={item?.user?.avatar === '/mediafiles/avatars/default.png' ? `https://ui-avatars.com/api/?name=${item?.user?.firstName} + ${item?.user?.lastName}` : `${item?.user?.avatar}`}
                                                                    alt="user-avatar"
                                                                    className={styles.imgSommaireForumDiscussion2}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 d-flex align-item-md-center">
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

                                                <div className="col-9">
                                                {/* <AjoutComments
                                                    onSubmitMessageResponse={(comment: string)=>{
                                                    onAddResponseComment(donnees, donnee, comment)
                                                    }} /> */}

                                                    <form className='mb-3' id='form-response'>
                                                        <div className={
                                                            `${styles.forumCardSommaire}` 
                                                            }>
                                                            <div className='row'>
                                                                <div className='col-12 pt-3 mb-md-4 mb-5'>
                                                                    <textarea className='form-control'
                                                                    placeholder='Répondre' name='contents' 
                                                                    value={response}
                                                                    onChange={(e)=>{
                                                                        setResponse(e.target.value)
                                                                    }}
                                                                    ></textarea>                       
                                                                </div>                  
                                                            </div>
                                                        </div>

                                                        <button className={
                                                            styles.formAddCguButtonAjouter 
                                                        }
                                                            onClick={(e) => submitReponse(e, donnee.id, item.id)}
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
                    )
                })
            }
			
		</div>
	);
};

export default FrontCommentItem