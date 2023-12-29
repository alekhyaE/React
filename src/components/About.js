import React from "react";
import UserClass from './UserClass';
class About extends React.Component{
    constructor(props){
        super(props);
        // console.log("parent constructor invoked");
        this.state={
           
        }

    }
     componentDidMount(){
        // console.log("parent componentDidMount invoked");
        
    }
    render(){
        // console.log("parent render invoked")
        return (
            <div>
                <h1>About</h1>
                <h2>This is Namaste React Web Series</h2>
                {/* <User/>
                <UserClass name={"first(classs)"} location={"Gangavati(class)"}/> */}
                <UserClass name={"Second (classs)"} location={"Gangavati(class)"}/>
            </div>
        )
    }
}


export default About;
