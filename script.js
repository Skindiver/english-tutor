// Global değişkenler
let currentUser = {
    level: null,
    progress: {
        vocabulary: 0,
        grammar: 0,
        listening: 0,
        speaking: 0
    },
    stats: {
        wordsLearned: 0,
        totalTime: 0,
        lessonsCompleted: 0
    }
};

let currentTest = {
    questions: [],
    currentQuestion: 0,
    answers: [],
    score: 0
};

let vocabularyData = {
    A1: [
        { english: "Hello", turkish: "Merhaba", pronunciation: "/həˈloʊ/", example: "Hello, how are you?" },
        { english: "Thank you", turkish: "Teşekkür ederim", pronunciation: "/θæŋk juː/", example: "Thank you for your help." },
        { english: "Good morning", turkish: "Günaydın", pronunciation: "/ɡʊd ˈmɔːrnɪŋ/", example: "Good morning, everyone!" },
        { english: "Water", turkish: "Su", pronunciation: "/ˈwɔːtər/", example: "I need a glass of water." },
        { english: "Food", turkish: "Yemek", pronunciation: "/fuːd/", example: "The food is delicious." },
        { english: "House", turkish: "Ev", pronunciation: "/haʊs/", example: "This is my house." },
        { english: "Family", turkish: "Aile", pronunciation: "/ˈfæməli/", example: "I love my family." },
        { english: "Friend", turkish: "Arkadaş", pronunciation: "/frend/", example: "She is my best friend." },
        { english: "School", turkish: "Okul", pronunciation: "/skuːl/", example: "I go to school every day." },
        { english: "Book", turkish: "Kitap", pronunciation: "/bʊk/", example: "I'm reading a good book." }
    ],
    A2: [
        { english: "Beautiful", turkish: "Güzel", pronunciation: "/ˈbjuːtɪfəl/", example: "The sunset is beautiful." },
        { english: "Important", turkish: "Önemli", pronunciation: "/ɪmˈpɔːrtənt/", example: "This is very important." },
        { english: "Difficult", turkish: "Zor", pronunciation: "/ˈdɪfɪkəlt/", example: "The exam was difficult." },
        { english: "Interesting", turkish: "İlginç", pronunciation: "/ˈɪntrəstɪŋ/", example: "That's an interesting story." },
        { english: "Comfortable", turkish: "Rahat", pronunciation: "/ˈkʌmftərbəl/", example: "This chair is comfortable." },
        { english: "Experience", turkish: "Deneyim", pronunciation: "/ɪkˈspɪriəns/", example: "I have work experience." },
        { english: "Opportunity", turkish: "Fırsat", pronunciation: "/ˌɑːpərˈtuːnəti/", example: "This is a great opportunity." },
        { english: "Environment", turkish: "Çevre", pronunciation: "/ɪnˈvaɪrənmənt/", example: "We must protect the environment." },
        { english: "Technology", turkish: "Teknoloji", pronunciation: "/tekˈnɑːlədʒi/", example: "Technology changes rapidly." },
        { english: "Communication", turkish: "İletişim", pronunciation: "/kəˌmjuːnɪˈkeɪʃən/", example: "Good communication is essential." }
    ]
};

let testQuestions = [
    {
        question: "What is the correct translation of 'Merhaba'?",
        options: ["Hello", "Goodbye", "Thank you", "Please"],
        correct: 0,
        level: "A1"
    },
    {
        question: "Choose the correct sentence:",
        options: ["I am go to school", "I go to school", "I going to school", "I goes to school"],
        correct: 1,
        level: "A1"
    },
    {
        question: "What is the past tense of 'eat'?",
        options: ["eated", "ate", "eaten", "eating"],
        correct: 1,
        level: "A2"
    },
    {
        question: "Which word means 'önemli' in English?",
        options: ["Beautiful", "Important", "Difficult", "Interesting"],
        correct: 1,
        level: "A2"
    },
    {
        question: "Complete: 'If I _____ rich, I would travel the world.'",
        options: ["am", "was", "were", "will be"],
        correct: 2,
        level: "B1"
    },
    {
        question: "What is the meaning of 'procrastinate'?",
        options: ["To delay", "To hurry", "To complete", "To organize"],
        correct: 0,
        level: "B2"
    },
    {
        question: "Choose the most sophisticated synonym for 'big':",
        options: ["Large", "Huge", "Substantial", "Enormous"],
        correct: 2,
        level: "C1"
    },
    {
        question: "Which sentence demonstrates the most advanced English?",
        options: [
            "The book is good",
            "The book is very interesting",
            "The literary work exhibits profound thematic complexity",
            "The book has many good parts"
        ],
        correct: 2,
        level: "C2"
    }
];

