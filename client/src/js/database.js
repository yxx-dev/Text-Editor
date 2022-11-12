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

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const jateDB = await openDB('jade', 1);
  try {
    const result = jateDB.transaction('jade', 'readonly').objectStore('jade').getAll();
    console.log('result', result);
    return result;
  } catch {
  console.error('putDb not implemented');
  }
}

// gets all the content from the database
export const getDb = async () => {
  const jateDB = await openDB('jade', 1);
  try {
    const result = jateDB.transaction('jade', 'readonly').objectStore('jade').getAll();
    console.log('result', result);
    return result;
  } catch {
    console.error('getDb not implemented')
  };
}

initdb();
