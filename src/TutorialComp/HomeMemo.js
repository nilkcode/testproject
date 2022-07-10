import react, {memo} from "react";

const HomeMemo = (props) => {
    console.warn(props.data)
   return (
   <div>
       <div>{props.data}</div>
   </div>
   )
}

export default memo(HomeMemo);



/*
Memo use to eliminate extra internal component calling when we updata any state 
If we are not using memo whenever calling props or state it call every time

*/