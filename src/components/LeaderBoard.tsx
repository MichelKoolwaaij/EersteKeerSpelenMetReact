import LeaderRow from "./LeaderRow";
// Leaderboard
// Laat de mensen zien die het meeste getweet hebben
// En als je iemand selcteert, dan wordt die gehighlight


export default function LeaderBoard(props){
    const leaderList = {};
    props.tweets.forEach((tweet) => {
        const key = JSON.stringify(tweet.name);
        leaderList[key] = leaderList[key] ? leaderList[key] + 1 : 1;

    });
    return (<div className="LeaderBoard">
        <table>
            <thead>
            <tr>
                <th>Name: </th>
                <th>Amount: </th>
            </tr>
            </thead>
            <tbody>
            {Object.keys(leaderList).map((leader) => (
                <LeaderRow
                    name={leader}
                    amount={leaderList[leader]}
                    key={JSON.stringify(leader)}
                    onSelect={() => props.onSelect(JSON.parse(leader))}
                />
            ))}
            </tbody>
        </table>
    </div>)
}