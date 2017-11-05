import React, {Component} from "react";
import API from "./../utils/API";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import Search from "./Search/Search";
import Button from "./Button/Button";
import Picture from "./Picture/Picture";

class App extends Component {
  state = {
    search: "",
    url: []
  }

  componentDidMount() {
    this.setState({search: ""});
  }

  handleInputChange = (event) => {
    this.setState({search: event.target.value});
  }

  handleFormSubmit = (event) => {
    this.setState({search: ""});
    event.preventDefault();
  }

  getData = () => {
    if (this.state.search !== "") {
      API.getData(this.state.search).then((res) => {
        this.setState({
          url: res.data.data.map((data) => {
            return data.images.downsized.url;
          })
        });
      }).catch((err) => {
        console.log(err);
      });
    }
  }

  render() {
    const style = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
    return (
      <div>
        <Navbar/>
        <Header/>
        <form onSubmit={this.handleFormSubmit}>
          <div style={style}>
            <Search handleInputChange={this.handleInputChange} search={this.state.search}/>
            <Button getData={this.getData}/>
          </div>
        </form>
        <Picture url={this.state.url}/>
      </div>
    )
  }
};

export default App;
