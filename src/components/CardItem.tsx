import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import {Pokemon} from "../types/types"

interface CardItemProps {
  pokemon : Pokemon
}


const CardItem: React.FC<CardItemProps> = ({pokemon}) =>  {
  const [pokeImage, setPokeImage] = useState('')

  let navigate = useNavigate()

  useEffect(() => {
    detailsPokemon()
  })


  const detailsPokemon = () => {
    axios
      .get(pokemon.url) 
      .then (response => {
        setPokeImage(response.data.sprites.front_default)
      })
      .catch(err => console.error(err))
  }

  return (
    <Card sx={{ maxWidth: 345 }} onClick={() => navigate(`/${pokemon.name}`)}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={pokeImage}
          alt={pokemon.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {pokemon.name} 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardItem;
