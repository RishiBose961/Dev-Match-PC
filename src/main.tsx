import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import Home from "./pages/home/Home.tsx";
import Login from "./pages/auth/Login.tsx";
import RegisterPage from "./pages/auth/Register.tsx";
import Profile from "./pages/profile/Profile.tsx";
import NotFound from "./pages/NotFound/NotFound.tsx";
import { Provider } from "react-redux";
import { store } from "./store.ts";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import PrivateRoute from "./components/PrivateRoute.tsx";
import Schedule from "./pages/schedule/Schedule.tsx";
import SettingsPage from "./pages/Setting/setting.tsx";
import JoinRequest from "./pages/join_Request/JoinRequest.tsx";
import Room from "./pages/Room/Room.tsx";
import Notication from "./pages/notification/Notication.tsx";
import VideoMeeting from "./pages/Video-Meeting/VideoMeeting.tsx";


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
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/setting" element={<SettingsPage />} />
        <Route path="/request/:id" element={<JoinRequest />} />
        <Route path="/meeting-room" element={<Room />} />
        <Route path="/notification" element={<Notication />} />
        <Route path="/meeting-room/:id" element={<VideoMeeting />} />
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
