// nextapp.ts

document.getElementById('generateButton')!.addEventListener('click', () => {
    const form = document.getElementById('resumeform') as HTMLFormElement;

    if (!form.checkValidity()) {
        alert("Please fill in all required fields.");
        return;
    }

    // Collecting the form data
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Generating the resume output
    const resumeOutput = `
       <h1> Resume </h1>
        <h2>Name ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    // Displaying the output
    document.getElementById('resumeOutput')!.innerHTML = resumeOutput;
});
