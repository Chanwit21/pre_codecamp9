import React, { useState } from 'react';
import './home.scss';
// refactor by bomb un Use
// import { Link } from 'react-router-dom';
// refactor by bomb add
import { useHistory } from 'react-router-dom';

function Homepage({ socket }) {
  const [username, setusername] = useState('');
  const [roomname, setroomname] = useState('');
  // refactor by bomb add
  const history = useHistory();
  //activates joinRoom function defined on the backend
  const sendData = () => {
    if (username !== '' && roomname !== '') {
      socket.emit('joinRoom', { username, roomname });
      // refactor by bomb add
      history.push(`/chat/${roomname}/${username}`);
      //if empty error message pops up and returns to the same page
    } else {
      alert('username and roomname are must !');
      // refactor by bomb un Use
      // window.location.reload();
    }
  };

  return (
    <div className="homepage">
      <h1>Welcome to ChatApp</h1>
      <input
        placeholder="Input your user name"
        value={username}
        onChange={e => setusername(e.target.value)}
      ></input>
      <input
        placeholder="Input the room name"
        value={roomname}
        onChange={e => setroomname(e.target.value)}
      ></input>

      {/* refactor by bomb add*/}
      <button onClick={sendData} onKeyPress={sendData}>
        Join
      </button>

      {/* refactor by bomb un Use */}
      {/* <Link to={`/chat/${roomname}/${username}`}>
      <button onClick={sendData}>Join</button>
      </Link> */}
    </div>
  );
}

export default Homepage;
