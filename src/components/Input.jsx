import { useState } from "react";

export default function Input({ inputValueReturn, type = "text", children }) {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(inputValue);
        console.log("submitted");
        inputValueReturn(inputValue);
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type={type}
                    name="input"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    {...children}
                />
            </form>
        </>
    );
}
