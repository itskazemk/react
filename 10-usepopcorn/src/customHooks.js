import { useState, useEffect } from "react";

const apiKey = `4390fed4`;

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // callback?.();

    const controller = new AbortController();

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${apiKey}&s=${query}`,
          { signal: controller.signal }
        );

        if (!res.ok) {
          throw new Error("Something went wrong while fetching data!");
        }

        const data = await res.json();

        if (data.Response === "False") {
          throw new Error("No movie found!");
        }

        setMovies(data.Search);
        setIsLoading(false);
        setError("");
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error(err.message);
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    fetchMovies();

    return () => {
      controller.abort();
    };
  }, [query]);

  return { movies, isLoading, error };
}

export function useLocalStorageState(initialState, storageKey) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(storageKey);
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(value));
  }, [value, storageKey]);

  return [value, setValue];
}
