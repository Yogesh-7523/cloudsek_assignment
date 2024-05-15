import { Comment } from "./Comment"
import React, { Component }  from 'react';
export function CommentList({ comments }) {
  return comments.map(comment => (
    <div key={comment.id} className="comment-stack">
      <Comment {...comment} />
    </div>
  ))
}
