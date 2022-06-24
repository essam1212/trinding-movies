
import { createRoot } from 'react-dom/client';
import { App } from "./App";
import'jquery/dist/jquery.min.js'
import "@popperjs/core/dist/umd/popper.min.js"
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { BrowserRouter } from "react-router-dom";


const container = document.getElementById('root');
const root = createRoot(container);
root.render( 

<BrowserRouter>
    <App/> 

    </BrowserRouter>
);

   
