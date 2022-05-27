import { Routes, Route, Navigate } from "react-router-dom";
import Body from "./Body";
import { Header } from "./Header";

function App() {
  const year = "2003";
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Body />} />
        <Route path={"*"} element={<Navigate replace to={"/"} />} />
      </Routes>
    </>
  );
}

export default App;
