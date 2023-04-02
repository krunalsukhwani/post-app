import { useState } from 'react';
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {

    const [ enteredBody, setEnteredBody ] = useState('');

    const [ enteredAuthor, setEnteredAuthor ] = useState('');

    function bodyChangeHandler(event){
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event){
        setEnteredAuthor(event.target.value);
    }
    return (
        <>
            <NewPost 
                onBodyChange={bodyChangeHandler} 
                onAuthorChange={authorChangeHandler}
            />
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author="James" body="I am business architect in IT company" />
                <Post author="Sanjay" body="Software Developer" />
            </ul>
        </>
    );
}

export default PostsList;