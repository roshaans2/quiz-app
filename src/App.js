import { useEffect, useMemo, useState } from 'react';
import './app.css'
import Trivia from './components/Trivia';
import Timer from './components/Timer';
import Start from './components/Start';
function App() {
     const [questionNumber, setQuestionNumber] = useState(1);
     const [username, setUsername] = useState(null);
     const [stop, setStop] = useState(false);
     const [earned, setEarned] = useState("₹ 0");
     const data = [
          {
               id: 1,
               question: "What is the capital city of India?",
               answers: [
                    {
                         text: "New Delhi",
                         correct: true,
                    },
                    {
                         text: "Mumbai",
                         correct: false,
                    },
                    {
                         text: "Kolkata",
                         correct: false,
                    },
                    {
                         text: "Chennai",
                         correct: false,
                    },
               ],
          },
          {
               id: 2,
               question: "Which river is often referred to as the 'holy river' in India?",
               answers: [
                    {
                         text: "Yamuna",
                         correct: false,
                    },
                    {
                         text: "Ganges (Ganga)",
                         correct: true,
                    },
                    {
                         text: "Brahmaputra",
                         correct: false,
                    },
                    {
                         text: "Godavari",
                         correct: false,
                    },
               ],
          },
          {
               id: 3,
               question: "Who was the first Prime Minister of India?",
               answers: [
                    {
                         text: "Mahatma Gandhi",
                         correct: false,
                    },
                    {
                         text: "Jawaharlal Nehru",
                         correct: true,
                    },
                    {
                         text: "Indira Gandhi",
                         correct: false,
                    },
                    {
                         text: "Daniel Red Cliff",
                         correct: false,
                    },
               ],
          },
          {
               id: 4,
               question: "Which mountain range is located in the northern part of India?",
               answers: [
                    {
                         text: "Rocky Mountains",
                         correct: false,
                    },
                    {
                         text: "Andes Mountains",
                         correct: false,
                    },
                    {
                         text: "Himalayas",
                         correct: true,
                    },
                    {
                         text: "Alps",
                         correct: false,
                    },
               ],
          },
          {
               id: 5,
               question: "Which famous monument in India is known as the 'Symbol of Love'?",
               answers: [
                    {
                         text: "Qutub Minar",
                         correct: false,
                    },
                    {
                         text: "Red Fort",
                         correct: false,
                    },
                    {
                         text: "Hawa Mahal",
                         correct: false,
                    },
                    {
                         text: "Taj Mahal",
                         correct: true,
                    },
               ],
          },
          {
               id: 6,
               question: "What is the national flower of India?",
               answers: [
                    {
                         text: "Lotus",
                         correct: true,
                    },
                    {
                         text: "Rose",
                         correct: false,
                    },
                    {
                         text: "Marigold",
                         correct: false,
                    },
                    {
                         text: "Sunflower",
                         correct: false,
                    },
               ],
          },
          {
               id: 7,
               question: "Which festival of colors is celebrated with enthusiasm in India?",
               answers: [
                    {
                         text: "Diwali",
                         correct: false,
                    },
                    {
                         text: "Eid",
                         correct: false,
                    },
                    {
                         text: "Holi",
                         correct: true,
                    },
                    {
                         text: "Christmas",
                         correct: false,
                    },
               ],
          },
          {
               id: 8,
               question: "Which animal is considered sacred in Hinduism and often associated with Lord Ganesha?",
               answers: [
                    {
                         text: "Cow",
                         correct: false,
                    },
                    {
                         text: "Elephant",
                         correct: true,
                    },
                    {
                         text: "Tiger",
                         correct: false,
                    },
                    {
                         text: "Monkey",
                         correct: false,
                    },
               ],
          },

          {
               "id": 9,
               "question": "Which planet is known as the 'Red Planet'?",
               "answers": [
                    {
                         "text": "Venus",
                         "correct": false
                    },
                    {
                         "text": "Mars",
                         "correct": true
                    },
                    {
                         "text": "Jupiter",
                         "correct": false
                    },
                    {
                         "text": "Saturn",
                         "correct": false
                    }
               ]
          },
          {
               "id": 10,
               "question": "What is the chemical symbol for the element gold?",
               "answers": [
                    {
                         "text": "Au",
                         "correct": true
                    },
                    {
                         "text": "Ag",
                         "correct": false
                    },
                    {
                         "text": "Fe",
                         "correct": false
                    },
                    {
                         "text": "Cu",
                         "correct": false
                    }
               ]
          },
          {
               "id": 11,
               "question": "Which gas do plants absorb from the atmosphere during photosynthesis?",
               "answers": [
                    {
                         "text": "Carbon dioxide",
                         "correct": true
                    },
                    {
                         "text": "Oxygen",
                         "correct": false
                    },
                    {
                         "text": "Nitrogen",
                         "correct": false
                    },
                    {
                         "text": "Hydrogen",
                         "correct": false
                    }
               ]
          },
          {
               "id": 12,
               "question": "What is the largest planet in our solar system?",
               "answers": [
                    {
                         "text": "Earth",
                         "correct": false
                    },
                    {
                         "text": "Mars",
                         "correct": false
                    },
                    {
                         "text": "Jupiter",
                         "correct": true
                    },
                    {
                         "text": "Saturn",
                         "correct": false
                    }
               ]
          },
          {
               "id": 13,
               "question": "Which gas makes up the majority of Earth's atmosphere?",
               "answers": [
                    {
                         "text": "Oxygen",
                         "correct": false
                    },
                    {
                         "text": "Carbon dioxide",
                         "correct": false
                    },
                    {
                         "text": "Nitrogen",
                         "correct": true
                    },
                    {
                         "text": "Methane",
                         "correct": false
                    }
               ]
          },
          {
               "id": 14,
               "question": "What is the largest mammal in the world?",
               "answers": [
                    {
                         "text": "African elephant",
                         "correct": false
                    },
                    {
                         "text": "Blue whale",
                         "correct": true
                    },
                    {
                         "text": "Giraffe",
                         "correct": false
                    },
                    {
                         "text": "Hippopotamus",
                         "correct": false
                    }
               ]
          },
          {
               "id": 15,
               "question": "Which gas is responsible for the green color of leaves in plants?",
               "answers": [
                    {
                         "text": "Carbon dioxide",
                         "correct": false
                    },
                    {
                         "text": "Oxygen",
                         "correct": false
                    },
                    {
                         "text": "Chlorophyll",
                         "correct": true
                    },
                    {
                         "text": "Hydrogen",
                         "correct": false
                    }
               ]
          },
     ];

     const moneyPyramid = useMemo(() =>
          [
               { id: 1, amount: "₹ 100" },
               { id: 2, amount: "₹ 200" },
               { id: 3, amount: "₹ 300" },
               { id: 4, amount: "₹ 500" },
               { id: 5, amount: "₹ 1000" },
               { id: 6, amount: "₹ 2000" },
               { id: 7, amount: "₹ 4000" },
               { id: 8, amount: "₹ 8000" },
               { id: 9, amount: "₹ 16000" },
               { id: 10, amount: "₹ 32000" },
               { id: 11, amount: "₹ 64000" },
               { id: 12, amount: "₹ 125000" },
               { id: 13, amount: "₹ 250000" },
               { id: 14, amount: "₹ 500000" },
               { id: 15, amount: "₹ 1000000" },
          ].reverse(),
          [])

     useEffect(() => {
          questionNumber > 1 &&
               setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount)
     }, [moneyPyramid, questionNumber])

     return (
          <div className="app">
               {username ? (
                    <>
                         <div className="main">
                              {stop ? <h1 className='endText'>You earned: {earned}</h1> : (
                                   <>
                                        <div className='top'>
                                             <div className='timer'>
                                                  <Timer setStop={setStop} questionNumber={questionNumber} />
                                             </div>
                                        </div>
                                        <div className='bottom'>
                                             {questionNumber === 16 ? setStop(true) : (
                                                  <>
                                                       <Trivia
                                                            data={data}
                                                            setStop={setStop}
                                                            questionNumber={questionNumber}
                                                            setQuestionNumber={setQuestionNumber}
                                                       />
                                                  </>
                                             )}
                                        </div>
                                   </>
                              )}

                         </div>
                         <div className="pyramid">
                              <ul className='moneyList'>
                                   {
                                        moneyPyramid.map((m) => (
                                             <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
                                                  <span className='moneyListItemNumber'>{m.id}</span>
                                                  <span className='moneyListItemAmount'>{m.amount}</span>
                                             </li>
                                        ))
                                   }
                              </ul>
                         </div>
                    </>
               ) : <Start setUsername={setUsername} />}

          </div>
     );
}

export default App; 
