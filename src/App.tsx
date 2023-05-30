
import ListGroup from "./components/ListGroup";
import TweetForm from "./components/TweetForm";
import TweetList from "./components/TweetList";
import {useState} from "react";
import LeaderBoard from "./components/LeaderBoard";

function App(){

    const onSubmit = function (e) {
        e.preventDefault();
        setTweets([...tweets, {name: name, message: message}]);
    }

    const pizzas = [
        'Pizza Hawai',
        'Quattro Stagioni',
        'Brocolli Pizza',
        'Calzone Shoarma',
        'Veggie pizza'
    ];

    const docenten = [
        'Meron',
        'Michel',
        'Jaap',
        'Fritz',
        'Marco'
    ]
    // Hier krijgen we twee variabelen terug. De eerste is de value, de tweede is hier de setter
    // De array notatie wordt hier dus gebruikt om twee variabelen in 1 keer te vullen.
    const [name, setName] = useState('Michel');
    const [message, setMessage] = useState('Ik wil een');

    // We gebruiken useState als een equivalent van New, waarbij we direct een setter terugkrijgen
    const [tweets, setTweets] = useState([{name: 'Fritz', message: 'Prachtige tweet'}]);
    const [leader, setLeader] = useState();

    const changeName = function (e) {
        setName(e.target.value);
    }

    const changeMessage = function (e) {
        setMessage(e.target.value);
    }

    const addPizzaToMessage = function (pizza) {
        setMessage(message + ' ' +pizza);
    }

    const setTweeter = function (docent){
        setName(docent);
        setMessage ('Doe mij maar een');
    }

    const onSelectPerson = (person) => setLeader(person);

    return <div className="App">
        <ListGroup header='Wie tweet er:' items={docenten} onSelectItem={setTweeter}/>
        <ListGroup header='Kies je pizza:' items={pizzas} onSelectItem={addPizzaToMessage}/>
        <TweetForm onSubmit={onSubmit}
                   name={name} message={message}
                   changeName={changeName} changeMessage={changeMessage}/>

    <section id="mijnSectie">
        <TweetList tweets={tweets} leader={leader}/>
        <LeaderBoard tweets={tweets} onSelect={onSelectPerson}/>

    </section>
    </div>;
}

// Huiswerk:
// TweetList component
// Tweet component

export default App;