// DOM yüklendiğinde çalışacak fonksiyonlar
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    loadUserProgress();
});

function initializeApp() {
    // Navigasyon menüsü için event listener
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('href').substring(1);
            showSection(target);
            setActiveNavLink(this);
        });
    });

    // Hamburger menü
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }

    // Modal kapatma
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.classList.add('hidden');
        }
    });
}

function setupEventListeners() {
    // Keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });
}

function showSection(sectionId) {
    // Tüm bölümleri gizle
    const sections = document.querySelectorAll('main > section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // İstenen bölümü göster
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.remove('hidden');
        targetSection.classList.add('fade-in');
    }
}

function setActiveNavLink(activeLink) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

function startLevelTest() {
    const modal = document.getElementById('levelTestModal');
    modal.classList.remove('hidden');
    
    const testContent = document.getElementById('testContent');
    testContent.innerHTML = `
        <div class="test-info">
            <span>Soru: <span id="questionNumber">1</span> / ${testQuestions.length}</span>
            <span>Süre: <span id="timer">--:--</span></span>
        </div>
        <div class="test-progress">
            <div class="test-progress-bar">
                <div class="test-progress-fill" id="testProgressFill" style="width: 0%"></div>
            </div>
        </div>
        <div id="questionContainer"></div>
        <div class="test-controls" style="text-align: center; margin-top: 2rem;">
            <button class="btn btn-secondary" onclick="previousQuestion()" id="prevBtn" disabled>Önceki</button>
            <button class="btn btn-primary" onclick="nextQuestion()" id="nextBtn">Sonraki</button>
        </div>
    `;
    
    initializeTest();
}

function initializeTest() {
    currentTest.questions = [...testQuestions];
    currentTest.currentQuestion = 0;
    currentTest.answers = new Array(testQuestions.length).fill(null);
    currentTest.score = 0;
    
    showQuestion(0);
    startTimer();
}

function showQuestion(index) {
    const question = currentTest.questions[index];
    const container = document.getElementById('questionContainer');
    
    container.innerHTML = `
        <div class="question-card">
            <div class="question-title">${question.question}</div>
            <div class="options">
                ${question.options.map((option, i) => `
                    <div class="option" onclick="selectOption(${i})" data-option="${i}">
                        ${option}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    // Önceden seçilen cevabı göster
    if (currentTest.answers[index] !== null) {
        const selectedOption = container.querySelector(`[data-option="${currentTest.answers[index]}"]`);
        if (selectedOption) {
            selectedOption.classList.add('selected');
        }
    }
    
    updateTestProgress();
}

function selectOption(optionIndex) {
    // Önceki seçimi temizle
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.classList.remove('selected'));
    
    // Yeni seçimi işaretle
    const selectedOption = document.querySelector(`[data-option="${optionIndex}"]`);
    selectedOption.classList.add('selected');
    
    // Cevabı kaydet
    currentTest.answers[currentTest.currentQuestion] = optionIndex;
    
    // Sonraki butonunu aktif et
    document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
    if (currentTest.currentQuestion < currentTest.questions.length - 1) {
        currentTest.currentQuestion++;
        showQuestion(currentTest.currentQuestion);
        
        // Buton durumlarını güncelle
        document.getElementById('prevBtn').disabled = currentTest.currentQuestion === 0;
        
        if (currentTest.currentQuestion === currentTest.questions.length - 1) {
            document.getElementById('nextBtn').textContent = 'Testi Bitir';
            document.getElementById('nextBtn').onclick = finishTest;
        }
    }
}

