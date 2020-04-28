import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyDe6DVRo9kKZBDhmCouryzF-RfY-3-6pYc",
    authDomain: "net-ninja-8ec1f.firebaseapp.com",
    databaseURL: "https://net-ninja-8ec1f.firebaseio.com",
    projectId: "net-ninja-8ec1f",
    storageBucket: "net-ninja-8ec1f.appspot.com",
    messagingSenderId: "466039844025",
    appId: "1:466039844025:web:b24d230c1dd8c2918f3f68",
    measurementId: "G-77PW8C8XG0"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 