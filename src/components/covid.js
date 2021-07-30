// import { cleanup } from "@testing-library/react";
import React,  { useEffect, useState } from "react";
// import { Row } from "reactstrap";
import "./covid.css";

const Covid = () => {

    const [data, setData] = useState([]);
   

    const getCovidData = async () => {
        try{
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            // console.log(actualData);
            // console.log(actualData);
            // console.log(actualData.statewise);
            setData(actualData.statewise);
        }catch(err){
            console.log("error");
        } 
    }
    // const no = data[1].map((x)=>{   
    //     return x; 
    //   });
    // console.log(no);
    console.log(data);

    // const x = () => {
    //     var i;
    //     for(i=0; i < data.length ;i++){
    //         <tr>
    //             <td>{data[i].state}</td>
    //             <td>{data[i].recovered}</td>
    //             <td>{data[i].deaths}</td>
    //             <td>{data[i].active}</td>
    //             <td>{data[i].confirmed}</td>
    //         </tr>
    //     }
    
        
    // }
    
    
      
        //     for(var i=0; i<data.length ; i++){
        //     console.log(data[i].lastupdatedtime);
        //     <tr value={data[i].state}>
        //         <td>{data[i].state}</td>
        //         <td>{data[i].active}</td>
        //         <td>{data[i].deaths}</td>
        //         <td>{data[i].confirmed}</td>
        //         <td>{data[i].lastupdatedtime}</td>;
        //     </tr>;
            
        // }
    
 

    useEffect(() => {
        getCovidData();
    }, []);

  return (

    <>
        <section>
            <h1 class="blinker">🔴Live</h1>
            <h2>Covid-19 LiveTracker </h2>
        </section>
        <div>
            <table>
                
                <tr>
                    <td>State</td>
                    <td>Recovered</td>
                    <td>Confirmed</td>
                    <td>Deaths</td>
                    <td>Active</td>
                    <td>LastUpdated</td>
                </tr>
                
                {data.map(dat => (
                    <tr>
                    <td key={dat.id}>{dat.state}</td>
                    <td key={dat.id}>{dat.recovered}</td>
                    <td key={dat.id}>{dat.active}</td>
                    <td key={dat.id}>{dat.confirmed}</td>
                    <td key={dat.id}>{dat.deaths}</td>
                    <td key={dat.id}>{dat.lastupdatedtime}</td>
                    </tr>
                ))}

            </table>
        
            </div>
    </>
  );
}

export default Covid;
