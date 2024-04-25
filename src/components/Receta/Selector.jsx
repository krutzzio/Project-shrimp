import { useEffect, useState } from "react";





const Selector = ({endpoint, onSelectId}) => {
  const [base, setBase] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [open, setOpen] = useState(false);


  


  useEffect(() => {
    fetch(`http://localhost:3000/api/${endpoint}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setBase(data);
      });
  }, [endpoint]);



console.log('1'+ '' + selected)
console.log('2'+ '' + selectedId)
  return (
    <div className="w-fit text-xs text-red-500 font-semibold w-full">
      
      <div
        onClick={() => setOpen(!open)}
        className={`bg-[#F2F2F2] w-full p-1 flex items-center justify-between rounded border ${
          !selected && "text-gray-700"
        }`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "Selecciona"}

      </div>
      <ul
        className={`bg-[#F2F2F2] mt-2 overflow-y-auto ${
          open ? "max-h-60" : "max-h-0"
        } `}
      >
        <div className="flex items-center px-2 sticky top-0 bg-[#F2F2F2]">
         
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Busca por nombre"
            className="placeholder:text-gray-700 p-2 outline-none"
          />
        </div>
        {Array.isArray(base) && base.map((baseItem) => (
  <li
    key={baseItem.id || baseItem.id} 
    className={`p-2 text-sm hover:bg-sky-600 hover:text-white
    ${
      baseItem.id === selectedId
      ? "bg-sky-600 text-white"
      : ""
    }
    ${
      (baseItem.nombre_ingrediente?.toLowerCase()?.startsWith(inputValue) ||
      baseItem.nombre_tipo?.toLowerCase()?.startsWith(inputValue)) 
        ? "block"
        : "hidden"
    }`}
    onClick={() => {
      const selectedValue = baseItem.nombre_ingrediente || baseItem.nombre_tipo; 
      if(baseItem.id !== selectedId){
        setSelectedId(baseItem.id)
        if (selectedValue.toLowerCase() !== selected.toLowerCase()) {
          setSelected(selectedValue);
          setOpen(false);
          setInputValue("");
          onSelectId(baseItem.id);
        }
      }
    }}
  >
    {baseItem.nombre_ingrediente || baseItem.nombre_tipo} 
  </li>
))}

      </ul>
    </div>
  );
};

export default Selector;