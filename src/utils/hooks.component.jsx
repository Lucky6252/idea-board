import { useEffect } from "react";

export const DataFromLocalStorage = () => {
    const data = localStorage.getItem('ideas');
    let correctData;
    if(data){
        correctData = JSON.parse(data);
        return correctData;
    }
}