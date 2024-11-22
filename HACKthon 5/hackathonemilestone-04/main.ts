// nextapp.ts

document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get references to form elements using their IDs //
    const profilePictureInput = document.getElementById('profilePicture');
    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');
    const phoneElement = document.getElementById('phone');
    const addressElement = document.getElementById('address');
    const educationElement = document.getElementById('education');
    const experienceElement = document.getElementById('experience');
    const skillsElement = document.getElementById('skills');
    if (profilePictureInput && nameElement && emailElement && phoneElement && addressElement && educationElement && experienceElement && skillsElement) {
        const name = (nameElement as HTMLInputElement).value;
        const email = (emailElement as HTMLInputElement).value;
        const phone = (phoneElement as HTMLInputElement).value;
        const address = (addressElement as HTMLInputElement).value;
        const education = (educationElement as HTMLInputElement).value;
        const experience = (experienceElement as HTMLInputElement).value;
        const skills = (skillsElement as HTMLInputElement).value;

        // Handle profile picture  //
        const profilePictureFile = (profilePictureInput as HTMLInputElement).files?.[0];
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

        // Create resume output //
        const resumeOutput = `
        <h2>Resume</h2>
        ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ''}
        <p><strong id ="editable-name>  Name:</strong> ${name}</p>
        <p><strong id ="editable-email> Email:</strong> ${email}</p>
        <p><strong id ="editable-phone>Phone Number:</strong> ${phone}</p>
        <p><strong id ="editable-address>Address:</strong> ${address}</p>
        <h3>Education</h3>
        <p> <span id ="edit-education">${education} </span></p>
        <h3>Work Experience </h3>
        <p><span id ="edit-experience">${experience} </span></p>
        <h3>Skills</h3>
        <p><span id ="edit-skills">${skills}</span></p>
        `;
        const resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.error(' resume output element is missing !');
        }
    } else {
        console.error('One or more form elements are missing');
    }
});