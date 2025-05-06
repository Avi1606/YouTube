import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import {Provider} from "react-redux";
import store from "./App/store.js";

function App() {
    return (
        <Provider store={store}>
        <div className="text-black">
            <Header/>
            <Body />
        </div>
        </Provider>

    );
}

export default App
