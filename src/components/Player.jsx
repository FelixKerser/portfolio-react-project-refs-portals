import { useState } from "react";

export default function Player() {
  const [userName, setUserName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  let userNameStatic = '';

  function handleChange(event) {
    setSubmitted(false);
    setUserName(event.target.value);
  }

  function handleClick() {
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? userName : 'unknow entity'}</h2>
      <p>
        <input value={userName} onChange={event => { handleChange(event) }} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
