
import ListGroup from "./components/ListGroup";
import TweetForm from "./components/TweetForm";
import TweetList from "./components/TweetList";
import {useEffect, useReducer, useState} from "react";
import LeaderBoard from "./components/LeaderBoard";

// In dit voorbeeld gebruiken zowel useState als useReducer
// UseState werkt als een getter en een setter, zie verderop.
// Hier gebruiken we useReducer, waarbij variabelen zijn gebundeld in een state.
const tweetReducer = (state, action) => {
    switch (action.type) {
        case 'name': // Omdat we name zetten, zou message verwijderd worden
            // Daarom gebruiken we ... state, om de overige states te behouden
            return {...state, name: action.payload};
        case 'message':
            return {...state, message: action.payload};
        default:
            throw new Error();
    }
}

// function App is zoiets als void main in Java. De start.
// Hier zet je wat je anders in index.html zou zetten.
// Nu gebruik ik het ook als StateManager, omdat ik nog geen alternatief ken.
function App(){

    const onSubmit = function (e) {
        e.preventDefault();
        // Prachtige manier om een tweet aan de array toe te voegen
        console.log(tweet.name+' en ', tweet.message);
        setTweets([...tweets, {name: tweet.name, message: tweet.message}]);
    }

    const [pizzas, setPizzas] = useState([
        'Pizza 1',
        'Pizza 2',
        'Pizza 3',
        'Pizza 4',
        'Pizza 5'
    ]);

    // Mijn pizza mock in mock.io => https://mocki.io/v1/7bd62591-9461-4512-b555-3f869d3f019b
    const fetchPizzaData = () => {
        fetch("https://mocki.io/v1/7bd62591-9461-4512-b555-3f869d3f019b")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setPizzas(data.map((pizza)=>pizza.name));
            })
    }

    // Om useEffect te laten starten is het nodig dat de rendering slaagt.
    // Vandaar dat pizzas een initiele waarde moet hebben.
    useEffect(() => {
        console.log("Start");
        fetchPizzaData()
    }, []); // Door de lege array (deps, oftewel dependencies) wordt het gestart bij het laden

    // Je kunt children meegeven aan een component met het attribuut 'children'.
    // Dat doen we hier niet.

    // Huiswerk: use reducer gebruiken.
    // const [tweet, dispatchTweets] = useReduce (mealsReducer, initialState)
    // Deze moet ik ook testen met Jest. Noem dit 'component.test.js'
    // test('deze testnaam slaagt', () => {-- init -- act -- exoect(data).toBe(x)})
    const [tweet, dispatchTweets] = useReducer(tweetReducer, {name: 'Michel',message:'Ik wil een'} );


    const docenten = [
        'Meron',
        'Michel',
        'Jaap',
        'Fritz',
        'Marco'
    ]

    // Hier krijgen we twee variabelen terug. De eerste is de value, de tweede is hier de setter
    // De array notatie wordt hier dus gebruikt om twee variabelen in 1 keer te vullen.
    // We gebruiken useState als een equivalent van New, waarbij we direct een setter terugkrijgen
    const [tweets, setTweets] = useState([{name: 'Fritz', message: 'Prachtige tweet'}]);
    const [leader, setLeader] = useState();

    const changeName = function (e) {
        dispatchTweets({type: 'name', payload: e.target.value});
        //setName(e.target.value);
    }

    const changeMessage = function (e) {
        dispatchTweets({type: 'message', payload: e.target.value});
        //setMessage(e.target.value);
    }

    const addPizzaToMessage = function (pizza) {
        dispatchTweets({type: 'message', payload: tweet.message+' '+pizza});
        //setMessage(message + ' ' +pizza);
    }

    const setTweeter = function (docent){
        dispatchTweets({type: 'name', payload: docent});
        dispatchTweets({type: 'message', payload: 'Doe mij maar een'});
        //setName(docent);
        //setMessage ('Doe mij maar een');
    }

    const onSelectPerson = (person) => setLeader(person);

    return <div className="App">
        <div className="container">
            <div className="row">
                <div className="col-sm">
        <ListGroup header='Wie tweet er:' items={docenten} onSelectItem={setTweeter}/>
            </div>
            <div className="col-sm">
        <ListGroup header='Kies je pizza:' items={pizzas} onSelectItem={addPizzaToMessage}/>
        </div>
            </div>
            <div className="row">
        <TweetForm onSubmit={onSubmit}
                   name={tweet.name} message={tweet.message}
                   changeName={changeName} changeMessage={changeMessage}/>
            </div>

    <div className="row">
        <div className="col-sm">
        <TweetList tweets={tweets} leader={leader}/>
    </div>
            <div className="col-sm">
        <LeaderBoard tweets={tweets} onSelect={onSelectPerson}/>
            </div>

    </div>
        </div>
    </div>;
}

export default App;