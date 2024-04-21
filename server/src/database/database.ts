import sqlite3 from 'sqlite3';

const categoryTable = `
  CREATE TABLE IF NOT EXISTS Category (
    label TEXT, 
    color TEXT
  ); 
  `;

const taskTable = `
  CREATE TABLE IF NOT EXISTS Task (
    id INTEGER,
    category TEXT,
    text TEXT,
    time TEXT,
    done BOOLEAN
  );
  `;

// Connect to the sqlite database
export const db = new sqlite3.Database('database.db', (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the SQLite database.');
    initializeDatabase();
  }
});

// Database initial query
const initializeDatabase = () => {
  db.run(categoryTable, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('SQLite category table initialized and is ready to use.');
    }
  });

  db.run(taskTable, (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('SQLite task table initialized and is ready to use.');
    }
  });
};

const getOne = async (query: string, params: any[]) => {
  try {
    const record = await new Promise((resolve, reject) => {
      db.get(query, params, (err, row) => {
        if (err) {
          console.error(err.message);
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
    return record;
  } catch (err) {
    console.log(err);
  }
};

const getAll = async (query: string) => {
  try {
    const record = await new Promise((resolve, reject) => {
      db.all(query, (err, row) => {
        if (err) {
          console.error(err.message);
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
    return record;
  } catch (err) {
    console.log(err);
  }
};

const remove = async (query: string, identityValue: any) => {
  try {
    const success = await new Promise((resolve, reject) => {
      db.run(query, [identityValue], (err) => {
        if (err) {
          console.error(err.message);
          reject(false);
        } else {
          resolve(true);
        }
      });
    });
    return success;
  } catch (err) {
    console.log(err);
  }
};

const insertOrUpdate = async (query: string, params: any[]) => {
  try {
    const success = await new Promise((resolve, reject) => {
      db.run(query, params, (err) => {
        if (err) {
          console.error(err.message);
          reject(false);
        } else {
          resolve(true);
        }
      });
    });
    return success;
  } catch (err) {
    console.log(err);
  }
};

export const getCategoryByLabel = async (label: string) => {
  const query = 'SELECT * FROM Category WHERE label = ?';
  const record = await getOne(query, [label]);
  return record;
};

export const getAllCategories = async () => {
  const query = 'SELECT * FROM Category';
  const records = await getAll(query);
  return records;
};

export const insertOrUpdateCategory = async (label: string, color: string) => {
  const insertQuery = 'INSERT INTO Category (label, color) VALUES (?, ?)';
  const updateQuery = 'UPDATE Category SET label = ?, color = ? WHERE label = ?';
  const previousRecord = await getCategoryByLabel(label);
  if (previousRecord) {
    const result = await insertOrUpdate(updateQuery, [label, color, color]);
    return result;
  } else {
    const result = await insertOrUpdate(insertQuery, [label, color]);
    return result;
  }
};

export const removeCategory = async (label: string) => {
  const deleteQuery = 'DELETE FROM Category WHERE label = ?';
  const success = await remove(deleteQuery, label);
  return success;
};


export const getTaskById = async (id: number) => {
  const query = 'SELECT * FROM Task WHERE id = ?';
  const record = await getOne(query, [id]);
  return record;
};

export const getAllTasks = async () => {
  const query = 'SELECT * FROM Task';
  const records = await getAll(query);
  return records;
};

export const insertOrUpdateTask = async (
  id: number,
  category: string,
  text: string,
  time: string,
  done: boolean
) => {
  const insertQuery = 'INSERT INTO Task (id, category, text, time, done) VALUES (?, ?, ?, ?, ?)';
  const updateQuery =
    'UPDATE Task SET id = ?, category = ?, text = ?, time = ?, done = ? WHERE id = ?';
  const previousRecord = await getTaskById(id);
  if (previousRecord) {
    const result = await insertOrUpdate(updateQuery, [id, category, text, time, done, id]);
    return result;
  } else {
    const result = await insertOrUpdate(insertQuery, [id, category, text, time, done]);
    return result;
  }
};

export const removeTask = async (id: number) => {
  const deleteQuery = 'DELETE FROM Task WHERE id = ?';
  const success = await remove(deleteQuery, id);
  return success;
};

