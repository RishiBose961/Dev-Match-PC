import { ThemeProvider } from "@/components/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import App from "./App.tsx";
import PrivateRoute from "./components/PrivateRoute.tsx";
import "./index.css";
import Login from "./pages/auth/Login.tsx";
import RegisterPage from "./pages/auth/Register.tsx";
import Home from "./pages/home/Home.tsx";
import NotFound from "./pages/NotFound/NotFound.tsx";
import Profile from "./pages/profile/Profile.tsx";
import SettingsPage from "./pages/Setting/setting.tsx";
import { store } from "./store.ts";
import Schedule from "./pages/Schedules/Schedule.tsx";
import GoLive from "./pages/GoLive/GoLive.tsx";
import AudioSpace from "./pages/Audio-Space/Audio-Space.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
      {/* Protected Route */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="/setting" element={<SettingsPage />} />
        <Route path="/live" element={<GoLive />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/space/:id" element={<AudioSpace />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider defaultTheme="dark" storageKey="theme">
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);

// Use contextBridge
window.ipcRenderer.on("main-process-message", (_event, message) => {
  console.log(message);
});

window.electronAPI.setStoreValue("theme", "dark");
window.electronAPI
  .getStoreValue("theme")
  .then((theme) => console.log("Stored theme is:", theme));
