import "./App.css";

import { Provider } from "react-redux";
import store from "./store";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <Provider store={store}>
      <HomeScreen className="App"></HomeScreen>
    </Provider>
  );
}

export default App;
