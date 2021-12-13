import {React,ReactDOM} from "react";
import "./about.css";
const About = () => {
    return(
        <>
        <h1>About Us</h1>
        <div className="about">
        <p>
            Our Covid-19 tracker is respresentes live covid-19 cases of an India in statewise. Because of lack of un-awareness of in people of how covid-19 spreaded rapidly on such areas of india and they will affected by this lacking of un awareness. So this will make an impact to people by visiting the site to aware about how such areas are affected by covid-19.
        </p>
        <p>
            The data is categorized into four components: Active cases , Confirmed cases, Deaths cases and Recovered cases. The values are given for both daily and cumulative type. We have tried our best to keep the display simple yet visually appealing.All the data which are shown will not be 100% accurate.
        </p>
        <hr/>

        {/* </div>
        <div className="about"> */}
        <p id="r">
           <b> Miniproject Developed By :</b><br/><br/>
        {/* </p>
        <p> */}
            Afzal Mansuri(Developer)<br/>
           
        </p>

        </div>
       </>
      )
}
export default About;