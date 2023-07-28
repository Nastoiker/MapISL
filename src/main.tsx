import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {ReduxProvider} from "./Providers/StoreProvider/StoreProvider.tsx";
import {Router} from "./Providers/RouteProvider/RouterProvider.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ReduxProvider>
          <Router />
      </ReduxProvider>

  </React.StrictMode>,
)
