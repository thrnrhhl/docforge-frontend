import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./widgets/header/ui.tsx";
import { Navbar } from "@/shared/ui";
import { DirectoryListPage } from "@/pages/list/directory";
import { DirectoryValueListPage } from "./pages/list/directory-value/ui.tsx";
import { EntityFormPage } from "./pages/form/entity/ui.tsx";
import { FieldListPage } from "./pages/list/field/ui.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <Header />
    <div className="grid grid-cols-[17rem_1fr] overflow-hidden h-full flex-1">
      
      <aside className="border-r border-r-neutral-300">
        <Navbar />
      </aside>

      <main className="overflow-auto p-4 bg-neutral-100">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/list/directory" element={<DirectoryListPage />}/>
        <Route path="/list/directory/:id" element={<DirectoryValueListPage />}/>
        <Route path="/list/field" element={<FieldListPage />}/>

        <Route path="/form/entity/create" element={<EntityFormPage />} />
        <Route path="*" element={<>123</>} />
      </Routes>
      </main>
    </div>
      
    </BrowserRouter>
    

    
  </StrictMode>
);
