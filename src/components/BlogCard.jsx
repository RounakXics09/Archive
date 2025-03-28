import { Grid2 } from '@mui/material'
import React, { useEffect, useState } from 'react'
import BlogImage from '../assets/BlogImage.svg'
import ReadImage from '../assets/arrowicon.svg'
import MessageImage from '../assets/message-icon.svg'
import moment from 'moment'

function BlogCard(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log("props=========>", props.data);
    setData(props.data)
  }, [props])


  return (
    <Grid2>
      <Grid2>
        <div style={{ position: 'relative' }}>
          <img src={`http://localhost:1337${data?.blog_image?.url}`} alt="Logo1" style={{ width: '100%' }} />
          <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
            <div className='blog-date'>{moment(data?.blog_date).format('DD')}
              <br />
              <span className='text-span'>{moment(data?.blog_date).format('MMM')}</span>
            </div>
          </div>
        </div>
      </Grid2>
      <Grid2 sx={{ py: 2 }} className="blog-card-heading">
        {data?.title} &nbsp;
      </Grid2>
      <Grid2 className="blog-card-description">
        {data?.description}
        {/* {data?.hh?.split('\n').map((line, index) => (
          <span key={index}>
            {line.trim()} <br />
          </span>
        ))} */}
      </Grid2>
      <Grid2 sx={{ py: 2 }} className="div-between" >
        <div className='readmore' onClick={() => window.open(`http://localhost:8080/blog/details?blog_id=${data?.documentId}`, '_blank')}>
          Read More
          <img src={ReadImage} alt="Logo1" style={{ width: '28px', height: '100%', paddingLeft: '10px' }} />
        </div>
        <div className='no-comments'>
          <img src={MessageImage} alt="Logo1" style={{ width: '18px', height: '100%', paddingRight: '10px' }} />
          No Comments
        </div>
      </Grid2>
    </Grid2>
  )
}

export default BlogCard