// Wraping everything in an IIFE to avoid global scope issues
(function () {
    var resumeForm = document.getElementById('resume-form');
    var resumeOutput = document.getElementById('resume-output');
    var addEducationButton = document.getElementById('add-education');
    var educationSection = document.getElementById('education-section');
    // Event listener for adding more education fields
    addEducationButton.addEventListener('click', function () {
        var educationEntry = document.createElement('div');
        educationEntry.classList.add('education-entry');
        educationEntry.innerHTML = "\n            <label>Degree:</label>\n            <input type=\"text\" class=\"degree\" required><br><br>\n\n            <label>Institute:</label>\n            <input type=\"text\" class=\"institute\" required><br><br>\n\n            <label>Year of Graduation:</label>\n            <input type=\"number\" class=\"year\" required><br><br>\n        ";
        educationSection.insertBefore(educationEntry, addEducationButton);
    });
    // Event listener for form submission
    resumeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Get user input from the form fields
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var location = document.getElementById('location').value;
        var dob = document.getElementById('dob').value;
        var objective = document.getElementById('objective').value;
        var degrees = Array.from(document.querySelectorAll('.degree'));
        var institutes = Array.from(document.querySelectorAll('.institute'));
        var years = Array.from(document.querySelectorAll('.year'));
        var educationEntries = degrees.map(function (degree, index) { return ({
            degree: degree.value,
            institute: institutes[index].value,
            year: years[index].value,
        }); });
        var skills = document.getElementById('skills').value.split(',');
        var hobbies = document.getElementById('hobbies').value.split(',');
        resumeOutput.innerHTML = "\n            <h3 style=\"font-size: 36px; font-style: italic;\">".concat(name, "</h3>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Location:</strong> ").concat(location, "</p>\n            <p><strong>Date of Birth:</strong> ").concat(dob, "</p>\n\n            <h4 style=\"font-weight: bold; color: #00ffcc;\">Objective</h4>\n            <p>").concat(objective, "</p>\n\n            <h4 style=\"font-weight: bold; color: #00ffcc;\">Education</h4>\n            ").concat(educationEntries.map(function (edu) { return "\n                <p><strong>Degree:</strong> ".concat(edu.degree, "</p>\n                <p><strong>Institute:</strong> ").concat(edu.institute, "</p>\n                <p><strong>Year of Graduation:</strong> ").concat(edu.year, "</p>\n            "); }).join(''), "\n\n            <h4 style=\"font-weight: bold; color: #00ffcc;\">Skills</h4>\n            <ul>").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "</ul>\n\n            <h4 style=\"font-weight: bold; color: #00ffcc;\">Hobbies</h4>\n            <ul>").concat(hobbies.map(function (hobby) { return "<li>".concat(hobby.trim(), "</li>"); }).join(''), "</ul>\n\n            <h4 style=\"font-weight: bold; color: #00ffcc;\">References</h4>\n            <p>Will be available on request</p>\n        ");
    });
})();
