import { useState } from "react";
import { useNotification } from "./context/NotifictionProvider";

function App() {
  const { triggerNotification } = useNotification();
  return (
    <>
      Initial Project
      <button
        onClick={() => {
          triggerNotification({
            type: "success",
            message: "hello",
            onClose: () => {},
            autoClose: 3000,
            position: "top-right",
          });
        }}
      >
        top right
      </button>
      <button
        onClick={() => {
          triggerNotification({
            type: "error",
            message: "hello",
            onClose: () => {},
            autoClose: 3000,
            position: "top-left",
          });
        }}
      >
        top left
      </button>
    </>
  );
}

export default App;
