import React,  { useEffect, useState } from "react";
import "../components/covid.css";
import $ from "jquery";

const Helplines = () => {

	const [data, setData] = useState([]);
   

    const getContacts = async () => {
        try{
            const res = await fetch("https://api.rootnet.in/covid19-in/contacts.json");
            // const res = ("https://github.com/amodm/api-covid19-in/blob/master/data/contacts-in.json");
            
            let contactData = await res.json();
            console.log(contactData.data.contacts.regional);
            // console.log(contactData);
            // console.log(contactData);
            setData(contactData.data.contacts.regional);
        }catch(err){
            console.log("error");
        } 
    }

    
    $('#txt_searchall').keyup(function(){
            
        // Search Text
        var search = $(this).val();
    
        // Hide all table tbody rows
        $('table tbody tr').hide();
        
    
        // Count total search result
        var len = $('table tbody tr:not(.notfound) td:contains("'+search+'")').length;
        
        if(len > 0){
          // Searching text in columns and show match row
          $('table tbody tr:not(.notfound) td:contains("'+search+'")').each(function(){
            $(this).closest('tr').show();
            $('table tbody tr:nth-child(1)').show();
            $("tr:contains('Total')").show();
            // if ("td:contains('State Unassigned')") {
            //     $(this).css('display','none');
            // }

            $('td:contains("State Unassigned")').closest('tr').css('display','none');

            

          });
        }else{
          $('.notfound').show();
        }
    
      });
      $.expr[":"].contains = $.expr.createPseudo(function(arg) {
        return function( elem ) {
        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
        };
    });

useEffect(() => {
    getContacts();
}, []);
        
return (

    <>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"/> */}
        <section>
            <h1 className="blinker">🔴Live</h1>
            <h2>Covid-19 Record Tracker </h2>
        </section>


        <div id="search">
            <input type='text' id='txt_searchall' placeholder='Enter state name to find helpline number...'/>
        </div>


        
        <div>
        
            <table id="mytable">      
                <tbody>
                 
                <tr id="fix">
                   
                    <td id="nm" datatype="string">Name</td>
                    <td id="cnf" data-type="string">Numbers</td>
                    
                </tr> 
                
                
                
                {
                    data.map(data => (
                    <tr id="content">

                        <td key={data.id}>{data.loc}</td>
                        <td key={data.id}>{data.number}</td>
                        
                    </tr>
                    ))
                }

                </tbody>


            </table>
        
            </div>

    </>
  );
}

export default Helplines;
