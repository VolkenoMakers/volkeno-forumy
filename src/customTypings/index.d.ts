declare module 'myTypes' {
    type DatasType = {
        initialTitle: string,
        initialContent: string,
        id: number,
        slug: string | number,
        created_at: string,
        firstName: string,
        lastName: string,
        avatar: string,
        // fullname: string,
        content: string,
    };
    export {DatasType}
  
    interface DatasProps {
        datas: DatasType,
    }
    export {DatasProps}
  }
  