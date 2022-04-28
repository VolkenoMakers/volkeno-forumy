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
    <BrowserRouter>
			<div className="router-container">
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
      </div>
    </BrowserRouter>
  )
}
