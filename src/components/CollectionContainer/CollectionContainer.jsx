import React from "react";
import { Grid } from "@material-ui/core";
import CollectionCard from "../CollectionCard/CollectionCard";

const CollectionContainer = ({ movies }) => {
  return (
    <Grid container spacing={4} justify="center">
      {movies.map((item) => {
        return <CollectionCard key={item.id} item={item} />;
      })}
    </Grid>
  );
};

export default CollectionContainer;
