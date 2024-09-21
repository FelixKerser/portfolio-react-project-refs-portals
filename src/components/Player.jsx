import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef();

  const [userName, setUserName] = useState('');

  function handleClick() {
    setUserName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {userName ? userName : 'unknow entity'}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
