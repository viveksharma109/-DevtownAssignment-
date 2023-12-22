import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, Container, Grid, Pagination, Snackbar } from '@mui/material';
import styles from './card.module.css';
import { fetchMobiles } from './store/mobileslice';
import { removeMobileNotFound } from './store/mobileslice';
import DrawerValue from './dvalue';
import { addToCart, removeItemExists, removeItemAdded } from './store/cartSlice';
import MuiAlert from '@mui/material/Alert';
import phone from "../assets/images/phone.png"

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Cards() {
    const dispatch = useDispatch();
    // Fetch mobiles when the component mounts
    React.useEffect(() => {
        dispatch(fetchMobiles({}));
    }, [dispatch]);

    const mobiles = useSelector((state) => state.mobile.mobiles);
    const showItemExists = useSelector(state => state.cart.showItemExists);
    const itemAdded = useSelector(state => state.cart.itemAdded);
    const mobilesNotFound = useSelector(state => state.mobile.mobilesNotFound);

    const handleAddToCart = (mobile) => {
        dispatch(addToCart(mobile));
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(removeItemExists());
    };

    const handleClose2 = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(removeItemAdded());
    };

    const handleClose3 = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(removeMobileNotFound());
    }

    // Pagination 
    const [currentPage, setCurrentPage] = React.useState(1);
    const usersPerPage = 20;
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentMobiles = mobiles.slice(indexOfFirstUser, indexOfLastUser);

    const paginate = (event, value) => {
        setCurrentPage(value);
    };
    return (
        <>

            <Container style={{ marginRight: "38px" }}>
                <DrawerValue />
                <Grid container spacing={2}>
                    {currentMobiles.map((mobile, index) => (
                        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                            {mobile && (
                                <div className={` ${styles.card} w-full p-4 m-2 rounded text-white from-slate-600 to-transparent text-center`} style={{ boxShadow: "0px 0px 2px 2px rgba(255, 255, 255, 0.5)" }} >
                                    <CardContent>
                                        <center>
                                            <Typography variant="body1" sx={{ background: "white", width: "110px", borderRadius: '100%' }}>
                                                <img src={phone} alt="Mobile" style={{ maxWidth: '100px', maxHeight: '100px' }} />
                                            </Typography>
                                            <Typography sx={{ color: 'silver', fontSize: "18px" }}>{mobile.name} </Typography>
                                            <Typography sx={{ color: "yellow" }} variant="body1">  ${mobile.price}</Typography>
                                            <Typography sx={{ color: 'white' }} variant="body1">{mobile.type}</Typography>
                                            <Typography sx={{ color: 'white' }} variant="body1">  {mobile.processor} </Typography>
                                            <Typography sx={{ color: 'white' }} variant="body1">  {mobile.memory} </Typography>
                                            <Typography sx={{ color: 'white' }} variant="body1">{mobile.os} </Typography>
                                            <Button onClick={() => handleAddToCart(mobile)} sx={{ mt: 3, border: "1px solid white", color: "white" }}>Add to Cart</Button>
                                        </center>
                                    </CardContent>
                                </div>
                            )}
                        </Grid>
                    ))}
                </Grid>
                <Pagination
                    count={Math.ceil((mobiles.length) / usersPerPage)}
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
            <Snackbar
                open={showItemExists}
                autoHideDuration={2000}
                onClose={handleClose}
                message="Item already in cart"
                // action={action}
                variant='error'
                severity="error"
            >
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Item already in cart
                </Alert>
            </Snackbar>
            <Snackbar
                open={itemAdded}
                autoHideDuration={2000}
                onClose={handleClose2}
                // action={action}
                variant='error'
                severity="error"
            >
                <Alert onClose={handleClose2} severity="success" sx={{ width: '100%' }}>
                    Item added to the cart
                </Alert>
            </Snackbar>
            <Snackbar
                open={mobilesNotFound}
                autoHideDuration={2000}
                onClose={handleClose3}
                variant='error'
                severity="error"
            >
                <Alert onClose={handleClose3} severity="error" sx={{ width: '100%' }}>
                    Mobile not found
                </Alert>
            </Snackbar>
        </>
    )
}

export default Cards;