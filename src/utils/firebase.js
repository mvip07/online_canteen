import "firebase/compat/storage"
import firebase from 'firebase/compat/app';

const firebaseConfig = {
	apiKey: "AIzaSyDQdAYkc__lKheJO2e1oqFZnutHAai0Zm0",
	authDomain: "online-canteen-ec4ed.firebaseapp.com",
	projectId: "online-canteen-ec4ed",
	storageBucket: "online-canteen-ec4ed.appspot.com",
	messagingSenderId: "365846835822",
	appId: "1:365846835822:web:4e522e44083701682cec7f",
	measurementId: "G-R11QEYB8W2"
};

firebase.initializeApp(firebaseConfig)
const storage = firebase.storage();

export { firebase, storage }