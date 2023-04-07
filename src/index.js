import ReactDOM  from "react-dom/client";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from "react-redux";
import store from './redux/store';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <BrowserRouter>
           <Provider store={store}>
           <ToastContainer
                theme="dark"
                position="top-right"
                autoClose={3000}
                closeOnClick
                pauseOnHover={false}
            />
            <App />
           </Provider>
        </BrowserRouter>
)