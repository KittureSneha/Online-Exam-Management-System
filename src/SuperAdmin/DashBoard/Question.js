import shuffle from 'lodash/shuffle';

const Questions = [
  {
    id:1,
    question: 'What is the largest planet in our solar system?',
    options: ['Mars', 'Earth', 'Jupiter', 'Saturn'],
    answer: 'Jupiter',
  },
  {
    id:2,
    question: 'What is the capital of Canada?',
    options: ['Toronto', 'Vancouver', 'Ottawa', 'Montreal'],
    answer: 'Ottawa',
  },
  {
    id:3,
    question: 'Which gas is most abundant in the Earth\'s atmosphere?',
    options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Helium'],
    answer: 'Nitrogen',
  },
  {
    id:4,
    question: 'Who wrote the novel "1984"?',
    options: ['George Orwell', 'J.K. Rowling', 'Stephen King', 'Agatha Christie'],
    answer: 'George Orwell',
  },
  {
    id:5,
    question: 'Which country is known as the Land of the Rising Sun?',
    options: ['China', 'South Korea', 'Japan', 'Vietnam'],
    answer: 'Japan',
  },
  {
    id:6,
    question: 'What is the chemical symbol for gold?',
    options: ['Au', 'Ag', 'Fe', 'Hg'],
    answer: 'Au',
  },
  {
    id:7,
    question: 'Which planet is known as the Red Planet?',
    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
    answer: 'Mars',
  },
  {
    id:8,
    question: 'What is the largest mammal on Earth?',
    options: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
    answer: 'Blue Whale',
  },
  {
    id:9,
    question: 'What is the powerhouse of the cell?',
    options: ['Nucleus', 'Mitochondria', 'Chloroplast', 'Ribosome'],
    answer: 'Mitochondria',
  },
  {
    id:10,
    question: 'Which gas do plants absorb from the atmosphere?',
    options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Methane'],
    answer: 'Carbon Dioxide',
  },
  {
    id:11,
      question: 'What is the chemical symbol for silver?',
      options: ['Ag', 'Au', 'Pt', 'Hg'],
      answer: 'Ag',
    },
    {id:12,
      question: 'Which planet is known as the "Morning Star" or "Evening Star"?',
      options: ['Mars', 'Venus', 'Mercury', 'Neptune'],
      answer: 'Venus',
    },
    {
      id:13,
      question: 'Who is the author of "Pride and Prejudice"?',
      options: ['Jane Austen', 'Charles Dickens', 'F. Scott Fitzgerald', 'Leo Tolstoy'],
      answer: 'Jane Austen',
    },
    {
      id:14,
      question: 'What is the currency of Japan?',
      options: ['Yen', 'Dollar', 'Euro', 'Pound'],
      answer: 'Yen',
    },
    {
      id:15,
      question: 'Which gas is known as "Laughing Gas"?',
      options: ['Oxygen', 'Carbon Dioxide', 'Nitrous Oxide', 'Helium'],
      answer: 'Nitrous Oxide',
    },
    {
      id:16,
      question: 'What is the largest ocean in the world?',
      options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      answer: 'Pacific Ocean',
    },
    {
      id:17,
      question: 'Who painted the Mona Lisa?',
      options: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Michelangelo'],
      answer: 'Leonardo da Vinci',
    },
    {
      id:18,
      question: 'What is the chemical symbol for hydrogen?',
      options: ['He', 'Hg', 'H', 'Ho'],
      answer: 'H',
    },
    {
      id:19,
      question: 'Which gas is used in photosynthesis by plants?',
      options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
      answer: 'Carbon Dioxide',
    },
    {
      id:20,
      question: 'What is the tallest mountain in the world?',
      options: ['Mount Kilimanjaro', 'Mount McKinley', 'Mount Everest', 'Mount Fuji'],
      answer: 'Mount Everest',
    },
    {
      id:21,
      question: 'Who is the author of "The Great Gatsby"?',
      options: ['F. Scott Fitzgerald', 'George Orwell', 'J.D. Salinger', 'Ernest Hemingway'],
      answer: 'F. Scott Fitzgerald',
    },
    {
      id:22,
      question: 'What is the chemical symbol for lead?',
      options: ['Ld', 'Pb', 'Le', 'L'],
      answer: 'Pb',
    },
    {
      id:23,
      question: 'Which planet is known as the "Red Planet"?',
      options: ['Mars', 'Venus', 'Mercury', 'Jupiter'],
      answer: 'Mars',
    },
    {
      id:24,
      question: 'Who wrote the play "Hamlet"?',
      options: ['William Shakespeare', 'Charles Dickens', 'Mark Twain', 'Jane Austen'],
      answer: 'William Shakespeare',
    },
    {
      id:25,
      question: 'What is the currency of Australia?',
      options: ['Dollar', 'Peso', 'Euro', 'Rupee'],
      answer: 'Dollar',
    },
    {
      id:26,
      question: 'Which gas is responsible for the ozone layer in the Earth\'s atmosphere?',
      options: ['Oxygen', 'Carbon Dioxide', 'Ozone', 'Methane'],
      answer: 'Ozone',
    },
    {
      id:27,
      question: 'What is the chemical symbol for iron?',
      options: ['Fe', 'Ir', 'In', 'I'],
      answer: 'Fe',
    },
    {
      id:28,
      question: 'Which planet is known as the "Blue Planet"?',
      options: ['Mars', 'Venus', 'Mercury', 'Earth'],
      answer: 'Earth',
    },
    {
      id:29,
      question: 'Who painted the Starry Night?',
      options: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'],
      answer: 'Vincent van Gogh',
    },

    {
      id:30,
      question: 'What is the capital of Brazil?',
      options: ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador'],
      answer: 'Brasília',
    },
    {
      id:31,
      question: 'Which element is a noble gas commonly used in balloons?',
      options: ['Helium', 'Argon', 'Neon', 'Krypton'],
      answer: 'Helium',
    },
    {
      id:32,
      question: 'Who wrote "The Catcher in the Rye"?',
      options: ['F. Scott Fitzgerald', 'J.D. Salinger', 'Ernest Hemingway', 'Mark Twain'],
      answer: 'J.D. Salinger',
    },
    {
      id:33,
      question: 'What is the currency of China?',
      options: ['Yen', 'Dollar', 'Euro', 'Yuan'],
      answer: 'Yuan',
    },
    {
      id:34,
      question: 'Which gas is known as "Laughing Gas"?',
      options: ['Oxygen', 'Carbon Dioxide', 'Nitrous Oxide', 'Neon'],
      answer: 'Nitrous Oxide',
    },
    {
      id:35,
      question: 'What is the deepest part of the ocean?',
      options: ['Mariana Trench', 'Puerto Rico Trench', 'Sunda Trench', 'Java Trench'],
      answer: 'Mariana Trench',
    },
    {
      id:36,
      question: 'Who is the author of "To Kill a Mockingbird"?',
      options: ['Harper Lee', 'F. Scott Fitzgerald', 'Mark Twain', 'J.D. Salinger'],
      answer: 'Harper Lee',
    },
    {
      id:37,
      question: 'What is the chemical symbol for sodium?',
      options: ['Na', 'So', 'Sd', 'Nt'],
      answer: 'Na',
    },
    {
      id:38,
      question: 'Which gas is essential for respiration?',
      options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Methane'],
      answer: 'Oxygen',
    },
    {
      id:39,
      question: 'What is the highest mountain in North America?',
      options: ['Mount Kilimanjaro', 'Mount McKinley', 'Mount Everest', 'Mount Fuji'],
      answer: 'Mount McKinley',
    },
    {
      id:40,
      question: 'Who wrote "The Lord of the Rings" trilogy?',
      options: ['J.K. Rowling', 'George R.R. Martin', 'J.R.R. Tolkien', 'C.S. Lewis'],
      answer: 'J.R.R. Tolkien',
    },
    {
      id:41,
      question: 'What is the chemical symbol for copper?',
      options: ['Cu', 'Co', 'Cr', 'Cp'],
      answer: 'Cu',
    },
    {
      id:42,
      question: 'Which planet is known as the "Morning Star" or "Evening Star"?',
      options: ['Mars', 'Venus', 'Mercury', 'Neptune'],
      answer: 'Venus',
    },
    {
      id:43,
      question: 'Who is the author of "War and Peace"?',
      options: ['F. Scott Fitzgerald', 'Leo Tolstoy', 'Charles Dickens', 'Jane Austen'],
      answer: 'Leo Tolstoy',
    },
    {
      id:44,
      question: 'What is the currency of India?',
      options: ['Dollar', 'Peso', 'Euro', 'Rupee'],
      answer: 'Rupee',
    },
    {
      id:45,
      question: 'Which gas is responsible for the greenhouse effect?',
      options: ['Oxygen', 'Carbon Dioxide', 'Ozone', 'Methane'],
      answer: 'Carbon Dioxide',
    },
    {
      id:46,
      question: 'What is the chemical symbol for silver?',
      options: ['Ag', 'Au', 'Pt', 'Hg'],
      answer: 'Ag',
    },
    {
      id:47,
      question: 'Which planet is known as the "Red Planet"?',
      options: ['Mars', 'Venus', 'Mercury', 'Jupiter'],
      answer: 'Mars',
    },
    {
      id:48,
      question: 'Who wrote the play "Macbeth"?',
      options: ['William Shakespeare', 'George Orwell', 'Mark Twain', 'Jane Austen'],
      answer: 'William Shakespeare',
    },
    {
      id:49,
      question: 'What is the capital of "France"?',
      options: ['London', 'Berlin', 'Paris', 'Madrid'],
      answer: 'Paris',
    },
    {
      id:50,
      question: 'Who is known as the father of modern physics?',
      options: ['Albert Einstein', 'Isaac Newton', 'Stephen Hawking', 'Galileo Galilei'],
      answer: 'Albert Einstein',
    },
     {
      id:51,
      question: 'What is the largest moon in our solar system?',
      options: ['Titan', 'Ganymede', 'Io', 'Europa'],
      answer: 'Ganymede',
    },
    {
      id:52,
      question: 'Which planet is known as the "Gas Giant"?',
      options: ['Saturn', 'Jupiter', 'Neptune', 'Uranus'],
      answer: 'Jupiter',
    },
    {
      id:53,
      question: 'Who wrote the play "Romeo and Juliet"?',
      options: ['William Shakespeare', 'Oscar Wilde', 'Anton Chekhov', 'George Bernard Shaw'],
      answer: 'William Shakespeare',
    },
    {
      id:54,
      question: 'What is the currency of South Korea?',
      options: ['Yen', 'Won', 'Euro', 'Dollar'],
      answer: 'Won',
    },
    {
      id:55,
      question: 'Which element is known as the "Building Block of Life"?',
      options: ['Carbon', 'Hydrogen', 'Oxygen', 'Nitrogen'],
      answer: 'Carbon',
    },
    {
      id:56,
      question: 'What is the chemical symbol for uranium?',
      options: ['Ur', 'Un', 'U', 'Ul'],
      answer: 'U',
    },
    {
      id:57,
      question: 'Which country is known as the Land of the Midnight Sun?',
      options: ['Norway', 'Russia', 'Sweden', 'Finland'],
      answer: 'Norway',
    },
    {
      id:58,
      question: 'Who is the author of "The Odyssey"?',
      options: ['Homer', 'Virgil', 'Aristotle', 'Socrates'],
      answer: 'Homer',
    },
    {
      id:59,
      question: 'What is the largest desert in the world?',
      options: ['Gobi Desert', 'Arabian Desert', 'Sahara Desert', 'Antarctica'],
      answer: 'Antarctica',
    },
    {
      id:60,
      question: 'Which gas is known as the "Sweet Gas"?',
      options: ['Oxygen', 'Carbon Dioxide', 'Methane', 'Hydrogen'],
      answer: 'Methane',
    },
    {
      id:61,
      question: 'What is the chemical symbol for platinum?',
      options: ['Pt', 'Pm', 'Pl', 'Pu'],
      answer: 'Pt',
    },
    {
      id:62,
      question: 'Which planet is known as the "Ringed Planet"?',
      options: ['Saturn', 'Jupiter', 'Neptune', 'Uranus'],
      answer: 'Saturn',
    },
    {
      id:63,
      question: 'Who painted the Sistine Chapel ceiling?',
      options: ['Raphael', 'Leonardo da Vinci', 'Michelangelo', 'Titian'],
      answer: 'Michelangelo',
    },
    {
      id:64,
      question: 'What is the currency of Mexico?',
      options: ['Peso', 'Dollar', 'Euro', 'Yen'],
      answer: 'Peso',
    },
    {
      id:65,
      question: 'Which gas is used in balloons for inflation?',
      options: ['Oxygen', 'Helium', 'Hydrogen', 'Nitrogen'],
      answer: 'Helium',
    },
    {
      id:66,
      question: 'Who is the author of "The Iliad"?',
      options: ['Homer', 'Virgil', 'Aristotle', 'Socrates'],
      answer: 'Homer',
    },
    {
      id:67,
      question: 'What is the chemical symbol for nickel?',
      options: ['Ni', 'Ne', 'Na', 'Nu'],
      answer: 'Ni',
    },
    {
      id:68,
      question: 'Which gas is known as the "Greenhouse Gas"?',
      options: ['Oxygen', 'Carbon Dioxide', 'Methane', 'Water Vapor'],
      answer: 'Carbon Dioxide',
    },
    {
      id:69,
      question: 'What is the largest sea on Earth?',
      options: ['Mediterranean Sea', 'Caribbean Sea', 'South China Sea', 'Philippine Sea'],
      answer: 'Philippine Sea',
    },
    {
      id:70,
      question: 'Who wrote "The Hitchhiker\'s Guide to the Galaxy"?',
      options: ['Douglas Adams', 'J.K. Rowling', 'Isaac Asimov', 'Philip K. Dick'],
      answer: 'Douglas Adams',
    },
    {
      id:71,
      question: 'What is the chemical symbol for tin?',
      options: ['Ti', 'Tn', 'Sn', 'Ta'],
      answer: 'Sn',
    },
    {
      id:72,
      question: 'Which planet is known as the "Evening Star"?',
      options: ['Mars', 'Venus', 'Mercury', 'Jupiter'],
      answer: 'Venus',
    },
    {
      id:73,
      question: 'Who is known as the "Queen of Pop"?',
      options: ['Madonna', 'Beyoncé', 'Lady Gaga', 'Taylor Swift'],
      answer: 'Madonna',
    },
    {
      id:74,
      question: 'What is the capital of South Africa?',
      options: ['Cape Town', 'Johannesburg', 'Pretoria', 'Durban'],
      answer: 'Pretoria',
    },
    {
      id:75,
      question: 'Which element is a noble gas commonly used in neon signs?',
      options: ['Helium', 'Argon', 'Neon', 'Krypton'],
      answer: 'Neon',
    },
    {
      id:76,
      question: 'Who wrote "The Old Man and the Sea"?',
      options: ['Ernest Hemingway', 'F. Scott Fitzgerald', 'J.D. Salinger', 'Mark Twain'],
      answer: 'Ernest Hemingway',
    },
    {
      id:77,
      question: 'What is the currency of Russia?',
      options: ['Dollar', 'Euro', 'Pound', 'Ruble'],
      answer: 'Ruble',
    },
    {
      id:78,
      question: 'Which gas is known as the "Sour Gas"?',
      options: ['Oxygen', 'Carbon Dioxide', 'Sulfur Dioxide', 'Hydrogen Sulfide'],
      answer: 'Hydrogen Sulfide',
    },
    {
      id:79,
      question: 'What is the deepest lake in the world?',
      options: ['Baikal', 'Superior', 'Victoria', 'Tanganyika'],
      answer: 'Baikal',
    },
    {
      id:80,
      question: 'Who is the author of "The Grapes of Wrath"?',
      options: ['John Steinbeck', 'F. Scott Fitzgerald', 'Ernest Hemingway', 'Mark Twain'],
      answer: 'John Steinbeck',
    },
    {
      id:81,
      question: 'What is the chemical symbol for potassium?',
      options: ['K', 'Po', 'Ka', 'Ke'],
      answer: 'K',
    },
    {
      id:82,
      question: 'Which gas is essential for combustion?',
      options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Methane'],
      answer: 'Oxygen',
    },
    {
      id:83,
      question: 'What is the highest mountain in South America?',
      options: ['Aconcagua', 'Huascarán', 'Illimani', 'Chimborazo'],
      answer: 'Aconcagua',
    },
    {
      id:84,
      question: 'Who wrote "The Chronicles of Narnia" series?',
      options: ['J.K. Rowling', 'C.S. Lewis', 'J.R.R. Tolkien', 'Philip Pullman'],
      answer: 'C.S. Lewis',
    },
    {
      id:85,
      question: 'What is the chemical symbol for zinc?',
      options: ['Zc', 'Zn', 'Ze', 'Z'],
      answer: 'Zn',
    },
    {
      id:86,
      question: 'Which planet is known as the "Blue Giant"?',
      options: ['Mars', 'Venus', 'Mercury', 'Earth'],
      answer: 'Earth',
    },
    {
      id:87,
      question: 'Who painted the Guernica?',
      options: ['Pablo Picasso', 'Vincent van Gogh', 'Leonardo da Vinci', 'Michelangelo'],
      answer: 'Pablo Picasso',
    },
    {
      id:88,
      question: 'What is the capital of Australia?',
      options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
      answer: 'Canberra',
    },
    {
      id:89,
      question: 'Who is known as the father of modern chemistry?',
      options: ['Antoine Lavoisier', 'John Dalton', 'Dmitri Mendeleev', 'Marie Curie'],
      answer: 'Antoine Lavoisier',
    },
    {
      id:90,
      question: 'What is the smallest planet in our solar system?',
      options: ['Mercury', 'Mars', 'Earth', 'Venus'],
      answer: 'Mercury',
    },
    {
      id:91,
      question: 'Which country is known as the Land of the Long White Cloud?',
      options: ['Australia', 'Canada', 'New Zealand', 'Ireland'],
      answer: 'New Zealand',
    },
    {
      id:92,
      question: 'Who is the author of "The Great Expectations"?',
      options: ['Charles Dickens', 'Jane Austen', 'Charlotte Brontë', 'Leo Tolstoy'],
      answer: 'Charles Dickens',
    },
    {
      id:93,
      question: 'What is the currency of South Africa?',
      options: ['Rand', 'Dollar', 'Euro', 'Pound'],
      answer: 'Rand',
    },
    {
      id:94,
      question: 'Which element is a halogen gas commonly used in disinfectants?',
      options: ['Fluorine', 'Chlorine', 'Bromine', 'Iodine'],
      answer: 'Chlorine',
    },
    {
      id:95,
      question: 'What is the chemical symbol for silver?',
      options: ['Si', 'Sv', 'Sr', 'Ag'],
      answer: 'Ag',
    },
    {
      id:96,
      question: 'Which planet is known as the "Jewel of the Solar System"?',
      options: ['Earth', 'Venus', 'Mars', 'Neptune'],
      answer: 'Earth',
    },
    {      
      id:97,
      question: 'What is the largest river in the world by discharge?',
      options: ['Amazon River', 'Nile River', 'Yangtze River', 'Mississippi River'],
      answer: 'Amazon River',
    },
    {
      id:98,
      question: 'Who wrote "The Canterbury Tales"?',
      options: ['Geoffrey Chaucer', 'William Shakespeare', 'John Milton', 'Jane Austen'],
      answer: 'Geoffrey Chaucer',
    },
    {
      id:99,
      question: 'What is the currency of Argentina?',
      options: ['Peso', 'Dollar', 'Euro', 'Real'],
      answer: 'Peso',
    },
    {
      id:100,
      question: 'Which gas is known as the "Noble Gas"?',
      options: ['Argon', 'Helium', 'Neon', 'Krypton'],
      answer: 'Argon',
    },
  ];
  const shuffledQuestions = shuffle(Questions);
  const randomSubsetOfQuestions = shuffledQuestions.slice(0, 20);

  Questions.forEach((question, index) => {
    question.setId = `Set ${Math.floor(index / 20) + 1}`;
  });
  

  
