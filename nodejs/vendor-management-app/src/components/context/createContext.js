
import { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingProduct = state.find(item => item.productId === action.payload.productId);

            if (existingProduct) {
                // Product is already in the cart, update quantity and calculate total price
                return state.map(item =>
                    item.productId === action.payload.productId
                        ? { ...item, quantity: item.quantity + 1, totalPrice: (item.quantity + 1) * item.price }
                        : item
                );
            } else {
                // Product is not in the cart, add a new entry with initial quantity and total price
                return [...state, { ...action.payload, quantity: 1, totalPrice: action.payload.price }];
            }



        case 'INCREMENT_QUANTITY':
            return state.map(item =>
                item.productId === action.payload.productId
                    ? { ...item, quantity: item.quantity + 1, totalPrice: (item.quantity + 1) * item.price }
                    : item
            );

        case 'DECREMENT_QUANTITY':
            return state.map(item =>
                item.productId === action.payload.productId && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1, totalPrice: (item.quantity - 1) * item.price }
                    : item
            );





        // Add other cart actions as needed
        default:
            return state;
    }
};
const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, []);

    const addToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });

    };


    const incrementQuantity = (productId) => {
        dispatch({ type: 'INCREMENT_QUANTITY', payload: { productId } });
    };

    const decrementQuantity = (productId) => {
        dispatch({ type: 'DECREMENT_QUANTITY', payload: { productId } });
    };

    // Add other cart actions as needed

    return (
        <CartContext.Provider value={{ cart, addToCart, incrementQuantity, decrementQuantity }}>
            {children}
        </CartContext.Provider>
    );
};

const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export { CartProvider, useCart } 