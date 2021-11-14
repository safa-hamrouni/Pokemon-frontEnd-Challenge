import { CardActionArea } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IPokemonDetails } from "../types/types";

const PokemonDetails = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<IPokemonDetails>();

  console.log(pokemon);
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => setPokemon(res.data));
  }, [name]);
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        {pokemon && (
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={pokemon.sprites.front_default}
              alt={name}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">Name:</Typography>
              <Typography gutterBottom variant="h5" component="div">
                {pokemon.species.name}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">Weight: </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {pokemon.weight}
              </Typography>
            </CardContent>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">Stats:</Typography>
              {pokemon.stats.map((stat) => {
                return (
                  <>
                    <Typography gutterBottom variant="h5" component="div">
                      {stat.stat.name}
                      <Typography>{stat.base_stat}</Typography>
                    </Typography>
                  </>
                );
              })}
            </CardContent>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">Type:</Typography>
              {pokemon.types.map((type) => {
                return (
                  <Typography gutterBottom variant="h5" component="div">
                    {type.type.name}
                  </Typography>
                );
              })}
            </CardContent>
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">Moves:</Typography>
              {pokemon.moves.map((move) => {
                return (
                  <Typography gutterBottom variant="h5" component="div">
                    {move.move.name}
                  </Typography>
                );
              })}
            </CardContent>
          </CardActionArea>
        )}
      </Card>
    </div>
  );
};

export default PokemonDetails;
