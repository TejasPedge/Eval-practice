// Your code goes here
// do a default export

import React from "react";





  function UserCard (props) {

  let {name,avatar,posts,followers,address} = props;

  let [follow,setFollow] = React.useState("follow");


  ///////[ Toggle Button ]///////
 
  function myFun() {

       follow === "follow" ? setFollow("following") : setFollow("follow");

  }





     return <>
                 
                 <div className="image">

                        <img style={{borderRadius : "50%"}} src={avatar} alt={name} />

                 </div>


                 <div className="user">

                          <div>
 

                                <h2 data-testid="user_name">{name}</h2>

                                <p data-testid = "user_address">{address}</p>



                          </div>

                          <div className="followers">
 
                              <div>

                                 <h3>Posts</h3>

                                 <p   data-testid = "user_posts">{posts}</p>

                              </div>
                                  
                              <div>

                                 <h3>Followers</h3>

                                 <p  data-testid = "user_followers">{followers}</p>

                              </div>


                          </div>



                 </div>
         

                  <div className="followbtn">

                        <button onClick={myFun}>{follow}</button>


                  </div>
          
     
     </>


  }



  export default UserCard