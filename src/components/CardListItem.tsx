import TablePagination from "@mui/material/TablePagination";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";

interface PokeGet {
  name: string;
  url: string;
}

const CardListItem: React.FC = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(16);
  const [pokemons, setPokemons] = useState<PokeGet[]>([]);
  const [count, setCount] = useState<number>(0);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon?limit=${rowsPerPage}&offset=${
          page * rowsPerPage
        }`
      )
      .then((response) => {
        setCount(response.data.count);
        setPokemons(response.data.results);
      })
      .catch((err) => console.error(err));
  }, [rowsPerPage, page]);

  return (
    <div className="cardListGrid">
      {pokemons.map((pokemon) => {
        return <CardItem pokemon={pokemon} />;
      })}
      <TablePagination
        component="div"
        count={count}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default CardListItem;
