import ChartComponent from "./ChartComponent";

const App = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const secret = urlParams.get("secret");

  if (secret !== "YOUR_SECRET") {
    return <div>Access Denied</div>;
  }

  return (
    <div>
      <h1>Chart Dashboard</h1>
      <ChartComponent />
    </div>
  );
};

export default App;
