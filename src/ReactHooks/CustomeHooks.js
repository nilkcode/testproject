import {useEffect} from 'react'

export const CustomeHooks = (count) => {
    useEffect(
        () => {
           document.title = `${count} You clicked  times`;
        }
    );
    // return (
    //     // <div>
            
    //     // </div>
    // )
}

export default CustomeHooks;