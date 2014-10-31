if (Products.find().count() === 0) {
  Products.insert({
    name: 'Fruit Snacks',
    price: 0.25,
    image: '/images/fruit-snack.jpg'
  });
  
  Products.insert({
    name: 'Cookies & Crackers',
    price: 0.50,
    image: '/images/cookies-crackers2.jpg'
  });
  
}