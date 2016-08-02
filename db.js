var _data = {
	Category1: [
		{ name: "Product1", id:0},
		{ name: "Product2", id:1}
	],
	Category2: [
		{ name: 'Product1', id:0},
		{ name: 'Product2', id:1}
	],
	Category3: [
		{ name: 'Product1', id:0},
		{ name: 'Product2', id:1}
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
	addProduct: function(productName, catName){
		var max = 0;
		max = this.getProducts(catName).reduce(function(max, product){
			if(product.id > max)
				max = product.id;
			return max;
		}, 0);
		max ++;
		_data[catName].push({name: productName, id:max});
	},
	deleteProduct: function(id, catName){
		var idx = this.getProducts(catName).indexOf(this.getProducts(catName).filter(function(product){
				return product.id === id;
		})[0]);
		_data[catName].splice(idx, 1);
	}
};

