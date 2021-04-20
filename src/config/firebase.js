import * as firebase from 'firebase';
import 'firebase/auth'
import 'firebase/database'

const config = {
  apiKey: "AIzaSyBjzwy-D3AS-oy_vSK0lcnbTOSLOSEdAFE",
  authDomain: "booklist-afce8.firebaseapp.com",
  projectId: "booklist-afce8",
  storageBucket: "booklist-afce8.appspot.com",
  messagingSenderId: "290349677584",
  appId: "1:290349677584:web:a9fe11ff2bbef1696ede95"

}

export default firebase.initializeApp(config);