export default  randomSubsetOfQuestions;


// ----------------- json file questions


// {
//   "q" : [
// {
//   "id":1,
//   "question": "What is the largest planet in our solar system?",
//   "options": ["Mars", "Earth", "Jupiter", "Saturn"],
//   "answer": "Jupiter"
// },
// {
//   "id":2,
//   "question": "What is the capital of Canada?",
//   "options": ["Toronto", "Vancouver", "Ottawa", "Montreal"],
//   "answer": "Ottawa"
// },
// {
//   "id":3,
//   "question": "Which gas is most abundant in the Earths atmosphere?",
//   "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
//   "answer": "Nitrogen"
// },
// {
//   "id":4,
//   "question": "Who wrote the novel '1984'?",
//   "options": ["George Orwell", "J.K. Rowling", "Stephen King", "Agatha Christie"],
//   "answer": "George Orwell"
// },
// {
//   "id":5,
//   "question": "Which country is known as the Land of the Rising Sun?",
//   "options": ["China", "South Korea", "Japan", "Vietnam"],
//   "answer": "Japan"
// },
// {
//   "id":6,
//   "question": "What is the chemical symbol for gold?",
//   "options": ["Au", "Ag", "Fe", "Hg"],
//   "answer": "Au"
// },
// {
//   "id":7,
//   "question": "Which planet is known as the Red Planet?",
//   "options": ["Venus", "Mars", "Jupiter", "Saturn"],
//   "answer": "Mars"
// },
// {
//   "id":8,
//   "question": "What is the largest mammal on Earth?",
//   "options": ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
//   "answer": "Blue Whale"
// },
// {
//   "id":9,
//   "question":"What is the powerhouse of the cell?",
//   "options": ["Nucleus", "Mitochondria", "Chloroplast", "Ribosome"],
//   "answer": "Mitochondria"
// },
// {
//   "id":10,
//   "question": "Which gas do plants absorb from the atmosphere?",
//   "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"],
//   "answer": "Carbon Dioxide"
// }
// ]
// }