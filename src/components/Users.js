import User from "./User";

const Users = ({ users, onFilter }) => {
  return (
    <>
      {users.map((user) => (
        <User key={user.id} user={user} onFilter={onFilter}/>
      ))}
    </>
  );
};

export default Users;
