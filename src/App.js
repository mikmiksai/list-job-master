// import "./App.css";
import "./dist/app.css";
import { useState } from "react";
import data from "./data.json";

//Insert Components
import Users from "./components/Users";
import Filters from "./components/Filters";


function App() {
  const [users, setUsers] = useState(data);
  const [usersCopy, setUsersCopy] = useState(data);
  const [filterTags, setFilterTags] = useState([]);

  const onFilter = (tag) => {
    const index = filterTags.indexOf(tag);
    if (index > -1) return;

    setFilterTags([...filterTags, tag ])

    console.log(filterTags)
    let usersFiltered = usersCopy.filter((user) => {

      if(user.role === tag) return true;
      if(user.level === tag) return true
      for(let i in user.languages){
        if(user.languages[i] === tag) return true;
      }
      for(let i in user.tools){
        if(user.tools[i] === tag) return true;
      }
      return false
    });
    setUsersCopy(usersFiltered);
  };

  const onDelete = (tag) => {
    let newFilterTags = filterTags.filter(filterTag => filterTag !== tag);
    setFilterTags(newFilterTags);

    if(newFilterTags.length === 0){
      setUsersCopy(users)
      return;
    }

    let usersFiltered = users.filter((user) => {
      let userTags = [user.role, user.level, ...user.tools, ...user.languages];
      for(let i in newFilterTags){
        // kapag wala syang html - tagal agad 
        if(!userTags.includes(newFilterTags[i])) return false;
      }
      return true
    });

    setUsersCopy(usersFiltered)
  }

  const onClearFilters = () => {
    setUsersCopy(users)
    setFilterTags([])
  }


  return (
    <div className="container">
        <Filters filterTags={filterTags} onDelete={onDelete} onClearFilters={onClearFilters}/>
        <Users users={usersCopy} onFilter={onFilter}/>
    </div>
  );
}

export default App;
