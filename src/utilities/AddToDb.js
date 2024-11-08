const getToCart =  () => {
    const storedCartStr = localStorage.getItem('cart-item');
    return storedCartStr ? JSON.parse(storedCartStr) : [];
};

const addToCart = (id) => {
    const storedList = getToCart();

    if (storedList.includes(id)) {
        alert("Already in cart list");
        return;
    }

    storedList.push(id);
    localStorage.setItem('cart-item', JSON.stringify(storedList));
};

const getToWishList = () => {
    const storedWishListStr = localStorage.getItem('list-item');
    return storedWishListStr ? JSON.parse(storedWishListStr) : [];
};

const addToWishList = (id) => {
    const storedList = getToWishList();

    if (storedList.includes(id)) {
        alert("Already in wishlist");
        return;
    }

    storedList.push(id);
    
    localStorage.setItem('list-item', JSON.stringify(storedList));
};

export {addToCart, addToWishList, getToCart, getToWishList}