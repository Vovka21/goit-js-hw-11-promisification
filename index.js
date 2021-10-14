//* Задание 1

const delay1 = ms => {
  return new Promise(resolve => {
    setTimeout(() => resolve(ms));
  });
};

const logger1 = time1 => console.log(`Resolved after ${time1}ms`);

// Вызовы функции для проверки
delay1(2000).then(logger1); //^    Resolved after 2000ms
delay1(1000).then(logger1); //^    Resolved after 1000ms
delay1(1500).then(logger1); //^    Resolved after 1500ms

//* Задание 2

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
  const updatedUsers = allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user,
  );

  return Promise.resolve(updatedUsers);
};

const logger2 = updatedUsers => console.table(updatedUsers);

toggleUserState(users, 'Mango').then(logger2);
toggleUserState(users, 'Lux').then(logger2);

//* Задание 3

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const makeTransaction = transaction => {
  const delay3 = randomIntegerFromInterval(200, 500);

  const newPromise = new Promise((resolve, reject) => {
    const canProcess = Math.random() > 0.3;

    setTimeout(() => {
      if (canProcess) {
        resolve(transaction.id, delay3);
      }
      reject(transaction.id);
    }, delay3);
  });

  return newPromise;
};

const logSuccess = (id, time) => {
  console.log(`Transaction ${id} processed in ${time}ms`);
};

const logError = id => {
  console.warn(`Error processing transaction ${id}. Please try again later.`);
};

makeTransaction({ id: 70, amount: 150 }).then(logSuccess).catch(logError);

makeTransaction({ id: 71, amount: 230 }).then(logSuccess).catch(logError);

makeTransaction({ id: 72, amount: 75 }).then(logSuccess).catch(logError);

makeTransaction({ id: 73, amount: 100 }).then(logSuccess).catch(logError);
