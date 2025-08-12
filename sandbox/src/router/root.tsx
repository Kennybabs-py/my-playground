import { Routes, Route } from "react-router-dom";
import Home from "@/pages/home";
import Animations from "@/pages/animations";

export default function Root() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/animations" element={<Animations />} />
    </Routes>
  );
}
