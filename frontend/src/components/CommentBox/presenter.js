import React from 'react';
import PropTypes from 'prop-types';

const CommentBox = (props,context)=>(
    <form>
        <textarea placeholder={context.t("Add a comment...")} />
    </form>
)

CommentBox.contextTypes = {
    t: PropTypes.string.isRequired
}

export default CommentBox;