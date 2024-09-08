import axios from "axios";
import { useEffect, useState } from "react";

function Users() {
    const [users, setUsers] = useState([]); 
    console.log(users);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((err) => console.log(err));
  },[]);

  return (
    <div>
      <h1>USERS :</h1>
      <div className="users">
        {users.map((user, i) => (
          <div className="user-items" key={i}>
            <h1 className="username">{user.username}</h1>
            <img
              src="data:image/png;base64,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"
              alt=""
            />
            <h3 className="NAME">
              <span className="aa">name:</span>
              <span className="name">{user.name}</span>
            </h3>
            <h3 className="ADDRESS">
              <span className="aa">address:</span>
              <span className="address">{user.address.city}</span>
            </h3>
            <h3 className="EMAIL">
              <span className="aa">email:</span>
              <span className="email">{user.email}</span>
            </h3>
            <h3 className="PHONE">
              <span className="aa">phone:</span>
              <span className="phone">{user.phone}</span>
            </h3>
            <h3 className="WEB">
              <span className="aa">WEBSITE:</span>
              <span className="web">{user.website}</span>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
