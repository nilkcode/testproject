import react, { useState} from "react";
import HomeMemo from "./HomeMemo";

const MemeoApp = () => {
  const[count,setCount] = useState(0)
  const[data, setData] = useState(100)

   return (
   <div>
       {count}
       <div><HomeMemo data={data}/></div>
       <button onClick={() => setCount(count + 10)}>Count</button>
       <button onClick={() => setData(data + 10)}>CountData</button>
   </div>
   )
}

export default MemeoApp;