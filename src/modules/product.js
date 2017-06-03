export default class Product{
  constructor(id, name, price, image, count = 1) {
	this.id = id
	this.name = name;
	this.price = price;
	this.image = image;
	this.count = count;
  }
	
  increaseCount() {
	this.count++;
  }

  decreaseCount() {
	if (this.count > 1) {
	  this.count--;
	  return true;
	} else {
	  return false;
	}
  }	
}
