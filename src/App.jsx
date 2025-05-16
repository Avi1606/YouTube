import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import {Provider} from "react-redux";
import store from "./App/store.js";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainContainer from "./components/MainContainer.jsx";
import WatchPage from "./components/WatchPage.jsx";

const appRouter = createBrowserRouter([{
    path: "/",
    element: <Body/>,
    children: [
        {
            path: "/",
            element:<MainContainer />
        },
        {
            path:"watch",
            element:<WatchPage />
        }
    ]
}]);

function App() {
    return (
        <Provider store={store}>
            <div className="text-black">
                <Header/>
                <div className="pt-16">
                    <RouterProvider router={appRouter} />
                </div>
            </div>
        </Provider>
    );
}
export default App
