import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../constants/common.constant";
import { useAuth } from "../providers/AuthProvider.provider";

const useGetTasks = (sort = "recent", status = "pending") => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { token } = useAuth();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/tasks`, {
          params: { sort, status },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTasks(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [sort, status]);

  return { tasks, loading, error };
};

export default useGetTasks;
