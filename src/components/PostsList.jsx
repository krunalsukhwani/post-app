import { useState } from 'react';
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from './Modal';

function PostsList( { isPosting, onStopPosting } ) {

    const [enteredBody, setEnteredBody] = useState('');

    const [enteredAuthor, setEnteredAuthor] = useState('');

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    let modalContent;

    if (isPosting) {
        modalContent = <Modal onClose={onStopPosting}>
            <NewPost
                onBodyChange={bodyChangeHandler}
                onAuthorChange={authorChangeHandler}
            />
        </Modal>;
    }

    return (
        <>
            {modalContent}

            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author="James" body="I am business architect in IT company" />
                <Post author="Sanjay" body="Software Developer" />
            </ul>
        </>
    );
}

export default PostsList;