import axiosInstance from "./axiosInstance";



const AuthRoute = 'auth'
export const signup = async (data: { name: string; email: string; password: string; role: string }) => {
  return axiosInstance.post(`${AuthRoute}/signup`, data);
};

export const login = async (data: { email: string; password: string }) => {
  const log = await axiosInstance.post(`${AuthRoute}/login`, data);
  
  return log
};

export const logout = async () => {
  const log = await axiosInstance.post(`${AuthRoute}/logout`,{});
  
  return log
};