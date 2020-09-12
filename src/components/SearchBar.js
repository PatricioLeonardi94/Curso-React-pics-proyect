import React from "react";

class SearchBar extends React.Component {
  state = {
    term: "",
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label> Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) =>
                this.setState({ term: e.target.value.toUpperCase() })
              }
            />
            {/* Le pasamos la funciuon On Input Change y solo la corremos cuando se activa el event
             <input type="text" onChange={this.onInputChange} /> */}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
