import * as React from 'react'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Discussion from './components/Discussion'
import Sommaire from './components/Sommaire'

interface ForumProps {
  Datas: any;
}


export const VolkenoForumy = ({...props}: ForumProps) => {

  const {
    Datas
  } = props

  const onAddComment = (subject: any, commentText:any) =>{
    console.log(
    subject,
    commentText
  )}

  const onAddResponseComment = (subject:any, comment:any, commentText:any) => {
    console.log(
      subject,
      comment,
      commentText
    )
  }

  return (
    <BrowserRouter>
			<div className="router-container">
				<Routes>
					<Route
						path="/"
						element={<Sommaire Datas={Datas}  />}
					/>
					<Route
						path="/forum-discussion/:id"
						element={<Discussion onAddComment={onAddComment}
            onAddResponseComment={onAddResponseComment}
            />}
					/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
