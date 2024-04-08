import React, { useState } from "react";
import User from "./User";

const Users = () => {
  const [user, setUser] = useState({
    id: 3549,
    name: "Tushar Ahmed",
  });

  return (
    <>
      <User user={user} />
    </>
  );
};

export default Users;