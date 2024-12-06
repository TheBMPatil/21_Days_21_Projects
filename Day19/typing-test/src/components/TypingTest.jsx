import React, { useEffect, useRef, useState } from 'react';
import './style.css';

const paragraph = "The quick brown fox jumps over the lazy dog, showcasing agility and speed. Meanwhile, the dog watches calmly, unmoved by the fox’s antics. Nature thrives in its harmonious balance, with creatures big and small contributing uniquely. This timeless scene reminds us of life's rhythm and the beauty in every moment.";

const TypingTest = () => {
    const maxTime = 60;

    const [charIndex, setCharIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false);

    const [timeLeft, setTimeLeft] = useState(maxTime);
    const [mistakes, setMistakes] = useState(0);
    const [WPM, setWPM] = useState(0);
    const [CPM, setCPM] = useState(0);

    const inputRef = useRef(null);
    const charRefs = useRef([]);

    const [correctWrong, setCorrectWrong] = useState([]);


    useEffect(() => {
        inputRef.current.focus();
        setCorrectWrong(Array(charRefs.current.length).fill(''));
    }, []);

    useEffect(() => {
        let interval;
        if (isTyping && timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(timeLeft - 1);
                let correctChars = charIndex - mistakes;
                let totalTime = maxTime - timeLeft;

                let cpm = correctChars * (60 / totalTime);
                cpm = cpm < 0 || !cpm || cpm === Infinity ? 0 : cpm;
                setCPM(parseInt(cpm, 10));

                let wpm = Math.round((correctChars / 5 / totalTime) * 60);
                wpm = wpm < 0 || !wpm || wpm === Infinity ? 0 : wpm;
                setWPM(wpm);
            }, 1000)
        } else if (timeLeft === 0) {
            clearInterval(interval);
            setIsTyping(false);
        }
        return () => {
            clearInterval(interval);
        }
    }, [isTyping, timeLeft])


    const handleChange = (e) => {
        const characters = charRefs.current;
        let currentChar = charRefs.current[charIndex];
        let typedChar = e.target.value.slice(-1);

        if (charIndex < characters.length && timeLeft > 0) {
            if (!isTyping) {
                setIsTyping(true);
            }

            let newCorrectWrong = [...correctWrong]; // Copy the array

            if (typedChar === currentChar.textContent) {
                newCorrectWrong[charIndex] = 'correct'; // Correct character
            } else {
                newCorrectWrong[charIndex] = 'wrong'; // Incorrect character
                setMistakes(mistakes + 1);
            }

            setCorrectWrong(newCorrectWrong); // Set updated state
            setCharIndex(charIndex + 1);

            if (charIndex === characters.length - 1) {
                setIsTyping(false);
            }
        } else {
            setIsTyping(false);
        }
    };


    const resetGame = () => {
        setIsTyping(false);
        setTimeLeft(maxTime);
        setCharIndex(0);
        setMistakes(0);
        setCPM(0);
        setWPM(0);
        setCorrectWrong(Array(charRefs.current.length).fill(''));
        inputRef.current.focus();
    }

    return (
        <div className='container'>
            <div className="test">
                <input type="text" className='input-field' ref={inputRef} onChange={handleChange} />
                {
                    paragraph.split("").map((char, index) => (
                        <span
                            className={`char ${index === charIndex ? 'active' : ''} ${correctWrong[index]}`}
                            ref={(e) => charRefs.current[index] = e}
                            key={index}
                        >
                            {char}
                        </span>
                    ))
                }
            </div>
            <div className="result">
                <p>Time Left : <strong>{timeLeft}</strong></p>
                <p>Mistakes : <strong>{mistakes} </strong>  </p>
                <p>WPM : <strong>{WPM} </strong>  </p>
                <p>CPM :<strong>{CPM} </strong></p>
                <button className='btn' onClick={resetGame}>Try Again</button>
            </div>
        </div>
    );
};

export default TypingTest;
