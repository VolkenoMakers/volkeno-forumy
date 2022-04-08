import * as React from 'react'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Discussion from './components/Discussion'
// import Discussion from './components/Discussion'
import Sommaire from './components/Sommaire'
// import styles from './styles.module.css'

// interface Props {
//   text: string
// }

export const VolkenoForumy: React.FC = () => {
  return (
    // <div className={styles.test}>Example Component: {text}</div>

    <BrowserRouter>
			<div className="router-container">
				<Routes>
					<Route
						path="/"
						element={<Sommaire/>}
					/>
					<Route
						path="/forum-discussion/:id"
						element={<Discussion/>}
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