function previousQuestion() {
    if (currentTest.currentQuestion > 0) {
        currentTest.currentQuestion--;
        showQuestion(currentTest.currentQuestion);
        
        // Buton durumlarını güncelle
        document.getElementById('prevBtn').disabled = currentTest.currentQuestion === 0;
        document.getElementById('nextBtn').textContent = 'Sonraki';
        document.getElementById('nextBtn').onclick = nextQuestion;
    }
}

function updateTestProgress() {
    const progress = ((currentTest.currentQuestion + 1) / currentTest.questions.length) * 100;
    document.getElementById('testProgressFill').style.width = progress + '%';
    document.getElementById('questionNumber').textContent = currentTest.currentQuestion + 1;
}

function startTimer() {
    let seconds = 0;
    const timerElement = document.getElementById('timer');
    
    const timer = setInterval(() => {
        seconds++;
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }, 1000);
    
    // Timer'ı global olarak sakla
    currentTest.timer = timer;
}

function finishTest() {
    // Timer'ı durdur
    if (currentTest.timer) {
        clearInterval(currentTest.timer);
    }
    
    // Skoru hesapla
    let score = 0;
    let levelScores = { A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0 };
    
    currentTest.questions.forEach((question, index) => {
        if (currentTest.answers[index] === question.correct) {
            score++;
            levelScores[question.level]++;
        }
    });
    
    // Seviyeyi belirle
    let determinedLevel = 'A1';
    if (levelScores.C2 >= 1) determinedLevel = 'C2';
    else if (levelScores.C1 >= 1) determinedLevel = 'C1';
    else if (levelScores.B2 >= 1) determinedLevel = 'B2';
    else if (levelScores.B1 >= 1) determinedLevel = 'B1';
    else if (levelScores.A2 >= 2) determinedLevel = 'A2';
    
    currentUser.level = determinedLevel;
    
    // Sonuçları göster
    showTestResults(score, determinedLevel);
    
    // İlerlemeyi güncelle
    updateUserStats();
    saveUserProgress();
}

function showTestResults(score, level) {
    const testContent = document.getElementById('testContent');
    const percentage = Math.round((score / currentTest.questions.length) * 100);
    
    testContent.innerHTML = `
        <div style="text-align: center;">
            <div style="font-size: 4rem; color: #3b82f6; margin-bottom: 1rem;">🎉</div>
            <h3 style="margin-bottom: 1rem;">Test Tamamlandı!</h3>
            <div style="font-size: 2rem; font-weight: 600; color: #3b82f6; margin-bottom: 1rem;">
                ${score}/${currentTest.questions.length} (${percentage}%)
            </div>
            <div style="background: #f0f9ff; padding: 1.5rem; border-radius: 12px; margin-bottom: 2rem;">
                <h4 style="color: #1f2937; margin-bottom: 0.5rem;">Belirlenen Seviyeniz:</h4>
                <div style="font-size: 1.5rem; font-weight: 600; color: #3b82f6;">${level}</div>
            </div>
            <p style="color: #6b7280; margin-bottom: 2rem;">
                Tebrikler! Seviyeniz belirlendi. Şimdi size uygun derslerle öğrenmeye başlayabilirsiniz.
            </p>
            <div style="display: flex; gap: 1rem; justify-content: center;">
                <button class="btn btn-primary" onclick="closeModal('levelTestModal'); showLevels();">Derslere Başla</button>
                <button class="btn btn-secondary" onclick="closeModal('levelTestModal');">Ana Sayfa</button>
            </div>
        </div>
    `;
}

function showLevels() {
    showSection('levels');
    setActiveNavLink(document.querySelector('[href="#levels"]'));
}

function startLevel(level) {
    currentUser.level = level;
    showSection('lessons');
    setActiveNavLink(document.querySelector('[href="#lessons"]'));
    
    // Seviye kartlarını güncelle
    updateLevelCards();
    
    // Başarı mesajı göster
    showNotification(`${level} seviyesi seçildi! Derslere başlayabilirsiniz.`, 'success');
}

function updateLevelCards() {
    const levelCards = document.querySelectorAll('.level-card');
    levelCards.forEach(card => {
        const cardLevel = card.getAttribute('data-level');
        if (cardLevel === currentUser.level) {
            card.style.borderColor = '#10b981';
            card.style.background = '#f0fdf4';
        } else {
            card.style.borderColor = 'transparent';
            card.style.background = 'white';
        }
    });
}

