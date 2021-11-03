import { Suspense } from "react";
import WeatherCard from "./components/WeatherCard/WeatherCard";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<p>loading</p>}>
        <WeatherCard />
      </Suspense>
    </div>
  );
}

export default App;
