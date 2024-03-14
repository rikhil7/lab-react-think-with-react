const container = document.getElementById('react-container');


// ! Iteration-1

// ReactDOM.render("Hi I am Rikhil", container)



// ! Iteration-2

// function creating(){
//     return(
//         React.createElement(
//             'div',          //tag name
//             {id:"h1-tag"},           // props
//             "Hey Kalvians! Welcome to React Learning",
//             React.createElement(
//                 'div',
//                 null,
//                 "Let's rock and roll"
//             )
//         ) 
//     )
// }
// ReactDOM.render(creating(),container)



// ! Iteration-3

class KalviumContainer extends React.Component{
    render(){
        return React.createElement(
                'div',          //tag name
                {id:"h1-tag"},           // props
                "Hey Kalvians",
                React.createElement(
                    'div',
                    null,
                    "Let's rock and roll with classes"
                )
            )
        }
    }

ReactDOM.render(React.createElement(KalviumContainer),container);