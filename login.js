
function initializeGoogleLogin() {
  google.accounts.id.initialize({
    client_id: 'elizabethjohney59@gmail.com', 
    callback: handleGoogleLogin
  });

  google.accounts.id.renderButton(
    document.getElementById("google-login"), 
    { theme: "outline", size: "large" }
  );
}

function handleGoogleLogin(credentialResponse) {
  console.log('Google ID Token:', credentialResponse.credential);

}


function initializeFacebookLogin() {
  window.fbAsyncInit = function () {
    FB.init({
      appId: 'elsojohney', 
      cookie: true,
      xfbml: true,
      version: 'v16.0'
    });
    FB.AppEvents.logPageView();
  };

  (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
}

function handleFacebookLogin() {
  FB.login(function (response) {
    if (response.status === 'connected') {
      console.log('Facebook Access Token:', response.authResponse.accessToken);
     
    } else {
      console.log('User cancelled login or did not fully authorize.');
    }
  }, { scope: 'email' });
}

document.addEventListener('DOMContentLoaded', function () {
 
  initializeGoogleLogin();
  initializeFacebookLogin();

  
  const facebookLoginButton = document.getElementById('facebook-login');
  if (facebookLoginButton) {
    facebookLoginButton.addEventListener('click', handleFacebookLogin);
  }
});
