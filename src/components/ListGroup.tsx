import {Fragment, useState} from "react";

interface Props{
    items: String[];
    header: String;
    onSelectItem: ()=>void;
}

function ListGroup(props: Props){


    const changeSelected = function (item: String, index: number, onSelectItem: void){
        setIndex (index);
        setItem(item);
        console.log(index, item);
        onSelectItem(item);
    }

    const [selectedIndex, setIndex] = useState(-1);

    const [item, setItem] = useState('Michel');

    // Als er 0 items zijn, dan wordt de error getoond.
    const checkItems = (error: string) => props.items.length === 0 && <p> {error} </p>;
    return (
        <>
            <h1>{props.header}</h1>
            {checkItems('Geen items aanwezig')}
            <ul className="list-group">
                {props.items.map((item, index) =>
                    <li className={selectedIndex === index ? 'list-group-item active':'list-group-item'}
                        onClick={()=>changeSelected(item,index, props.onSelectItem)} key={item}>{item}</li>)}
            </ul>
        </>
    )
}

export default ListGroup;