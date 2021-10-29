import { Suspense } from "react";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<p>loading</p>}>
        <Weather />
      </Suspense>
    </div>
  );
}

export default App;
