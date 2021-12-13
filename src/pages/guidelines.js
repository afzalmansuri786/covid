import { useEffect, useState} from "react";
import React, { Component } from 'react';
// import SinglePagePDFViewer from '../components/pdf/single-page';
// import logger from 'logging-library';
// import FileViewer from 'react-file-viewer';
// import { CustomErrorComponent } from 'custom-error';
import "../components/covid.css";
import $ from "jquery";
import '../pages/guidelines.css';
const Guidelines = () => {
    
    // const type = 'pdf';


	const [data, setData] = useState([]);
   

    const getNotifications = async () => {
        try{
            const res = await fetch("https://api.rootnet.in/covid19-in/notifications");
            
            
            let guidelines = await res.json();
            console.log(guidelines.data.notifications);
            setData(guidelines.data.notifications);
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
    getNotifications();
}, []);


return (
    
    <>
      
        <section>
            <h1 className="blinker">🔴Live</h1>
            <h2>Covid-19 Record Tracker </h2>
        </section>


        <div id="search">
            <input type='text' id='txt_searchall' placeholder='Enter topic to search...'/>
        </div>


        
        <div>
        
            <table id="mytable">      
                <tbody>
                 
                <tr id="fix">
                   
                    <td id="nm" datatype="string">Guideline Topics</td>
                    <td id="cnf" data-type="string">Links</td>
                    
                </tr> 
                
                
                
                {
                    data.map(data => (
                    <tr id="content">

                        <td key={data.id}>{data.title}</td>
                        <td key={data.id}>{data.link}</td>
                        
{/*                         
                     <td>
                     <FileViewer
                     fileType={type}
                        filePath={data.link}
                        errorComponent={CustomErrorComponent}
        // onError={this.onError}
        />
                        </td>
                        
                         */}
                    </tr>
                    
                    ))
                }

                </tbody>


            </table>
        
            </div>

    </>
    
  );
}
export default Guidelines;