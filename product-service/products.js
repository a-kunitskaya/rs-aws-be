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
        id: '2',
        title: 'Black chocolate',
        description: '80% cacao',
        price: 15,
    },
];


module.exports.getProductsList = async event => {
    console.log(event);
    return {
        statusCode: 200,
        body: products,
    };
};
