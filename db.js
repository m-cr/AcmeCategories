var _data = {
	Category: [
		{ name: "Product", id:0},
		{ name: "Product2", id:1}
	],
	Category2: [
		{ name: 'Product' },
		{ name: 'Product2' }
	],
	Category3: [
		{ name: 'Product'},
		{ name: 'Product2'}
	]
};


module.exports = {
	getCategories: function(){
		return Object.keys(_data);
	},
	getCategory: function(catName){
		return this.getCategories().filter(function(category){
			return category === catName;
		})[0];
	},
	addCategory: function(catName){
		_data[catName] = [];
	},
	deleteCategory: function(catName){
		delete _data[catName];
	},
	getProducts: function(catName){
		return _data[catName];
	},
	// addProduct: function(productName){
		
	// },
	// deleteProduct: function(){

	// }
};

