import React, {useState, useEffect} from 'react';
import UserCards from "./UserCard"
import axios from 'axios';

const UserList = () => {
   
    const [data , setData] = useState({ hits: [] });
     // eslint-disable-next-line react-hooks/exhaustive-deps
     useEffect(async () => {
         const result = await axios (
            "https://jsonplaceholder.typicode.com/users",
         );
       setData(result.data); 
    }, []);
    return (
        <div>
            <div style={{backgroundColor:"blue"}}>
            <h1 style={{textAlign:"center", color:"white"}}> Users </h1>
            </div>
            
            <div className="UserList">
            
            {  data.length > 0 &&
            data.map( (user) => 
                <UserCards  key={user.id} {...user}/>) } 
       </div>
        </div>
        
    );
}

export default UserList
