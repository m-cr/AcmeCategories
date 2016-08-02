var router = require('express').Router();
var categories = require('../db');

router.get('/:category', function(req, res, next){
	// console.log(categories.getCategory(req.params.category));
	res.render('category', {
		title: 'AcmeCategories', 
		categories: categories.getCategories(), 
		category: categories.getCategory(req.params.category),
		products: categories.getProducts(req.params.category)
	});
});

router.post('/', function(req, res, next){
	var catName = req.body.name;
	categories.addCategory(catName);
	res.redirect('/categories/' + catName);
});

router.delete('/:category', function(req, res, next){
	// var catName = req.param.category;
	categories.deleteCategory(req.params.category);
	res.redirect('/');
});

// router.post('/:category/products', function(req, res, next){

// });

// router.delete('/:category/products/:idx', function(req, res, next){
	
// });



module.exports = router;