import React from "react";


class LazyLoading extends React.Component {
    render(){
        return(
            <div>Lazy loading About</div>
        )
    }
}

export default LazyLoading;

/*
By using lazy loading we can load simple code at initially level and the complex code 
can load after simple code loaded in browser.

*/