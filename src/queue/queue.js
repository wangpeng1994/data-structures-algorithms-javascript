function Queue() {
  const items = [];

  this.enqueue = (element) => items.push(element);

  this.dequeue = () => items.shift();

  this.front = () => items[0];

  this.isEmpty = () => items.length === 0;

  this.size = () => items.length;

  this.print = () => console.log(items.toString());
}
