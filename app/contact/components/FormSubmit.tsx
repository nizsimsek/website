"use client";
import { Button } from "../../../components/Button";

interface Props {
    setFullName: (fullName: string) => void;
    setEmail: (email: string) => void;
    setMessage: (message: string) => void;
    setFormSubmitted: (formSubmitted: boolean) => void;
}

export const FormSubmit = ({
    setFullName,
    setEmail,
    setMessage,
    setFormSubmitted,
}: Props) => {
    const sendNewMessage = () => {
        setFullName("");
        setEmail("");
        setMessage("");
        setFormSubmitted(false);
    };

    return (
        <div className="flex h-full w-full p-4 lg:p-10 justify-center items-center">
            <div className="flex flex-col items-center max-w-xs">
                <span className="text-2xl text-white">Thank you!</span>
                <span className="text-cl-muted text-center">
                    Your message has been accepted. You will recieve answer
                    really soon!
                </span>
                <Button
                    type="button"
                    color="ghost"
                    text="send-new-message"
                    onClick={sendNewMessage}
                    className="mt-4"
                />
            </div>
        </div>
    );
};
