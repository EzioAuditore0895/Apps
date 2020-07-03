import firebase from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyBbOB0LH2LcqdAZTfj7UOzZB1OS3okADHM",
	authDomain: "teleconsulta-staging-be0ae.firebaseapp.com",
	databaseURL: "https://teleconsulta-staging-be0ae.firebaseio.com",
	projectId: "teleconsulta-staging-be0ae",
	storageBucket: "teleconsulta-staging-be0ae.appspot.com",
	messagingSenderId: "863892473239",
	appId: "1:863892473239:web:2057eb74f01109a5a870d2",
	measurementId: "G-QKBS4QDMTF",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
