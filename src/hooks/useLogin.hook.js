import { useState } from "react";
import axios from "axios";
import { API_URL } from "../constants/common.constant";
import { useAuth } from "../providers/AuthProvider.provider";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setToken } = useAuth();

  const handleLogin = async (username, password) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        username,
        password,
      });
      const { token } = response.data;
      localStorage.setItem("authToken", token);
      setToken(token);
      setLoading(false);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      setLoading(false);
      alert("Invalid credentials");
      throw err;
    }
  };

  return { handleLogin, loading, error };
};

export default useLogin;
