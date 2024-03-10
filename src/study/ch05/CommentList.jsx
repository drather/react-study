import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "kks",
        comment: "hihi",
    },
    {
        name: "kjw",
        comment: "hihi",
    },
    {
        
    }
]

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;
