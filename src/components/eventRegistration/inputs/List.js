import React, { useEffect, useState } from "react";

const List = ({ data }) => {
  const [inputValue, setInputValue] = useState({});
  const [items, setItems] = useState([]);
  useEffect(() => {
    let listItems = [];
    for (let i = 1; i <= data.maxRows; i++) {
      setInputValue({ [`"${data.id}-${i}"`]: "" });
      const placeholder = data.label.slice(0, -1); // drop the final 's'
      listItems.push({
        id: `${data.id}-${i}`,
        label: `${data.label}-${i}`,
        placeholder: `${placeholder} no. ${i}`
      });
    }
    setItems(listItems);
  }, []);
  const handleChange = e => {
    setInputValue({ [`"${e.target.name}"`]: e.target.value });
  };
  const inputs = items.map((input, index) => {
    return (
      <li key={input.id}>
        <input
          id={input.id}
          name={input.id}
          onChange={handleChange}
          placeholder={input.placeholder}
          type="text"
          value={inputValue[input.id]}
        />
      </li>
    );
  });
  return <ul>{inputs}</ul>;
};

export default List;
