import Ember from 'ember';
import LineItem from 'woodland/models/line-item';
import product from 'woodland/models/product';
import order from 'woodland/models/order';

const products = [
Product.create({title: 'Tent', price: 10, desc:'d1'}),
Product.create({title: 'Sleeping…', price: 5, desc:'d1'}),
Product.create({title: 'Flashlig…', price: 2, desc:'d1'}),
Product.create({title: 'First-Ai…', price: 3, desc:'d1'})
];
const orders = [
Order.create({ id: '1234', name: 'Blaise Blobfish',
items: [
LineItem.create({product: products[0], quantity: 1}),
LineItem.create({product: products[1], quantity: 1}),
LineItem.create({product: products[2], quantity: 0}),
LineItem.create({product: products[3], quantity: 0})
]
}),
Order.create({ id: '1345', name: 'Second Blobfish',
items: [
LineItem.create({product: products[0], quantity: 11}),
LineItem.create({product: products[1], quantity: 1}),
LineItem.create({product: products[2], quantity: 2}),
LineItem.create({product: products[3], quantity: 2})
]
})
];

export default Ember.Service.extend({
    getOrderById(id) {
        const orders = this.getOrders();
        return orders.findBy('id', id);
    },
    
    getOrders(){
       return [
             {id: '1', name: 'Nate'},
             {id: '2', name: 'Gregg'}
        ];
    },
    getProducts(){
        return products;
    }
});
