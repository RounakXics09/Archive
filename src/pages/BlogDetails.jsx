import { Box, Grid2 } from '@mui/material'
import React, { useEffect, useState } from 'react'

import CommonHeaderContent from '../components/CommonHeaderContent'
import Sponsers from '../widgets/homeComponents/Sponsers'
import NewsLetter from '../widgets/homeComponents/NewsLetter'
import Category from '../widgets/details/Category'
import PopularPosts from '../widgets/details/PopularPosts'
import PopularTags from '../widgets/details/PopularTags'
import ServiceImage from '../assets/ServiceMainImage.svg'
import EnquiryForm from '../widgets/details/EnquiryForm'
import axios from 'axios';

function BlogDetails() {

    const params = new URLSearchParams(window.location.search);
    const blogId = params.get('blog_id');
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:1337/api/blogs/${blogId}?populate=*`);
                console.log(blogId,"blogssssssssss", response.data.data);
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
            <CommonHeaderContent data={{ linkName: 'Home /  Blog Details', name: 'Blog Details', description: 'Powerful project management tools for your companies of all sizes.' }} />
            <Grid2 container columnSpacing={8}>
                <Grid2 size={{ xs: 12, md: 9, lg: 9, xl: 9 }}>
                    <Grid2 container >
                        <img src={ServiceImage} alt="Logo" style={{ width: '100%', height: '100%' }} />
                    </Grid2>
                    <Grid2 container>
                        <Grid2 sx={{ py: 5 }}>
                            <div className='service-detail-heading' style={{ paddingBottom: '20px' }}>Top 10 Essentials For Killer Website Design Data Creation</div>
                            <div className='service-detail-description'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</div>
                        </Grid2>
                        <Grid2>
                            <div className='service-detail-description'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</div>
                        </Grid2>
                        <Grid2 sx={{ py: 5 }}>
                            <div className='service-detail-description'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</div>
                        </Grid2>
                        <Grid2>
                            <div className='success-con'>
                                <div className='service-con-description'>
                                    Success in not final, failure is not fatal, it is the courage to continue that counts.
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', paddingTop: '10px' }}>
                                    <div style={{ width: 30, height: 30, background: '#D9D9D9', borderRadius: '50%' }}></div>
                                    <div style={{ paddingInline: '10px' }}>
                                        <div className='award-inner-text'>Kapil Nagar</div>
                                    </div>
                                </div>
                            </div>
                        </Grid2>
                        <Grid2 sx={{ py: 4 }}>
                            <div className='service-detail-description'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</div>
                        </Grid2>
                        <Grid2>
                            <div style={{ display: 'flex', alignItems: 'center', paddingTop: '10px' }}>
                                <div style={{ width: 30, height: 30, background: '#D9D9D9', borderRadius: '50%' }}></div>
                                <div style={{ paddingInline: '10px' }}>
                                    <div className='award-inner-text'>Kapil Nagar</div>
                                </div>
                            </div>
                        </Grid2>
                    </Grid2>
                    <Grid2 container>
                        <EnquiryForm />
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

export default BlogDetails