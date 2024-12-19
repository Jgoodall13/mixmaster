import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  Landing,
  Newsletter,
} from "./pages";

import { loader as landingLoader } from "./pages/Landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: landingLoader,
        element: <Landing />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cocktail",
        element: <Cocktail />,
      },
      {
        path: "error",
        element: <Error />,
      },

      {
        path: "newsletter",
        element: <Newsletter />,
      },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
      router={router}
    />
  );
};
export default App;
