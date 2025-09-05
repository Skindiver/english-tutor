// Global değişkenler
let currentUser = {
    level: null,
    progress: {
        vocabulary: 0,
        grammar: 0,
        listening: 0,
        speaking: 0,
        writing: 0,
        tests: 0
    },
    stats: {
        wordsLearned: 0,
        totalTime: 0,
        lessonsCompleted: 0,
        testsCompleted: 0,
        averageScore: 0
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
        // Temel Selamlaşma ve Nezaket
        { english: "Hello", turkish: "Merhaba", pronunciation: "/həˈloʊ/", example: "Hello, how are you?" },
        { english: "Hi", turkish: "Selam", pronunciation: "/haɪ/", example: "Hi there!" },
        { english: "Good morning", turkish: "Günaydın", pronunciation: "/ɡʊd ˈmɔːrnɪŋ/", example: "Good morning, everyone!" },
        { english: "Good afternoon", turkish: "İyi öğleden sonralar", pronunciation: "/ɡʊd ˌæftərˈnuːn/", example: "Good afternoon, sir." },
        { english: "Good evening", turkish: "İyi akşamlar", pronunciation: "/ɡʊd ˈiːvnɪŋ/", example: "Good evening, ladies and gentlemen." },
        { english: "Good night", turkish: "İyi geceler", pronunciation: "/ɡʊd naɪt/", example: "Good night, sleep well." },
        { english: "Goodbye", turkish: "Hoşçakal", pronunciation: "/ɡʊdˈbaɪ/", example: "Goodbye, see you tomorrow." },
        { english: "Bye", turkish: "Güle güle", pronunciation: "/baɪ/", example: "Bye! Have a nice day." },
        { english: "See you later", turkish: "Sonra görüşürüz", pronunciation: "/siː juː ˈleɪtər/", example: "See you later, take care." },
        { english: "Thank you", turkish: "Teşekkür ederim", pronunciation: "/θæŋk juː/", example: "Thank you for your help." },
        { english: "Thanks", turkish: "Teşekkürler", pronunciation: "/θæŋks/", example: "Thanks a lot!" },
        { english: "You're welcome", turkish: "Rica ederim", pronunciation: "/jʊr ˈwelkəm/", example: "You're welcome, anytime." },
        { english: "Please", turkish: "Lütfen", pronunciation: "/pliːz/", example: "Please, can you help me?" },
        { english: "Sorry", turkish: "Özür dilerim", pronunciation: "/ˈsɒri/", example: "I'm sorry for being late." },
        { english: "Excuse me", turkish: "Affedersiniz", pronunciation: "/ɪkˈskjuːz miː/", example: "Excuse me, where is the bathroom?" },
        
        // Temel Kelimeler - Aile
        { english: "Family", turkish: "Aile", pronunciation: "/ˈfæməli/", example: "I love my family." },
        { english: "Mother", turkish: "Anne", pronunciation: "/ˈmʌðər/", example: "My mother is a teacher." },
        { english: "Father", turkish: "Baba", pronunciation: "/ˈfɑːðər/", example: "My father works in a bank." },
        { english: "Sister", turkish: "Kız kardeş", pronunciation: "/ˈsɪstər/", example: "My sister is younger than me." },
        { english: "Brother", turkish: "Erkek kardeş", pronunciation: "/ˈbrʌðər/", example: "My brother plays football." },
        { english: "Grandmother", turkish: "Büyükanne", pronunciation: "/ˈɡrænˌmʌðər/", example: "My grandmother makes delicious cookies." },
        { english: "Grandfather", turkish: "Büyükbaba", pronunciation: "/ˈɡrænˌfɑːðər/", example: "My grandfather tells great stories." },
        { english: "Child", turkish: "Çocuk", pronunciation: "/tʃaɪld/", example: "The child is playing in the garden." },
        { english: "Baby", turkish: "Bebek", pronunciation: "/ˈbeɪbi/", example: "The baby is sleeping." },
        { english: "Parent", turkish: "Ebeveyn", pronunciation: "/ˈperənt/", example: "Every parent loves their children." },
        
        // Temel Kelimeler - Ev ve Eşyalar
        { english: "House", turkish: "Ev", pronunciation: "/haʊs/", example: "This is my house." },
        { english: "Home", turkish: "Yuva", pronunciation: "/hoʊm/", example: "I'm going home." },
        { english: "Room", turkish: "Oda", pronunciation: "/ruːm/", example: "My room is upstairs." },
        { english: "Kitchen", turkish: "Mutfak", pronunciation: "/ˈkɪtʃən/", example: "Mom is cooking in the kitchen." },
        { english: "Bathroom", turkish: "Banyo", pronunciation: "/ˈbæθruːm/", example: "The bathroom is clean." },
        { english: "Bedroom", turkish: "Yatak odası", pronunciation: "/ˈbedruːm/", example: "I sleep in my bedroom." },
        { english: "Living room", turkish: "Oturma odası", pronunciation: "/ˈlɪvɪŋ ruːm/", example: "We watch TV in the living room." },
        { english: "Door", turkish: "Kapı", pronunciation: "/dɔːr/", example: "Please close the door." },
        { english: "Window", turkish: "Pencere", pronunciation: "/ˈwɪndoʊ/", example: "Open the window, please." },
        { english: "Table", turkish: "Masa", pronunciation: "/ˈteɪbəl/", example: "The book is on the table." },
        { english: "Chair", turkish: "Sandalye", pronunciation: "/tʃer/", example: "Sit on the chair." },
        { english: "Bed", turkish: "Yatak", pronunciation: "/bed/", example: "I make my bed every morning." },
        { english: "Sofa", turkish: "Kanepe", pronunciation: "/ˈsoʊfə/", example: "The cat is sleeping on the sofa." },
        
        // Temel Kelimeler - Yiyecek ve İçecek
        { english: "Food", turkish: "Yemek", pronunciation: "/fuːd/", example: "The food is delicious." },
        { english: "Water", turkish: "Su", pronunciation: "/ˈwɔːtər/", example: "I need a glass of water." },
        { english: "Bread", turkish: "Ekmek", pronunciation: "/bred/", example: "I eat bread for breakfast." },
        { english: "Milk", turkish: "Süt", pronunciation: "/mɪlk/", example: "Children need to drink milk." },
        { english: "Coffee", turkish: "Kahve", pronunciation: "/ˈkɔːfi/", example: "I drink coffee every morning." },
        { english: "Tea", turkish: "Çay", pronunciation: "/tiː/", example: "Would you like some tea?" },
        { english: "Apple", turkish: "Elma", pronunciation: "/ˈæpəl/", example: "An apple a day keeps the doctor away." },
        { english: "Orange", turkish: "Portakal", pronunciation: "/ˈɔːrɪndʒ/", example: "This orange is very sweet." },
        { english: "Banana", turkish: "Muz", pronunciation: "/bəˈnænə/", example: "Monkeys love bananas." },
        { english: "Meat", turkish: "Et", pronunciation: "/miːt/", example: "I don't eat meat." },
        { english: "Fish", turkish: "Balık", pronunciation: "/fɪʃ/", example: "Fish is good for your health." },
        { english: "Chicken", turkish: "Tavuk", pronunciation: "/ˈtʃɪkən/", example: "We're having chicken for dinner." },
        { english: "Rice", turkish: "Pirinç", pronunciation: "/raɪs/", example: "Rice is a staple food in Asia." },
        { english: "Egg", turkish: "Yumurta", pronunciation: "/eɡ/", example: "I had eggs for breakfast." },
        
        // Temel Kelimeler - Okul ve Eğitim
        { english: "School", turkish: "Okul", pronunciation: "/skuːl/", example: "I go to school every day." },
        { english: "Student", turkish: "Öğrenci", pronunciation: "/ˈstuːdənt/", example: "She is a good student." },
        { english: "Teacher", turkish: "Öğretmen", pronunciation: "/ˈtiːtʃər/", example: "My teacher is very kind." },
        { english: "Book", turkish: "Kitap", pronunciation: "/bʊk/", example: "I'm reading a good book." },
        { english: "Pen", turkish: "Kalem", pronunciation: "/pen/", example: "Can I borrow your pen?" },
        { english: "Pencil", turkish: "Kurşun kalem", pronunciation: "/ˈpensəl/", example: "I write with a pencil." },
        { english: "Paper", turkish: "Kağıt", pronunciation: "/ˈpeɪpər/", example: "I need a piece of paper." },
        { english: "Notebook", turkish: "Defter", pronunciation: "/ˈnoʊtbʊk/", example: "I write notes in my notebook." },
        { english: "Bag", turkish: "Çanta", pronunciation: "/bæɡ/", example: "My school bag is heavy." },
        { english: "Lesson", turkish: "Ders", pronunciation: "/ˈlesən/", example: "The English lesson is interesting." },
        
        // Temel Kelimeler - Zaman
        { english: "Time", turkish: "Zaman", pronunciation: "/taɪm/", example: "What time is it?" },
        { english: "Day", turkish: "Gün", pronunciation: "/deɪ/", example: "Today is a beautiful day." },
        { english: "Week", turkish: "Hafta", pronunciation: "/wiːk/", example: "See you next week." },
        { english: "Month", turkish: "Ay", pronunciation: "/mʌnθ/", example: "January is the first month of the year." },
        { english: "Year", turkish: "Yıl", pronunciation: "/jɪər/", example: "This year has been great." },
        { english: "Today", turkish: "Bugün", pronunciation: "/təˈdeɪ/", example: "What are you doing today?" },
        { english: "Tomorrow", turkish: "Yarın", pronunciation: "/təˈmɔːroʊ/", example: "I have a meeting tomorrow." },
        { english: "Yesterday", turkish: "Dün", pronunciation: "/ˈjestərdeɪ/", example: "I went shopping yesterday." },
        { english: "Morning", turkish: "Sabah", pronunciation: "/ˈmɔːrnɪŋ/", example: "I exercise in the morning." },
        { english: "Afternoon", turkish: "Öğleden sonra", pronunciation: "/ˌæftərˈnuːn/", example: "I take a nap in the afternoon." },
        { english: "Evening", turkish: "Akşam", pronunciation: "/ˈiːvnɪŋ/", example: "We have dinner in the evening." },
        { english: "Night", turkish: "Gece", pronunciation: "/naɪt/", example: "I sleep at night." },
        
        // Temel Kelimeler - Sayılar
        { english: "One", turkish: "Bir", pronunciation: "/wʌn/", example: "I have one brother." },
        { english: "Two", turkish: "İki", pronunciation: "/tuː/", example: "Two plus two equals four." },
        { english: "Three", turkish: "Üç", pronunciation: "/θriː/", example: "I have three cats." },
        { english: "Four", turkish: "Dört", pronunciation: "/fɔːr/", example: "There are four seasons." },
        { english: "Five", turkish: "Beş", pronunciation: "/faɪv/", example: "I wake up at five o'clock." },
        { english: "Six", turkish: "Altı", pronunciation: "/sɪks/", example: "Six students are absent today." },
        { english: "Seven", turkish: "Yedi", pronunciation: "/ˈsevən/", example: "There are seven days in a week." },
        { english: "Eight", turkish: "Sekiz", pronunciation: "/eɪt/", example: "I go to bed at eight." },
        { english: "Nine", turkish: "Dokuz", pronunciation: "/naɪn/", example: "Nine plus one equals ten." },
        { english: "Ten", turkish: "On", pronunciation: "/ten/", example: "I have ten fingers." },
        
        // Temel Kelimeler - Renkler
        { english: "Color", turkish: "Renk", pronunciation: "/ˈkʌlər/", example: "What's your favorite color?" },
        { english: "Red", turkish: "Kırmızı", pronunciation: "/red/", example: "The apple is red." },
        { english: "Blue", turkish: "Mavi", pronunciation: "/bluː/", example: "The sky is blue." },
        { english: "Green", turkish: "Yeşil", pronunciation: "/ɡriːn/", example: "Grass is green." },
        { english: "Yellow", turkish: "Sarı", pronunciation: "/ˈjeloʊ/", example: "The sun is yellow." },
        { english: "Black", turkish: "Siyah", pronunciation: "/blæk/", example: "I wear black shoes." },
        { english: "White", turkish: "Beyaz", pronunciation: "/waɪt/", example: "Snow is white." },
        { english: "Brown", turkish: "Kahverengi", pronunciation: "/braʊn/", example: "The dog is brown." },
        { english: "Pink", turkish: "Pembe", pronunciation: "/pɪŋk/", example: "She likes pink flowers." },
        { english: "Purple", turkish: "Mor", pronunciation: "/ˈpɜːrpəl/", example: "The grapes are purple." },
        { english: "Orange", turkish: "Turuncu", pronunciation: "/ˈɔːrɪndʒ/", example: "The basketball is orange." },
        
        // Temel Kelimeler - Vücut
        { english: "Body", turkish: "Vücut", pronunciation: "/ˈbɑːdi/", example: "Exercise is good for your body." },
        { english: "Head", turkish: "Kafa", pronunciation: "/hed/", example: "I have a headache." },
        { english: "Face", turkish: "Yüz", pronunciation: "/feɪs/", example: "Wash your face." },
        { english: "Eye", turkish: "Göz", pronunciation: "/aɪ/", example: "I have brown eyes." },
        { english: "Nose", turkish: "Burun", pronunciation: "/noʊz/", example: "I can smell with my nose." },
        { english: "Mouth", turkish: "Ağız", pronunciation: "/maʊθ/", example: "Open your mouth." },
        { english: "Ear", turkish: "Kulak", pronunciation: "/ɪr/", example: "I can hear with my ears." },
        { english: "Hand", turkish: "El", pronunciation: "/hænd/", example: "Raise your hand." },
        { english: "Foot", turkish: "Ayak", pronunciation: "/fʊt/", example: "My foot hurts." },
        { english: "Leg", turkish: "Bacak", pronunciation: "/leɡ/", example: "I broke my leg." },
        { english: "Arm", turkish: "Kol", pronunciation: "/ɑːrm/", example: "My arm is strong." },
        
        // Temel Kelimeler - Hayvanlar
        { english: "Animal", turkish: "Hayvan", pronunciation: "/ˈænɪməl/", example: "I love animals." },
        { english: "Dog", turkish: "Köpek", pronunciation: "/dɔːɡ/", example: "The dog is barking." },
        { english: "Cat", turkish: "Kedi", pronunciation: "/kæt/", example: "The cat is sleeping." },
        { english: "Bird", turkish: "Kuş", pronunciation: "/bɜːrd/", example: "Birds can fly." },
        { english: "Horse", turkish: "At", pronunciation: "/hɔːrs/", example: "The horse is running." },
        { english: "Cow", turkish: "İnek", pronunciation: "/kaʊ/", example: "Cows give us milk." },
        { english: "Sheep", turkish: "Koyun", pronunciation: "/ʃiːp/", example: "Sheep give us wool." },
        { english: "Pig", turkish: "Domuz", pronunciation: "/pɪɡ/", example: "The pig is in the mud." },
        
        // Temel Kelimeler - Kıyafetler
        { english: "Clothes", turkish: "Kıyafet", pronunciation: "/kloʊðz/", example: "I need new clothes." },
        { english: "Shirt", turkish: "Gömlek", pronunciation: "/ʃɜːrt/", example: "I wear a white shirt." },
        { english: "Pants", turkish: "Pantolon", pronunciation: "/pænts/", example: "These pants are too big." },
        { english: "Dress", turkish: "Elbise", pronunciation: "/dres/", example: "She wears a beautiful dress." },
        { english: "Shoes", turkish: "Ayakkabı", pronunciation: "/ʃuːz/", example: "My shoes are comfortable." },
        { english: "Hat", turkish: "Şapka", pronunciation: "/hæt/", example: "I wear a hat in the sun." },
        { english: "Coat", turkish: "Palto", pronunciation: "/koʊt/", example: "It's cold, wear your coat." },
        
        // Temel Kelimeler - Hava Durumu
        { english: "Weather", turkish: "Hava durumu", pronunciation: "/ˈweðər/", example: "The weather is nice today." },
        { english: "Sun", turkish: "Güneş", pronunciation: "/sʌn/", example: "The sun is shining." },
        { english: "Rain", turkish: "Yağmur", pronunciation: "/reɪn/", example: "It's going to rain." },
        { english: "Snow", turkish: "Kar", pronunciation: "/snoʊ/", example: "Children love snow." },
        { english: "Wind", turkish: "Rüzgar", pronunciation: "/wɪnd/", example: "The wind is strong." },
        { english: "Hot", turkish: "Sıcak", pronunciation: "/hɑːt/", example: "It's very hot today." },
        { english: "Cold", turkish: "Soğuk", pronunciation: "/koʊld/", example: "I'm cold." },
        { english: "Warm", turkish: "Ilık", pronunciation: "/wɔːrm/", example: "The water is warm." },
        { english: "Cool", turkish: "Serin", pronunciation: "/kuːl/", example: "It's cool in the evening." },
        
        // Temel Kelimeler - Duygular
        { english: "Happy", turkish: "Mutlu", pronunciation: "/ˈhæpi/", example: "I'm happy to see you." },
        { english: "Sad", turkish: "Üzgün", pronunciation: "/sæd/", example: "Don't be sad." },
        { english: "Angry", turkish: "Kızgın", pronunciation: "/ˈæŋɡri/", example: "He is angry with me." },
        { english: "Tired", turkish: "Yorgun", pronunciation: "/ˈtaɪərd/", example: "I'm tired after work." },
        { english: "Hungry", turkish: "Aç", pronunciation: "/ˈhʌŋɡri/", example: "I'm hungry, let's eat." },
        { english: "Thirsty", turkish: "Susuz", pronunciation: "/ˈθɜːrsti/", example: "I'm thirsty, I need water." },
        
        // Temel Kelimeler - Sıfatlar
        { english: "Big", turkish: "Büyük", pronunciation: "/bɪɡ/", example: "The elephant is big." },
        { english: "Small", turkish: "Küçük", pronunciation: "/smɔːl/", example: "The mouse is small." },
        { english: "Good", turkish: "İyi", pronunciation: "/ɡʊd/", example: "This is a good book." },
        { english: "Bad", turkish: "Kötü", pronunciation: "/bæd/", example: "Smoking is bad for health." },
        { english: "New", turkish: "Yeni", pronunciation: "/nuː/", example: "I have a new car." },
        { english: "Old", turkish: "Eski", pronunciation: "/oʊld/", example: "This is an old house." },
        { english: "Fast", turkish: "Hızlı", pronunciation: "/fæst/", example: "The car is very fast." },
        { english: "Slow", turkish: "Yavaş", pronunciation: "/sloʊ/", example: "The turtle is slow." },
        { english: "Long", turkish: "Uzun", pronunciation: "/lɔːŋ/", example: "The river is long." },
        { english: "Short", turkish: "Kısa", pronunciation: "/ʃɔːrt/", example: "She has short hair." },
        
        // Temel Kelimeler - Fiiller
        { english: "Go", turkish: "Gitmek", pronunciation: "/ɡoʊ/", example: "I go to work by bus." },
        { english: "Come", turkish: "Gelmek", pronunciation: "/kʌm/", example: "Come here, please." },
        { english: "See", turkish: "Görmek", pronunciation: "/siː/", example: "I can see the mountain." },
        { english: "Look", turkish: "Bakmak", pronunciation: "/lʊk/", example: "Look at the beautiful sunset." },
        { english: "Listen", turkish: "Dinlemek", pronunciation: "/ˈlɪsən/", example: "Listen to the music." },
        { english: "Speak", turkish: "Konuşmak", pronunciation: "/spiːk/", example: "I speak English." },
        { english: "Read", turkish: "Okumak", pronunciation: "/riːd/", example: "I read books every day." },
        { english: "Write", turkish: "Yazmak", pronunciation: "/raɪt/", example: "I write in my diary." },
        { english: "Eat", turkish: "Yemek", pronunciation: "/iːt/", example: "I eat breakfast at 7 AM." },
        { english: "Drink", turkish: "İçmek", pronunciation: "/drɪŋk/", example: "I drink water when I'm thirsty." },
        { english: "Sleep", turkish: "Uyumak", pronunciation: "/sliːp/", example: "I sleep eight hours a night." },
        { english: "Walk", turkish: "Yürümek", pronunciation: "/wɔːk/", example: "I walk to school." },
        { english: "Run", turkish: "Koşmak", pronunciation: "/rʌn/", example: "I run in the park." },
        { english: "Sit", turkish: "Oturmak", pronunciation: "/sɪt/", example: "Please sit down." },
        { english: "Stand", turkish: "Ayakta durmak", pronunciation: "/stænd/", example: "Stand up, please." },
        
        // Temel Kelimeler - Yer ve Yön
        { english: "Here", turkish: "Burada", pronunciation: "/hɪr/", example: "Come here." },
        { english: "There", turkish: "Orada", pronunciation: "/ðer/", example: "The book is there." },
        { english: "Where", turkish: "Nerede", pronunciation: "/wer/", example: "Where are you?" },
        { english: "Up", turkish: "Yukarı", pronunciation: "/ʌp/", example: "Look up at the sky." },
        { english: "Down", turkish: "Aşağı", pronunciation: "/daʊn/", example: "The ball rolled down the hill." },
        { english: "Left", turkish: "Sol", pronunciation: "/left/", example: "Turn left at the corner." },
        { english: "Right", turkish: "Sağ", pronunciation: "/raɪt/", example: "The bank is on the right." },
        { english: "Near", turkish: "Yakın", pronunciation: "/nɪr/", example: "The store is near my house." },
        { english: "Far", turkish: "Uzak", pronunciation: "/fɑːr/", example: "The airport is far from here." },
        
        // Temel Kelimeler - Soru Kelimeleri
        { english: "What", turkish: "Ne", pronunciation: "/wʌt/", example: "What is your name?" },
        { english: "Who", turkish: "Kim", pronunciation: "/huː/", example: "Who is that person?" },
        { english: "When", turkish: "Ne zaman", pronunciation: "/wen/", example: "When do you wake up?" },
        { english: "Why", turkish: "Neden", pronunciation: "/waɪ/", example: "Why are you late?" },
        { english: "How", turkish: "Nasıl", pronunciation: "/haʊ/", example: "How are you?" },
        { english: "Which", turkish: "Hangi", pronunciation: "/wɪtʃ/", example: "Which book do you want?" },
        
        // Temel Kelimeler - Cevap Kelimeleri
        { english: "Yes", turkish: "Evet", pronunciation: "/jes/", example: "Yes, I agree with you." },
        { english: "No", turkish: "Hayır", pronunciation: "/noʊ/", example: "No, I don't want to go." },
        { english: "Maybe", turkish: "Belki", pronunciation: "/ˈmeɪbi/", example: "Maybe I'll come tomorrow." },
        { english: "Of course", turkish: "Tabii ki", pronunciation: "/əv kɔːrs/", example: "Of course, I'll help you." },
        
        // Temel Kelimeler - İnsanlar ve Meslek
        { english: "Person", turkish: "Kişi", pronunciation: "/ˈpɜːrsən/", example: "She is a nice person." },
        { english: "Man", turkish: "Adam", pronunciation: "/mæn/", example: "The man is tall." },
        { english: "Woman", turkish: "Kadın", pronunciation: "/ˈwʊmən/", example: "The woman is a doctor." },
        { english: "Boy", turkish: "Erkek çocuk", pronunciation: "/bɔɪ/", example: "The boy is playing football." },
        { english: "Girl", turkish: "Kız çocuk", pronunciation: "/ɡɜːrl/", example: "The girl is reading a book." },
        { english: "Friend", turkish: "Arkadaş", pronunciation: "/frend/", example: "She is my best friend." },
        { english: "Doctor", turkish: "Doktor", pronunciation: "/ˈdɑːktər/", example: "I need to see a doctor." },
        { english: "Nurse", turkish: "Hemşire", pronunciation: "/nɜːrs/", example: "The nurse is very kind." },
        { english: "Police", turkish: "Polis", pronunciation: "/pəˈliːs/", example: "Call the police!" },
        { english: "Driver", turkish: "Şoför", pronunciation: "/ˈdraɪvər/", example: "The bus driver is careful." }
    ],
    A2: [
        // Sıfatlar ve Tanımlamalar
        { english: "Beautiful", turkish: "Güzel", pronunciation: "/ˈbjuːtɪfəl/", example: "The sunset is beautiful." },
        { english: "Ugly", turkish: "Çirkin", pronunciation: "/ˈʌɡli/", example: "That building is ugly." },
        { english: "Important", turkish: "Önemli", pronunciation: "/ɪmˈpɔːrtənt/", example: "This is very important." },
        { english: "Difficult", turkish: "Zor", pronunciation: "/ˈdɪfɪkəlt/", example: "The exam was difficult." },
        { english: "Easy", turkish: "Kolay", pronunciation: "/ˈiːzi/", example: "This test is easy." },
        { english: "Interesting", turkish: "İlginç", pronunciation: "/ˈɪntrəstɪŋ/", example: "That's an interesting story." },
        { english: "Boring", turkish: "Sıkıcı", pronunciation: "/ˈbɔːrɪŋ/", example: "The movie was boring." },
        { english: "Comfortable", turkish: "Rahat", pronunciation: "/ˈkʌmftərbəl/", example: "This chair is comfortable." },
        { english: "Uncomfortable", turkish: "Rahatsız", pronunciation: "/ʌnˈkʌmftərbəl/", example: "These shoes are uncomfortable." },
        { english: "Expensive", turkish: "Pahalı", pronunciation: "/ɪkˈspensɪv/", example: "This car is expensive." },
        { english: "Cheap", turkish: "Ucuz", pronunciation: "/tʃiːp/", example: "These shoes are cheap." },
        { english: "Free", turkish: "Ücretsiz", pronunciation: "/friː/", example: "The museum is free today." },
        { english: "Busy", turkish: "Meşgul", pronunciation: "/ˈbɪzi/", example: "I'm busy right now." },
        { english: "Empty", turkish: "Boş", pronunciation: "/ˈempti/", example: "The room is empty." },
        { english: "Full", turkish: "Dolu", pronunciation: "/fʊl/", example: "The glass is full of water." },
        { english: "Clean", turkish: "Temiz", pronunciation: "/kliːn/", example: "The kitchen is clean." },
        { english: "Dirty", turkish: "Kirli", pronunciation: "/ˈdɜːrti/", example: "My clothes are dirty." },
        { english: "Quiet", turkish: "Sessiz", pronunciation: "/ˈkwaɪət/", example: "The library is quiet." },
        { english: "Loud", turkish: "Gürültülü", pronunciation: "/laʊd/", example: "The music is too loud." },
        { english: "Strong", turkish: "Güçlü", pronunciation: "/strɔːŋ/", example: "He is very strong." },
        { english: "Weak", turkish: "Zayıf", pronunciation: "/wiːk/", example: "I feel weak today." },
        { english: "Rich", turkish: "Zengin", pronunciation: "/rɪtʃ/", example: "He is a rich man." },
        { english: "Poor", turkish: "Fakir", pronunciation: "/pʊr/", example: "They help poor families." },
        { english: "Famous", turkish: "Ünlü", pronunciation: "/ˈfeɪməs/", example: "She is a famous actress." },
        { english: "Popular", turkish: "Popüler", pronunciation: "/ˈpɑːpjələr/", example: "This song is very popular." },
        { english: "Dangerous", turkish: "Tehlikeli", pronunciation: "/ˈdeɪndʒərəs/", example: "Smoking is dangerous." },
        { english: "Safe", turkish: "Güvenli", pronunciation: "/seɪf/", example: "This neighborhood is safe." },
        { english: "Modern", turkish: "Modern", pronunciation: "/ˈmɑːdərn/", example: "This is a modern building." },
        { english: "Traditional", turkish: "Geleneksel", pronunciation: "/trəˈdɪʃənəl/", example: "We ate traditional food." },
        { english: "Fresh", turkish: "Taze", pronunciation: "/freʃ/", example: "I like fresh vegetables." },
        { english: "Delicious", turkish: "Lezzetli", pronunciation: "/dɪˈlɪʃəs/", example: "This cake is delicious." },
        { english: "Terrible", turkish: "Korkunç", pronunciation: "/ˈterəbəl/", example: "The weather is terrible." },
        { english: "Wonderful", turkish: "Harika", pronunciation: "/ˈwʌndərfəl/", example: "We had a wonderful time." },
        { english: "Perfect", turkish: "Mükemmel", pronunciation: "/ˈpɜːrfɪkt/", example: "Your English is perfect." },
        { english: "Terrible", turkish: "Berbat", pronunciation: "/ˈterəbəl/", example: "I had a terrible day." },
        
        // İş ve Çalışma Hayatı
        { english: "Work", turkish: "İş", pronunciation: "/wɜːrk/", example: "I have a lot of work to do." },
        { english: "Job", turkish: "Meslek", pronunciation: "/dʒɑːb/", example: "She has a good job." },
        { english: "Career", turkish: "Kariyer", pronunciation: "/kəˈrɪr/", example: "He has a successful career." },
        { english: "Office", turkish: "Ofis", pronunciation: "/ˈɔːfɪs/", example: "I work in an office." },
        { english: "Boss", turkish: "Patron", pronunciation: "/bɔːs/", example: "My boss is very kind." },
        { english: "Employee", turkish: "Çalışan", pronunciation: "/ɪmˈplɔɪiː/", example: "She is a good employee." },
        { english: "Colleague", turkish: "Meslektaş", pronunciation: "/ˈkɑːliːɡ/", example: "My colleague helped me." },
        { english: "Meeting", turkish: "Toplantı", pronunciation: "/ˈmiːtɪŋ/", example: "We have a meeting at 3 PM." },
        { english: "Project", turkish: "Proje", pronunciation: "/ˈprɑːdʒekt/", example: "This project is important." },
        { english: "Business", turkish: "İş", pronunciation: "/ˈbɪznəs/", example: "He owns a small business." },
        { english: "Company", turkish: "Şirket", pronunciation: "/ˈkʌmpəni/", example: "I work for a big company." },
        { english: "Customer", turkish: "Müşteri", pronunciation: "/ˈkʌstəmər/", example: "The customer is always right." },
        { english: "Service", turkish: "Hizmet", pronunciation: "/ˈsɜːrvɪs/", example: "The service here is excellent." },
        { english: "Money", turkish: "Para", pronunciation: "/ˈmʌni/", example: "I need to save some money." },
        { english: "Salary", turkish: "Maaş", pronunciation: "/ˈsæləri/", example: "My salary is good." },
        { english: "Price", turkish: "Fiyat", pronunciation: "/praɪs/", example: "What's the price of this shirt?" },
        { english: "Sale", turkish: "İndirim", pronunciation: "/seɪl/", example: "There's a big sale at the mall." },
        { english: "Buy", turkish: "Satın almak", pronunciation: "/baɪ/", example: "I want to buy a new phone." },
        { english: "Sell", turkish: "Satmak", pronunciation: "/sel/", example: "They sell fresh vegetables." },
        { english: "Pay", turkish: "Ödemek", pronunciation: "/peɪ/", example: "I need to pay the bill." },
        { english: "Cost", turkish: "Maliyet", pronunciation: "/kɔːst/", example: "How much does it cost?" },
        { english: "Budget", turkish: "Bütçe", pronunciation: "/ˈbʌdʒɪt/", example: "We need to plan our budget." },
        { english: "Investment", turkish: "Yatırım", pronunciation: "/ɪnˈvestmənt/", example: "This is a good investment." },
        { english: "Profit", turkish: "Kar", pronunciation: "/ˈprɑːfɪt/", example: "The company made a profit." },
        { english: "Loss", turkish: "Zarar", pronunciation: "/lɔːs/", example: "They suffered a big loss." },
        
        // Teknoloji ve İletişim
        { english: "Computer", turkish: "Bilgisayar", pronunciation: "/kəmˈpjuːtər/", example: "I need a new computer for work." },
        { english: "Laptop", turkish: "Dizüstü bilgisayar", pronunciation: "/ˈlæptɑːp/", example: "I carry my laptop everywhere." },
        { english: "Phone", turkish: "Telefon", pronunciation: "/foʊn/", example: "My phone is broken." },
        { english: "Smartphone", turkish: "Akıllı telefon", pronunciation: "/ˈsmɑːrtfoʊn/", example: "Everyone has a smartphone now." },
        { english: "Internet", turkish: "İnternet", pronunciation: "/ˈɪntərnet/", example: "The internet connection is slow." },
        { english: "Website", turkish: "Web sitesi", pronunciation: "/ˈwebsaɪt/", example: "This website is very useful." },
        { english: "Email", turkish: "E-posta", pronunciation: "/ˈiːmeɪl/", example: "I sent you an email yesterday." },
        { english: "Message", turkish: "Mesaj", pronunciation: "/ˈmesɪdʒ/", example: "Did you get my message?" },
        { english: "Social media", turkish: "Sosyal medya", pronunciation: "/ˈsoʊʃəl ˈmiːdiə/", example: "I don't use social media much." },
        { english: "Application", turkish: "Uygulama", pronunciation: "/ˌæplɪˈkeɪʃən/", example: "Download this application." },
        { english: "Software", turkish: "Yazılım", pronunciation: "/ˈsɔːftwer/", example: "This software is very helpful." },
        { english: "Password", turkish: "Şifre", pronunciation: "/ˈpæswɜːrd/", example: "Don't forget your password." },
        { english: "Download", turkish: "İndirmek", pronunciation: "/ˈdaʊnloʊd/", example: "I need to download this file." },
        { english: "Upload", turkish: "Yüklemek", pronunciation: "/ˈʌploʊd/", example: "Please upload your photo." },
        { english: "Technology", turkish: "Teknoloji", pronunciation: "/tekˈnɑːlədʒi/", example: "Technology changes rapidly." },
        { english: "Communication", turkish: "İletişim", pronunciation: "/kəˌmjuːnɪˈkeɪʃən/", example: "Good communication is essential." },
        { english: "Information", turkish: "Bilgi", pronunciation: "/ˌɪnfərˈmeɪʃən/", example: "I need more information." },
        { english: "Data", turkish: "Veri", pronunciation: "/ˈdeɪtə/", example: "We need to analyze this data." },
        { english: "File", turkish: "Dosya", pronunciation: "/faɪl/", example: "Save this file on your computer." },
        { english: "Document", turkish: "Belge", pronunciation: "/ˈdɑːkjəmənt/", example: "Please sign this document." },
        
        // Ulaşım ve Seyahat
        { english: "Travel", turkish: "Seyahat", pronunciation: "/ˈtrævəl/", example: "I love to travel abroad." },
        { english: "Trip", turkish: "Gezi", pronunciation: "/trɪp/", example: "We had a nice trip." },
        { english: "Journey", turkish: "Yolculuk", pronunciation: "/ˈdʒɜːrni/", example: "The journey was long." },
        { english: "Vacation", turkish: "Tatil", pronunciation: "/vəˈkeɪʃən/", example: "I'm going on vacation." },
        { english: "Holiday", turkish: "Bayram", pronunciation: "/ˈhɑːlədeɪ/", example: "Happy holiday!" },
        { english: "Car", turkish: "Araba", pronunciation: "/kɑːr/", example: "I drive my car to work." },
        { english: "Bus", turkish: "Otobüs", pronunciation: "/bʌs/", example: "I take the bus to school." },
        { english: "Train", turkish: "Tren", pronunciation: "/treɪn/", example: "The train is fast." },
        { english: "Airplane", turkish: "Uçak", pronunciation: "/ˈerpleɪn/", example: "We traveled by airplane." },
        { english: "Bicycle", turkish: "Bisiklet", pronunciation: "/ˈbaɪsɪkəl/", example: "I ride my bicycle to work." },
        { english: "Motorcycle", turkish: "Motosiklet", pronunciation: "/ˈmoʊtərsaɪkəl/", example: "He has a red motorcycle." },
        { english: "Taxi", turkish: "Taksi", pronunciation: "/ˈtæksi/", example: "Let's take a taxi." },
        { english: "Ship", turkish: "Gemi", pronunciation: "/ʃɪp/", example: "The ship is in the harbor." },
        { english: "Boat", turkish: "Tekne", pronunciation: "/boʊt/", example: "We went fishing in a boat." },
        { english: "Airport", turkish: "Havaalanı", pronunciation: "/ˈerpɔːrt/", example: "I'm going to the airport." },
        { english: "Station", turkish: "İstasyon", pronunciation: "/ˈsteɪʃən/", example: "The train station is crowded." },
        { english: "Ticket", turkish: "Bilet", pronunciation: "/ˈtɪkɪt/", example: "I need to buy a ticket." },
        { english: "Passport", turkish: "Pasaport", pronunciation: "/ˈpæspɔːrt/", example: "Don't forget your passport." },
        { english: "Luggage", turkish: "Bagaj", pronunciation: "/ˈlʌɡɪdʒ/", example: "My luggage is heavy." },
        { english: "Suitcase", turkish: "Bavul", pronunciation: "/ˈsuːtkeɪs/", example: "Pack your suitcase carefully." },
        { english: "Map", turkish: "Harita", pronunciation: "/mæp/", example: "I need a map of the city." },
        { english: "Direction", turkish: "Yön", pronunciation: "/dəˈrekʃən/", example: "Can you give me directions?" },
        { english: "Distance", turkish: "Mesafe", pronunciation: "/ˈdɪstəns/", example: "What's the distance to the airport?" },
        
        // Yerler ve Binalar
        { english: "Hotel", turkish: "Otel", pronunciation: "/hoʊˈtel/", example: "We stayed at a nice hotel." },
        { english: "Restaurant", turkish: "Restoran", pronunciation: "/ˈrestərɑːnt/", example: "Let's eat at that restaurant." },
        { english: "Cafe", turkish: "Kafe", pronunciation: "/kæˈfeɪ/", example: "I like this cozy cafe." },
        { english: "Shop", turkish: "Dükkan", pronunciation: "/ʃɑːp/", example: "I bought bread from the shop." },
        { english: "Store", turkish: "Mağaza", pronunciation: "/stɔːr/", example: "The store closes at 9 PM." },
        { english: "Market", turkish: "Market", pronunciation: "/ˈmɑːrkɪt/", example: "I go to the market every week." },
        { english: "Supermarket", turkish: "Süpermarket", pronunciation: "/ˈsuːpərmɑːrkɪt/", example: "I buy groceries at the supermarket." },
        { english: "Mall", turkish: "Alışveriş merkezi", pronunciation: "/mɔːl/", example: "Let's go to the mall." },
        { english: "Bank", turkish: "Banka", pronunciation: "/bæŋk/", example: "I need to go to the bank." },
        { english: "Hospital", turkish: "Hastane", pronunciation: "/ˈhɑːspɪtəl/", example: "He's in the hospital." },
        { english: "Pharmacy", turkish: "Eczane", pronunciation: "/ˈfɑːrməsi/", example: "I need to buy medicine at the pharmacy." },
        { english: "Library", turkish: "Kütüphane", pronunciation: "/ˈlaɪbreri/", example: "I study at the library." },
        { english: "Museum", turkish: "Müze", pronunciation: "/mjuˈziːəm/", example: "The museum has ancient artifacts." },
        { english: "Theater", turkish: "Tiyatro", pronunciation: "/ˈθiːətər/", example: "We're going to the theater tonight." },
        { english: "Cinema", turkish: "Sinema", pronunciation: "/ˈsɪnəmə/", example: "Let's go to the cinema." },
        { english: "Park", turkish: "Park", pronunciation: "/pɑːrk/", example: "Children play in the park." },
        { english: "Garden", turkish: "Bahçe", pronunciation: "/ˈɡɑːrdən/", example: "She waters the garden." },
        { english: "Beach", turkish: "Plaj", pronunciation: "/biːtʃ/", example: "We went to the beach." },
        { english: "Mountain", turkish: "Dağ", pronunciation: "/ˈmaʊntən/", example: "The mountain is very high." },
        { english: "River", turkish: "Nehir", pronunciation: "/ˈrɪvər/", example: "The river flows to the sea." },
        { english: "Lake", turkish: "Göl", pronunciation: "/leɪk/", example: "We swim in the lake." },
        { english: "Forest", turkish: "Orman", pronunciation: "/ˈfɔːrəst/", example: "We walked through the forest." },
        { english: "Desert", turkish: "Çöl", pronunciation: "/ˈdezərt/", example: "The desert is very hot." },
        { english: "Island", turkish: "Ada", pronunciation: "/ˈaɪlənd/", example: "We visited a beautiful island." },
        
        // Spor ve Aktiviteler
        { english: "Sport", turkish: "Spor", pronunciation: "/spɔːrt/", example: "I love playing sports." },
        { english: "Exercise", turkish: "Egzersiz", pronunciation: "/ˈeksərsaɪz/", example: "Exercise keeps you healthy." },
        { english: "Football", turkish: "Futbol", pronunciation: "/ˈfʊtbɔːl/", example: "Football is popular worldwide." },
        { english: "Basketball", turkish: "Basketbol", pronunciation: "/ˈbæskɪtbɔːl/", example: "He plays basketball well." },
        { english: "Tennis", turkish: "Tenis", pronunciation: "/ˈtenɪs/", example: "She plays tennis every weekend." },
        { english: "Swimming", turkish: "Yüzme", pronunciation: "/ˈswɪmɪŋ/", example: "Swimming is good exercise." },
        { english: "Running", turkish: "Koşu", pronunciation: "/ˈrʌnɪŋ/", example: "I go running every morning." },
        { english: "Cycling", turkish: "Bisiklet sürme", pronunciation: "/ˈsaɪklɪŋ/", example: "Cycling is fun and healthy." },
        { english: "Dancing", turkish: "Dans", pronunciation: "/ˈdænsɪŋ/", example: "She loves dancing." },
        { english: "Singing", turkish: "Şarkı söyleme", pronunciation: "/ˈsɪŋɪŋ/", example: "He's good at singing." },
        { english: "Music", turkish: "Müzik", pronunciation: "/ˈmjuːzɪk/", example: "I listen to music while studying." },
        { english: "Movie", turkish: "Film", pronunciation: "/ˈmuːvi/", example: "Let's watch a movie tonight." },
        { english: "Game", turkish: "Oyun", pronunciation: "/ɡeɪm/", example: "Children love playing games." },
        { english: "Hobby", turkish: "Hobi", pronunciation: "/ˈhɑːbi/", example: "Reading is my hobby." },
        { english: "Competition", turkish: "Yarışma", pronunciation: "/ˌkɑːmpəˈtɪʃən/", example: "She won the competition." },
        { english: "Team", turkish: "Takım", pronunciation: "/tiːm/", example: "Our team played well." },
        { english: "Player", turkish: "Oyuncu", pronunciation: "/ˈpleɪər/", example: "He's a professional player." },
        { english: "Coach", turkish: "Antrenör", pronunciation: "/koʊtʃ/", example: "The coach is very experienced." },
        { english: "Training", turkish: "Antrenman", pronunciation: "/ˈtreɪnɪŋ/", example: "I have training every Tuesday." },
        
        // Sağlık ve Vücut
        { english: "Health", turkish: "Sağlık", pronunciation: "/helθ/", example: "Health is very important." },
        { english: "Sick", turkish: "Hasta", pronunciation: "/sɪk/", example: "I'm feeling sick today." },
        { english: "Healthy", turkish: "Sağlıklı", pronunciation: "/ˈhelθi/", example: "Eating vegetables is healthy." },
        { english: "Pain", turkish: "Ağrı", pronunciation: "/peɪn/", example: "I have a pain in my back." },
        { english: "Medicine", turkish: "İlaç", pronunciation: "/ˈmedəsən/", example: "Take this medicine twice a day." },
        { english: "Doctor", turkish: "Doktor", pronunciation: "/ˈdɑːktər/", example: "I need to see a doctor." },
        { english: "Nurse", turkish: "Hemşire", pronunciation: "/nɜːrs/", example: "The nurse is very kind." },
        { english: "Treatment", turkish: "Tedavi", pronunciation: "/ˈtriːtmənt/", example: "The treatment was successful." },
        { english: "Surgery", turkish: "Ameliyat", pronunciation: "/ˈsɜːrdʒəri/", example: "He needs surgery on his knee." },
        { english: "Diet", turkish: "Diyet", pronunciation: "/ˈdaɪət/", example: "I'm on a healthy diet." },
        { english: "Vitamin", turkish: "Vitamin", pronunciation: "/ˈvaɪtəmən/", example: "Oranges have vitamin C." },
        { english: "Stress", turkish: "Stres", pronunciation: "/stres/", example: "Work causes me stress." },
        { english: "Rest", turkish: "Dinlenme", pronunciation: "/rest/", example: "You need more rest." },
        { english: "Energy", turkish: "Enerji", pronunciation: "/ˈenərdʒi/", example: "I have no energy today." },
        { english: "Fitness", turkish: "Kondisyon", pronunciation: "/ˈfɪtnəs/", example: "I go to the fitness center." },
        { english: "Weight", turkish: "Ağırlık", pronunciation: "/weɪt/", example: "I need to lose weight." },
        { english: "Height", turkish: "Boy", pronunciation: "/haɪt/", example: "What's your height?" },
        
        // Eğitim ve Öğrenme
        { english: "Education", turkish: "Eğitim", pronunciation: "/ˌedʒuˈkeɪʃən/", example: "Education is the key to success." },
        { english: "University", turkish: "Üniversite", pronunciation: "/ˌjuːnəˈvɜːrsəti/", example: "I study at the university." },
        { english: "College", turkish: "Kolej", pronunciation: "/ˈkɑːlɪdʒ/", example: "She goes to college." },
        { english: "School", turkish: "Okul", pronunciation: "/skuːl/", example: "I go to school every day." },
        { english: "Class", turkish: "Sınıf", pronunciation: "/klæs/", example: "I have English class today." },
        { english: "Course", turkish: "Kurs", pronunciation: "/kɔːrs/", example: "I'm taking a computer course." },
        { english: "Subject", turkish: "Ders", pronunciation: "/ˈsʌbdʒɪkt/", example: "Math is my favorite subject." },
        { english: "Exam", turkish: "Sınav", pronunciation: "/ɪɡˈzæm/", example: "I have an exam tomorrow." },
        { english: "Test", turkish: "Test", pronunciation: "/test/", example: "The test was difficult." },
        { english: "Homework", turkish: "Ödev", pronunciation: "/ˈhoʊmwɜːrk/", example: "I need to do my homework." },
        { english: "Assignment", turkish: "Görev", pronunciation: "/əˈsaɪnmənt/", example: "The assignment is due tomorrow." },
        { english: "Study", turkish: "Çalışmak", pronunciation: "/ˈstʌdi/", example: "I study English every day." },
        { english: "Learn", turkish: "Öğrenmek", pronunciation: "/lɜːrn/", example: "I want to learn Spanish." },
        { english: "Teach", turkish: "Öğretmek", pronunciation: "/tiːtʃ/", example: "She teaches mathematics." },
        { english: "Knowledge", turkish: "Bilgi", pronunciation: "/ˈnɑːlɪdʒ/", example: "Knowledge is power." },
        { english: "Skill", turkish: "Beceri", pronunciation: "/skɪl/", example: "He has good computer skills." },
        { english: "Language", turkish: "Dil", pronunciation: "/ˈlæŋɡwɪdʒ/", example: "English is an international language." },
        { english: "Grammar", turkish: "Gramer", pronunciation: "/ˈɡræmər/", example: "Grammar is important in language learning." },
        { english: "Vocabulary", turkish: "Kelime hazinesi", pronunciation: "/voʊˈkæbjəleri/", example: "I'm learning new vocabulary." },
        { english: "Pronunciation", turkish: "Telaffuz", pronunciation: "/prəˌnʌnsiˈeɪʃən/", example: "Your pronunciation is very good." },
        { english: "Reading", turkish: "Okuma", pronunciation: "/ˈriːdɪŋ/", example: "Reading improves your vocabulary." },
        { english: "Writing", turkish: "Yazma", pronunciation: "/ˈraɪtɪŋ/", example: "Writing helps you practice grammar." },
        { english: "Listening", turkish: "Dinleme", pronunciation: "/ˈlɪsənɪŋ/", example: "Listening to music helps with pronunciation." },
        { english: "Speaking", turkish: "Konuşma", pronunciation: "/ˈspiːkɪŋ/", example: "Speaking practice is very important." },
        
        // Hava Durumu ve Doğa
        { english: "Weather", turkish: "Hava durumu", pronunciation: "/ˈweðər/", example: "The weather is nice today." },
        { english: "Climate", turkish: "İklim", pronunciation: "/ˈklaɪmət/", example: "The climate here is tropical." },
        { english: "Season", turkish: "Mevsim", pronunciation: "/ˈsiːzən/", example: "Spring is my favorite season." },
        { english: "Spring", turkish: "İlkbahar", pronunciation: "/sprɪŋ/", example: "Flowers bloom in spring." },
        { english: "Summer", turkish: "Yaz", pronunciation: "/ˈsʌmər/", example: "Summer is very hot here." },
        { english: "Autumn", turkish: "Sonbahar", pronunciation: "/ˈɔːtəm/", example: "Leaves fall in autumn." },
        { english: "Winter", turkish: "Kış", pronunciation: "/ˈwɪntər/", example: "Winter is cold and snowy." },
        { english: "Temperature", turkish: "Sıcaklık", pronunciation: "/ˈtemprətʃər/", example: "The temperature is 25 degrees." },
        { english: "Sunny", turkish: "Güneşli", pronunciation: "/ˈsʌni/", example: "It's a sunny day." },
        { english: "Cloudy", turkish: "Bulutlu", pronunciation: "/ˈklaʊdi/", example: "The sky is cloudy." },
        { english: "Rainy", turkish: "Yağmurlu", pronunciation: "/ˈreɪni/", example: "It's a rainy afternoon." },
        { english: "Snowy", turkish: "Karlı", pronunciation: "/ˈsnoʊi/", example: "It's a snowy winter day." },
        { english: "Windy", turkish: "Rüzgarlı", pronunciation: "/ˈwɪndi/", example: "It's very windy today." },
        { english: "Storm", turkish: "Fırtına", pronunciation: "/stɔːrm/", example: "There's a storm coming." },
        { english: "Thunder", turkish: "Gök gürültüsü", pronunciation: "/ˈθʌndər/", example: "I heard thunder last night." },
        { english: "Lightning", turkish: "Şimşek", pronunciation: "/ˈlaɪtnɪŋ/", example: "Lightning lit up the sky." },
        { english: "Fog", turkish: "Sis", pronunciation: "/fɔːɡ/", example: "There's thick fog this morning." },
        { english: "Ice", turkish: "Buz", pronunciation: "/aɪs/", example: "The lake is covered with ice." },
        
        // Alışveriş ve Günlük Yaşam
        { english: "Shopping", turkish: "Alışveriş", pronunciation: "/ˈʃɒpɪŋ/", example: "Let's go shopping this weekend." },
        { english: "Customer", turkish: "Müşteri", pronunciation: "/ˈkʌstəmər/", example: "The customer is always right." },
        { english: "Cashier", turkish: "Kasiyer", pronunciation: "/kæˈʃɪr/", example: "The cashier was very friendly." },
        { english: "Receipt", turkish: "Fiş", pronunciation: "/rɪˈsiːt/", example: "Keep your receipt for returns." },
        { english: "Discount", turkish: "İndirim", pronunciation: "/ˈdɪskaʊnt/", example: "There's a 20% discount today." },
        { english: "Credit card", turkish: "Kredi kartı", pronunciation: "/ˈkredɪt kɑːrd/", example: "I'll pay with my credit card." },
        { english: "Cash", turkish: "Nakit", pronunciation: "/kæʃ/", example: "I prefer to pay in cash." },
        { english: "Change", turkish: "Para üstü", pronunciation: "/tʃeɪndʒ/", example: "Here's your change." },
        { english: "Size", turkish: "Beden", pronunciation: "/saɪz/", example: "What size do you wear?" },
        { english: "Color", turkish: "Renk", pronunciation: "/ˈkʌlər/", example: "I like this color." },
        { english: "Quality", turkish: "Kalite", pronunciation: "/ˈkwɑːləti/", example: "This product has good quality." },
        { english: "Brand", turkish: "Marka", pronunciation: "/brænd/", example: "What brand do you prefer?" },
        { english: "Product", turkish: "Ürün", pronunciation: "/ˈprɑːdʌkt/", example: "This is a new product." },
        { english: "Package", turkish: "Paket", pronunciation: "/ˈpækɪdʒ/", example: "The package arrived today." },
        { english: "Delivery", turkish: "Teslimat", pronunciation: "/dɪˈlɪvəri/", example: "Free delivery for orders over $50." },
        
        // Duygular ve Kişilik
        { english: "Experience", turkish: "Deneyim", pronunciation: "/ɪkˈspɪriəns/", example: "I have work experience." },
        { english: "Opportunity", turkish: "Fırsat", pronunciation: "/ˌɑːpərˈtuːnəti/", example: "This is a great opportunity." },
        { english: "Environment", turkish: "Çevre", pronunciation: "/ɪnˈvaɪrənmənt/", example: "We must protect the environment." },
        { english: "Culture", turkish: "Kültür", pronunciation: "/ˈkʌltʃər/", example: "I'm interested in different cultures." },
        { english: "Tradition", turkish: "Gelenek", pronunciation: "/trəˈdɪʃən/", example: "This is an old tradition." },
        { english: "Custom", turkish: "Adet", pronunciation: "/ˈkʌstəm/", example: "It's a local custom." },
        { english: "Habit", turkish: "Alışkanlık", pronunciation: "/ˈhæbɪt/", example: "Reading is a good habit." },
        { english: "Routine", turkish: "Rutin", pronunciation: "/ruːˈtiːn/", example: "I have a morning routine." },
        { english: "Schedule", turkish: "Program", pronunciation: "/ˈskedʒuːl/", example: "What's your schedule today?" },
        { english: "Plan", turkish: "Plan", pronunciation: "/plæn/", example: "Do you have any plans tonight?" },
        { english: "Goal", turkish: "Hedef", pronunciation: "/ɡoʊl/", example: "My goal is to learn English." },
        { english: "Dream", turkish: "Rüya", pronunciation: "/driːm/", example: "My dream is to travel the world." },
        { english: "Hope", turkish: "Umut", pronunciation: "/hoʊp/", example: "I hope you feel better." },
        { english: "Wish", turkish: "Dilek", pronunciation: "/wɪʃ/", example: "Make a wish!" },
        { english: "Success", turkish: "Başarı", pronunciation: "/səkˈses/", example: "Hard work leads to success." },
        { english: "Failure", turkish: "Başarısızlık", pronunciation: "/ˈfeɪljər/", example: "Don't be afraid of failure." },
        { english: "Mistake", turkish: "Hata", pronunciation: "/mɪˈsteɪk/", example: "Everyone makes mistakes." },
        { english: "Problem", turkish: "Problem", pronunciation: "/ˈprɑːbləm/", example: "We need to solve this problem." },
        { english: "Solution", turkish: "Çözüm", pronunciation: "/səˈluːʃən/", example: "I found a solution." },
        { english: "Answer", turkish: "Cevap", pronunciation: "/ˈænsər/", example: "Do you know the answer?" },
        { english: "Question", turkish: "Soru", pronunciation: "/ˈkwestʃən/", example: "I have a question for you." },
        { english: "Idea", turkish: "Fikir", pronunciation: "/aɪˈdiːə/", example: "That's a great idea!" },
        { english: "Opinion", turkish: "Görüş", pronunciation: "/əˈpɪnjən/", example: "What's your opinion?" },
        { english: "Advice", turkish: "Tavsiye", pronunciation: "/ədˈvaɪs/", example: "Can you give me some advice?" },
        { english: "Suggestion", turkish: "Öneri", pronunciation: "/səɡˈdʒestʃən/", example: "I have a suggestion." }
    ],
    B1: [
        { english: "Achievement", turkish: "Başarı", pronunciation: "/əˈtʃiːvmənt/", example: "Getting a promotion was a great achievement." },
        { english: "Advantage", turkish: "Avantaj", pronunciation: "/ədˈvæntɪdʒ/", example: "Being bilingual is a significant advantage." },
        { english: "Appointment", turkish: "Randevu", pronunciation: "/əˈpɔɪntmənt/", example: "I have a doctor's appointment tomorrow." },
        { english: "Attitude", turkish: "Tutum", pronunciation: "/ˈætɪtjuːd/", example: "I like his positive attitude toward challenges." },
        { english: "Background", turkish: "Geçmiş", pronunciation: "/ˈbækɡraʊnd/", example: "She has a background in marketing." },
        { english: "Balance", turkish: "Denge", pronunciation: "/ˈbæləns/", example: "Work-life balance is important." },
        { english: "Behavior", turkish: "Davranış", pronunciation: "/bɪˈheɪvjər/", example: "His behavior was inappropriate at the meeting." },
        { english: "Benefit", turkish: "Fayda", pronunciation: "/ˈbenɪfɪt/", example: "Exercise has many health benefits." },
        { english: "Challenge", turkish: "Zorluk", pronunciation: "/ˈtʃælɪndʒ/", example: "Learning a new language is a challenge." },
        { english: "Choice", turkish: "Seçim", pronunciation: "/tʃɔɪs/", example: "You have to make a choice soon." }
    ],
    B2: [
        { english: "Ambiguous", turkish: "Belirsiz", pronunciation: "/æmˈbɪɡjuəs/", example: "His answer was ambiguous and confusing." },
        { english: "Anticipate", turkish: "Öngörmek", pronunciation: "/ænˈtɪsɪpeɪt/", example: "We didn't anticipate such a strong reaction." },
        { english: "Arbitrary", turkish: "Keyfi", pronunciation: "/ˈɑːrbɪtreri/", example: "The decision seems arbitrary and unfair." },
        { english: "Articulate", turkish: "İfade etmek", pronunciation: "/ɑːrˈtɪkjuleɪt/", example: "She articulated her ideas clearly." },
        { english: "Assertion", turkish: "İddia", pronunciation: "/əˈsɜːrʃən/", example: "His assertion was supported by evidence." },
        { english: "Assumption", turkish: "Varsayım", pronunciation: "/əˈsʌmpʃən/", example: "Your assumption is incorrect." },
        { english: "Authentic", turkish: "Otantik", pronunciation: "/ɔːˈθentɪk/", example: "The restaurant serves authentic Italian cuisine." },
        { english: "Comprehensive", turkish: "Kapsamlı", pronunciation: "/ˌkɒmprɪˈhensɪv/", example: "The report provides a comprehensive analysis." },
        { english: "Conceive", turkish: "Tasarlamak", pronunciation: "/kənˈsiːv/", example: "It's hard to conceive such a complex project." },
        { english: "Contemplate", turkish: "Düşünmek", pronunciation: "/ˈkɒntəmpleɪt/", example: "I'm contemplating a career change." }
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
    
    const userLevel = currentUser.level || 'A1';
    
    const listeningExercises = {
        A1: [
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
            },
            {
                text: "Excuse me, where is the nearest bus stop?",
                question: "What is the person looking for?",
                options: ["A restaurant", "A hotel", "A bus stop", "A museum"],
                correct: 2
            },
            {
                text: "My name is John. I'm from Canada.",
                question: "Where is the person from?",
                options: ["America", "England", "Australia", "Canada"],
                correct: 3
            }
        ],
        A2: [
            {
                text: "I've been working here for three years now.",
                question: "How long has the person been working there?",
                options: ["3 months", "3 weeks", "3 years", "3 days"],
                correct: 2
            },
            {
                text: "If it rains tomorrow, we'll cancel the picnic.",
                question: "What will happen if it rains?",
                options: ["They will go swimming", "They will cancel the picnic", "They will stay home", "They will bring umbrellas"],
                correct: 1
            },
            {
                text: "I'd rather watch a movie than go to a restaurant.",
                question: "What does the person prefer to do?",
                options: ["Go to a restaurant", "Watch a movie", "Stay at home", "Go shopping"],
                correct: 1
            }
        ],
        B1: [
            {
                text: "I wish I had studied harder for the exam.",
                question: "What does the speaker regret?",
                options: ["Taking the exam", "Not studying enough", "Choosing the wrong subject", "Being late"],
                correct: 1
            },
            {
                text: "By the time we arrived, the movie had already started.",
                question: "When did they arrive?",
                options: ["Before the movie started", "After the movie started", "When the movie ended", "During the intermission"],
                correct: 1
            },
            {
                text: "If I were you, I would accept that job offer.",
                question: "What is the speaker doing?",
                options: ["Giving advice", "Making a complaint", "Expressing regret", "Making a prediction"],
                correct: 0
            }
        ],
        B2: [
            {
                text: "Had I known about the traffic, I would have left earlier.",
                question: "What is implied?",
                options: ["The person knew about the traffic", "The person left early", "The person didn't know about the traffic", "The person avoided the traffic"],
                correct: 2
            },
            {
                text: "Not only did she win the competition, but she also broke the record.",
                question: "What did the woman achieve?",
                options: ["She only won the competition", "She only broke the record", "She won the competition and broke the record", "She neither won nor broke the record"],
                correct: 2
            }
        ]
    };
    
    const exercises = listeningExercises[userLevel] || listeningExercises.A1;
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
    
    const speakingExercises = {
        A1: [
            {
                prompt: "Kendinizi tanıtın",
                example: "Hello, my name is John. I am from London. I work as a teacher.",
                tips: ["Adınızı söyleyin", "Nereli olduğunuzu belirtin", "Mesleğinizi paylaşın"]
            },
            {
                prompt: "Hobilerinizden bahsedin",
                example: "In my free time, I like to read books. My favorite hobby is playing guitar.",
                tips: ["Boş zamanlarınızda ne yaptığınızı söyleyin", "En sevdiğiniz hobinizi belirtin"]
            },
            {
                prompt: "Bir restoranda sipariş verin",
                example: "I would like to order a steak, please. Can I have a glass of water too? Thank you.",
                tips: ["Kibarca sipariş verin", "'Please' ve 'thank you' kullanın"]
            },
            {
                prompt: "Yol tarifi isteyin",
                example: "Excuse me, could you tell me how to get to the train station? Is it far from here?",
                tips: ["'Excuse me' ile başlayın", "Nazik bir şekilde sorun", "Mesafe hakkında bilgi isteyin"]
            },
            {
                prompt: "Alışveriş yaparken yardım isteyin",
                example: "Excuse me, I'm looking for a blue shirt in size medium. Do you have any?",
                tips: ["Ne aradığınızı açıkça belirtin", "Beden/renk gibi detayları ekleyin"]
            }
        ],
        A2: [
            {
                prompt: "Geçen hafta sonu ne yaptığınızı anlatın",
                example: "Last weekend, I visited my parents. We had lunch together and then went for a walk in the park. It was really nice to spend time with them.",
                tips: ["Geçmiş zaman kullanın", "Aktiviteleri sırayla anlatın", "Duygularınızı ifade edin"]
            },
            {
                prompt: "Gelecek tatil planlarınızdan bahsedin",
                example: "Next summer, I'm going to visit Italy. I will spend two weeks there and I plan to visit Rome, Florence and Venice. I'm very excited about it.",
                tips: ["Gelecek zaman kullanın", "Nereye gideceğinizi ve ne kadar kalacağınızı belirtin", "Planlarınızı detaylandırın"]
            },
            {
                prompt: "En sevdiğiniz filmi anlatın",
                example: "My favorite movie is Inception. It's about dreams within dreams. I like it because the story is very original and the special effects are amazing.",
                tips: ["Filmin adını ve konusunu belirtin", "Neden sevdiğinizi açıklayın"]
            },
            {
                prompt: "Bir telefon görüşmesi yapın ve randevu alın",
                example: "Hello, this is John Smith. I'd like to make an appointment with Dr. Brown for next week. Would Tuesday at 3 PM be possible?",
                tips: ["Kendinizi tanıtın", "Amacınızı belirtin", "Tarih ve saat önerin"]
            },
            {
                prompt: "Bir problemi açıklayın ve yardım isteyin",
                example: "Excuse me, there's a problem with my hotel room. The air conditioning isn't working and it's very hot. Could you send someone to fix it, please?",
                tips: ["Problemi net bir şekilde tanımlayın", "Nazikçe yardım isteyin"]
            }
        ],
        B1: [
            {
                prompt: "İş görüşmesinde kendinizi tanıtın ve neden bu pozisyon için uygun olduğunuzu açıklayın",
                example: "I have five years of experience in marketing, with a focus on digital campaigns. In my previous role, I increased social media engagement by 40%. I believe my skills in data analysis and creative content development make me well-suited for this position.",
                tips: ["Deneyimlerinizden bahsedin", "Başarılarınızı vurgulayın", "Becerilerinizi pozisyonla ilişkilendirin"]
            },
            {
                prompt: "Bir kitap veya film hakkında eleştirel bir değerlendirme yapın",
                example: "While the film has stunning visuals and strong performances from the lead actors, the plot becomes confusing in the second half. The director tries to tackle too many themes at once, which dilutes the main message. Nevertheless, it's worth watching for the cinematography alone.",
                tips: ["Hem olumlu hem olumsuz yönleri belirtin", "Görüşlerinizi gerekçelendirin", "Genel bir değerlendirme yapın"]
            },
            {
                prompt: "Çevre sorunları ve çözümleri hakkında konuşun",
                example: "One of the biggest environmental challenges we face is plastic pollution. It's harming marine life and entering our food chain. I believe we need stricter regulations on single-use plastics and better recycling infrastructure. Individuals can also make a difference by reducing their plastic consumption.",
                tips: ["Sorunu tanımlayın", "Etkilerini açıklayın", "Olası çözümler önerin"]
            },
            {
                prompt: "Teknolojinin günlük hayatımıza etkilerini tartışın",
                example: "Technology has transformed how we work, communicate, and even think. While smartphones keep us connected and provide instant access to information, they can also lead to addiction and reduced face-to-face interaction. I think we need to find a balance between embracing technological benefits and maintaining meaningful human connections.",
                tips: ["Hem olumlu hem olumsuz etkileri belirtin", "Kişisel deneyimlerinizden örnekler verin", "Dengeli bir bakış açısı sunun"]
            }
        ],
        B2: [
            {
                prompt: "Eğitim sisteminde yapılması gereken değişiklikler hakkında görüşlerinizi paylaşın",
                example: "I believe our education system needs to shift away from standardized testing toward more project-based learning. Students should develop critical thinking and problem-solving skills rather than memorizing facts. Additionally, incorporating more technology and real-world applications would better prepare students for future careers. However, we must ensure equal access to these resources across all schools.",
                tips: ["Spesifik öneriler sunun", "Değişikliklerin potansiyel faydalarını açıklayın", "Olası zorlukları da göz önünde bulundurun"]
            },
            {
                prompt: "Uzaktan çalışmanın avantajları ve dezavantajları hakkında detaylı bir analiz yapın",
                example: "Remote work offers significant benefits such as eliminating commute time, providing flexibility, and potentially increasing productivity for many employees. However, it also presents challenges including communication difficulties, blurred work-life boundaries, and potential isolation. Organizations should consider hybrid models that combine the advantages of both remote and office work while mitigating the drawbacks through clear policies and appropriate technology.",
                tips: ["Farklı perspektiflerden değerlendirin", "Somut örnekler verin", "Dengeli bir sonuca varın"]
            },
            {
                prompt: "Yapay zekanın gelecekte toplumu nasıl etkileyebileceğini tartışın",
                example: "Artificial intelligence is poised to revolutionize numerous sectors, from healthcare to transportation. While AI could enhance efficiency, accuracy, and solve complex problems, it also raises concerns about job displacement, privacy, and algorithmic bias. As we advance, it's crucial to establish ethical frameworks and regulations that ensure AI development benefits humanity while minimizing potential harms. The transition will require significant workforce retraining and education system adaptations.",
                tips: ["Farklı sektörlerdeki potansiyel etkileri değerlendirin", "Hem fırsatları hem riskleri tartışın", "Toplumsal hazırlık için öneriler sunun"]
            }
        ]
    };
    
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
    const totalProgress = calculateTotalProgress();
    
    updateCircularProgress(totalProgress);
    updateModuleProgress();
    checkLevelProgression();
    checkAchievements();
    saveUserProgress();
}

