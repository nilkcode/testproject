import React from "react";
import PropsTypes from "prop-types"

class TypeProps extends React.Component {
    render(){
        return (
            <div>
                <h1>This is a props types</h1>
                <h2>{this.props.age}</h2>
                <h2>{this.props.name}</h2>
            </div>
        )
    }
}


TypeProps.propTypes = {
   age:PropsTypes.number,
   name:PropsTypes.string,
}

export default TypeProps;