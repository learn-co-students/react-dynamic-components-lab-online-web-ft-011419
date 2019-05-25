// add Comment component here
import React, { Component } from 'react'
// this will be used to prop to APP.js
export default class Comment extends Component {
    render() {
        return (
            <div className="comment">
                {this.props.commentText}
            </div>
        )
    }
}
