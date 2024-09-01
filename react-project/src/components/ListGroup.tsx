import { useState } from "react";

function ListGroup() { //You can only return one tag so its better to wrap with fragment <>
  const items = [
    "New York", 
    "San Francisco", 
    "Tokyo",  
    "London", 
    "Paris"
  ];   
let selectedItem = 0;  

// Hook: function that allows us to tap into built-in features, data that would change over time
const [selectedItem, setSelectedIndex] = useState(-1);  
useState 




//   const getMessage = () => {
//     return items.length === 0 ? <p>No item found</p> : null; 
//   }  

//event Handler

  return ( //click View -> Command Palette -> Format Document -> Prettier  
    <> 
        <h1>List</h1> 
        {items.length === 0 && <p>No Items</p>}
        <ul className="list-group">
            {items.map((item,index) => 
              <li 
                className={index === selectedItem ? "list-group-item active" : "list-group-item"}
                onClick={()=>{selectedItem = index}} 
                key={item}
                >
                  {item}
              </li>
            )} 
        </ul>
    </>
  );
}

export default ListGroup;
