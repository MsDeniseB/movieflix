import React from 'react';

export class LoginView extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
    
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(username, password);
      /* Send a request to the server for authentication */
      /* then call props.onLoggedIn(username) */
      // props.onLoggedIn(username);
    };
  
    return (
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    );
  }

  render() {
    return (
      <form>
        <label>
          Username:
          <input type="text" value={this.state.username} onChange={this.onUsernameChange} />
        </label>
        <label>
          Password:
          <input type="password" value={this.state.password} onChange={this.onPasswordChange} />
        </label>
        <button type="button" onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}