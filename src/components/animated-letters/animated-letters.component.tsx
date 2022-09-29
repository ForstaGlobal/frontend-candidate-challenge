import React, { useEffect, useState } from 'react';
import './animated-letters.styles.scss';

type AnimatedLettersType = {
    strArray: string[],
    idx: number
}

export const AnimatedLetters: React.FC<AnimatedLettersType> = ({  strArray, idx }) => {

    const [letterClass, setLetterClass] = useState<string>('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2000)
        return () => clearTimeout(timer)
    }, []);

    return (
        <h1 className='text-animate-container '>
            {strArray.map((char: string, i: number) => (
                <span key={char + i} className={`${letterClass} _${i + idx}`}>
                    {char}
                </span>
            ))}
        </h1>
    );
}