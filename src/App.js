import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import ImageCard from "./components/Card/ImageCard";
import Counter from "./components/Counter/Counter";
import Form from "./components/Form/Form";
import ToDo from "./components/ToDo/ToDo";
import Keeper from "./components/Keeper/Keeper";

//          Pages
import Home from "./pages/home";
import CounterPage from "./pages/counterPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//          Layouts
import RootLayout from "./layouts/rootLayout";
import CounterLayout from "./layouts/counterLayout";
import Card from "./components/Card/Card";
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
