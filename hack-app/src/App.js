import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
// TODO: start here

function App() {

    
    const [data, setData] = useState([]);

    // GET request function to your Mock API
    const fetchData = () => {
        axios
            .get('http://localhost:4000/data')
            .then(resp => {
                console.log(`statusCode: ${resp.status}`);
                //console.log(resp.data.records);
                setData(resp.data.records);
            })
            .catch(error => {
                console.error(error);
            });
    }

    // Calling the function on component mount
    useEffect(() => {
        fetchData();
    }, []);
    console.log(data);
    return (
        <>

            <h1>Haufe Hackathon</h1>

            <table id="simple-board">
                <tbody>
                    { 
                      data.map((item) => (
                          <tr key={item.id}>
                              <td>{item._id}</td>
                              <td>{item.id}</td>
                              <td>{item.tipcolectare}</td>
                              <td>{item.adresa}</td>
                              <td>{item.companie}</td>
                              <td>{item.website}</td>
                              <td>{item.latitudine}</td>
                              <td>{item.longitudine}</td>
                              <td>{item.count}</td>
                              <td />
                          </tr>
                      ))
                  }
                </tbody>
            </table>
            {/* <Map/> */}
        </>
    );

}

export default App;
