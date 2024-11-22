document.getElementById('resumeForm')?.addEventListener('submit', function(event: Event) {
    event.preventDefault();

    // Get references to form elements using their IDs
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const addressElement = document.getElementById('address') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;

    if (profilePictureInput && nameElement && emailElement && phoneElement && addressElement && educationElement && experienceElement && skillsElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const address = addressElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

        // Handle profile picture
        const profilePictureFile = profilePictureInput.files?.[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

        // Create resume output as HTML content
        const resumeOutput = `
        <html>
            <head>
                <title>${name}'s Resume</title>
                <style>
                    body { font-family: Arial, sans-serif; }
                    h2 { color: #2C3E50; }
                    p { font-size: 16px; line-height: 1.5; }
                    .profilePicture { width: 150px; height: 150px; border-radius: 50%; }
                </style>
            </head>
            <body>
                <h2>Resume</h2>
                ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone Number:</strong> ${phone}</p>
                <p><strong>Address:</strong> ${address}</p>
                <h3>Education</h3>
                <p>${education}</p>
                <h3>Work Experience</h3>
                <p>${experience}</p>
                <h3>Skills</h3>
                <p>${skills}</p>
            </body>
        </html>
        `;

        // Create a Blob from the resume output HTML string
        const blob = new Blob([resumeOutput], { type: 'text/html' });

        // Create a temporary download link
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `${name}-Resume.html`;
        link.click();

        // Optionally, update the resume output section on the page
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.error('Resume output element is missing!');
        }
    } else {
        console.error('One or more form elements are missing');
    }
});
