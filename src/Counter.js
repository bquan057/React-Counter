import { useState } from "react";

const Counter = () => {
    
    const [count, setCount] = useState(0);

    return (

        <div class="columns is-mobile is-centered is-vcentered has-background">

            <div class="column is-one-third has-background-grey-lighter">

                <div class="columns is-vcentered mb-0">
                    <div class="column">
                        <input id="input" class="input is-info is-rounded" type="text" placeholder="Enter a number"></input>
                    </div>
                    <div class="column">
                        <button id="assign" class="button is-info is-rounded" type="submit" value="Submit input" onClick={() => setCount(parseInt(document.querySelector("#input").value))}>Assign</button>
                    </div>
                    <div class="column">
                        <h1 id="output" class="title is-1">{count}</h1>
                    </div>
                </div>
                <div>
                    <button id="increment" class="button is-success is-small is-rounded ml-5 p-4" onClick={() => setCount(count + 1)}>+</button>
                    <button id="decrement" class="button is-danger is-small is-rounded ml-3 p-4" onClick={() => setCount(count - 1)}>-</button>
                </div>

            </div>
        
        </div>
    )
}

export default Counter;