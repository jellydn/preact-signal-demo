import { computed, effect, signal, useComputed } from "@preact/signals-react";

import "./App.css";
import logo from "./logo.svg";

const count = signal(0);
const triple = computed(() => count.value * 3);

effect(() => {
  console.log("triple is now", triple.value);
});

function App() {
  const double = useComputed(() => count.value * 2);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Signals + React!</p>
        <p>
          <button onClick={() => count.value++}>
            count is: {count.value}
          </button>
        </p>
        <p>
          Double: {double.value}
        </p>
        <p>
          Triple: {triple.value}
        </p>
        <p>
          <a
            className="App-link"
            href="https://github.com/preactjs/signals"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Preact Signals
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
