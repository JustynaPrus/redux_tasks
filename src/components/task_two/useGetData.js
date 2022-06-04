<<<<<<< HEAD
import { useState, useEffect } from "react";

export const useGetData = (url) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [isError, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, isLoading, isError, setData };
};
=======
import { useState, useEffect } from "react";

export const useGetData = (url) => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [isError, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, isLoading, isError, setData };
};
>>>>>>> f36d9c31cfbf4ff0a43d5b0cfd94ad861324c6bc
