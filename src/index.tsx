import * as React from 'react'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Discussion from './components/Discussion'
import Sommaire from './components/Sommaire'

interface ForumProps {
  data: any;
}


export const VolkenoForumy = ({...props}: ForumProps) => {

  const {
     data
  } = props

  return (
    <BrowserRouter>
			<div className="router-container">
				<Routes>
					<Route
						path="/"
						element={<Sommaire Datas={data}  />}
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
  )
}
