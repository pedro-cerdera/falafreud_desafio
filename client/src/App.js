import React, {Component} from 'react';
import './App.css';
import UserBox from './components/UserBox';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {users: [],  nome_busca:'', name:''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.nameHandleChange = this.nameHandleChange.bind(this);
     
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ users: res}))
      .catch(err => console.log(err));
  }

  handleSubmit(event) {
    this.setState({nome_busca:this.state.name});
    event.preventDefault();
  }

  nameHandleChange(event){
    this.setState({name: event.target.value});
  }

  callApi = async () => {
    const response = await fetch('/user');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    return (
      <div className="App">
          <h1>Teste FalaFreud</h1>
          <label className="col-15">
              Nome:
          </label>
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="name" value={this.state.name} onChange={this.nameHandleChange} />  
            <input type="submit" value="Filtrar" />
          </form>
          <div className="results">
          { 
            this.state.users ?
              this.state.users.map((user,i) => {
                  return (this.state.nome_busca===''||user.name.indexOf(this.state.nome_busca))>=0?
                      <UserBox name={user.name} key={user._id}/> 
                      :null
              })
              :null

          }
          </div>
      </div>
    );  
  }
} 

export default App;