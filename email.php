
<?php 

if ($_POST['submit']) {

 if (!$_POST['name']) {
 $error="<br />- Please enter your name";
  }
 if (!$_POST['surname']) {
 $error.="<br />- Please enter your last name";
  }
 if (!$_POST['email']) {
 $error.="<br />- Please enter your email";
  }
 if (!$_POST['message']) {
 $error.="<br />- Please enter a message";
  }

if ($error) {
$result="Whoops, there is an error. Please correct the following:$error";
}

else {
  mail(
    "sean@seanpisano.com", 
    "Contact Message", 
    "First Name: ".$_POST['name']." 
    Last Name: ".$_POST['surname']." 
    Email: ".$_POST['email']." 
    Message: ".$_POST['message']);

{
  $result="Thank You, I will be in touch shortly.";
}


}

}


?>











<!DOCTYPE html>
<html lang="en">
<!--Start Head ================================================== -->
<head>
<!--Start Global site tag (gtag.js) - Google Analytics ================================================== -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-60575160-1"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-60575160-1');
  </script>
<!--End Global site tag (gtag.js) - Google Analytics ================================================== -->
<!--Start Meta ================================================== -->
  <title>Sean Pisano - Web Developer</title>
  <meta charset="utf-8"> 
  <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport">
  <meta name="author" content="Sean Pisano">
  <meta name="subject" content="Web Development">
  <meta name="Description" content="Web Developer in Brooklyn, New York. Skills: LAMP, HTML, CSS, JavaScript, Bootstrap, Foundation, Bulma, SASS, LESS, jQuery, Vue, React, Node and Gulp.">
  <meta name="Classification" content="Web Developer in Brooklyn, New York. Skills: LAMP, HTML, CSS, JavaScript, Bootstrap, Foundation, Bulma, SASS, LESS, jQuery, Vue, React, Node and Gulp.">
  <meta name="Keywords" content="web developer, front-end web developer, hire web developer, Bootstrap, SASS, jQuery, Vue, React, Node, Gulp">
  <meta name="Geography" content="Brooklyn, New York">
  <meta name="Language" content="English">
  <meta HTTP-EQUIV="CACHE-CONTROL" content="PUBLIC">
  <meta name="Copyright" content="Sean Pisano">
  <meta name="Designer" content="Sean Pisano">
  <meta name="Publisher" content="Sean Pisano">
  <meta name="distribution" content="Global">
  <meta name="Robots" content="INDEX,FOLLOW">
  <meta name="zipcode" content="11238">
  <meta name="city" content="Brooklyn">
  <meta name="country" content="USA">
<!--End Meta ================================================== -->
<!--Start Icons ================================================== -->
  <link href="/imgs/favicon.ico" rel="shortcut icon">
  <link href="/imgs/android-icon-36x36.png" rel="android-icon" sizes="36x36">
  <link href="/imgs/android-icon-48x48.png" rel="android-icon" sizes="48x48">
  <link href="/imgs/android-icon-72x72.png" rel="android-icon" sizes="72x73">
  <link href="/imgs/android-icon-96x96.png" rel="android-icon" sizes="96x96">
  <link href="/imgs/android-icon-144x144.png" rel="android-icon" sizes="144x144">
  <link href="/imgs/android-icon-192x192.png" rel="android-icon" sizes="192x192">
  <link href="/imgs/apple-icon-57x57.png" rel="apple-touch-icon" sizes="57x57">
  <link href="/imgs/apple-icon-60x60.png" rel="apple-touch-icon" sizes="60x60">
  <link href="/imgs/apple-icon-72x72.png" rel="apple-touch-icon" sizes="72x72">
  <link href="/imgs/apple-icon-76x76.png" rel="apple-touch-icon" sizes="76x76">
  <link href="/imgs/apple-icon-114x114.png" rel="apple-touch-icon" sizes="114x114">
  <link href="/imgs/apple-icon-120x120.png" rel="apple-touch-icon" sizes="120x120">
  <link href="/imgs/apple-icon-144x144.png" rel="apple-touch-icon" sizes="144x144">
  <link href="/imgs/apple-icon-152x152.png" rel="apple-touch-icon" sizes="152x152">
  <link href="/imgs/apple-icon-180x180.png" rel="apple-touch-icon" sizes="180x180">
  <link href="/imgs/apple-icon-precomposed.png" rel="apple-touch-icon-precomposed" sizes="144x144">
<!--End Icons ================================================== -->
<!--Start Stylesheets ================================================== -->
  <!--<link href="/css/font-awesome.css" rel="stylesheet">
  <link href="/css/bootstrap.min.css" rel="stylesheet">-->
  <link href="/css/fontpisano.css" rel="stylesheet">
  <link href="/css/style.css" rel="stylesheet">
<!--End Stylesheets ================================================== -->
</head>
<!--End Head ================================================== -->
<!--Start Body ================================================== -->
<body>
<!--Start Jumbotron Header ================================================== -->
  <div class="jumbotron-fluid mb-0 d-flex align-items-center flex-column justify-content-center vh-100 text-white">
<!--Sean Pisano Logo ================================================== -->
    <img class="cover" src="/imgs/Logo_transparent_white.png"> 
<!--Sean Pisano H1 Tag not visable ================================================== -->
    <h1 class="display-3" style="display: none;">Sean Pisano<br>
    Web Developer</h1>
  <!-- Jumbotron CTA (Calls To Action) ================================================== -->
    <p class="lead"><a class="btn btn btn-outline-secondary-nav btn-lg m-2" href="#work"><i aria-hidden="true" class="fa fa-arrow-down"></i> Learn More</a> <a class="btn btn btn-outline-secondary-nav btn-lg m-2" data-toggle="modal" href="#myModal"><i aria-hidden="true" class="fa fa-envelope-o"></i> Hire Me</a> <a class="btn btn btn-outline-secondary-nav btn-lg m-2" href="/resume/Sean-Pisano-Web-Developer-Resume.pdf"  target="_blank"><i aria-hidden="true" class="fa fa-download"></i> Download My Resume</a></p>
<!--Jumbotron Social Media ================================================== -->
    <div class="row">
      <div class="col social-links-top">
<!--Jumbotron GitHub ================================================== -->
        <a href="https://github.com/seanpisano" target=""><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-github-alt fa-stack-1x fa-inverse"></i></span></a> 
<!--Jumbotron Linkedin ================================================== -->
         <a href="https://www.linkedin.com/in/seanpisano/" target="_blank"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-linkedin fa-stack-1x fa-inverse"></i></span></a> 
<!--Jumbotron Twitter ================================================== -->
         <a href="https://twitter.com/seanpisano" target="_blank"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-twitter fa-stack-1x fa-inverse"></i></span></a> 
<!--Jumbotron Google Plus ================================================== -->
         <a href="https://plus.google.com/+SeanPisanoWebMaster" target="_blank"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-google-plus fa-stack-1x fa-inverse"></i></span></a> 
<!--Jumbotron Facebook ================================================== -->
         <a href="https://www.facebook.com/sean.pisano.10" target="_blank"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-facebook fa-stack-1x fa-inverse"></i></span></a> 
<!--Jumbotron Instagram ================================================== -->
         <a href="https://www.instagram.com/theseanpisano/" target="_blank"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-instagram fa-stack-1x fa-inverse"></i></span></a> 
<!--Jumbotron Stack Overflow ================================================== --> 
         <a href="https://stackoverflow.com/users/2066028/sean-pisano?tab=profile" target="_blank"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-stack-overflow fa-stack-1x fa-inverse"></i></span></a>
      </div>
    </div>
<!--Scroll Down Arrow================================================== -->
    <div class="arrow bounce">
      <a class="fa fa-arrow-down fa-2x" href="#work"></a>
    </div>
  </div>
<!--End Jumbotron Header ================================================== -->
<!--Start Top Nav ================================================== -->
  <nav class="navbar navbar-dark navbar-toggleable-md navbar-expand-md" id="page-nav-wrapper">
<!--Top Nav Brand================================================== -->
    <a class="navbar-brand nav-link" href="#"><img alt="" src="/imgs/Sean-Pisano-logo-icon.png" width="60">Sean Pisano</a> 
<!--Top Nav Hamburger menu toggler ================================================== -->
     <button aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler" data-target="#navbarToggler" data-toggle="collapse" type="button"><span class="navbar-toggler-icon"></span></button> 
<!--Top Nav toggler div ================================================== -->
    <div class="collapse navbar-collapse" id="navbarToggler">
<!--Top Nav Full SIte Nav ================================================== -->
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="styleguide.html">Style Guide</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="http://thoughts.seanpisano.com/" target="_blank">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="http://timeline.seanpisano.com/" target="_blank">Time Line</a>
        </li>
      </ul>
<!--Top Nav Social Networks================================================== -->
      <ul class="nav navbar-nav navbar-right social-links m-2 p-3">
<!--Top Nav GitHub ================================================== -->
        <li>
          <a href="https://github.com/seanpisano" target="_blank"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-github-alt fa-stack-1x fa-inverse"></i></span></a>
        </li>
<!--Top Nav Linkedin ================================================== -->
        <li>
          <a href="https://www.linkedin.com/in/seanpisano/" target="_blank"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-linkedin fa-stack-1x fa-inverse"></i></span></a>
        </li>
<!--Top Nav Twitter ================================================== -->
        <li>
          <a href="https://twitter.com/seanpisano" target="_blank"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-twitter fa-stack-1x fa-inverse"></i></span></a>
        </li>
<!--Top Nav Google Plus ================================================== -->
        <li>
          <a href="https://plus.google.com/+SeanPisanoWebMaster" target="_blank"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-google-plus fa-stack-1x fa-inverse"></i></span></a>
        </li>
<!--Top Nav Facebook ================================================== -->
        <li>
          <a href="https://www.facebook.com/sean.pisano.10" target="_blank"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-facebook fa-stack-1x fa-inverse"></i></span></a>
        </li>
<!--Top Nav Instagram ================================================== -->
        <li>
          <a href="https://www.instagram.com/theseanpisano/" target="_blank"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-instagram fa-stack-1x fa-inverse"></i></span></a>
        </li>
<!--Top Nav Stack Overflow ================================================== -->
        <li>
          <a href="https://stackoverflow.com/users/2066028/sean-pisano?tab=profile" target="_blank"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-stack-overflow fa-stack-1x fa-inverse"></i></span></a>
        </li>
      </ul>
<!--Start Top Nav ================================================== -->
      <a class="btn btn btn-outline-secondary-nav m-2" data-toggle="modal" href="#myModal"><i aria-hidden="true" class="fa fa-envelope-o"></i> Hire Me</a> <a class="btn btn btn-outline-secondary-nav m-2" href="/resume/Sean-Pisano-Web-Developer-Resume.pdf"  target="_blank"><i aria-hidden="true" class="fa fa-download"></i> Download My Resume</a>
    </div>
  </nav>
<!--End Top Nav ================================================== -->
<!--Start Tab Section ================================================== -->

  <div class="container" id="content">
<!--Start Row Tabs ================================================== -->
    <div class="row h-100 mt-5">
<!--Start Main ================================================== -->

          <form class="form-horizontal col-sm-12" id="contact-form" method="post" role="form" action="" name="">

<h3 id="myModalLabel">I would love to hear from you.</h3>
<?php echo $result;?>
<!-- First Name Form Group -->
              <div class="form-group">
                <label for="form_name">First Name *</label> 
                <input type="text" name="name" class="form-control" id="form_name"  placeholder="Please enter your first name *" value="<?php echo $_POST['name'];?>">
              </div>
<!-- End First Name Form Group -->


<!-- Last Name Form Group -->
              <div class="form-group">
                <label for="form_lastname">Last Name *</label> 
                <input type="text" name="surname" class="form-control" id="form_lastname"  placeholder="Please enter your last name *" value="<?php echo $_POST['surname'];?>">

              </div>
<!--End Last Name Form Group -->

<!-- Email Form Group -->
              <div class="form-group">
                <label for="form_email">Email *</label> 
                <input type="email" name="email" class="form-control" id="form_email" placeholder="Please enter your email *" value="<?php echo $_POST['email'];?>">

              </div>
<!--End Email Form Group -->

<!-- Phone Form Group -->
              <div class="form-group">
                <label for="form_phone">Phone</label> 
                <input type="tel" name="phone" class="form-control" id="form_phone" placeholder="Please enter your phone">

              </div>
<!--End Phone Form Group -->

<!-- Message Form Group -->
              <div class="form-group">
                <label for="form_message">Message *</label> 
                <textarea name="message" class="form-control" id="form_message"  placeholder="Message for me *" rows="4"><?php echo $_POST['message'];?></textarea>

              </div>
<!--End Message Form Group -->

              <p class="text-muted"><strong>*</strong> These fields are required.</p>

              <!--<div class="form-group">-->
<!-- Google ReCaptcha - generated at https://www.google.com/recaptcha/admin -->
                <!--<div class="g-recaptcha" data-sitekey="6LcO9z0UAAAAAGhSp4yBOzJurg10rqMFY7MBc6ZM"></div>-->
              <!--<</div>-->
<!-- Submit Button Form Group -->

              <div class="form-group">
                <button type="submit" name="submit" class="btn btn-primary pull-right" value="send message">Send It!</button>
              </div>


          </form>
<!-- End Main ================================================== -->
    </div>
<!-- New Shit Here ================================================== --> 
  </div>
<!-- New Shit Here ================================================== --> 
<!-- Start Footer ================================================== -->
  <footer class="bg-dark text-white py-4">
<!-- Footer Container ================================================== -->
    <div class="container">
<!-- Footer Container ================================================== -->
      <div class="row">
<!-- Footer Nav Container ================================================== -->
        <div class="col-md-3 col-sm-6 pl-0">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="styleguide.html">Style Guide</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="http://thoughts.seanpisano.com/" target="blank">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="http://timeline.seanpisano.com/" target="blank">Time Line</a>
            </li>
          </ul>
        </div>
<!-- Footer Container ================================================== -->
        <div class="col-md-4 ml-auto text-right">
<!-- Footer Container ================================================== -->
          <small class="text-uppercase">Connect on social media</small>
          <ul class="nav justify-content-end">
<!-- Footer Container ================================================== -->
            <li class="nav-item">
              <a href="https://github.com/seanpisano"  target="blank"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-github-alt fa-stack-1x fa-inverse"></i></span></a>
            </li>
<!-- Footer LinkedIn. ================================================== -->
            <li class="nav-item">
              <a href="https://www.linkedin.com/in/seanpisano/" target="blank"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-linkedin fa-stack-1x fa-inverse"></i></span></a>
            </li>
<!-- Footer Twitter ================================================== -->
            <li class="nav-item">
              <a href="https://twitter.com/seanpisano" target="blank"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-twitter fa-stack-1x fa-inverse"></i></span></a>
            </li>
<!-- Footer Google Plus ================================================== -->
            <li class="nav-item">
              <a href="https://plus.google.com/+SeanPisanoWebMaster" target="blank"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-google-plus fa-stack-1x fa-inverse"></i></span></a>
            </li>
<!-- Footer Facebook ================================================== -->
            <li class="nav-item">
              <a href="https://www.facebook.com/sean.pisano.10" target="blank"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-facebook fa-stack-1x fa-inverse"></i></span></a>
            </li>
<!-- Footer Instagram ================================================== -->
            <li class="nav-item">
              <a href="https://www.instagram.com/theseanpisano/" target="blank"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-instagram fa-stack-1x fa-inverse"></i></span></a>
            </li>
<!-- Footer Stack Overflow================================================== -->
            <li class="nav-item">
              <a href="https://stackoverflow.com/users/2066028/sean-pisano?tab=profile" target="blank"><span class="fa-stack fa-lg"><i class="fa fa-circle fa-stack-2x"></i><i class="fa fa-stack-overflow fa-stack-1x fa-inverse"></i></span></a>
            </li>
          </ul>
        </div>
<!-- Footer Copyright ================================================== -->
        <div class="col-12 text-right small">
          @2018 Sean Pisano
        </div>
      </div>
    </div>
  </footer>
<!-- End Footer ================================================== -->
<!-- Start Contact Me Pop-up ================================================== -->
  <div aria-hidden="true" aria-labelledby="myModalLabel" class="modal fade" id="myModal" role="dialog" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
<!-- Modal Header -->
        <div class="modal-header">
          <h3 id="myModalLabel">I would love to hear from you.</h3><button aria-hidden="true" class="close" data-dismiss="modal" type="button">×</button>
        </div>
<!-- Modal Body -->
        <div class="modal-body">







        </div>
<!-- Pop-up / Bootstrap Modal cancel / close button -->
        <div class="modal-footer">
          <button aria-hidden="true" class="btn" data-dismiss="modal">Cancel</button>
        </div>
      </div>
    </div>
  </div>
<!-- End Contact Me Pop-up ================================================== -->
<!-- Bootstrap core JavaScript ================================================== -->
  <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script> 
  <script>window.jQuery || document.write('<script src="/js/jquery.min.js"><\/script>')</script> 
  <!-- <script src="../../../../assets/js/vendor/popper.min.js"> </script> -->
  <script src="/js/jquery.min.js"></script> 
  <script src="/js/tether.min.js"></script> 
  <script src="/js/popper.min.js"></script> 
  <script src="/js/bootstrap.min.js"></script> 
<!--Other JavaScript ================================================== --> 
  <script src="/js/detect.js"></script> 
  <script src="/js/fastclick.js"></script> 
  <script src="/js/jquery.slimscroll.js"></script> 
  <script src="/js/jquery.blockUI.js"></script> 
  <script src="/js/waves.js"></script> 
  <script src="/js/wow.min.js"></script> 
  <script src="/js/jquery.nicescroll.js"></script> 
  <script src="/js/jquery.scrollTo.min.js"></script> 
  <script src="/js/jquery.core.js"></script> 
  <script src="/js/jquery.app.js"></script> 
<!-- Contact Me JavaScript with ReCaptcha-->
  <script src='https://www.google.com/recaptcha/api.js'></script> 
  <!--<script src="/js/validator.js"></script> --> 
  <!--<script src="/js/contact.js"></script> --> 
  <!--<script src="/php/contact.php"></script> -->   
  <!--<script src="/js/smooth.scrolling.js"></script> -->
<!-- Nav JavaScript ================================================== -->
  <script>
/* ======= Fixed page nav when scrolled ======= */    
  $(window).on('scroll resize load', function() {
  $('#page-nav-wrapper').removeClass('fixed-top');
   
   var scrollTop = $(this).scrollTop();
   var topDistance = $('#page-nav-wrapper').offset().top;
   
   if ( (topDistance) > scrollTop ) {
      $('#page-nav-wrapper').removeClass('fixed-top');
      $('body').removeClass('sticky-page-nav');
   }
   else {
      $('#page-nav-wrapper').addClass('fixed-top');
      $('body').addClass('sticky-page-nav');
   }
  });
  </script>
<!-- End Body ================================================== -->
</body>
</html>