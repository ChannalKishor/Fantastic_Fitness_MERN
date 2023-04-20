import React, { useState, useEffect } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([])

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

            setBodyParts(['all', ...bodyPartsData]);
        } 
        
        fetchExercisesData();
    }, [])
    

    const handleSearch = async () => {
        if(search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

            const searchedExercises = exercisesData.filter(
                (item) => item.name.toLowerCase().includes(search)
                        || item.target.toLowerCase().includes(search)
                        || item.equipment.toLowerCase().includes(search)
                        || item.bodyPart.toLowerCase().includes(search),
                );

            setSearch('');
            setExercises(searchedExercises);
        }
    }

  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
        <Typography fontWeight='700' sx={{ fontSize: { lg: '50px', xs: '30px'}}} mb='50px' textAlign='center'>
            Awesome Exercises You Should Know
        </Typography>
        <Box position='relative' mb='72px'>
            <TextField 
                sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '10px' }, width: {lg: '600px', xs: '500px' }, backgroundColor: 'fff', borderRadius: '40px' }} 
                height='76px' value={search} onChange={(e) => setSearch(e.target.value.toLowerCase())} placeholder='Search the exercise' type='text' />
                <button onClick={handleSearch} className='searchbtn' style={{height: '38px', width: '150px', position: 'absolute', right: '0'}}>Search</button>
        </Box>
        <Box sx={{ position: 'relative', width: '100%', p: '20px'}} >
            <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
    </Stack>
  )
}

export default SearchExercises