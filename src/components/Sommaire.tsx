import React from 'react'
import styles from '../styles.module.css'
import SommaireItem from './SommaireItem';


const Sommaire: React.FC<DatasType> = ({ Datas }): JSX.Element => {


  return (
      <div className="component-liste-projet">
        <div className={styles.contentViewStart}>
          <div className={styles.containerCayore}>
            <div className="row align-items-center" style={{ margin: "3rem 0" }}>
            <div className="col-12">
              {
                  <SommaireItem Datas={Datas}  />
              } 

              <button type="button" className="btn btn-primary btn-ajout-sujet" data-toggle="modal" data-target="#exampleModal">
                Ajouter un sujet
              </button>

          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sommaire