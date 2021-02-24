const Tags = ({ user, onFilter }) => {
  return (
    <div className="tags">
      <button onClick={() => onFilter(user.role)}>{user.role}</button>
      <button onClick={() => onFilter(user.level)}>{user.level}</button>
      {user.languages.map((item, index) => <button key={index} onClick={() => onFilter(item)}>{item}</button>)}
      {user.tools.map((item, index) => <button key={index} onClick={() => onFilter(item)}>{item}</button>)}
    </div>
  );
};

export default Tags;
