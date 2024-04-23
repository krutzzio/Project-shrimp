import { useState, useEffect } from "react";

const Busqueda = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const URL = "https://jsonplaceholder.typicode.com/photos";

  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    showData();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  }
  
  let filteredUsers = users;
  
  if (filter !== "all") {
    filteredUsers = filteredUsers.filter(user => {
      return user.title.toLowerCase().includes(filter.toLowerCase());
    });
  }

  if (search) {
    filteredUsers = filteredUsers.filter(user => {
      return user.title.toLowerCase().includes(search.toLowerCase());
    });
  }

  return (
    <div className="bg-orange-500 p-4">
      <input 
        className="w-full p-2 border border-orange-400 rounded mb-4"
        type="text" 
        placeholder="Buscar..."
        value={search}
        onChange={handleSearch}  
      />
      
      <select className="w-full p-2 border border-orange-400 rounded mb-4" onChange={handleFilter}>
        <option value="all">Todos</option>
        <option value="qui">qui</option>
        <option value="est">est</option>
        <option value="odio">odio</option>
      </select>

      <table className="w-full bg-white rounded-lg overflow-hidden shadow">
        <thead className="bg-orange-600 text-white">
          <tr>
            <th className="p-3">Recetas</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map(user => (
            <tr key={user.id} className="border-b border-orange-200 hover:bg-orange-100">
              <td className="p-3">
                <img className="mx-auto block" src={user.thumbnailUrl} alt={user.title}/>
                {user.title}
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Busqueda;
