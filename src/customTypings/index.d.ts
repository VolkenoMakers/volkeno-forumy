declare module 'myTypes' {
    type DatasType = {
        titre: string,
        Contenu: string,
        id: number,
        created_at: string,
        prenom: string,
        nom: string,
        avatar: string,
        fullname: string,
        text: string,
    };
    export {DatasType}
  
    interface DatasProps {
        datas: DatasType,
    }
    export {DatasProps}
  }
  
//   module.exports = {
//     DatasType,
//     DatasProps,
//   };