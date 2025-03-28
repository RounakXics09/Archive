import React, { useEffect, useState } from 'react'
import Sponsers from '../widgets/homeComponents/Sponsers'
import NewsLetter from '../widgets/homeComponents/NewsLetter'
import { Box, Grid2 } from '@mui/material'
import CommonHeaderContent from '../components/CommonHeaderContent'
import BlogCard from '../components/BlogCard'
import Category from '../widgets/details/Category'
import PopularTags from '../widgets/details/PopularTags'
import PopularPosts from '../widgets/details/PopularPosts'
import axios from 'axios';

function Blog() {

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1337/api/blogs?populate=*');
        console.log(response.data.data);
        setData(response.data.data);
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
    <Box className='width-100 method-container' sx={{ padding: "2rem 0", maxWidth: "1200px", margin: "0 auto" }}>
      <CommonHeaderContent data={{ linkName: 'Home /  Blog', name: 'Blog', description: 'Powerful project management tools for your companies of all sizes.' }} />
      <Grid2 container columnSpacing={8}>
        <Grid2 size={{ xs: 12, md: 9, lg: 9, xl: 9 }}>
          <Grid2 container columnSpacing={8} rowSpacing={5}>
            {
              data?.map((e, i) => {
                return (
                  <Grid2 key={i} size={{ xs: 12, md: 6, lg: 6, xl: 6 }} rowSpacing={5} columnSpacing={5}>
                    <BlogCard data={e} />
                  </Grid2>
                )
              })
            }
          </Grid2>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 3, lg: 3, xl: 3 }}>
          <Category />
          <PopularPosts />
          <PopularTags />
        </Grid2>
      </Grid2>
      <Sponsers />
      <NewsLetter />
    </Box>
  )
}

export default Blog