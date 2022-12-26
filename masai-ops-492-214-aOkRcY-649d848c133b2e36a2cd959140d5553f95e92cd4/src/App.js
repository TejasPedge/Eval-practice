// import Courses ,Title and UserCard here

import Title from "./Components/Title";

import UserCard from "./Components/UserCard";

import "./styles.css"

import Courses from "./Components/Courses";

let user = {name : "tejas", 

       avatar : "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png",

       posts : "1841",

       followers : "8748874",

       address : "43766 Mallory Place"
    
};




// let courses1 = { 
//     type : "Full Time Courses",
         
//     courses : [
   
//             {
            
//               name : "Full Stack Web Development", 
            
//             details : ["Eligibility : 18-28 yrs", "Duration : 30 weeks"]
           
//              }
           
//            ]
         
//          }

       



  // let courses2 = {type : "Part Time Courses",
         
  //               courses : [
                
  //               {name : "Full Stack Web Development", 
                
  //               details : ["Eligibility : 18-28 yrs", "Duration : 30 weeks"]
                
  //                 },
                
  //                 {
                  
  //                 name :" Data Analytics",
                
  //                 details : ["Eligibility : 18-28 yrs", "Duration : 30 weeks"]
                
  //                 }
                
  //               ]
  
  // }

export default function App() {
  return <>
  
  
  
   <div className="parent">
    
            <Title></Title>

            <div className="main">
              
                <UserCard name = {user.name} avatar = {user.avatar} posts = {user.posts} followers = {user.followers} address = {user.address}  />

            </div>
  
  </div>


     
   <div className="courses">

   {/* type = {courses1.type} courses = {courses1.courses} */}

   {/* type = {courses2.type} courses = {courses2.courses} */}

      <Courses />

      {/* <Courses /> */}

    </div>


  </>
}
