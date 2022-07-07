import * as React from 'react'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Discussion from './components/Discussion'
import Sommaire from './components/Sommaire'

interface ForumProps {
  Datas: any;
  DatasUserSession: any
  hasThirdLevel?: any
}


export const VolkenoForumy = ({...props}: ForumProps) => {

  let {
    Datas, DatasUserSession
  } = props


  return (

			<div className="router-container">
        <BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<Sommaire Datas={Datas}  />}
					/>
					<Route
						path="/forum-discussion/:slug"
						element={<Discussion
              hasThirdLevel={props.hasThirdLevel && props.hasThirdLevel}
            datasUserSession={DatasUserSession} />}
					/>
        </Routes>
        </BrowserRouter>
      </div>

  )
}
