import { useLocation } from "react-router-dom";
import { useState } from "react";

export const usePage = (defaultValue) => {
  const location = useLocation();

  const [page, setPage] = useState(() => {
    const search = location.search;
    const query = new URLSearchParams(search);
    return query.get("page") || defaultValue;
  });
  return [page, setPage];
};
