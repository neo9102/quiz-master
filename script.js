// Quiz data with additional categories
const quizData = {
    general: [
        {
            question: "What is the capital of France?",
            options: ["London", "Berlin", "Paris", "Madrid"],
            correct: 2
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            correct: 1
        },
        {
            question: "What is the largest mammal in the world?",
            options: ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
            correct: 1
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
            correct: 2
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Ag", "Au", "Fe", "Cu"],
            correct: 1
        },
        {
            question: "Which country is home to the kangaroo?",
            options: ["New Zealand", "South Africa", "Australia", "Brazil"],
            correct: 2
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic", "Indian", "Arctic", "Pacific"],
            correct: 3
        },
        {
            question: "Who wrote 'Romeo and Juliet'?",
            options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
            correct: 1
        },
        {
            question: "What is the tallest mountain in the world?",
            options: ["K2", "Mount Kilimanjaro", "Mount Everest", "Mount Fuji"],
            correct: 2
        },
        {
            question: "Which element has the chemical symbol 'O'?",
            options: ["Gold", "Osmium", "Oxygen", "Oganesson"],
            correct: 2
        }
    ],
    science: [
        {
            question: "What is the powerhouse of the cell?",
            options: ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
            correct: 1
        },
        {
            question: "What is the unit of electrical resistance?",
            options: ["Volt", "Ampere", "Ohm", "Watt"],
            correct: 2
        },
        {
            question: "Which gas is most abundant in Earth's atmosphere?",
            options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
            correct: 2
        },
        {
            question: "What is the chemical formula for water?",
            options: ["H2O", "CO2", "O2", "H2SO4"],
            correct: 0
        },
        {
            question: "Which planet is closest to the Sun?",
            options: ["Venus", "Earth", "Mercury", "Mars"],
            correct: 2
        },
        {
            question: "What is the speed of light?",
            options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
            correct: 0
        },
        {
            question: "Which scientist developed the theory of relativity?",
            options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
            correct: 1
        },
        {
            question: "What is the pH value of pure water?",
            options: ["5", "6", "7", "8"],
            correct: 2
        },
        {
            question: "Which element has the atomic number 1?",
            options: ["Helium", "Hydrogen", "Lithium", "Beryllium"],
            correct: 1
        },
        {
            question: "What is the study of fossils called?",
            options: ["Geology", "Paleontology", "Archaeology", "Anthropology"],
            correct: 1
        }
    ],
    history: [
        {
            question: "Who was the first President of the United States?",
            options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
            correct: 1
        },
        {
            question: "In which year did World War II end?",
            options: ["1943", "1944", "1945", "1946"],
            correct: 2
        },
        {
            question: "Which ancient civilization built the pyramids?",
            options: ["Greeks", "Romans", "Egyptians", "Mayans"],
            correct: 2
        },
        {
            question: "Who discovered America in 1492?",
            options: ["Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan", "James Cook"],
            correct: 1
        },
        {
            question: "Which empire was ruled by Julius Caesar?",
            options: ["Greek", "Roman", "Egyptian", "Persian"],
            correct: 1
        },
        {
            question: "When did the French Revolution begin?",
            options: ["1776", "1789", "1799", "1804"],
            correct: 1
        },
        {
            question: "Who was the first woman to win a Nobel Prize?",
            options: ["Marie Curie", "Rosalind Franklin", "Jane Goodall", "Dorothy Hodgkin"],
            correct: 0
        },
        {
            question: "Which country was the first to send a human to space?",
            options: ["United States", "China", "Soviet Union", "United Kingdom"],
            correct: 2
        },
        {
            question: "When was the United Nations founded?",
            options: ["1940", "1945", "1950", "1955"],
            correct: 1
        },
        {
            question: "Who was the first person to walk on the moon?",
            options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"],
            correct: 1
        }
    ],
    geography: [
        {
            question: "Which is the longest river in the world?",
            options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
            correct: 1
        },
        {
            question: "What is the largest desert in the world?",
            options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
            correct: 3
        },
        {
            question: "Which country has the most time zones?",
            options: ["Russia", "USA", "China", "Australia"],
            correct: 0
        },
        {
            question: "What is the capital of Japan?",
            options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
            correct: 2
        },
        {
            question: "Which continent is the largest?",
            options: ["Africa", "North America", "Asia", "South America"],
            correct: 2
        },
        {
            question: "What is the smallest country in the world?",
            options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
            correct: 1
        },
        {
            question: "Which mountain range separates Europe from Asia?",
            options: ["Alps", "Himalayas", "Ural Mountains", "Andes"],
            correct: 2
        },
        {
            question: "What is the capital of Canada?",
            options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
            correct: 2
        },
        {
            question: "Which ocean is the smallest?",
            options: ["Atlantic", "Indian", "Arctic", "Pacific"],
            correct: 2
        },
        {
            question: "What is the largest island in the world?",
            options: ["Madagascar", "Greenland", "Borneo", "New Guinea"],
            correct: 1
        }
    ],
    movies: [
        {
            question: "Who directed the movie 'Inception'?",
            options: ["Steven Spielberg", "Christopher Nolan", "James Cameron", "Quentin Tarantino"],
            correct: 1
        },
        {
            question: "Which movie won the Best Picture Oscar in 2020?",
            options: ["Parasite", "1917", "Joker", "Once Upon a Time in Hollywood"],
            correct: 0
        },
        {
            question: "Who played the lead role in 'The Dark Knight'?",
            options: ["Christian Bale", "Robert Downey Jr.", "Leonardo DiCaprio", "Brad Pitt"],
            correct: 0
        },
        {
            question: "Which movie features the song 'Let It Go'?",
            options: ["Moana", "Frozen", "Tangled", "Brave"],
            correct: 1
        },
        {
            question: "Who directed 'The Godfather'?",
            options: ["Martin Scorsese", "Francis Ford Coppola", "Steven Spielberg", "Alfred Hitchcock"],
            correct: 1
        },
        {
            question: "Which actor played Jack in 'Titanic'?",
            options: ["Brad Pitt", "Tom Cruise", "Leonardo DiCaprio", "Johnny Depp"],
            correct: 2
        },
        {
            question: "What is the highest-grossing movie of all time?",
            options: ["Avatar", "Avengers: Endgame", "Titanic", "Star Wars: The Force Awakens"],
            correct: 1
        },
        {
            question: "Who played the role of Iron Man in the Marvel Cinematic Universe?",
            options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Mark Ruffalo"],
            correct: 2
        },
        {
            question: "Which movie features the character 'Forrest Gump'?",
            options: ["The Shawshank Redemption", "Forrest Gump", "The Green Mile", "Saving Private Ryan"],
            correct: 1
        },
        {
            question: "Who directed 'Pulp Fiction'?",
            options: ["Martin Scorsese", "Quentin Tarantino", "David Fincher", "Steven Spielberg"],
            correct: 1
        }
    ],
    sports: [
        {
            question: "Which country won the FIFA World Cup in 2018?",
            options: ["Germany", "Brazil", "France", "Argentina"],
            correct: 2
        },
        {
            question: "How many players are there in a basketball team?",
            options: ["5", "6", "7", "8"],
            correct: 0
        },
        {
            question: "Which sport uses a shuttlecock?",
            options: ["Tennis", "Badminton", "Squash", "Table Tennis"],
            correct: 1
        },
        {
            question: "Who holds the record for most Olympic gold medals?",
            options: ["Usain Bolt", "Michael Phelps", "Carl Lewis", "Mark Spitz"],
            correct: 1
        },
        {
            question: "Which country hosted the 2016 Summer Olympics?",
            options: ["Japan", "Brazil", "China", "Russia"],
            correct: 1
        },
        {
            question: "What is the length of a marathon?",
            options: ["26.2 miles", "13.1 miles", "42.2 miles", "50 miles"],
            correct: 0
        },
        {
            question: "Which sport is associated with Wimbledon?",
            options: ["Golf", "Tennis", "Cricket", "Rugby"],
            correct: 1
        },
        {
            question: "Who is known as 'The Greatest' in boxing?",
            options: ["Mike Tyson", "Muhammad Ali", "Floyd Mayweather", "Manny Pacquiao"],
            correct: 1
        },
        {
            question: "Which country won the most medals in the 2020 Tokyo Olympics?",
            options: ["China", "United States", "Japan", "Great Britain"],
            correct: 1
        },
        {
            question: "What is the national sport of Canada?",
            options: ["Basketball", "Ice Hockey", "Baseball", "Soccer"],
            correct: 1
        }
    ],
    music: [
        {
            question: "Who is known as the 'King of Pop'?",
            options: ["Elvis Presley", "Michael Jackson", "Prince", "Madonna"],
            correct: 1
        },
        {
            question: "Which instrument has 88 keys?",
            options: ["Guitar", "Violin", "Piano", "Harp"],
            correct: 2
        },
        {
            question: "Who wrote the song 'Bohemian Rhapsody'?",
            options: ["The Beatles", "Queen", "Led Zeppelin", "Pink Floyd"],
            correct: 1
        },
        {
            question: "Which musical note is the longest?",
            options: ["Quarter Note", "Half Note", "Whole Note", "Eighth Note"],
            correct: 2
        },
        {
            question: "Who sang 'Like a Rolling Stone'?",
            options: ["The Rolling Stones", "Bob Dylan", "The Beatles", "Elvis Presley"],
            correct: 1
        },
        {
            question: "Which composer wrote 'Für Elise'?",
            options: ["Mozart", "Beethoven", "Bach", "Chopin"],
            correct: 1
        },
        {
            question: "What is the highest female singing voice?",
            options: ["Alto", "Mezzo-soprano", "Soprano", "Contralto"],
            correct: 2
        },
        {
            question: "Which band released the album 'The Dark Side of the Moon'?",
            options: ["The Beatles", "Led Zeppelin", "Pink Floyd", "The Rolling Stones"],
            correct: 2
        },
        {
            question: "Who is known as the 'Queen of Soul'?",
            options: ["Aretha Franklin", "Whitney Houston", "Diana Ross", "Tina Turner"],
            correct: 0
        },
        {
            question: "Which instrument is known as the 'king of instruments'?",
            options: ["Piano", "Violin", "Organ", "Guitar"],
            correct: 2
        }
    ],
    technology: [
        {
            question: "What does 'HTML' stand for?",
            options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "Home Tool Markup Language"],
            correct: 0
        },
        {
            question: "Which company developed the first smartphone?",
            options: ["Apple", "Samsung", "IBM", "Nokia"],
            correct: 2
        },
        {
            question: "What is the most popular programming language?",
            options: ["Python", "JavaScript", "Java", "C++"],
            correct: 1
        },
        {
            question: "Who is known as the father of the computer?",
            options: ["Bill Gates", "Steve Jobs", "Charles Babbage", "Alan Turing"],
            correct: 2
        },
        {
            question: "What does 'CPU' stand for?",
            options: ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Computer Program Unit"],
            correct: 0
        },
        {
            question: "Which company created the first graphical web browser?",
            options: ["Microsoft", "Netscape", "Apple", "Google"],
            correct: 1
        },
        {
            question: "What is the name of Google's mobile operating system?",
            options: ["iOS", "Windows Mobile", "Android", "BlackBerry OS"],
            correct: 2
        },
        {
            question: "Who invented the World Wide Web?",
            options: ["Bill Gates", "Steve Jobs", "Tim Berners-Lee", "Mark Zuckerberg"],
            correct: 2
        },
        {
            question: "What does 'URL' stand for?",
            options: ["Uniform Resource Locator", "Universal Resource Link", "Uniform Resource Link", "Universal Resource Locator"],
            correct: 0
        },
        {
            question: "Which company created the first personal computer?",
            options: ["Apple", "IBM", "Microsoft", "Commodore"],
            correct: 1
        }
    ]
};

// DOM Elements
const registrationForm = document.getElementById('registration-form');
const loginForm = document.getElementById('login-form');
const quizContainer = document.getElementById('quiz-container');
const registerForm = document.getElementById('register-form');
const loginFormElement = document.getElementById('login-form');
const loginLink = document.getElementById('login-link');
const registerLink = document.getElementById('register-link');
const logoutBtn = document.getElementById('logout-btn');
const profileBtn = document.getElementById('profile-btn');
const welcomeMessage = document.getElementById('welcome-message');
const quizSelection = document.getElementById('quiz-selection');
const quizQuestions = document.getElementById('quiz-questions');
const quizResults = document.getElementById('quiz-results');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const retryBtn = document.getElementById('retry-btn');
const shareBtn = document.getElementById('share-btn');
const questionNumber = document.getElementById('question-number');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const finalScore = document.getElementById('final-score');
const performanceMessage = document.getElementById('performance-message');
const leaderboard = document.getElementById('leaderboard');
const leaderboardBody = document.getElementById('leaderboard-body');
const categoryFilter = document.getElementById('category-filter');
const timeFilter = document.getElementById('time-filter');
const profile = document.getElementById('profile');
const profileUsername = document.getElementById('profile-username');
const profileEmail = document.getElementById('profile-email');
const joinDate = document.getElementById('join-date');
const quizStats = document.getElementById('quiz-stats');
const editProfileBtn = document.getElementById('edit-profile-btn');
const changePasswordBtn = document.getElementById('change-password-btn');

// User Management
let currentUser = null;
let users = JSON.parse(localStorage.getItem('users')) || [];
let leaderboardData = JSON.parse(localStorage.getItem('leaderboard')) || [];

// Quiz State
let currentQuiz = null;
let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;
let timer = null;
let timeLeft = 15;

// Event Listeners
registerForm.addEventListener('submit', handleRegistration);
loginFormElement.addEventListener('submit', handleLogin);
loginLink.addEventListener('click', toggleForms);
registerLink.addEventListener('click', toggleForms);
logoutBtn.addEventListener('click', handleLogout);
profileBtn.addEventListener('click', showProfile);
retryBtn.addEventListener('click', resetQuiz);
shareBtn.addEventListener('click', shareScore);
categoryFilter.addEventListener('change', updateLeaderboard);
timeFilter.addEventListener('change', updateLeaderboard);
editProfileBtn.addEventListener('click', editProfile);
changePasswordBtn.addEventListener('click', changePassword);
nextBtn.addEventListener('click', handleNextQuestion);

// Quiz button event listeners
document.querySelectorAll('.quiz-btn').forEach(button => {
    button.addEventListener('click', () => {
        currentQuiz = button.dataset.quiz;
        startQuiz();
    });
});

// Add profile back button to the DOM
const profileBackButton = document.createElement('button');
profileBackButton.className = 'profile-back-button';
profileBackButton.textContent = 'Back to Categories';
document.body.appendChild(profileBackButton);

// Initially hide the back button
profileBackButton.style.display = 'none';

// Profile back button functionality
profileBackButton.addEventListener('click', () => {
    profile.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    profileBackButton.style.display = 'none';
});

// Functions
function handleRegistration(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    if (users.some(user => user.username === username)) {
        alert('Username already exists!');
        return;
    }

    const newUser = {
        username,
        email,
        password,
        joinDate: new Date().toISOString(),
        scores: {
            general: 0,
            science: 0,
            history: 0,
            geography: 0,
            movies: 0,
            sports: 0,
            music: 0,
            technology: 0
        }
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful! Please login.');
    toggleForms();
}

function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const rememberMe = document.getElementById('remember-me').checked;

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        currentUser = user;
        if (rememberMe) {
            localStorage.setItem('rememberedUser', JSON.stringify({ username, password }));
        } else {
            localStorage.removeItem('rememberedUser');
        }
        showQuizContainer();
    } else {
        alert('Invalid username or password!');
    }
}

function handleLogout() {
    currentUser = null;
    hideQuizContainer();
    resetQuiz();
}

function toggleForms() {
    registrationForm.classList.toggle('hidden');
    loginForm.classList.toggle('hidden');
}

function showQuizContainer() {
    registrationForm.classList.add('hidden');
    loginForm.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    leaderboard.classList.add('hidden');
    profile.classList.add('hidden');
    welcomeMessage.textContent = `Welcome, ${currentUser.username}!`;
    resetQuiz();
}

function hideQuizContainer() {
    quizContainer.classList.add('hidden');
    registrationForm.classList.remove('hidden');
}

function startQuiz() {
    quizSelection.classList.add('hidden');
    quizQuestions.classList.remove('hidden');
    quizResults.classList.add('hidden');
    currentQuestionIndex = 0;
    score = 0;
    timeLeft = 15;
    updateScore();
    updateTimer();
    startTimer();
    showQuestion();
}

function showQuestion() {
    const question = quizData[currentQuiz][currentQuestionIndex];
    questionText.textContent = question.question;
    questionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${quizData[currentQuiz].length}`;
    
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('option-btn');
        button.textContent = option;
        button.addEventListener('click', () => selectOption(index));
        optionsContainer.appendChild(button);
    });

    nextBtn.classList.add('hidden');
}

function selectOption(index) {
    if (selectedOption !== null) return;
    
    selectedOption = index;
    const buttons = document.querySelectorAll('.option-btn');
    const correctIndex = quizData[currentQuiz][currentQuestionIndex].correct;
    
    buttons.forEach((button, i) => {
        if (i === correctIndex) {
            button.classList.add('correct');
        } else if (i === index && i !== correctIndex) {
            button.classList.add('incorrect');
        }
        button.disabled = true;
    });

    if (index === correctIndex) {
        score++;
        updateScore();
    }

    clearInterval(timer);
    nextBtn.classList.remove('hidden');
}

function updateScore() {
    scoreElement.textContent = `Score: ${score}`;
}

function updateTimer() {
    timerElement.textContent = `Time: ${timeLeft}s`;
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft <= 0) {
            clearInterval(timer);
            selectOption(-1); // Force move to next question
        }
    }, 1000);
}

function showResults() {
    quizQuestions.classList.add('hidden');
    quizResults.classList.remove('hidden');
    
    const totalQuestions = quizData[currentQuiz].length;
    const percentage = (score / totalQuestions) * 100;
    
    finalScore.textContent = `Your Score: ${score}/${totalQuestions}`;
    
    if (percentage >= 80) {
        performanceMessage.textContent = "Excellent! You're a quiz master!";
    } else if (percentage >= 60) {
        performanceMessage.textContent = "Good job! Keep practicing!";
    } else {
        performanceMessage.textContent = "Keep learning! You'll do better next time!";
    }

    // Update leaderboard
    const leaderboardEntry = {
        username: currentUser.username,
        category: currentQuiz,
        score: score,
        date: new Date().toISOString()
    };
    leaderboardData.push(leaderboardEntry);
    localStorage.setItem('leaderboard', JSON.stringify(leaderboardData));

    // Update user's high score
    if (score > currentUser.scores[currentQuiz]) {
        currentUser.scores[currentQuiz] = score;
        const userIndex = users.findIndex(u => u.username === currentUser.username);
        users[userIndex] = currentUser;
        localStorage.setItem('users', JSON.stringify(users));
    }
}

function resetQuiz() {
    quizSelection.classList.remove('hidden');
    quizQuestions.classList.add('hidden');
    quizResults.classList.add('hidden');
    currentQuiz = null;
    currentQuestionIndex = 0;
    score = 0;
    selectedOption = null;
    clearInterval(timer);
    updateScore();
}

function shareScore() {
    const text = `I scored ${score}/${quizData[currentQuiz].length} in the ${currentQuiz} quiz on Quiz Master!`;
    if (navigator.share) {
        navigator.share({
            title: 'My Quiz Score',
            text: text
        });
    } else {
        alert('Share functionality is not available in your browser.');
    }
}

function showProfile() {
    quizContainer.classList.add('hidden');
    leaderboard.classList.add('hidden');
    profile.classList.remove('hidden');
    profileBackButton.style.display = 'flex';
    
    profileUsername.textContent = currentUser.username;
    profileEmail.textContent = currentUser.email;
    joinDate.textContent = new Date(currentUser.joinDate).toLocaleDateString();
    
    // Update quiz stats
    quizStats.innerHTML = '';
    Object.entries(currentUser.scores).forEach(([category, score]) => {
        const statItem = document.createElement('div');
        statItem.classList.add('stat-item');
        statItem.innerHTML = `
            <h4>${category.charAt(0).toUpperCase() + category.slice(1)}</h4>
            <p>${score}</p>
        `;
        quizStats.appendChild(statItem);
    });
}

function updateLeaderboard() {
    const category = categoryFilter.value;
    const time = timeFilter.value;
    
    let filteredData = [...leaderboardData];
    
    if (category !== 'all') {
        filteredData = filteredData.filter(entry => entry.category === category);
    }
    
    if (time !== 'all') {
        const now = new Date();
        const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
        
        filteredData = filteredData.filter(entry => {
            const entryDate = new Date(entry.date);
            if (time === 'week') return entryDate >= weekAgo;
            if (time === 'month') return entryDate >= monthAgo;
            return true;
        });
    }
    
    // Sort by score and date
    filteredData.sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return new Date(b.date) - new Date(a.date);
    });
    
    // Update leaderboard table
    leaderboardBody.innerHTML = '';
    filteredData.forEach((entry, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${entry.username}</td>
            <td>${entry.category.charAt(0).toUpperCase() + entry.category.slice(1)}</td>
            <td>${entry.score}</td>
            <td>${new Date(entry.date).toLocaleDateString()}</td>
        `;
        leaderboardBody.appendChild(row);
    });
}

function editProfile() {
    // Implement profile editing functionality
    alert('Profile editing feature coming soon!');
}

function changePassword() {
    // Implement password change functionality
    alert('Password change feature coming soon!');
}

function handleNextQuestion() {
    selectedOption = null;
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizData[currentQuiz].length) {
        timeLeft = 15;
        updateTimer();
        startTimer();
        showQuestion();
    } else {
        showResults();
    }
}

// Check for remembered user
const rememberedUser = JSON.parse(localStorage.getItem('rememberedUser'));
if (rememberedUser) {
    const user = users.find(u => u.username === rememberedUser.username && u.password === rememberedUser.password);
    if (user) {
        currentUser = user;
        showQuizContainer();
    }
} 