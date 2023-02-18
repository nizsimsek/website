'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  RiArrowDownSFill,
  RiArrowRightSFill,
  RiInstagramFill,
  RiMailFill,
  RiDiscordFill,
  RiExternalLinkFill,
} from 'react-icons/ri';
import { ImGithub, ImLinkedin2, ImTwitter } from 'react-icons/im';

export default function ContactMe() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  let props = {
    fullName,
    email,
    message,
    setFullName,
    setEmail,
    setMessage,
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center px-5 py-4 h-auto">
        <span className="text-sm">_contact-me</span>
      </div>
      <div className="flex flex-col h-auto">
        <ContactInfos />
        <FindMeAlso />
      </div>
      <ContactForm {...props} />
    </div>
  );
}

const ContactInfos = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col h-auto">
      <div className="flex items-center bg-c-ghost h-auto py-1 px-4">
        <span
          className={
            'flex items-center gap-2 cursor-pointer text-c-muted hover:text-white' +
            (show ? ' text-white' : '')
          }
          onClick={() => {
            setShow(() => {
              return !show;
            });
          }}
        >
          {show ? <RiArrowDownSFill /> : <RiArrowRightSFill />} contacts
        </span>
      </div>
      {show && (
        <div className="flex flex-col px-4 py-1">
          <Link
            href="mailto:nizsimsek@gmail.com"
            className="flex items-center h-8 text-c-muted hover:text-white"
          >
            <RiMailFill />
            <span className="ml-1">nizsimsek@gmail.com</span>
          </Link>
          <Link
            href="https://github.com/nizsimsek"
            className="flex items-center h-8 text-c-muted hover:text-white"
          >
            <ImGithub />
            <span className="ml-1">@nizsimsek</span>
          </Link>
          <Link
            href="https://linkedin.com/in/nizsimsek"
            className="flex items-center h-8 text-c-muted hover:text-white"
          >
            <ImLinkedin2 />
            <span className="ml-1">Nizamettin Şimşek</span>
          </Link>
        </div>
      )}
    </div>
  );
};

const FindMeAlso = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex flex-col h-auto mt-1">
      <div className="flex items-center bg-c-ghost h-auto py-1 px-4">
        <span
          className={
            'flex items-center gap-2 cursor-pointer text-c-muted hover:text-white' +
            (show ? ' text-white' : '')
          }
          onClick={() => {
            setShow(() => {
              return !show;
            });
          }}
        >
          {show ? <RiArrowDownSFill /> : <RiArrowRightSFill />} find-me-also-in
        </span>
      </div>
      {show && (
        <div className="flex flex-col px-4 py-1">
          <Link
            href="https://instagram.com/ilahinizo"
            className="flex items-center h-8 text-c-muted hover:text-white"
          >
            <RiInstagramFill />
            <span className="ml-1">@ilahinizo</span>
          </Link>
          <Link
            href="https://twitter.com/ilahinizo"
            className="flex items-center h-8 text-c-muted hover:text-white"
          >
            <ImTwitter />
            <span className="ml-1">@ilahinizo</span>
          </Link>
          <Link
            href="https://discord.com/users/570262946991570947"
            className="flex items-center h-8 text-c-muted hover:text-white"
          >
            <RiDiscordFill />
            <span className="ml-1">-Nizz#7581</span>
          </Link>
        </div>
      )}
    </div>
  );
};

const ContactForm = ({
  fullName,
  email,
  message,
  setFullName,
  setEmail,
  setMessage,
}: {
  fullName: string;
  email: string;
  message: string;
  setFullName: (fullName: string) => void;
  setEmail: (email: string) => void;
  setMessage: (message: string) => void;
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(fullName, email, message);

    setFullName('');
    setEmail('');
    setMessage('');

    e.currentTarget.reset();
  };

  return (
    <form
      className="flex flex-col justify-between h-full px-4 text-c-muted"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col h-full my-2">
        <label className="flex items-center h-full my-2" htmlFor="full-name">
          _name:
        </label>
        <input
          className="flex items-center p-2 h-10 w-full bg-c-darker border-2 border-c-border rounded-lg text-c-muted hover:border-c-muted focus:border-c-muted focus:outline-none"
          name="full-name"
          pattern="[a-zA-Z ]{2,30}"
          type="text"
          title="Please enter your full name"
          maxLength={30}
          required
          onChange={(e) => {
            setFullName(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col h-full my-2">
        <label className="flex items-center h-full my-2" htmlFor="email">
          _email:
        </label>
        <input
          className="flex items-center p-2 h-10 w-full bg-c-darker border-2 border-c-border rounded-lg text-c-muted hover:border-c-muted focus:border-c-muted focus:outline-none"
          name="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          type="email"
          title="Please enter a valid email address"
          maxLength={50}
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-col h-full my-2">
        <label className="flex items-center h-full my-2" htmlFor="message">
          _message:
        </label>
        <textarea
          className="flex items-center p-2 w-full bg-c-darker border-2 border-c-border rounded-lg text-c-muted hover:border-c-muted focus:border-c-muted focus:outline-none"
          name="message"
          title="Please enter your message"
          maxLength={500}
          required
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          rows={5}
        />
      </div>
      <button
        className="flex items-center h-10 p-4  my-2 w-fit bg-c-ghost text-white rounded-lg focus:outline-none"
        type="submit"
      >
        submit-message
      </button>
    </form>
  );
};
