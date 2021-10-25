import React,  { useState } from "react";

const About = () => {

	const [data, setData] = useState([]);
   

    const getContacts = async () => {
        try{
            const res = await fetch("https://api.rootnet.in/covid19-in/contacts.json");
            const actualData = await res.json();
            // console.log(actualData);
            // console.log(actualData);
            console.log(actualData.data.contacts);
            setData(actualData.data.contacts);
        }catch(err){
            console.log("error");
        } 
    }
   
}
        
    
 


export default About;
