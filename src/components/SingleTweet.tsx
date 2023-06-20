function SingleTweet(props){
    return (
        <div className="tweet">
            <strong className={props.highlighted ? "mark" : ""}>{props.tweet.name}</strong>

            <em>: {props.tweet.message}</em>
        </div>
    )
}

export default SingleTweet;