function openModule(moduleType) {
    switch(moduleType) {
        case 'vocabulary':
            openVocabularyModule();
            break;
        case 'grammar':
            window.open('grammar.html', '_blank');
            break;
        case 'listening':
            openListeningModule();
            break;
        case 'speaking':
            openSpeakingModule();
            break;
    }
}

function openVocabularyModule() {
    const modal = document.getElementById('vocabularyModal');
    const content = document.getElementById('vocabularyContent');
    
    const userLevel = currentUser.level || 'A1';
    const words = vocabularyData[userLevel] || vocabularyData.A1;
    
    let currentWordIndex = 0;
    
    function showWord(index) {
        const word = words[index];
        content.innerHTML = `
            <div class="word-counter">
                Kelime ${index + 1} / ${words.length}
            </div>
            <div class="vocabulary-card">
                <div class="word-english">${word.english}</div>
                <div class="word-pronunciation">${word.pronunciation}</div>
                <div class="word-turkish">${word.turkish}</div>
                <div class="word-example">"${word.example}"</div>
            </div>
            <div class="vocabulary-controls">
                <button class="btn btn-secondary" onclick="previousWord()" ${index === 0 ? 'disabled' : ''}>Önceki</button>
                <button class="btn btn-outline" onclick="playPronunciation('${word.english}')">🔊 Dinle</button>
                <button class="btn btn-primary" onclick="nextWord()" ${index === words.length - 1 ? 'disabled' : ''}>
                    ${index === words.length - 1 ? 'Tamamla' : 'Sonraki'}
                </button>
            </div>
        `;
    }
    
    window.nextWord = function() {
        if (currentWordIndex < words.length - 1) {
            currentWordIndex++;
            showWord(currentWordIndex);
        } else {
            // Modülü tamamla
            currentUser.progress.vocabulary += 10;
            currentUser.stats.wordsLearned += words.length;
            updateUserStats();
            saveUserProgress();
            closeModal('vocabularyModal');
            showNotification(`Tebrikler! ${words.length} kelime öğrendiniz!`, 'success');
        }
    };
    
    window.previousWord = function() {
        if (currentWordIndex > 0) {
            currentWordIndex--;
            showWord(currentWordIndex);
        }
    };
    
    showWord(0);
    modal.classList.remove('hidden');
}

function playPronunciation(word) {
    // Web Speech API kullanarak telaffuz
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(word);
        utterance.lang = 'en-US';
        utterance.rate = 0.8;
        speechSynthesis.speak(utterance);
    } else {
        showNotification('Tarayıcınız ses özelliğini desteklemiyor.', 'warning');
    }
}

