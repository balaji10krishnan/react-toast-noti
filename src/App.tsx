import { useNotification } from "./context/NotifictionProvider";

function App() {
  const { triggerNotification } = useNotification();
  return (
    <>
      <div style={{ padding: "2rem" }}>
        <h2>Notification Queue Example</h2>
        <button
          onClick={() =>
            triggerNotification({
              type: "success",
              message: "This is a success notification!",
              onClose: () => {
                console.log("onclose trigger");
              },
              // autoClose: 3000,
              position: "top-right",
            })
          }
        >
          Show Success (Top Right)
        </button>
        <button
          onClick={() =>
            triggerNotification({
              type: "error",
              message: "This is a success notification!",
              onClose: () => {
                console.log("onclose trigger");
              },
              // autoClose: 3000,
              position: "top-left",
            })
          }
        >
          Show Error (Top Left)
        </button>
        <button
          onClick={() =>
            triggerNotification({
              type: "warning",
              message: "This is a success notification!",
              onClose: () => {
                console.log("onclose trigger");
              },
              // autoClose: 3000,
              position: "bottom-left",
            })
          }
        >
          Show Warning (Bottom Left)
        </button>
        <button
          onClick={() =>
            triggerNotification({
              type: "info",
              message: "This is a success notification!",
              onClose: () => {
                console.log("onclose trigger");
              },
              // autoClose: 3000,
              position: "bottom-right",
            })
          }
        >
          Show Info (Bottom Right)
        </button>
      </div>
    </>
  );
}

export default App;
