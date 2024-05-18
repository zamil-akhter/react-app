import React, {Component} from "react";

// function man(){
//     return(
//         <h2>this is function based component</h2>
//     );
// }

const man = (props) => {
    return(
        <h2>{props.number}. this is function based component</h2>
    );
}


export default man;