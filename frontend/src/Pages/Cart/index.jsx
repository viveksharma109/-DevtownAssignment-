import { CardContent, Grid, Pagination, Typography, Container } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems);
    console.log(cartItems);

    const [currentPage, setCurrentPage] = React.useState(1);
    const usersPerPage = 20;
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentMobiles = cartItems.slice(indexOfFirstUser, indexOfLastUser);

    const paginate = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <div style={{background: "black"}}>
            <Container style={{ marginRight: "38px" }}>
                <Grid container spacing={2}>
                    {currentMobiles.map((mobile, index) => (
                        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                            {mobile && (
                                <div className={`  w-full p-4 m-2 rounded text-white bg-gradient-to-b from-slate-600 to-transparent text-center`}>
                                    <CardContent>
                                        <center>
                                            <Typography variant="body1">
                                                <img src='https://th.bing.com/th/id/R.10de91f6d1168328cea973924ca4798a?rik=yT5AaWNiMq36dQ&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f06%2fSamsung-Mobile-Phone-Free-PNG-Image.png&ehk=%2fWx4YYOAzjYQKmBir3a69prbNhpCfpecBzh%2fmwxrW08%3d&risl=&pid=ImgRaw&r=0' alt="Mobile" style={{ maxWidth: '100px', maxHeight: '100px' }} />
                                            </Typography>
                                            <Typography sx={{ color: 'silver', fontSize: "18px" }}>{mobile.name} </Typography>
                                            <Typography sx={{ color: "yellow" }} variant="body1">  ${mobile.price}</Typography>
                                            <Typography sx={{ color: 'white' }} variant="body1">{mobile.type}</Typography>
                                            <Typography sx={{ color: 'white' }} variant="body1">  {mobile.processor} </Typography>
                                            <Typography sx={{ color: 'white' }} variant="body1">  {mobile.memory} </Typography>
                                            <Typography sx={{ color: 'white' }} variant="body1">{mobile.os} </Typography>
                                        </center>
                                    </CardContent>
                                </div>
                            )}
                        </Grid>
                    ))}
                </Grid>
                <Pagination
                    count={Math.ceil((cartItems.length) / usersPerPage)}
                    page={currentPage}
                    onChange={paginate}
                    sx={{
                        marginTop: '20px',
                        display: 'flex',
                        padding: "42px",
                        justifyContent: 'center',
                        color: 'white',
                        '& .MuiPaginationItem-root': {
                            color: 'grey',
                        },
                        '& .Mui-selected': {
                            color: 'white',
                        },
                    }}
                />
            </Container>
        </div>
    );
};

export default Cart;
