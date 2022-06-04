import React from 'react';
import { Card as CardMUI } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import './index.css'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export const Card = ({ itemBook, isInBasket, setBasket }) => {

    const writeLS = (key, value) => {
        const storage = JSON.parse(localStorage.getItem(key)) || [];
        storage.push(value);
        localStorage.setItem(key, JSON.stringify(storage));
    };

    const removeLS = (key, value) => {
        const storage = JSON.parse(localStorage.getItem(key));
        const filteredStorage = storage.filter((itemID) => value !== itemID);
        localStorage.setItem(key, JSON.stringify(filteredStorage));
    };

    const addItem = () => {
        writeLS('basket', itemBook.name);
        setBasket((prevState) => [...prevState, itemBook.name]);
    };

    const removeItem = () => {
        removeLS('basket', itemBook.name);
        setBasket((prevState) => prevState.filter((itemID) => itemBook.name !== itemID));
    };

    return (
        
            <CardMUI className='card' sx={{ maxWidth: 345 }}>
                
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        {itemBook.name}
                    </Typography>
                    <Typography gutterBottom variant='h5' component='div'>
                        Автор: {itemBook.authors}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                       Опубликована: {itemBook.released}
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                       Страна: {itemBook.country}
                    </Typography>
                </CardContent>
                <div className='btn'>
                <CardActions>
                {isInBasket ? (
                    <Button onClick={removeItem} variant='contained' color='secondary' size='small'>
                        Убрать из корзины
                    </Button>
                ) : (
                    <Button onClick={addItem} variant='contained' color='primary' size='small'>
                        В корзину
                    </Button>
                )}
                </CardActions>
                </div>
            </CardMUI>
        
    );
};