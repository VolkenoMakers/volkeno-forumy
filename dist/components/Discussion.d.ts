/// <reference types="react" />
declare type discussionProps = {
    onAddComment: (subject: any, commentText: string) => any;
    onAddResponseComment: (subject: any, comment: any, commentText: string) => any;
    datasUserSession: any;
};
declare const Discussion: ({ onAddResponseComment, datasUserSession }: discussionProps) => JSX.Element;
export default Discussion;
