// Submit button for adminIndex.html
function submitIndex() {
    // Get references to the textarea inputs
    const profStatement = document.getElementById('profStatement');
    const bio = document.getElementById('bio');
  
    // Verify if inputs are null
    if (profStatement.value == "" && bio.value == "") { 
      window.alert("You must enter some text to submit.");
      return;
    }
    // Get the contents of the textarea inputs
    const profStatementContent = profStatement.value;
    const bioContent = bio.value;
  
    // Create a new Blob object containing the contents of the textarea inputs
    const blob = new Blob(['Professional Statement: ', profStatementContent, '\n\n', 'Biography: ', bioContent], { type: 'text/plain' });
  
    // Create a new anchor element and set its download attribute to the .txt filename
    const anchor = document.createElement('a');
    anchor.download = 'adminIndex.txt';
  
    // Set the href attribute of the anchor element to a URL representing the Blob object
    anchor.href = URL.createObjectURL(blob);
  
    // Simulate a click on the anchor element to trigger the download of the file
    anchor.click();
  }


  // Submit button for adminResume.html
function submitResume() {
    // Get references to the textarea inputs
    const educQualifications = document.getElementById('educQualifications');
    const skillSet = document.getElementById('skillSet');
    const recognitions = document.getElementById('recognitions');
    const workExp = document.getElementById('workExp');
    const referees = document.getElementById('referees');
  
    // Verify if inputs are null
    if (educQualifications.value == "" && skillSet.value == "" && recognitions.value == "" && workExp.value == "" && referees.value == "") {
      window.alert("You must enter some text to submit.");
      return;
    }
    // Get the contents of the textarea inputs
    const educQualificationsContent = educQualifications.value;
    const skillSetContent = skillSet.value;
    const recognitionsContent = recognitions.value;
    const workExpContent = workExp.value;
    const refereesContent = referees.value;
  
    // Create a new Blob object containing the contents of the textarea inputs
    const blob = new Blob(['Educational Qualifications: ', educQualificationsContent, '\n\n', 'Skill Set: ', skillSetContent, '\n\n', 'Awards/Recognition: ', 
    recognitionsContent, '\n\n', 'Work Experience: ', workExpContent, '\n\n', 'Referees: ', refereesContent], { type: 'text/plain' });
  
    // Create a new anchor element and set its download attribute to the .txt filename
    const anchor = document.createElement('a');
    anchor.download = 'adminResume.txt';
  
    // Set the href attribute of the anchor element to a URL representing the Blob object
    anchor.href = URL.createObjectURL(blob);
  
    // Simulate a click on the anchor element to trigger the download of the file
    anchor.click();
  }


  // Submit button for adminProjects.html
function submitProjects() {
  // Get references to the textarea input
  const projects = document.getElementById('projects');

  // Verify if input is null
  if (projects.value == "") {
    window.alert("You must enter some text to submit.");
    return;
  }
  // Get the contents of the textarea input
  const projectsContent = projects.value;

  // Create a new Blob object containing the contents of the textarea inputs
  const blob = new Blob(['My Projects: ', projectsContent], { type: 'text/plain' });

  // Create a new anchor element and set its download attribute to the .txt filename
  const anchor = document.createElement('a');
  anchor.download = 'adminProjects.txt';

  // Set the href attribute of the anchor element to a URL representing the Blob object
  anchor.href = URL.createObjectURL(blob);

  // Simulate a click on the anchor element to trigger the download of the file
  anchor.click();
}


// ReadMessage button for adminContact.html
function readMessages() {
  // Get the file input element from the HTML page
  var fileInput = document.createElement("input");
  fileInput.type = "file";

  // When the user selects a file, read its contents and display them on the page
  fileInput.onchange = function() {
    var reader = new FileReader();
    reader.onload = function() {
      var fileContents = reader.result;
      fileContents = fileContents.replace(/\n/g, "<br>");
      document.getElementById("messageDisplay").innerHTML = fileContents;
    };
    reader.readAsText(fileInput.files[0]);
  };

  // Trigger a click event on the file input element
  fileInput.click();
}


// Submit button for adminSocial.html
function submitSocial() {
  // Get references to the inputs
  const socialLink1 = document.getElementById('socialLink1');
  const socialLink2 = document.getElementById('socialLink2');
  const socialLink3 = document.getElementById('socialLink3');

  // Verify if inputs are null
  if (socialLink1.value == "" && socialLink2.value == "" && socialLink3.value == "") {
    window.alert("You must enter some text to submit.");
    return;
  }
  // Get the contents of the inputs
  const socialLink1Content = socialLink1.value;
  const socialLink2Content = socialLink2.value;
  const socialLink3Content = socialLink3.value;

  // Create a new Blob object containing the contents of the inputs
  const blob = new Blob(['Social Link 1: ', socialLink1Content, '\n\n', 'Social Link 2: ', socialLink2Content,
   '\n\n', 'Social Link 3: ', socialLink3Content], { type: 'text/plain' });

  // Create a new anchor element and set its download attribute to the .txt filename
  const anchor = document.createElement('a');
  anchor.download = 'adminIndex.txt';

  // Set the href attribute of the anchor element to a URL representing the Blob object
  anchor.href = URL.createObjectURL(blob);

  // Simulate a click on the anchor element to trigger the download of the file
  anchor.click();
}


// Logout button for logout.html
function processLogout() {
  // clear all sessions stored in sessionStorage
  sessionStorage.clear();
  
  window.alert("Logged out successfully! See you soon.")
}