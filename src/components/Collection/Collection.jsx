import React, { useEffect, useMemo } from "react";
import Pagination from "../Pagination/Pagination";
import { useFetch } from "../../customHooks/useFetch";
import CollectionContainer from "../CollectionContainer/CollectionContainer";
import Spinner from "../Spinner/Spinner";
import classes from "./Collection.module.css";
import { userId } from "../../url";
import { usePage } from "../../customHooks/usePage";
import { useHistory } from "react-router-dom";
import Error from "../Error/Error";

const Collection = () => {
  const history = useHistory();

  const [page, setPage] = usePage(1);

  const [data, loading, error] = useFetch(`/list?page=${page}&user=${userId}
      `);

  useEffect(() => {
    const unlisten = history.listen((location, action) => {
      const search = location.search;
      const query = new URLSearchParams(search);
      const page = query.get("page");
      setPage(page || 1);
    });

    return () => {
      unlisten();
    };
  }, [history, setPage]);

  const pageCount = useMemo(() => {
    const { total_items, items_per_page } = data || {};
    return Math.ceil(total_items / items_per_page);
  }, [data]);

  return loading ? (
    <Spinner />
  ) : error ? (
    <Error>{error.message}</Error>
  ) : (
    <>
      <Pagination
        handlePageClick={(pageIndex) => setPage(pageIndex)}
        pageCount={pageCount}
        page={page}
      />

      <div className={classes.collectionContainer}>
        <CollectionContainer movies={data.movies} />
      </div>
      <Pagination
        handlePageClick={(pageIndex) => setPage(pageIndex)}
        pageCount={pageCount}
        page={page}
      />
    </>
  );
};

export default Collection;
