function validateForm() {
    // Getting form values
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var dob = document.getElementById('dob').value;
    var country = document.getElementById('country').value;
    var gender = document.querySelectorAll('input[name="gender"]:checked');
    var profession = document.getElementById('profession').value;
    var email = document.getElementById('email').value;
    var mobileNumber = document.getElementById('mobileNumber').value;

    // Validation
    if (firstName === '' || lastName === '' || dob === '' || country === '' || gender.length === 0 || profession === '' || email === '' || mobileNumber === '') {
      alert('Please fill in all fields.');
      return false;
    }

    // Assuming simple email validation for demonstration
    var emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    // Assuming a 10-digit mobile number for validation
    var mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobileNumber)) {
      alert('Please enter a 10-digit mobile number.');
      return false;
    }

    // Getting gender value
    var genderValue = '';
    for (var i = 0; i < gender.length; i++) {
      genderValue += gender[i].value + ' ';
    }

    // Displaying values in a popup
    var popupMessage = `First Name: ${firstName}\nLast Name: ${lastName}\nDate of Birth: ${dob}\nCountry: ${country}\nGender: ${genderValue}\nProfession: ${profession}\nEmail: ${email}\nMobile Number: ${mobileNumber}`;

    alert(popupMessage);

    // Resetting form
    document.getElementById('surveyForm').reset();
  }