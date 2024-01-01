// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Slider from 'react-slick';
// const Lasttestnews = () => {

//     const settings = {
//         dots: false,
//         infinite: true,
//         slidesToShow: 6,
//         slidesToScroll: 1,
//         autoplay: true,


//     }
//     return (

//         <Slider {...settings} >

//             <div className='container-fulid'>
//                 <div className='row'>
//                     <div className='col-12'>

//                         <Card sx={{ maxWidth: 345 }}>
//                             <CardMedia
//                                 component="img"
//                                 alt="green iguana"
//                                 height="340"
//                                 image="https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/9-490x280_t.jpg"
//                             />
//                             <CardContent>
//                                 <Typography gutterBottom variant="h5" component="div">
//                                     Lizard
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary">

//                                 </Typography>
//                             </CardContent>
//                             <CardActions>
//                                 <Button size="small">Share</Button>
//                                 <Button size="small">Learn More</Button>
//                             </CardActions>
//                         </Card>
//                     </div>
//                     <div className='col-12'>
//                         <Card sx={{ maxWidth: 345 }}>
//                             <CardMedia
//                                 component="img"
//                                 alt="green iguana"
//                                 height="140"
//                                 image="https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/8-490x280_t.jpg"
//                             />
//                             <CardContent>
//                                 <Typography gutterBottom variant="h5" component="div">
//                                     Lizard
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary">
//                                     Lizards are a widespread group of squamate reptiles, with over 6,000
//                                     species, ranging across all continents except Antarctica
//                                 </Typography>
//                             </CardContent>
//                             <CardActions>
//                                 <Button size="small">Share</Button>
//                                 <Button size="small">Learn More</Button>
//                             </CardActions>
//                         </Card>
//                     </div>
//                     <div className='col-12'>
//                         <Card sx={{ maxWidth: 345 }}>
//                             <CardMedia
//                                 component="img"
//                                 alt="green iguana"
//                                 height="140"
//                                 image="https://pixeltemplate.com/wordpress/shopeur/wp-content/uploads/2020/08/8-490x280_t.jpg"
//                             />
//                             <CardContent>
//                                 <Typography gutterBottom variant="h5" component="div">
//                                     Lizard
//                                 </Typography>
//                                 <Typography variant="body2" color="text.secondary">
//                                     Lizards are a widespread group of squamate reptiles, with over 6,000
//                                     species, ranging across all continents except Antarctica
//                                 </Typography>
//                             </CardContent>
//                             <CardActions>
//                                 <Button size="small">Share</Button>
//                                 <Button size="small">Learn More</Button>
//                             </CardActions>
//                         </Card>
//                     </div>
//                 </div>
//             </div>
//         </Slider>

//     )
// }

// export default Lasttestnews


import React from "react"
import Slider from 'react-slick';
import { Typography } from '@mui/material';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card'
import Button from '@mui/material/Button';

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import LatestDdata from './lastestdata'


const Lasttestnews = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,


    }

    return (
        <>
            <Slider {...settings} className="mt-5" style={{ width: "93%", marginLeft: "52px" }}>

                {LatestDdata.map((value, index) => (
                    <div className='box product' key={index}>
                        <Card>
                            <div className='img'>
                                <img src={value.cover} alt='' height="220px" />
                            </div>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Nunc placerat augue vel porta venenatis
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    ranging across all continents except AntarcticaLizards

                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Admin</Button>
                                <Button size="small">Read More</Button>
                            </CardActions>
                        </Card>
                    </div>
                )
                )
                }



            </Slider>
        </>
    )
}

export default Lasttestnews
