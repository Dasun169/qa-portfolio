"use client";
import { useEffect } from "react";

export function TitleAnimator() {
    useEffect(() => {
        const titleText = "Dasun Navindu Dewnith | QA Engineer • ";
        let index = 0;

        const interval = setInterval(() => {
            document.title = titleText.substring(index) + titleText.substring(0, index);
            index = (index + 1) % titleText.length;
        }, 300);

        return () => clearInterval(interval);
    }, []);

    return null;
}
