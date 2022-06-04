import React from 'react'
import { Card as CardMUI } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export const Basket = ({ item }) => {
    return (
        
        <div className='item'>
            <CardMUI className='card' style={{ width: '100%' }}>

                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                       Название: {item}
                    </Typography>
                </CardContent>

            </CardMUI>
        </div>
     
    )
}
