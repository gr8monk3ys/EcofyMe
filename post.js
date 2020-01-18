const firebaseConfig = {
    apiKey: "",
    authDomain: "ecofyme-d2e71.firebaseapp.com",
    databaseURL: "https://ecofyme-d2e71.firebaseio.com",
    projectId: "ecofyme-d2e71",
    storageBucket: "ecofyme-d2e71.appspot.com",
    messagingSenderId: "886156484807",
    appId: "1:886156484807:web:c41e29f04e006cc4eedee2",
    measurementId: "G-6T8H21JFBR"
  };
  
    //initialize firebase
    firebase.initializeApp(firebaseConfig);
    
    //auth firebase refs
    const db = firebase.firestore();
    const auth = firebase.auth();
    const storage = firebase.storage();

    var fileUploadEvent = document.getElementById('fileUpload');

    //check for button click
    fileUploadEvent.addEventListener('change', function(e){

        var file = e.target.files[0];
        var storageRef = storage.ref(file.name)

        //store image in firebase storage
        var task = storageRef.put(file).then(function(file) {
            //get download url for image and store to firestore
            storageAddress.child(file.name).getDownloadURL().then(function(url) {
                db.collection('Posts').doc().set({
                    Img: url
                
                })
            })

        })

    })


