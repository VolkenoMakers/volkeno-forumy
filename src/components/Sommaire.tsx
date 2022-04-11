import React from 'react'
import styles from '../styles.module.css'
import { DatasForum } from './DatasForum';
// import { BsChat } from "react-icons/bs";
// import { IoReturnDownBackOutline } from "react-icons/io5";
import { NavLink} from 'react-router-dom';
import SommaireItem from './SommaireItem';
// import avatar from './img/avatar.png'

// interface Props {
//     // text: string,
//     state:string[]
// }

function Sommaire(props:{}) {
  console.log(props)


  // const [forumData, setForumData] = useState();

  console.log('data forum',DatasForum)

  // const getForumData = (data: any) => {
  //   setForumData(data);
  //   console.log('forum',forumData)
  // };

    return (
        <div className="component-liste-projet">
          {/* <FrontHeaderV2 /> */}
          <div className={styles.contentViewStart}>
            <div className={styles.containerCayore}>
              <div className="row align-items-center" style={{ margin: "3rem 0" }}>
              <div className="col-12">
                      <NavLink
                        className={styles.navigationLink}
                        to={{
                          pathname: `/forum-discussion/${1}`,
                          // state: { item },
                        }}
                        // key={item.id}
                        // onClick={() => {
                        //   getForumData(item);
                        // }}
                      >

                        <SommaireItem />

                      </NavLink>
                     {/* )})} */}
              </div>
            </div>
            </div>
          </div>
          {/* <FrontFooterV2 /> */}
        </div>
      );
}

export default Sommaire