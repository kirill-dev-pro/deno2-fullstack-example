import { createSignal, createEffect } from "solid-js";
// @ts-expect-error Unable to infer type at the moment
import solidLogo from "./assets/solid.svg";
import "./App.css";
import { api } from "./api.ts";

const [name, setName] = createSignal("");

createEffect(async () => {
  const res = await api.index.$get();
  const data = await res.text();
  console.log(data);
});

async function onPost() {
  const res = await api.index.$post({
    json: {
      name: name(),
    },
  });
  const data = await res.text();
  console.log(data);
}

function App() {
  return (
    <div class="App">
      <img src="/vite-deno.svg" alt="Vite with Deno" />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://www.solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
      </div>
      <h1>Vite + Solid</h1>
      <div class="card">
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <button onClick={onPost}>Post!</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p>
    </div>
  );
}

export default App;
