import { produce } from 'immer';

let book = {
  title: 'Casa de los espiritus'
}

function publish(book) {
  produce(book, draftBook => {   // 1st arg = initial obj, 2nd arg = draft obj that specifies the mutations
    draftBook.isPublish = true;   // draftBook is a proxy that recods all mutation to our initial obj, initial obj is not modifyied
  });
}

let updated = publish(book);

console.log(book);
console.log(updated);