import {FETCH_FILMS_FAILURE, FETCH_FILMS_REQUEST, FETCH_FILMS_SUCCESS} from "../actions";

const updateCartItems = (cartItems, item, idx) => {

    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ];
    }

    if (idx === -1) {
        return [
            ...cartItems,
            item
        ];
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ];
};

const updateCartItem = (book, item = {}, quantity) => {

    const {
        id = book.id,
        count = 0,
        title = book.title,
        total = 0
    } = item;

    return {
        id,
        title,
        count: count + quantity,
        total: total + quantity * book.price
    };
};

const updateOrder = (state, bookId, quantity) => {
    const { bookList: { books }, shoppingCart: { cartItems } } = state;

    const book = books.find(({ id }) => id === bookId);
    const itemIndex = cartItems.findIndex(({ id }) => id === bookId);
    const item = cartItems[itemIndex];

    const newItem = updateCartItem(book, item, quantity);
    return {
        orderTotal: 0,
        cartItems: updateCartItems(cartItems, newItem, itemIndex)
    };
};


const initialState = {
    films: [],
    error: null
};

const films = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_FILMS_REQUEST:
            return {
                films: [],
                error: null
            };

        case FETCH_FILMS_SUCCESS:
            return {
                films: action.payload,
                error: null
            };

        case FETCH_FILMS_FAILURE:
            return {
                films: [],
                error: action.payload
            };

        default:
            return state;
    }
};

export default films;
