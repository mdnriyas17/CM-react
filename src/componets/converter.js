import React from "react";

function Cmconverter (){

    function handlechange(){
        let Centemeter =  Number(document.getElementById("input").value)
    let convertinch = Centemeter /2.54
    let result = document.getElementById("value");
    result.innerHTML= `${convertinch.toFixed(2)} inch`;
    }

    return (
    
        <div>
           <h1 class="heading">welcome to <br/>Centemeter to Inch converter</h1>
    <div id="main">
        <div id="container">
            <div id="heading-parent">
                <h1 id="heading">
                   CM to Inch converter
                </h1>
            </div>
            <div id="input-parent">
                <input id="input" type="text" placeholder="Enter value in Centemeter"/>
            </div>
            <div id="button"><ul></ul>
                <button id="submit" onClick={()=>handlechange()}>
                    converter
                </button>
            </div>
            <div id="value-parent">
                <p id="value">
                    
                </p>
            </div>
        </div>
        </div>
     </div>
    )
}
export default Cmconverter;