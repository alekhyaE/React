// const header = React.createElement("h1", {id:"heading","p1":"xyz"}, "Hello World from React");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(header);



const header= React.createElement("div", {id:"parent"}, 
                React.createElement("div", {id:"child"},
                [React.createElement("h1",{},'I am head1'),
                React.createElement("h2",{},'I am head2')]));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);
