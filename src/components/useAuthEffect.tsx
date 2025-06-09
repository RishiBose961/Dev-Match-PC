import { loadUser } from "@/slice/authSlice";
import type { AppDispatch, RootState } from "@/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useAuthEffect = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated, isInitialized } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    // Only load user if we haven't initialized yet
    // This prevents unnecessary calls when user is already authenticated
    if (!isInitialized) {
      dispatch(loadUser());
    }
  }, [dispatch, isInitialized]);

  // Return auth state for components that might need it
  return { isAuthenticated, isInitialized };
};

export default useAuthEffect;