var router = require('express').Router();
var categories = require('../db');

router.get('/:category', function(req, res, next){
	var cat = req.params.category;
	res.render('category', {
		title: 'AcmeCategories - ' + cat, 
		categories: categories.getCategories(), 
		category: categories.getCategory(cat),
		products: categories.getProducts(cat)
	});
});

router.post('/', function(req, res, next){
	var catName = req.body.newCatName;
	categories.addCategory(catName);
	res.redirect('/categories/' + catName);
});

router.delete('/:category', function(req, res, next){
	categories.deleteCategory(req.params.category);
	res.redirect('/');
});

router.post('/:category/products', function(req, res, next){
	var catName = req.params.category;
	var productName = req.body.productName;
	categories.addProduct(productName, catName);
	res.redirect('/categories/' + catName);
});

router.delete('/:category/products/:id', function(req, res, next){
	var catName = req.params.category;
	var id = req.params.id*1;
	categories.deleteProduct(id, catName);
	res.redirect('/categories/' + catName);
});

module.exports = router;