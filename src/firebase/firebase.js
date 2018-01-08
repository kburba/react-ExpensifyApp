import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })


// const OnValueChange = database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses);
// })

// database.ref('expenses').push({
//     description: 'Testuojam vienas',
//     note: '',
//     amount: 100,
//     createdAt: 15
// })

// const OnValueChange = database.ref().on('value', (snapshot) => {
//     const val = (snapshot.val());
//     const message = `${val.name} is ${val.job.title} working in ${val.job.city}`;
//     console.log(message);
// }, (e) => {
//     console.log('Error fetching data', e)
// })

// setTimeout(() => {
//     database.ref().update({
//         name: 'Kestutis',
//         'job/title': 'Frontend developer'
//     });
// }, 3000)

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Fetching data failed', e);
//     })

// database.ref().set({
//     name: 'Kestutis Burbulis',
//     age: 31,
//     stressLevel: 6,
//     isSingle: false,
//     job: {
//         title: 'Supervisor/Front-end developer',
//         city: 'Oslo'
//     },
//     location: {
//         miestas: 'Majamis',
//         salis: 'Lietuva'
//     }
// }).then(() => {
//     console.log('Data is saved')
// }).catch((e) => {
//     console.log('This failed', e)
// })

// database.ref().update({
//     stressLevel: 8,
//     'job/title': 'Plumber',
//     'job/city': 'Alytus'
// })

// database.ref().remove()
//     .then(() => {
//         console.log('Removed successfully');
//     }).catch((e) => {
//         console.log('Remove failed.');
//     })