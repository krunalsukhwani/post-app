import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from './Modal';

function PostsList( { isPosting, onStopPosting } ) {

    let modalContent;

    if (isPosting) {
        modalContent = <Modal onClose={onStopPosting}>
            <NewPost
                onCancel={onStopPosting}
            />
        </Modal>;
    }

    return (
        <>
            {modalContent}

            <ul className={classes.posts}>
                <Post author="James" body="I am business architect in IT company" />
                <Post author="Sanjay" body="Software Developer" />
            </ul>
        </>
    );
}

export default PostsList;