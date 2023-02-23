'use client';

import Image from 'next/image';

import { useEffect, useState } from 'react';
import { ContactInfos } from './components/ContactInfos';
import { FindMeAlso } from './components/FindMeAlso';
import { ContactForm } from './components/ContactForm';
import { FormSubmit } from './components/FormSubmit';
import { ContactFormPreview } from './components/ContactFormPreview';
import { RxCross2 } from 'react-icons/rx';

export default function ContactMe() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [date, setDate] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [isRemoved, setIsRemoved] = useState(false);
  const [isDontCare, setIsDontCare] = useState(false);

  useEffect(() => {
    setDate(new Date().toLocaleString());

    let interval = setInterval(() => {
      setDate(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  let props = {
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
      <div className="flex flex-col h-auto lg:w-64 lg:border-c-ghost lg:border-r-2 lg:h-full">
        <ContactInfos />
        <FindMeAlso />
      </div>
      {isDontCare ? (
        <div className="flex flex-col w-full h-full justify-center items-center">
          <Image
            src="https://www.reactiongifs.us/wp-content/uploads/2013/07/fuck_off_jack_nicholson.gif"
            alt="Fckoff"
            width="640"
            height="480"
          />
        </div>
      ) : isRemoved ? (
        <RemovedComp
          setIsRemoved={setIsRemoved}
          setIsDontCare={setIsDontCare}
        />
      ) : (
        <div className="flex flex-col w-full h-full">
          <div className="hidden lg:flex flex-col w-full border-b-2 border-c-border">
            <span className="flex items-center justify-between p-2 w-48 border-r-2 border-c-border text-c-muted">
              contacts
              <RxCross2
                onClick={() => {
                  setIsRemoved(true);
                }}
              />
            </span>
          </div>
          <div className="flex w-full h-full">
            {formSubmitted ? <FormSubmit {...props} /> : <ContactForm {...props} />}
            <ContactFormPreview {...props} />
          </div>
        </div>
      )}
    </div>
  );
}

const RemovedComp = () => {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <h1 className="max-w-screen-sm text-center text-white text-4xl ">
        Why did you do that?
        <br />
        You erased everything.
        <br />
        Do you like what you did?
      </h1>
      <div className="flex w-full text-2xl justify-center mt-4 gap-10">
        <button
          className="rounded-full bg-green-500 text-black py-4 px-10"
          onClick={() => {
            setIsRemoved(false);
          }}
        >
          I`m sorry
        </button>
        <button
          className="rounded-full bg-green-500 text-black py-4 px-10"
          onClick={() => {
            setIsDontCare(true);
          }}
        >
          I don`t care
        </button>
      </div>
    </div>
  );
};