function openListeningModule() {
    const modal = document.getElementById('vocabularyModal');
    const content = document.getElementById('vocabularyContent');
    
    const listeningExercises = [
        {
            text: "Hello, how are you today?",
            question: "What is the person asking?",
            options: ["How old are you?", "How are you?", "Where are you?", "What are you doing?"],
            correct: 1
        },
        {
            text: "I would like to order a coffee, please.",
            question: "What does the person want?",
            options: ["Tea", "Water", "Coffee", "Juice"],
            correct: 2
        },
        {
            text: "The weather is beautiful today, isn't it?",
            question: "What is the person talking about?",
            options: ["Food", "Weather", "Work", "Family"],
            correct: 1
        }
    ];
    
    let currentExercise = 0;
    
    function showListeningExercise(index) {
        const exercise = listeningExercises[index];
        content.innerHTML = `
            <div style="text-align: center; margin-bottom: 2rem;">
                <h3>Dinleme Egzersizi ${index + 1}/${listeningExercises.length}</h3>
            </div>
            
            <div style="background: #f0f9ff; padding: 2rem; border-radius: 12px; margin-bottom: 2rem; text-align: center;">
                <div style="font-size: 1.2rem; margin-bottom: 1.5rem; color: #1f2937;">
                    "${exercise.text}"
                </div>
                <button class="btn btn-primary" onclick="playListeningText('${exercise.text}')">
                    🔊 Dinle
                </button>
            </div>
            
            <div style="margin-bottom: 2rem;">
                <h4 style="margin-bottom: 1rem;">${exercise.question}</h4>
                <div class="options">
                    ${exercise.options.map((option, i) => `
                        <div class="option" onclick="selectListeningAnswer(${i}, ${exercise.correct})" data-option="${i}">
                            ${option}
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div style="text-align: center;">
                <button class="btn btn-secondary" onclick="previousListening()" ${index === 0 ? 'disabled' : ''}>Önceki</button>
                <button class="btn btn-primary" onclick="nextListening()" ${index === listeningExercises.length - 1 ? 'disabled' : ''}>
                    ${index === listeningExercises.length - 1 ? 'Tamamla' : 'Sonraki'}
                </button>
            </div>
        `;
    }
    
    window.playListeningText = function(text) {
        playPronunciation(text);
    };
    
    window.selectListeningAnswer = function(selected, correct) {
        const options = document.querySelectorAll('.option');
        options.forEach((option, index) => {
            option.classList.remove('selected');
            if (index === correct) {
                option.style.background = '#d1fae5';
                option.style.borderColor = '#10b981';
            } else if (index === selected && selected !== correct) {
                option.style.background = '#fee2e2';
                option.style.borderColor = '#ef4444';
            }
            option.style.pointerEvents = 'none';
        });
        
        if (selected === correct) {
            showNotification('Doğru cevap! 🎉', 'success');
            currentUser.progress.listening += 10;
        } else {
            showNotification('Yanlış cevap. Tekrar deneyin.', 'warning');
        }
    };
    
    window.nextListening = function() {
        if (currentExercise < listeningExercises.length - 1) {
            currentExercise++;
            showListeningExercise(currentExercise);
        } else {
            currentUser.stats.lessonsCompleted++;
            updateUserStats();
            saveUserProgress();
            closeModal('vocabularyModal');
            showNotification('Dinleme egzersizleri tamamlandı! 🎧', 'success');
        }
    };
    
    window.previousListening = function() {
        if (currentExercise > 0) {
            currentExercise--;
            showListeningExercise(currentExercise);
        }
    };
    
    showListeningExercise(0);
    modal.classList.remove('hidden');
}

function openSpeakingModule() {
    const modal = document.getElementById('vocabularyModal');
    const content = document.getElementById('vocabularyContent');
    
    const speakingExercises = [
        {
            prompt: "Kendinizi tanıtın",
            example: "Hello, my name is... I am from... I work as...",
            tips: ["Adınızı söyleyin", "Nereli olduğunuzu belirtin", "Mesleğinizi paylaşın"]
        },
        {
            prompt: "Hobilerinizden bahsedin",
            example: "In my free time, I like to... My favorite hobby is...",
            tips: ["Boş zamanlarınızda ne yaptığınızı söyleyin", "En sevdiğiniz hobinizi belirtin"]
        },
        {
            prompt: "Bir restoranda sipariş verin",
            example: "I would like to order... Can I have... please?",
            tips: ["Kibarca sipariş verin", "'Please' ve 'thank you' kullanın"]
        }
    ];
    
    let currentSpeaking = 0;
    let isRecording = false;
    let recognition = null;
    
    // Web Speech API kontrolü
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        recognition.lang = 'en-US';
        recognition.continuous = false;
        recognition.interimResults = false;
    }
    
    function showSpeakingExercise(index) {
        const exercise = speakingExercises[index];
        content.innerHTML = `
            <div style="text-align: center; margin-bottom: 2rem;">
                <h3>Konuşma Egzersizi ${index + 1}/${speakingExercises.length}</h3>
            </div>
            
            <div style="background: #fef7ff; padding: 2rem; border-radius: 12px; margin-bottom: 2rem;">
                <h4 style="color: #1f2937; margin-bottom: 1rem;">Görev:</h4>
                <p style="font-size: 1.1rem; margin-bottom: 1.5rem;">${exercise.prompt}</p>
                
                <h4 style="color: #1f2937; margin-bottom: 1rem;">Örnek:</h4>
                <div style="background: white; padding: 1rem; border-radius: 8px; font-style: italic; margin-bottom: 1.5rem;">
                    "${exercise.example}"
                </div>
                
                <h4 style="color: #1f2937; margin-bottom: 1rem;">İpuçları:</h4>
                <ul style="text-align: left;">
                    ${exercise.tips.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
            
            <div style="text-align: center; margin-bottom: 2rem;">
                <button class="btn btn-outline" onclick="playExample('${exercise.example}')" style="margin-right: 1rem;">
                    🔊 Örneği Dinle
                </button>
                ${recognition ? `
                    <button class="btn btn-primary" onclick="toggleRecording()" id="recordBtn">
                        🎤 Kayıt Başlat
                    </button>
                ` : `
                    <p style="color: #6b7280; font-size: 0.9rem;">Tarayıcınız ses kaydını desteklemiyor. Lütfen sesli olarak pratik yapın.</p>
                `}
            </div>
            
            <div id="recordingResult" style="display: none; background: #f0f9ff; padding: 1rem; border-radius: 8px; margin-bottom: 2rem;">
                <h4>Söyledikleriniz:</h4>
                <p id="spokenText"></p>
            </div>
            
            <div style="text-align: center;">
                <button class="btn btn-secondary" onclick="previousSpeaking()" ${index === 0 ? 'disabled' : ''}>Önceki</button>
                <button class="btn btn-primary" onclick="nextSpeaking()" ${index === speakingExercises.length - 1 ? 'disabled' : ''}>
                    ${index === speakingExercises.length - 1 ? 'Tamamla' : 'Sonraki'}
                </button>
            </div>
        `;
    }
    
    window.playExample = function(text) {
        playPronunciation(text);
    };
    
    window.toggleRecording = function() {
        if (!recognition) return;
        
        const recordBtn = document.getElementById('recordBtn');
        
        if (!isRecording) {
            recognition.start();
            isRecording = true;
            recordBtn.textContent = '⏹️ Kaydı Durdur';
            recordBtn.style.background = '#ef4444';
            showNotification('Kayıt başladı. Konuşmaya başlayın...', 'info');
        } else {
            recognition.stop();
            isRecording = false;
            recordBtn.textContent = '🎤 Kayıt Başlat';
            recordBtn.style.background = '';
        }
    };
    
    if (recognition) {
        recognition.onresult = function(event) {
            const spokenText = event.results[0][0].transcript;
            document.getElementById('spokenText').textContent = spokenText;
            document.getElementById('recordingResult').style.display = 'block';
            showNotification('Harika! Konuşmanız kaydedildi.', 'success');
            currentUser.progress.speaking += 10;
        };
        
        recognition.onerror = function(event) {
            showNotification('Ses kaydında hata oluştu. Tekrar deneyin.', 'warning');
            isRecording = false;
            const recordBtn = document.getElementById('recordBtn');
            if (recordBtn) {
                recordBtn.textContent = '🎤 Kayıt Başlat';
                recordBtn.style.background = '';
            }
        };
    }
    
    window.nextSpeaking = function() {
        if (currentSpeaking < speakingExercises.length - 1) {
            currentSpeaking++;
            showSpeakingExercise(currentSpeaking);
        } else {
            currentUser.stats.lessonsCompleted++;
            updateUserStats();
            saveUserProgress();
            closeModal('vocabularyModal');
            showNotification('Konuşma egzersizleri tamamlandı! 🎤', 'success');
        }
    };
    
    window.previousSpeaking = function() {
        if (currentSpeaking > 0) {
            currentSpeaking--;
            showSpeakingExercise(currentSpeaking);
        }
    };
    
    showSpeakingExercise(0);
    modal.classList.remove('hidden');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('hidden');
}

function closeAllModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.classList.add('hidden');
    });
}

function updateUserStats() {
    // İstatistikleri güncelle
    document.querySelector('.stat-card .stat-info .stat-number').textContent = currentUser.stats.wordsLearned;
    
    const statCards = document.querySelectorAll('.stat-card');
    if (statCards.length >= 4) {
        statCards[1].querySelector('.stat-number').textContent = Math.floor(currentUser.stats.totalTime / 60) + ' saat';
        statCards[2].querySelector('.stat-number').textContent = currentUser.stats.lessonsCompleted;
        statCards[3].querySelector('.stat-number').textContent = currentUser.level || '-';
    }
    
    // Genel ilerleme yüzdesini hesapla
    const totalProgress = (currentUser.progress.vocabulary + currentUser.progress.grammar + 
                          currentUser.progress.listening + currentUser.progress.speaking) / 4;
    
    updateCircularProgress(totalProgress);
    updateModuleProgress();
}

function updateCircularProgress(percentage) {
    const circle = document.querySelector('.progress-ring-fill');
    const text = document.querySelector('.progress-text');
    
    if (circle && text) {
        const radius = 52;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (percentage / 100) * circumference;
        
        circle.style.strokeDashoffset = offset;
        text.textContent = Math.round(percentage) + '%';
    }
}

function updateModuleProgress() {
    const modules = document.querySelectorAll('.lesson-module');
    modules.forEach((module, index) => {
        const progressBar = module.querySelector('.progress-fill');
        const progressText = module.querySelector('.module-progress span');
        
        let progress = 0;
        let text = '';
        
        switch(index) {
            case 0: // Vocabulary
                progress = currentUser.progress.vocabulary;
                text = `${currentUser.stats.wordsLearned}/100 kelime`;
                break;
            case 1: // Grammar
                progress = currentUser.progress.grammar;
                text = `${Math.floor(progress/2)}/50 konu`;
                break;
            case 2: // Listening
                progress = currentUser.progress.listening;
                text = `${Math.floor(progress/3.33)}/30 egzersiz`;
                break;
            case 3: // Speaking
                progress = currentUser.progress.speaking;
                text = `${Math.floor(progress/4)}/25 egzersiz`;
                break;
        }
        
        if (progressBar) progressBar.style.width = Math.min(progress, 100) + '%';
        if (progressText) progressText.textContent = text;
    });
}

function showNotification(message, type = 'info') {
    // Bildirim oluştur
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()">&times;</button>
        </div>
    `;
    
    // Stil ekle
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'warning' ? '#f59e0b' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        z-index: 3000;
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `;
    
    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    `;
    
    notification.querySelector('button').style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0;
        width: 20px;
        height: 20px;
    `;
    
    document.body.appendChild(notification);
    
    // 5 saniye sonra otomatik kaldır
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

function saveUserProgress() {
    localStorage.setItem('englishTutorProgress', JSON.stringify(currentUser));
}

function loadUserProgress() {
    const saved = localStorage.getItem('englishTutorProgress');
    if (saved) {
        currentUser = { ...currentUser, ...JSON.parse(saved) };
        updateUserStats();
        updateLevelCards();
    }
}

// Sayfa yüklendiğinde çalışacak ek fonksiyonlar
window.addEventListener('load', function() {
    // Animasyonları başlat
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        heroSection.classList.add('fade-in');
    }
    
    // İlerleme takibini başlat
    startProgressTracking();
});

function startProgressTracking() {
    // Sayfa üzerinde geçirilen süreyi takip et
    let startTime = Date.now();
    
    window.addEventListener('beforeunload', function() {
        const timeSpent = Math.floor((Date.now() - startTime) / 1000);
        currentUser.stats.totalTime += timeSpent;
        saveUserProgress();
    });
    
    // Her 30 saniyede bir otomatik kaydet
    setInterval(() => {
        const timeSpent = Math.floor((Date.now() - startTime) / 1000);
        currentUser.stats.totalTime += timeSpent;
        startTime = Date.now();
        saveUserProgress();
    }, 30000);
}

// Global fonksiyonları window objesine ekle
window.startLevelTest = startLevelTest;
window.showLevels = showLevels;
window.startLevel = startLevel;
window.openModule = openModule;
window.closeModal = closeModal;
window.selectOption = selectOption;
window.nextQuestion = nextQuestion;
window.previousQuestion = previousQuestion;
window.finishTest = finishTest;
window.playPronunciation = playPronunciation;

// Konsol mesajı
console.log('🎓 İngiliz Hoca uygulaması başarıyla yüklendi!');
console.log('📚 A\'dan Z\'ye İngilizce öğrenmeye hazır mısınız?');