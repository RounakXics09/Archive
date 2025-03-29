import { Box, Grid2 } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

function PopularTags() {
    const [tags, setTags] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:1337/api/tags`);
                console.log("api/tags", response.data.data);
                setTags(response.data.data);
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
                <Grid2 className="side-headings">Popular Tags</Grid2>
                <Grid2 className="chips-container">
                    {
                        tags.map((e, i) => {
                            return (
                                <div key={i} className='tags-chips'>{e.tag_name}</div>
                            )
                        })
                    }
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default PopularTags