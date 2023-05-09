import React from "react"
import { data } from "./data";

import ListItem from "./ListItems";

const App = () => {

  return (
    <main className="container">
      <ul className="comments-container">
        {
          data.map((eachComment) => {
            const {id,name,email,body} = eachComment;

            return <ListItem key={id} id={id} name={name} email={email} body={body}/>
          })
        }


      </ul>
    </main>
    
  );
};





export default App;
