import { useState, useEffect, useRef } from "react";
import "./card.css";

const useDispayedValue = (value) => {
    const [displayedValue, setdisplayedValue] = useState(value);
    
    useEffect(()=>{
        const domValueTimeout = setTimeout(()=>{
            setdisplayedValue(value);
        }, 315)
    
        return ()=> {
            clearTimeout(domValueTimeout);
        }
    }, [value])

    return displayedValue
}

function Card(props) {
    const topRef = useRef(null);
    const bottomRef = useRef(null);

    const [animationClassTop, setClassTop] = useState('');
    const [animationClassBottom, setClassBottom] = useState('');
    const displayedValue = useDispayedValue(props.value);


    const onTopAnimationEnd = () => {
        setClassBottom('inverted-bottom');
    }
    const onBottomAnimationEnd = () => {
        setClassTop('');
        setClassBottom('');
    }

    useEffect(()=> {
        setClassTop('inverted-top');
    }, [props.value]);
    
    useEffect(() => {
        topRef.current.addEventListener('animationend', onTopAnimationEnd);
        bottomRef.current.addEventListener('animationend', onBottomAnimationEnd);

        return ()=> {
            topRef.current.removeEventListener('animationend', onTopAnimationEnd);
            bottomRef.current.removeEventListener('animationend', onBottomAnimationEnd);
        }
    }, [onTopAnimationEnd, onBottomAnimationEnd]);


    return (
        <div>
            <section className="card-container">
                <div className="flip-card-background">
                    <div className="top top-background">{displayedValue}</div>
                    <div className="bottom">{props.backgroundBottomValue}</div>
                </div>
                <div className="flip-card-front">
                    <div ref={topRef} className={`top ${animationClassTop}`}>{displayedValue}</div>
                    <div ref={bottomRef} className={`bottom ${animationClassBottom}`}>{displayedValue}</div>
                </div>
            </section>
            <p className="card-title">{props.cardTitle}</p>
        </div>
    );
}

export default Card;