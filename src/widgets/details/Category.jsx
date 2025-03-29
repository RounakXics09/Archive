import React, { useEffect, useState } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Box, Grid2 } from '@mui/material';
import axios from 'axios';

function Category() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:1337/api/categories`);
                console.log("api/categories", response.data.data);
                setCategories(response.data.data);
            } catch (err) {
                console.log(err.message);
                setError(err.message);
            } finally {
                console.log('finally');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <Box>
            <Grid2 className='side-menus-div'>
                <Grid2 className="side-headings">Category</Grid2>
                <List sx={{ width: '100%' }}>
                    {categories?.map((value, i) => {
                        const labelId = `checkbox-list-label-${value.name}`;
                        return (
                            <ListItem
                                sx={{
                                    borderBottom: i !== categories.length - 1 ? '1px solid #DFDFFB' : 'none',
                                    borderTop: i === 0 ? '1px solid #DFDFFB' : 'none'
                                }}
                                key={value.name}
                                secondaryAction={
                                    <IconButton edge="end" aria-label="comments">
                                        <KeyboardDoubleArrowRightIcon sx={{ color: '#715DE3' }} />
                                    </IconButton>
                                }
                                disablePadding
                            >
                                <ListItemButton role={undefined} dense>
                                    <ListItemText id={labelId} sx={{ color: '#7F7A9A', fontSize: '15px', fontWeight: '500' }} primary={value.name} />
                                </ListItemButton>
                            </ListItem>
                        );
                    })}
                </List>
            </Grid2>
        </Box>
    );
}


export default Category