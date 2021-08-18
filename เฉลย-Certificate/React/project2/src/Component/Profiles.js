import React from 'react';

function Profiles(props) {
  if (props.data) {
    let data = props.data;
    // console.log(data.message);
    if (data.message === 'Validation Failed')
      return (
        <div className="notfound">
          <h2>Oops !!!</h2>
          <p>
            The Component Couldn't Find The You Were Looking For . Try Again
          </p>
        </div>
      );
    else {
      // map the users into JSX elements
      let userList = data.items.map(name => {
        return (
          <a key={name.id} href={name.html_url} target="blank">
            <div className="bs-callout bs-callout-info">
              <div className="d-flex">
                <img
                  style={{
                    width: '5vw',
                    height: '5vw',
                    borderRadius: '2.5vw',
                    marginRight: '2vw',
                  }}
                  src={name.avatar_url}
                  alt={`${name.login}`}
                />
                <div>
                  <h4>Username : {name.login}</h4>
                  <p> Url : {name.html_url}</p>
                  <p> Score : {name.score} </p>
                </div>
              </div>
            </div>
          </a>
        );
      });
      // then render it
      return <div>{userList}</div>;
    }
  } else {
    return <div>Fetching data . . .</div>;
  }
}

export default Profiles;
