import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('order', {path: '/orders/:order_id' } );
  this.route('orders');
});

export default Router;
