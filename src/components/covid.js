// import { cleanup } from "@testing-library/react";
import React,  { useEffect, useState } from "react";
// import { Row } from "reactstrap";
import "./covid.css";
import $ from "jquery";
import MetaTags from 'react-meta-tags';



const Covid = () => {

    const [data, setData] = useState([]);
   

    const getCovidData = async () => {
        try{
            const res = await fetch("https://data.covid19india.org/data.json");
            const actualData = await res.json();
            console.log(actualData);
            console.log(actualData);
            console.log(actualData.statewise);
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



        function sortTable(f,n){
            var rows = $('#mytable tbody  tr').get();
        
            rows.sort(function(a, b) {
        
                var A = getVal(a);
                var B = getVal(b);
                
                if(A < B) {
                    return -1*f;
                }
                if(A > B) {
                    return 1*f;
                }
                return 0;
            });
        
            function getVal(elm){
                var v = $(elm).children('td').eq(n).text().toUpperCase();
                if($.isNumeric(v)){
                    v = parseInt(v,10);
                }
                return v;
            }
        
            $.each(rows, function(index, row) {
                $('#mytable').children('tbody').append(row);
            });
        }
        var f_sl = 1;
        var f_nm = 1;
        // $("#nm").click(function(){
        //     f_sl *= -1;
        //     var n = $(this).prevAll().length;
        //     sortTable(f_sl,n);
        // });
        $("#cnf").click(function(){
            f_sl *= -1;
            var n = $(this).prevAll().length;
            sortTable(f_sl,n);
        });
        $("#act").click(function(){
            f_nm *= -1;
            var n = $(this).prevAll().length;
            sortTable(f_nm,n);
        });
        $("#rcv").click(function(){
            f_nm *= -1;
            var n = $(this).prevAll().length;
            sortTable(f_nm,n);
        });
        $("#dth").click(function(){
            f_nm *= -1;
            var n = $(this).prevAll().length;
            sortTable(f_nm,n);
        });

        $(document).ready(function(){
            $('table tr').each(function(){
                if($(this).find('td').eq(0).text() === 'State Unassigned'){
                    $(this).css('display','none');
                }
            });
        });

        
        
        // $('table').sortable({items: 'tr:not(:first)'});

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

              });
            }else{
              $('.notfound').show();
            }
        
          });
          // Case-insensitive searching (Note - remove the below script for Case sensitive search )
            $.expr[":"].contains = $.expr.createPseudo(function(arg) {
                return function( elem ) {
                return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
                };
            });

        
    
 

    useEffect(() => {
        getCovidData();
    }, []);

  return (

    <>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"/> */}
        <MetaTags>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </MetaTags>
        <section>
            <h1 className="blinker">🔴Live</h1>
            <h2>Covid-19 LiveTracker </h2>
        </section>


        <div id="search">
            <input type='text' id='txt_searchall' placeholder='Enter search text'/>
        </div>



        <div>
        
            <table id="mytable">
            
                <tbody>
                
                <tr id="fix">
                    {/* <img src="https://img.icons8.com/material-outlined/24/000000/sort.png"/> */}
                    <td id="nm" datatype="string">StateName</td>
                    <td id="cnf" data-type="number">Confirmed<img src="https://img.icons8.com/material-outlined/24/000000/sort.png"/></td>
                    <td id="act" data-type="number">Active<img src="https://img.icons8.com/material-outlined/24/000000/sort.png"/></td>
                    <td id="rcv" data-type="number">Recovered<img src="https://img.icons8.com/material-outlined/24/000000/sort.png"/></td>
                    <td id="dth" data-type="number">Deaths<img src="https://img.icons8.com/material-outlined/24/000000/sort.png"/></td>
                    <th>LastUpdated</th>
                </tr>
                
                
                
                {
                    data.map(data => (
                    <tr id="content">

                        <td key={data.id}>{data.state}</td>
                        <td key={data.id}>{data.confirmed}</td>
                        <td key={data.id}>{data.active}</td>
                        <td key={data.id}>{data.recovered}</td>
                        <td key={data.id}>{data.deaths}</td>
                        <td key={data.id}>{data.lastupdatedtime}</td>
                    </tr>
                    ))
                }
                </tbody>

            </table>
        
            </div>
            {/* <div id="fx">
                    <ul>
                        <li>StateName</li>
                        <li>TotalRecovered</li>
                        <li>TotalConfirmed</li>
                        <li>TotalDeaths</li>
                        <li>TotalActive</li>
                        <li>LastUpdateTime</li>
                    </ul>
            </div> */}
    </>
  );
}

export default Covid;
