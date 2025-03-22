import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { Header } from "./components/Header";
import { Footer } from "./components/footer/Footer";

import "./app.css";

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <Header />
          <Suspense fallback={<div class="w-screen h-screen" />}>
            {props.children}
          </Suspense>
          <Footer />
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
