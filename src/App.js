import React, {useEffect, useState} from 'react'
import './App.css';
import BreedContext from "./context/breed-context";
import Breeds from "./Breeds";

function App() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/list/all')
            .then(res => res.json())
            .then(res => {
                const temp = [];
                for (const msg of Object.keys(res.message)) {
                    temp.push({breed: msg, nationalities: res.message[msg]});
                    temp[msg] = res.message[msg];
                }
                setData(temp);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <BreedContext.Provider value={{data, setData}}>
            <Breeds/>
        </BreedContext.Provider>
    );
}

export default App;
