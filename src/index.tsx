import * as React from 'react'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Discussion from './components/Discussion'
// import Discussion from './components/Discussion'
import Sommaire from './components/Sommaire'
// import styles from './styles.module.css'

// interface Props {
//   item: []
// }

export const VolkenoForumy: React.FC = () => {
  return (
    // <div className={styles.test}>Example Component: {text}</div>

    <BrowserRouter>
			<div className="router-container">
				<Routes>
					<Route
						path="/"
						element={<Sommaire titre={''} Contenu={''} id={0} created_at={''} prenom={''} nom={''} avatar={''} fullname={''} text={''} item={[]} state={[]} donnees={[]}  />}
					/>
					<Route
						path="/forum-discussion/:id"
						element={<Discussion onAddComment={(subject, commentText)=>{
              console.log(
                subject,
                commentText
              )
              
            }}
            onAddResponseComment={(subject, comment, commentText)=>{
              console.log(
                subject,
                comment,
                commentText
              )
              
            }}
            />}
					/>
        </Routes>
      </div>
    </BrowserRouter>



    // <div>
    //   <Sommaire />
    //   {/* <Discussion /> */}
    // </div>
  )
}
