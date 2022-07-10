import React from "react";

export default class HideShow extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }

  render() {
    return (
      <div>
        {this.state.show ? <div>Show</div> : <div>Hide</div>}

        <button
          class
          className="btn btn-sm btn-primary"
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          Hide
        </button>
      </div>
    );
  }
}
