const path = "https://front-test-api.herokuapp.com/";

export const getProducts = () => new Promise((resolve, reject) => {
    fetch(`${path}api/product`)
        .then(response => response.json())
        .then(resolve)
        .catch(reject);
});

export const getProduct = (id) => new Promise((resolve, reject) => {
    fetch(`${path}api/product/${id}`)
        .then(response => response.json())
        .then(resolve)
        .catch(reject);
});

export const addProduct = (data) => new Promise((resolve, reject) => {

    const requestInit = {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };

    fetch(`${path}api/cart`, requestInit)
        .then(response => response.json())
        .then(resolve)
        .catch(reject);
});