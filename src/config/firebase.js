
let firebaseConfig = require('firebase').initializeApp({
    serviceAccount: "./ServiceAccountKey.json",
    databaseURL: "https://pdb-app-c9d98.firebaseio.com/"
}); 

let refLogin = firebaseConfig.database().ref('Login');

export default refLogin;

