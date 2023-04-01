const names = ['Krunal Sukhwnai', 'James Lee' ]

function Post(){
    const chosenName = Math.random() > 0.5 ? names[0] : names[1];

    return (
        <div>
            <p>{chosenName}</p>
            <p>I am professor in centennial college.</p>
        </div>
    );
}

export default Post;