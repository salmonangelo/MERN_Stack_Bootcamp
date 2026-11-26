import React, { useState, useEffect } from "react";

function User() {
  const [user, setdata] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => setdata(data))
      .catch((error) => console.error("Unable to fetch user:", error));
  }, []);

  return (
    <div>
      <h1>User Data</h1>
      {user.name && (
        <>
          <p>{user.name}</p>
          <p>{user.email}</p>
        </>
      )}
    </div>
  );
}

export default User;