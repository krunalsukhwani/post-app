import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
    return (
        <>
            <NewPost />
            <ul className={classes.posts}>
                <Post author="Krunal" body="I am lead in IT company" />
                <Post author="James" body="I am business architect in IT company" />
                <Post author="Sanjay" body="Software Developer" />
            </ul>
        </>
    );
}

export default PostsList;