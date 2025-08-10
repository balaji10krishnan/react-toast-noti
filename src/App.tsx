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
              type: "warning",
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
              message: "This is an error notification!",
              // autoClose: 3000,
              position: "top-left",
            })
          }
          style={{ marginLeft: "1rem" }}
        >
          Show Error (Top Left)
        </button>
      </div>
    </>
  );
}

export default App;
