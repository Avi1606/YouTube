import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import {Provider} from "react-redux";
import store from "./App/store.js";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainContainer from "./components/MainContainer.jsx";
import WatchPage from "./components/WatchPage.jsx";
import SearchResults from "./components/SearchResults.jsx";

const appRouter = createBrowserRouter([{
    path: "/",
    element: (
        <div className="text-black">
            <Header/>
            <div className="pt-20">
                <Body/>
            </div>
        </div>
    ),
    children: [
        {
            path: "/",
            element: <MainContainer />
        },
        {
            path: "watch",
            element: <WatchPage />
        },
        {
            path: "results",
            element: <SearchResults />
        }
    ]
}]);

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={appRouter} />
        </Provider>
    );
}
export default App
