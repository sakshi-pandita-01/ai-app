import "./App.css";

import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.name);
      });
  }, []);

  return (
    <>
      <p>{message}</p>
    </>
  );
}

export default App;
