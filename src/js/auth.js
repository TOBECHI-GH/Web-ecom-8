function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log("User signed out.");
  });
}
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  const id_token = googleUser.getAuthResponse().id_token;
  const id = profile.getId();
  const name = profile.getName();
  const photo = profile.getImageUrl();
  const email = profile.getEmail();
  const response = {
    profile,
    id,
    name,
    photo,
    email,
    id_token,
  };

  console.table("the response data from google", response);
}
