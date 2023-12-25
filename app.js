// const header = React.createElement("h1", {id:"heading","p1":"xyz"}, "Hello World from React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(header);

import React from 'react';
import ReactDOM from 'react-dom/client';
//React Element
const header= React.createElement("div", {id:"parent"}, 
                React.createElement("div", {id:"child"},
                [React.createElement("h1",{},'I am head1'),
                React.createElement("h2",{},'I am head2')]));

//React Element
const jsxHeading = (<h1 id="heading" className="head" tabIndex="1">JSX is here and This is just the beginning</h1>);              

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);

//React Functional Component


const Title = () =>
     (
        
        <h1 id="heading" className="head" tabIndex="1"> Title- Alekhya is here  !!!</h1>
        
     );

const number =100000;     

//Component composition -> One component inside another

const HeaderComponent= () =>
     (
        <div id="component">
        <h2>{number}</h2>
        <h1> React Component is here !!!</h1>
        </div>
     );


// root.render(<HeaderComponent/>);

const elem = 
     (
        
        <span> Putting element inside element  </span>
        
     );
//Putting elem inside a elem
const title = 
     (
        
        <h1 id="heading" className="head" tabIndex="1"> {elem}
        Title- Alekhya is here  !!!</h1>
        
     );


//Putting React Element inside component
     const HeaderComponent1= () =>
     (
        <div id="component">
        {title}
        <h1> React Component is here !!!</h1>
        </div>
     );

     root.render(<HeaderComponent1/>);

//Both fn and fn2 are one and the same

const fn=()=>{
    return true;
}

const fn2=()=> true;

/* React.createElement -> creates React Element -> This is object
    render -> takes object and converts it to HTML



*/
