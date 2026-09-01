import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Typewriter({
    words,
    className,
    cursorClassName,
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseSpan = 2000,
}: {
    words: string[];
    className?: string;
    cursorClassName?: string;
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseSpan?: number;
}) {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        const currentWord = words[loopNum % words.length];

        if (isDeleting) {
            if (text === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                timer = setTimeout(() => { }, typingSpeed);
            } else {
                timer = setTimeout(() => {
                    setText(text.substring(0, text.length - 1));
                }, deletingSpeed);
            }
        } else {
            if (text === currentWord) {
                timer = setTimeout(() => {
                    setIsDeleting(true);
                }, pauseSpan);
            } else if (currentWord) {
                timer = setTimeout(() => {
                    setText(currentWord.substring(0, text.length + 1));
                }, typingSpeed);
            }
        }

        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, words, typingSpeed, deletingSpeed, pauseSpan]);

    return (
        <span className={cn("inline-block", className)}>
            {text}
        </span>
    );
}
