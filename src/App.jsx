import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import LocationProvider from "./components/useFullcomponents/locationProvider";

function App() {
  return (
    <>
      <LocationProvider />
      <RouterProvider router={router} />
    </>
  )
}

export default App;