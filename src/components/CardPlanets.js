import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const CardPlanets = ({item}) => {

    const navigate = useNavigate();

    console.log('CardPlanets');

    const handleChange = () => {
        navigate(`/planet/${item.id}`)

    }

    return (
        <div>
            <Card  className='CardPlanet' sx={{ maxWidth: 345 }} onClick={handleChange}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="auto"
                            image={`https://starwars-visualguide.com/assets/img/planets/${item.id}.jpg`}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.population}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>           
        </div>
    )
}

export default React.memo(CardPlanets);