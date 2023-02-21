importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');

   /*Update with yours config*/
 const firebaseConfig = {
   apiKey: "AIzaSyAMiN5h-ST_5i0zmPAiPkfT1L-0_SQETVM",
   authDomain: "pwa-demo-2ae03.firebaseapp.com",
   projectId: "pwa-demo-2ae03",
   storageBucket: "pwa-demo-2ae03.appspot.com",
   messagingSenderId: "583421406160",
   appId: "1:583421406160:web:8fad424fd0b413cc5ca7d5",
   measurementId: "G-ZG7K87GMZ3"
 };

  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

  /*messaging.onMessage((payload) => {
  console.log('Message received. ', payload);*/

  //experimentalSetDeliveryMetricsExportedToBigQueryEnabled(messaging, true);

  messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });