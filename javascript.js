document.addEventListener('DOMContentLoaded', function() {
    const heroButton = document.querySelector('.cta-button');
    heroButton.addEventListener('click', function() {
        alert('Welcome to your career path!');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const careers = document.querySelectorAll('.career-list article');
    careers.forEach(function(career) {
        career.addEventListener('click', function() {
            alert('More information about ' + this.querySelector('h3').textContent);
        });
    });
});


document.getElementById('job-search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchTerm = this.querySelector('input[name="search"]').value;
    console.log('Searching for:', searchTerm);
    const resultsDiv = document.getElementById('job-results');
    resultsDiv.innerHTML = '<p>Results for: ' + searchTerm + '</p>'; // Update with actual search results
});


document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Form submitted!');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration-form');
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const password = this.querySelector('input[name="password"]').value;
        if (password.length < 8) {
            alert('Password must be at least 8 characters long.');
            return;
        }
        alert('Registration form submitted successfully!');
        // Here you would typically gather form data and send it to a server.
        // Further file validation or handling can be added as needed.
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.getElementById('newsletter-form');
    newsletterForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        alert('Thank you for subscribing with ' + email);
        // Add additional code to handle the email subscription backend
    });
});



function startAssessment() {
    alert('Starting the assessment...');
    // Implement the actual logic to start the assessment or redirect to the assessment form/interface
}


document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        "Do you enjoy solving complex problems?",
        "Are you interested in understanding how machines work?",
        "Do you have a strong background in mathematics?",
        "Are you interested in developing new technologies?",
        "Do you like working on practical, hands-on projects?",
        "Do you prefer working in a team environment?",
        "Are you detail-oriented and precise in your work?",
        "Do you have an interest in building and designing structures?",
        "Are you interested in electronics and circuits?",
        "Do you want to make an impact on infrastructure and the built environment?"
    ];

    let currentQuestionIndex = -1;
    let responses = [];
    
    const questionContainer = document.getElementById('question-container');

    function displayQuestion() {
        questionContainer.innerHTML = `<p>${currentQuestionIndex + 1}. ${questions[currentQuestionIndex]}</p>
                                       <button onclick="answer('yes')">Yes</button>
                                       <button onclick="answer('no')">No</button>`;
    }

    function startAssessment() {
        currentQuestionIndex = 0;
        displayQuestion();
    }

    function answer(choice) {
        responses.push({ question: questions[currentQuestionIndex], response: choice });
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            displayQuestion();
        } else {
            finishAssessment();
        }
    }

    function finishAssessment() {
        // Implement logic to handle responses, e.g., analyze results or store in a database
        console.log(responses); // Example: Log responses to console
        questionContainer.innerHTML = '<p>Thank you for completing the assessment! Your results will be analyzed and provided soon.</p>';
        // Optionally redirect to another page, e.g., a results page
        // window.location.href = 'results.html'; // Uncomment this line to redirect
    }

    window.startAssessment = startAssessment;
    window.answer = answer;
});





function submitQuestion() {
    const textarea = document.querySelector('.qa-section textarea');
    if (textarea.value.trim() === '') {
        alert('Please enter a question before submitting.');
        return;
    }
    console.log('Question submitted:', textarea.value); // Placeholder for backend integration
    alert('Your question has been submitted!');
    textarea.value = ''; // Reset the textarea after submission
}





document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('job-alerts-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const keywords = form.keywords.value;
        const frequency = form.frequency.value;
        const notification = form.notification.value;

        console.log(`Alert Set: ${keywords}, Frequency: ${frequency}, Notification via: ${notification}`);
        alert('Your job alert settings have been saved!');

        // Here, you would typically send this data to the server for processing and storage.
    });
});





document.addEventListener('DOMContentLoaded', () => {
    const faqs = document.querySelectorAll('.faq-section li');
    faqs.forEach(faq => {
        faq.addEventListener('click', () => {
            alert('Answering your question: ' + faq.textContent);
            // Implement more complex behavior such as expanding the FAQ to show the answer
        });
    });
});




function startSession(counselorName) {
    console.log(`Starting new session with ${counselorName}`);
    alert(`Starting new session with ${counselorName}`);
    // Additional logic to handle session start
}

function continueSession(counselorName) {
    console.log(`Continuing session with ${counselorName}`);
    alert(`Continuing session with ${counselorName}`);
    // Additional logic to handle session continuation
}
