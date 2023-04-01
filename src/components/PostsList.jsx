import Post from "./Post";
import classes from "./PostsList.module.css";

function PostsList() {
    return (
        <ul className={classes.posts}>
            <Post author="Krunal" body="I am lead in IT company" />
            <Post author="James" body="I am business architect in IT company" />
        </ul>
    );
}

export default PostsList;