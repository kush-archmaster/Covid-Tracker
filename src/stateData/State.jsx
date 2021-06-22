import React, { useEffect, useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const State = () =>{

    const [data, setData] = useState([]);

    const getCovidData = async() =>{
         try {
             const response = await fetch('https://api.covid19india.org/data.json'); //gives data in json 
             const actualdata = await response.json(); //again return a promise

             setData(actualdata.statewise);

         } catch (error) {
             console.log(error);
         }
    }

    useEffect(()=>{
        getCovidData();
    }, [])
   
    return(
        <>
        
        <div className='container-fluid mt-3 '>
            <div className='main-heading'>
                  <h1 className='mb-4 text-center'><strong>India</strong> Covid-19 Dashboard</h1>
            </div>

            <div className='table-responsive'>
                <table className='table table-hover'>
                    <thead className='table-dark'>
                        <tr>
                            <th>State</th>
                            <th>Confirmed</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                            <th>Active</th>
                            <th>Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((currEl,index)=>{
                                return (
                                 index!==31?   
                                <tr key={index}>
                                <td>{currEl.state}</td>
                                <td>{currEl.confirmed}</td>
                                <td>{currEl.recovered}</td>
                                <td>{currEl.deaths}</td>
                                <td>{currEl.active}</td>
                                <td>{currEl.lastupdatedtime}</td>
                                </tr>
                                : null)
                            })
                        }
                    </tbody>
                    
                </table>
            </div>
        </div> 
        </>
    );
}

export default State;