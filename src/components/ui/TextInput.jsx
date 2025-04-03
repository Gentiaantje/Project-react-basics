import { Input } from '@chakra-ui/react';

export const TextInput = ({ changeFn, ...props }) => (
    <Input variant="flushed" onChange={changeFn} {...props} />
  );
  import { useState } from "react";

  const data = ["Appel", "Banaan", "Kers", "Druif", "Mango"];
  
  const SearchComponent = () => {
    const [query, setQuery] = useState("");
    
    const filteredItems = data.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  
    return (
      <div>
        <input
          type="text"
          placeholder="Zoek fruit..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <ul className="mt-2">
          {filteredItems.map((item, index) => (
            <li key={index} className="p-1 border-b">
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default SearchComponent;
  