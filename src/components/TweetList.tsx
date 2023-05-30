import SingleTweet from "./SingleTweet";

function TweetList(props){
    const tweetList = props.tweets.map(tweet => {
        const highlighted = tweet.name === props.leader;
        return <SingleTweet key="{tweet.name+tweet.message}" tweet={tweet} highlighted={highlighted}/>
});
    return (
        <>
        {tweetList}
        </>

    )
}

export default TweetList;