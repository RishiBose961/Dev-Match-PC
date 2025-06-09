import { Navigate, Outlet } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadUser } from "@/slice/authSlice";
import type { AppDispatch, RootState } from "@/store";

const PrivateRoute = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated, isLoading, isInitialized } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    // Only load user if we haven't initialized yet
    if (!isInitialized) {
      dispatch(loadUser());
    }
  }, [dispatch, isInitialized]);

  // Show loading only when we're actually loading or not yet initialized
  if (isLoading || !isInitialized) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-2">Loading...</span>
      </div>
    );
  }

  // Navigate to login only after we've confirmed user is not authenticated
  return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default PrivateRoute;