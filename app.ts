// Wraping everything in an IIFE to avoid global scope issues
(() => {
    const resumeForm = document.getElementById('resume-form') as HTMLFormElement;
    const resumeOutput = document.getElementById('resume-output') as HTMLDivElement;
    const addEducationButton = document.getElementById('add-education') as HTMLButtonElement;
    const educationSection = document.getElementById('education-section') as HTMLElement;

    // Event listener for adding more education fields
    addEducationButton.addEventListener('click', () => {
        const educationEntry = document.createElement('div');
        educationEntry.classList.add('education-entry');
        educationEntry.innerHTML = `
            <label>Degree:</label>
            <input type="text" class="degree" required><br><br>

            <label>Institute:</label>
            <input type="text" class="institute" required><br><br>

            <label>Year of Graduation:</label>
            <input type="number" class="year" required><br><br>
        `;
        educationSection.insertBefore(educationEntry, addEducationButton);
    });

    // Event listener for form submission
    resumeForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Get user input from the form fields
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const location = (document.getElementById('location') as HTMLInputElement).value;
        const dob = (document.getElementById('dob') as HTMLInputElement).value;
        const objective = (document.getElementById('objective') as HTMLTextAreaElement).value;

        const degrees = Array.from(document.querySelectorAll('.degree')) as HTMLInputElement[];
        const institutes = Array.from(document.querySelectorAll('.institute')) as HTMLInputElement[];
        const years = Array.from(document.querySelectorAll('.year')) as HTMLInputElement[];

        const educationEntries = degrees.map((degree, index) => ({
            degree: degree.value,
            institute: institutes[index].value,
            year: years[index].value,
        }));

        const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');
        const hobbies = (document.getElementById('hobbies') as HTMLInputElement).value.split(',');

        resumeOutput.innerHTML = `
            <h3 style="font-size: 36px; font-style: italic;">${name}</h3>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Location:</strong> ${location}</p>
            <p><strong>Date of Birth:</strong> ${dob}</p>

            <h4 style="font-weight: bold; color: #00ffcc;">Objective</h4>
            <p>${objective}</p>

            <h4 style="font-weight: bold; color: #00ffcc;">Education</h4>
            ${educationEntries.map(edu => `
                <p><strong>Degree:</strong> ${edu.degree}</p>
                <p><strong>Institute:</strong> ${edu.institute}</p>
                <p><strong>Year of Graduation:</strong> ${edu.year}</p>
            `).join('')}

            <h4 style="font-weight: bold; color: #00ffcc;">Skills</h4>
            <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>

            <h4 style="font-weight: bold; color: #00ffcc;">Hobbies</h4>
            <ul>${hobbies.map(hobby => `<li>${hobby.trim()}</li>`).join('')}</ul>

            <h4 style="font-weight: bold; color: #00ffcc;">References</h4>
            <p>Will be available on request</p>
        `;
    });
})();
