import { useState, useEffect, useRef } from "react";
import { useDisplayedValue } from "../../hooks";
import "./card.css";

function Card({ value, backgroundBottomValue, cardTitle }) {
    const topRef = useRef(null);
    const bottomRef = useRef(null);
    const [animationClassTop, setClassTop] = useState('');
    const [animationClassBottom, setClassBottom] = useState('');
    const displayedValue = useDisplayedValue(value);

    useEffect(()=> {
        setClassTop('inverted-top');
    }, [value]);
    
    useEffect(() => {
        const topCard = topRef.current;
        const bottomCard = bottomRef.current;
        const onTopAnimationEnd = () => setClassBottom('inverted-bottom');
        
        const onBottomAnimationEnd = () => {
            setClassTop('');
            setClassBottom('');
        }

        topCard.addEventListener('animationend', onTopAnimationEnd);
        bottomCard.addEventListener('animationend', onBottomAnimationEnd);

        return ()=> {
            topCard.removeEventListener('animationend', onTopAnimationEnd);
            bottomCard.removeEventListener('animationend', onBottomAnimationEnd);
        }
    }, []);


    return (
        <div>
            <section className="card-container">
                <div className="flip-card-background">
                    <div className="top top-background">{displayedValue}</div>
                    <div className="bottom">{backgroundBottomValue}</div>
                </div>
                <div className="flip-card-front">
                    <div ref={topRef} className={`top ${animationClassTop}`}>{displayedValue}</div>
                    <div ref={bottomRef} className={`bottom ${animationClassBottom}`}>{displayedValue}</div>
                </div>
            </section>
            <p className="card-title">{cardTitle}</p>
        </div>
    );
}

export default Card;