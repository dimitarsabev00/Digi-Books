import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/AppLayout/AppLayout";
import AuthLayout from "./components/AuthLayout/AuthLayout";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import HomePage from "./components/HomePage/HomePage";
import Settings from "./components/Settings/Settings";
import RequireAuth from "./components/RequireAuth";
import BookDetails from "./components/BookDetails/BookDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={"home"} replace />} />
        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path="/register"
          element={
            <AuthLayout>
              <Register />
            </AuthLayout>
          }
        />
        <Route
          path={"/home"}
          element={
            <RequireAuth>
              <AppLayout />
            </RequireAuth>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        <Route
          path="details"
          element={
            <RequireAuth>
              <AppLayout detail="true" />
            </RequireAuth>
          }
        >
          <Route path=":bookId" element={<BookDetails />} />
        </Route>
        <Route path="*" element={<div>There's no page here</div>} />
      </Routes>
    </>
  );
}

export default App;
