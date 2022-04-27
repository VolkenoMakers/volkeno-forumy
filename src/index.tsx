import * as React from 'react'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Discussion from './components/Discussion'
import Sommaire from './components/Sommaire'

interface ForumProps {
  Datas: any;
  // onSubmitMessageResponse:  (value: any) => void;
  DatasUserSession: any
}


export const VolkenoForumy = ({...props}: ForumProps) => {

  let {
    Datas, DatasUserSession
  } = props
  

  

  const onSubmitMessageResponse = (
    subject: any, 
    commentText:any
    ) =>{
    console.log(
    'sujet',subject,
    // 'comment',commentText
    )
    let field ={
      content : commentText,
      user: {
        firstName: "Paul",
        lastName: "Gomis",
        avatar: '/mediafiles/avatars/default.png',
      }
    }
    Datas = subject.first_level_response.push(field)
    console.log('date',Datas)
  }

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
						path="/forum-discussion/:slug"
						element={<Discussion onAddComment={onSubmitMessageResponse}
            onAddResponseComment={onAddResponseComment}
            datasUserSession={DatasUserSession}
            
            />}
					/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}
