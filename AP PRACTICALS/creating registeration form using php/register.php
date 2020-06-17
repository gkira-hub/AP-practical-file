<?php
if(count($_POST)>0) {
/* Validation to ensure all fields are non-empty */
foreach($_POST as $key=>$value) {
if(empty($_POST[$key])) {
$message = ucwords($key) . " field is required";
break;
}
}

/* Validation about the right format of user email */
if(!isset($message)) {
if (!filter_var($_POST["userEmail"], FILTER_VALIDATE_EMAIL)) {
$message = "Invalid UserEmail";
}
}

if(!isset($message)) {
$message = "You have registered successfully!";	
unset($_POST);
}

}
?>


<html>
<head>
	<title>REGISTRATION FORM</title>
	<!-- STYLES -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="style.css">

</head>

<body>
	<div class="flex-container">

		<section class="column-1">
			<h1>Form Validation Using PHP</h1>

			<p></p>
		</section>
		

		<section class="column-2">

			<p class="card"><span><strong>Registration Form</strong></span></p>

			<div class="card">
				<form name="frmRegistration" method="post" action="">
                <div class="message"><?php if(isset($message)) echo $message; ?> </div>
					<div class="form-group">
						<input class="form-control" type="text" placeholder="Username"  name="userName" value="<?php if(isset($_POST['userName'])) echo $_POST['userName']; ?>">
					</div>
	
					<div class="form-group">
						<input class="form-control" type="text" name="displayName" value="<?php if(isset($_POST['displayName'])) echo $_POST['displayName']; ?>" placeholder="Display Name">
					</div>

                    <div class="form-group">
                        <textarea class="form-control" placeholder="Address"  type="userAddress" rows="3" cols="17" name="userAddress"><?php if(isset($_POST['userAddress'])) echo $_POST['userAddress']; ?></textarea>
                    </div>
	
					<div class="form-group">
						<input class="form-control" type="email" name="userEmail" value="<?php if(isset($_POST['userEmail'])) echo $_POST['userEmail']; ?>" placeholder="Email Address">
					</div>
	
					<div class="form-group">
						<input class="form-control" type="password" name="password" value="<?php if(isset($_POST['password'])) echo $_POST['password']; ?>" placeholder="Password">
					</div>
                    <div class="form-group">
                    <lable>usertype</lable>
                    <select name="usertype" >
                    <option value="">--Select--</option>
                        <option value="Member" <?php if(isset($_POST['userType']) && $_POST['userType']=="Member") { ?>selected<?php  } ?>>Member</option>
                        <option value="Premium User" <?php if(isset($_POST['userType']) && $_POST['userType']=="Premium User") { ?>selected<?php  } ?>>Premium User</option>
                    </select>
                    </div>

					<div class="form-group">
						<button class="form-control" type="submit" id="submit-btn" name="submit" value="Submit">
							<span>SUBMIT</span>
						</button>
					</div>
	
					<small>By clicking the button, you are agreeing to our <a href="#">Terms and Services</a></small>
				</form>
			</div>
			

		</section>
		
  
    </div>
</body>

</html>
