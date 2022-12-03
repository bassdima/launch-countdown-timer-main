export const getFormattedDateDiff = () => {
    const currentDate = new Date();
    const dataForTillDate = {
        year : currentDate.getFullYear(),
        month : currentDate.getMonth(),
        day : currentDate.getDate() + 4,
    }
    const {year, month, day} = dataForTillDate;
    const tillDate = new Date(year, month, day);
    const timeLeft = (tillDate.getTime() - currentDate.getTime()) / 1000;
    
    return {
        days : Math.floor(timeLeft / 60 / 60 / 24 % 365),
        hours : Math.floor(timeLeft / 60 / 60 % 24),
        minutes : Math.floor(timeLeft / 60 % 60),
        seconds : Math.floor(timeLeft % 60)
    } 
}