function calculateTotalProgress() {
    const weights = {
        vocabulary: 0.25,
        grammar: 0.25,
        listening: 0.2,
        speaking: 0.2,
        writing: 0.1
    };
    
    return (currentUser.progress.vocabulary * weights.vocabulary +
            currentUser.progress.grammar * weights.grammar +
            currentUser.progress.listening * weights.listening +
            currentUser.progress.speaking * weights.speaking +
            currentUser.progress.writing * weights.writing);
}

function checkLevelProgression() {
    const totalProgress = calculateTotalProgress();
    const currentLevel = currentUser.level;
    
    const levelThresholds = {
        'A1': 20,
        'A2': 40,
        'B1': 60,
        'B2': 80,
        'C1': 95,
        'C2': 100
    };
    
    for (const [level, threshold] of Object.entries(levelThresholds)) {
        if (totalProgress >= threshold && currentLevel !== level) {
            const levelOrder = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
            const currentIndex = levelOrder.indexOf(currentLevel);
            const newIndex = levelOrder.indexOf(level);
            
            if (newIndex > currentIndex) {
                currentUser.level = level;
                showLevelUpNotification(level);
                break;
            }
        }
    }
}

function showLevelUpNotification(newLevel) {
    const notification = document.createElement('div');
    notification.className = 'level-up-notification';
    notification.innerHTML = `
        <div class="level-up-content">
            <h3>🎉 Tebrikler!</h3>
            <p>Yeni seviyeye ulaştınız: <strong>${newLevel}</strong></p>
            <button onclick="this.parentElement.parentElement.remove()">Tamam</button>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    `;
    
    const content = notification.querySelector('.level-up-content');
    content.style.cssText = `
        background: white;
        padding: 30px;
        border-radius: 15px;
        text-align: center;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        animation: levelUpPop 0.5s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // CSS animasyonu ekle
    if (!document.querySelector('#levelUpStyles')) {
        const style = document.createElement('style');
        style.id = 'levelUpStyles';
        style.textContent = `
            @keyframes levelUpPop {
                0% { transform: scale(0.5); opacity: 0; }
                100% { transform: scale(1); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
}

function checkAchievements() {
    const achievements = [
        {
            id: 'first_word',
            name: 'İlk Kelime',
            description: 'İlk kelimenizi öğrendiniz!',
            condition: () => currentUser.stats.wordsLearned >= 1
        },
        {
            id: 'vocabulary_master',
            name: 'Kelime Ustası',
            description: '50 kelime öğrendiniz!',
            condition: () => currentUser.stats.wordsLearned >= 50
        },
        {
            id: 'grammar_expert',
            name: 'Gramer Uzmanı',
            description: 'Gramer bölümünü %75 tamamladınız!',
            condition: () => currentUser.progress.grammar >= 75
        },
        {
            id: 'listening_pro',
            name: 'Dinleme Profesyoneli',
            description: 'Dinleme egzersizlerini %80 tamamladınız!',
            condition: () => currentUser.progress.listening >= 80
        },
        {
            id: 'speaking_champion',
            name: 'Konuşma Şampiyonu',
            description: 'Konuşma egzersizlerini %90 tamamladınız!',
            condition: () => currentUser.progress.speaking >= 90
        }
    ];
    
    if (!currentUser.achievements) {
        currentUser.achievements = [];
    }
    
    achievements.forEach(achievement => {
        if (achievement.condition() && !currentUser.achievements.includes(achievement.id)) {
            unlockAchievement(achievement);
        }
    });
}

function unlockAchievement(achievement) {
    currentUser.achievements.push(achievement.id);
    
    showNotification(`🏆 Başarım Kazandınız: ${achievement.name} - ${achievement.description}`, 'success');
    
    // Başarım sesini çal (opsiyonel)
    try {
        const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT');
        audio.volume = 0.3;
        audio.play();
    } catch (e) {
        // Ses çalınamazsa sessizce devam et
    }
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
