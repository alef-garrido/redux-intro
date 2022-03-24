import { Map } from "immutable";

// Immutable JS provides immutable data-structures (maps, hash-maps)

// let book = { title: "Cuentos de Eva Luna" };
let book = Map({ title: "Cuentos de Eva Luna" });

function publish(book) {
  return book.set('isPublished', true);
}
book = publish(book);

console.log(book);
console.log(book.get('title'));
console.log(book.toJS()); // returns plain js object

