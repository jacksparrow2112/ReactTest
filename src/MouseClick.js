import { useState } from "react"

function MouseClick(props) {
    function greet(greeting, lang) {
        console.log(lang);
        console.log(`${greeting}, I am ${this.name} and I am ${this.age} years old`);
      }
      const john = {
        name: 'John',
        age: 24,
      };
      const jane = {
        name: 'Jane',
        age: 22,
      };
      // Hi, I am John and I am 24 years old
      greet.apply(john, ['Hi', 'en']);
      // Hi, I am Jane and I am 22 years old
      greet.apply(jane, ['Hola', 'es']);

        function handleClick(e) {  
            e.preventDefault();  
            console.log('You had clicked a Link.');  
        }     
    return (
        <div>
            <a href="https://www.javatpoint.com/react-events" onClick={handleClick}>  
                  Click_Me  
            </a>  
            <div> Button Clicked {props.count} times</div>
            <button onClick={props.clicker}> Clicker</button>
        </div>
    )
}
export default MouseClick