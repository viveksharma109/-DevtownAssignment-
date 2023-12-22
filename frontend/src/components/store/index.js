import { configureStore} from '@reduxjs/toolkit';
import MobileSlice from './mobileslice';
import cartSlice from './cartSlice';

const MobileStore = configureStore({reducer :{
    mobile : MobileSlice.reducer,
    cart : cartSlice.reducer,

}
});

export default MobileStore;


