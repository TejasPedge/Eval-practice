// code goes here
// do a default export




// <h2>{type}</h2>
    
//     <ol>     {
          
//           courses.map((el) => {
           
//           return <>


//                    <li>{el.name}</li>

//                    <ul>

//                          {el.details.map((el)=> <li>{el}</li>)}


//                    </ul>

//            </>

//           })

             
//           }  

//   </ol> 







function Courses () {

    // let {type,courses} = props




   return <div>

           <h2 >Full Time Courses</h2>

             <ol> 

                 <li>Full Stack Web Development</li>

                   <ul>

                       <li>Eligibility : 18-28 yrs</li>

                       <li>Duration : 30 weeks</li>

                   </ul>
             </ol>



             <h2>Part Time Courses</h2>


             <ol> 

                 <li>Full Stack Web Development</li>

                   <ul>


                       <li>Eligibility : 18-28 yrs</li>

                       <li>Duration : 30 weeks</li>



                   </ul>


                   <li>Data Analytics</li>

                   <ul>

                       <li>Eligibility : 18-28 yrs</li>

                       <li>Duration : 30 weeks</li>

                   </ul>

             </ol>


    



    </div>


}


export default Courses 