import React from 'react'
import styles from '../styles.module.css'
import SommaireItem from './SommaireItem';



type sommaireProps = {
  Datas: any
}

const Sommaire: React.FC<DatasType> = ({ Datas }:sommaireProps): JSX.Element => {

  // const [hideButton, setHideButton] = useState(false)

  // const toggleHideButton = () => {
  //   setHideButton(!hideButton)
  // }

  return (
      <div className={styles.componentListeProjet}>
        <div className={styles.contentViewStart}>
          <div className={styles.containerCayore}>
            <div className="row align-items-center" style={{ margin: "3rem 0" }}>
            <div className="col-12">
              {
                <SommaireItem Datas={Datas}  />
              }

              <button type="button" className={`btn ${styles.btnAjoutSujet}` }data-toggle="modal" data-target="#exampleModal">
                +
              </button>

              {/* <button type="button" className={`btn ${styles.btnConnexion}
                ${hideButton
                ? styles.hideButton
                : ''}
                  ` } onClick={() => {toggleHideButton()}} data-toggle="modal" data-target="#exampleModalhuit">
                Connection
              </button> */}

          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sommaire
