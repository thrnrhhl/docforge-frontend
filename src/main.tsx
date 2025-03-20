import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./widgets/header/ui.tsx";
import { Navbar } from "@/shared/ui";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";

const EntityFormPage = React.lazy(() => import("@/pages/form/entity"));
const EntityListPage = React.lazy(() => import("@/pages/list/entity"));
const FieldListPage = React.lazy(() => import("@/pages/list/field"));
const DirectoryValueListPage= React.lazy(() => import("@/pages/list/directory-value"));
const DirectoryListPage = React.lazy(() => import("@/pages/list/directory"));
const EntityRecordListPage = React.lazy(() => import("@/pages/list/entity-record"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    
    <div className="grid grid-cols-[17rem_1fr] overflow-hidden h-full flex-1">
      
      <aside className="bg-gray-100">
        <Navbar />
      </aside>

      <main className="overflow-auto bg-white">
      <Header />

      <div className="p-4">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/list/directory" element={<DirectoryListPage />}/>
        <Route path="/list/directory-value/:id" element={<DirectoryValueListPage />}/>
        <Route path="/list/field" element={<FieldListPage />}/>
        <Route path="/list/entity" element={<EntityListPage />}/>

        <Route path="/list/entity-record/:entityId" element={<EntityRecordListPage />}/>

        

        
        <Route path="/form/entity/create" element={<EntityFormPage />} />
        <Route path="*" element={<>123</>} />
      </Routes>
      </div>
      </main>
    </div>
      
    </BrowserRouter>
    

    </Provider>
  </StrictMode>
);
