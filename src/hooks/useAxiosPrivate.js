import { useEffect } from "react";
import { axiosPrivate } from "../api/axios";
import useAuth from "./useAuth";
import useRefreshToken from "./useRefreshToken";

const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  useEffect(() => {
    console.log("insied useEffect useAxiosPrivate");
    const requestIntercept = axiosPrivate.interceptors.request.use(
      (config) => {
        console.log("THe accessToken is");
        console.log(auth);
        console.log("THe accessToken ONLKY is");
        console.log(auth.accessToken);
        if (!config.headers["Authorization"]) {
          config.headers["Authorization"] = `Bearer ${auth.accessToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    const responseIntercept = axiosPrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error.config;
        if (error.response.status === 403 && !prevRequest.sent) {
          prevRequest.sent = true;
          const tokens = await refresh();
          console.log("refresh token in intercept is ");
          console.log(tokens);
          prevRequest.headers["Authorization"] = `Bearer ${tokens.accessToken}`;
          return axiosPrivate(prevRequest);
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axiosPrivate.interceptors.request.eject(requestIntercept);
      axiosPrivate.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refresh]);

  return axiosPrivate;
};

export default useAxiosPrivate;
