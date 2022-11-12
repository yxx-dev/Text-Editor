import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  try {
    const jateDB = await openDB('jate', 1);
    // const tx = jateDB.transaction('jate', 'readwrite');
    // const store = tx.objectStore('jate');
    // const request = store.put({ id: 1, 'value': content });
    // const result = await request;
    const result = await jateDB.transaction('jate', 'readwrite').objectStore('jate').put({ id: 1, 'value': content });
    console.log('result', result);
  } catch {
  console.error('putDb not implemented');
  }
}

// gets all the content from the database
export const getDb = async () => {
  try {
    const jateDB = await openDB('jate', 1);
    // const tx = jateDB.transaction('jate', 'readonly');
    // const store = tx.objectStore('jate');
    // const request = store.get(1);
    // const result = await request;
    const result = await jateDB.transaction('jate', 'readonly').objectStore('jate').get(1);
    console.log('result', result.value);
    return result.value;
  } catch {
    console.error('getDb not implemented')
  };
}

initdb();
