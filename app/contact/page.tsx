"use client";

import Image from "next/image";

import { useEffect, useState } from "react";
import { ContactInfos } from "./components/ContactInfos";
import { FindMeAlso } from "./components/FindMeAlso";
import { ContactForm } from "./components/ContactForm";
import { FormSubmit } from "./components/FormSubmit";
import { ContactFormPreview } from "./components/ContactFormPreview";
import { RxCross2 } from "react-icons/rx";

export default function ContactMe() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [date, setDate] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);

    useEffect(() => {
        setDate(new Date().toLocaleString());

        let interval = setInterval(() => {
            setDate(new Date().toLocaleString());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    interface ChildProps {
        fullName: string;
        email: string;
        message: string;
        date: string;
        setFullName: (fullName: string) => void;
        setEmail: (email: string) => void;
        setMessage: (message: string) => void;
        setFormSubmitted: (formSubmitted: boolean) => void;
    }

    let props: ChildProps = {
        fullName,
        email,
        message,
        date,
        setFullName,
        setEmail,
        setMessage,
        setFormSubmitted,
    };

    return (
        <div className="flex flex-col lg:flex-row h-full">
            <div className="flex lg:hidden px-5 py-4 lg:h-full">
                <span className="text-sm">_contact-me</span>
            </div>
            <div className="flex flex-col h-auto lg:w-64 lg:border-c-ghost lg:border-r-2 lg:h-full lg:shrink-0">
                <ContactInfos />
                <FindMeAlso />
            </div>

            <div className="flex flex-col w-auto h-full lg:w-full mx-2 lg:mx-0">
                <div className="hidden lg:flex flex-col w-full border-b-2 border-c-border">
                    <span className="flex items-center justify-between p-2 w-48 border-r-2 border-c-border text-cl-muted">
                        contacts
                        <RxCross2 />
                    </span>
                </div>
                <div className="flex w-full h-full lg:overflow-y-auto">
                    {formSubmitted ? (
                        <FormSubmit {...props} />
                    ) : (
                        <ContactForm {...props} />
                    )}
                    <ContactFormPreview {...props} />
                </div>
            </div>
        </div>
    );
}
