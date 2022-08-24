import React from "react";
import axios from 'axios';

import './App.css';

class App extends React.Component {

    state={
        advice:''
    };

    /*const [movies, setMovies] = useState([]);
    Ici ne définit pas une variable à l'intérieur 
    de cette classe*/

    componentDidMount() {
            this.fetchAdvice();
    }

    fetchAdvice = () =>{
        axios.get('https://api.adviceslip.com/advice')
        .then((response)=>{
            const {advice} = response.data.slip;
            
            this.setState({ advice });
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    render() {
        const {advice} = this.state;

        return(
            <div className="container">
                <p className="title">Best Advices</p>
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                </div>
            </div>
            
        );
    }
}


export default App;