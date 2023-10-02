import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import ImageCard from "./components/Card/ImageCard";

import ToDo from "./components/ToDo/ToDo";
import Keeper from "./components/Keeper/Keeper";

//          Pages
import Home from "./pages/home";
import CounterPage from "./pages/counterPage";
import Faq from "./pages/faq";

//          Layouts
import RootLayout from "./layouts/rootLayout";
import CounterLayout from "./layouts/counterLayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="counter" element={<CounterLayout />}>
          <Route index element={<CounterPage />} />
        </Route>
        <Route path="to-do" element={<ToDo />}></Route>
        <Route path="notes" element={<Keeper />}></Route>
        <Route path="about-me" element={<ImageCard />}></Route>
        <Route path="faq" element={<Faq />}></Route>
      </Route>
    )
  );
  return (
    // <div>
    //   <Header />
    //   {/* <Main />

    //   <Form />
    //    */}
    //   <ImageCard />
    //   <ToDo />
    //   <Counter />
    //   <Keeper />
    //   <Footer />

    // </div>
    <RouterProvider router={router} />
  );
}

export default App;
