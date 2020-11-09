'use strict';

const products = [
    {
        id: '1',
        title: 'Mylk chocolate',
        description: '60% cacao',
        price: 20,
    },
    {
        id: '2',
        title: 'White chocolate',
        description: '0% cacao',
        price: 15,
    },
    {
        id: '3',
        title: 'Black chocolate',
        description: '80% cacao',
        price: 15,
    },
];


const getProductsList = async event => {
    console.log('event getProductsList', event);
    return {
        statusCode: 200,
        body: JSON.stringify(products),
    };
};

const getProductById = async event => {
    console.log('event getProductById', event);

    const { pathParameters: { productId } } = event;
    console.log('product id', productId);

    const product = products.find(p => p.id === productId);
    console.log('product', product);

    if(product) {
        return {
            statusCode: 200,
            body: JSON.stringify(product),
        };
    }

    const error = { message: 'Product is not found'};
    return {
        statusCode: 404,
        body: JSON.stringify(error),
    };
};

module.exports = {
    getProductsList,
    getProductById
};
