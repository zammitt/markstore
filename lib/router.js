Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('products'); }
});

Router.route('/', {name: 'productList'});

Router.route('/product/:_id', {
  name: 'productPage',
  data: function() { return Products.findOne(this.params._id); }
});

Router.route('/products/:_id/edit', {
  name: 'productEdit',
  data: function() { return Products.findOne(this.params._id); }
});

Router.route('/submit', {name: 'productSubmit'});

var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
      this.render('accessDenied');
    }
  } else {
    this.next();
  }
}

Router.onBeforeAction('dataNotFound', {only: 'productPage'});
Router.onBeforeAction(requireLogin, {only: 'productSubmit'});