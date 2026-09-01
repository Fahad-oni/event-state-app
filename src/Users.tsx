import { use } from "react"
import UserCard from "./UserCard"

export default function Users({ usersDataPromise }) {
  
  const users = use(usersDataPromise)
  return (
    <div>
      <h2>Users: {users.length} </h2>
      
      {
        users.map(user=><UserCard user={user}></UserCard>)
      }
    </div>
  )
}

/**
 * async-await
 * 
 * const usersData = async () => {
 *  const res = await fetch('https://jsonplaceholder.typicode.com/users');
 *  const data = await res.json();
 * return data;
 * }
 * */ 