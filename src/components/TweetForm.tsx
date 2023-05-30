import {useState} from "react";

function TweetForm(props){

    return <form  id="tweetForm" onSubmit={(e) => props.onSubmit(e)}>
        <div className="form-group">
          <label htmlFor="name" >Name:</label>
          <input type="text" id="name" className="form-control"  value={props.name} name="naam" onChange={props.changeName}/>
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">message:</label>
            <textarea className="form-control" id="message" value={props.message} name="message" onChange={props.changeMessage}></textarea>
        </div>
            <input className="btn btn-primary" type="submit" value="Submit"/>
    </form>

}

export default TweetForm;