<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,600' rel='stylesheet' type='text/css'>
<link rel='stylesheet prefetch' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css'>

</head>
<body>

<div id="wrapper" class="square">
    <a class="item youtube"><img src="http://www.show-reel.it/new/branded-content/wp-content/uploads/sites/2/2017/12/youTube-1.png" alt="Smiley face" height="42" width="42">
<span class="count"></span>Subscribers</a>
<a class="item instagram_sandbox"><img src="http://www.show-reel.it/new/branded-content/wp-content/uploads/sites/2/2017/12/instagram-1.png" alt="Smiley face" height="42" width="42">
</i><span class="count"> </span>Followers</a>
<a class="item facebook"><img src="http://www.show-reel.it/new/branded-content/wp-content/uploads/sites/2/2017/12/facebook-1.png" alt="facebook" height="42" width="42">
</i><span class="count"></span>Likes</a>
  <a class="item twitter"><img src="http://www.show-reel.it/new/branded-content/wp-content/uploads/sites/2/2017/12/twitter-1.png" alt="Smiley face" height="42" width="42">
<span class="count"></span>Followers</a>


</div>
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
<script src="https://cdn.rawgit.com/cainoeraabele/socialJs/efd76cc0/jsocial.js"></script>

<script>
  $( document ).ready(function() {
console.log( "ready!" );
var uuuu = $(".twitter a").attr("href");
 console.log(uuuu);
 });
  var youtubeId = $(".facebook a").attr("href");
  youtubeId = youtubeId.split("|");

    var facebook_userId = $(".instagram a").attr("href");
  facebook_userId = facebook_userId.split("|");

var instagram_user_sandboxId = $(".twitter a").attr("href");
  instagram_user_sandboxId = instagram_user_sandboxId.split("|");

var twitter_userId = $(".YouTube a").attr("href");
  if (twitter_userId == null){
   twitter_userId = '';
  }else{
    twitter_userId = twitter_userId.split("|");
  }



  $('#wrapper').SocialCounter({
    //Get Usernames
    dribbble_user: 'juanv911',
    facebook_user: facebook_userId[0],
    instagram_user: instagram_user_sandboxId[0],
    instagram_user_sandbox: instagram_user_sandboxId[0],
    google_plus_id: '100542012590159373204',
    youtube_user: youtubeId[0],
    pinterest_user: 'juanv911',
    soundcloud_user_id: 'juanv911',
    vimeo_user: 'vimeocuration',
    github_user: 'juanv911',
    twitter_user: twitter_userId[0],
    behance_user: 'juanv911',
    vine_user: '952223981988110336',
    vk_id: '66748',
    foursquare_user: 'mo3aser',
    tumblr_username: 'festus915',
    twitch_username:'towelliee',
    //Get Access Tokens,keys,client_ids
    dribbble_token: '1c73ffb7859f2c1c37450789dce2369af5caa9e18c3df1fa30485cfad79081d8',
    instagram_token:'3216680391.5a20414.d66b30dc0857473dbf9723d34b502a73',
    google_plus_key:'AIzaSyDXpwzqSs41Kp9IZj49efV3CSrVxUDAwS0',
    facebook_token:'1627334644211864|3_tGe7MNSzumVcKxMyJUTqZAlz4',
    youtube_key:'AIzaSyDXpwzqSs41Kp9IZj49efV3CSrVxUDAwS0',
    twitch_client_id:'2yllx3nbpx9wa5intlhan6p9i8pi2h7',
    soundcloud_client_id:'5a9f3b72a723aac2cffb7ee684a80d9b',
    vimeo_token:'961a0b29198b9ed293a6a70d2c160b0f',
    behance_client_id:'mpX9kGiySp7YxrTCCw6FwNmKvDLNAt49',
    foursquare_token:'GCPMWQPBATX1H23NQ4FRURC1SXYC4MPNJ0KWRKXO5JAOEIDI',
    linkedin_oauth: 'AQXo4yikouZnzWkUYZCOnVCKnhAALbi0-eSrlWTORI85p8dHCx_n0lnP7sG1k8HrOqPPvQ6Nkf0iAII2Ui34fsFr6IGcclgDnIsK_Z1Olx3vX-cJNfvuQoqNKFtUvhJOLE43iQQy0y1NDJXIDJV4nTPQCdezuaqAIEbjgcFa8tWsGmSZgtI'
  });
</script>
