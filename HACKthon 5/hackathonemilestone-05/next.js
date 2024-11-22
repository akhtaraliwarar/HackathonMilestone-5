var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    // Get references to form elements using their IDs
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var addressElement = document.getElementById('address');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (profilePictureInput && nameElement && emailElement && phoneElement && addressElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // Handle profile picture
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        // Create resume output as HTML content
        var resumeOutput = "\n        <html>\n            <head>\n                <title>".concat(name_1, "'s Resume</title>\n                <style>\n                    body { font-family: Arial, sans-serif; }\n                    h2 { color: #2C3E50; }\n                    p { font-size: 16px; line-height: 1.5; }\n                    .profilePicture { width: 150px; height: 150px; border-radius: 50%; }\n                </style>\n            </head>\n            <body>\n                <h2>Resume</h2>\n                ").concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : '', "\n                <p><strong>Name:</strong> ").concat(name_1, "</p>\n                <p><strong>Email:</strong> ").concat(email, "</p>\n                <p><strong>Phone Number:</strong> ").concat(phone, "</p>\n                <p><strong>Address:</strong> ").concat(address, "</p>\n                <h3>Education</h3>\n                <p>").concat(education, "</p>\n                <h3>Work Experience</h3>\n                <p>").concat(experience, "</p>\n                <h3>Skills</h3>\n                <p>").concat(skills, "</p>\n            </body>\n        </html>\n        ");
        // Create a Blob from the resume output HTML string
        var blob = new Blob([resumeOutput], { type: 'text/html' });
        // Create a temporary download link
        var link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = "".concat(name_1, "-Resume.html");
        link.click();
        // Optionally, update the resume output section on the page
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('Resume output element is missing!');
        }
    }
    else {
        console.error('One or more form elements are missing');
    }
});
