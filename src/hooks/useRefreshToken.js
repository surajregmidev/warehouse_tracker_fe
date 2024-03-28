import { axiosPrivate } from "../api/axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();
  return async () => {
    const response = await axiosPrivate.get("/auth/refreshToken");
    console.log("Getting refresh Token");
    console.log(response.data);

    setAuth((prev) => {
      console.log("Prev");
      console.log(prev);
      return {
        ...prev,
        accessToken: response.data.data.accessToken,
        user: response.data.data.user,
      };
    });
    return response.data.data;
  };
};

export default useRefreshToken;
