import React, {Component} from 'react';
import '../style/index.scss';
class App extends Component {
  state = {
    search: ''
  }
  
  searchChange = () =>{
    this.setState({search: event.target.value});
  }
  render() {
    let search = this.state.search;
    return (
      <div className="home">
        <div className="home-left">
          <div className="user-box">
            <div className="user-photo" style={{background: 'url(http://pito.nvmjs.com/1.jpg) no-repeat center', backgroundSize: 'cover'}}></div>
            <div className="user-information">
              <h4>sOxOs M2D</h4>
              <p>尚未加入会员计划, 还可体验 3 个应用</p>
            </div>
          </div>
          <div className="search-box">
            <div className="logo"></div>
            <input type="text" value={search} placeholder="搜索应用名称" onChange={this.searchChange}/>      
          </div>
        </div>
        <div className="home-right">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
