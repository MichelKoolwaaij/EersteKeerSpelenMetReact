export default function LeaderRow(props){
    return (
    <tr onClick={props.onSelect}>
        <td>{props.name}</td>
        <td>{props.amount}</td>
    </tr>
    )
}