'use client';

import { useEffect, useState } from 'react';

export const ContactFormPreview = ({
  fullName,
  email,
  message,
  date,
}: {
  fullName: string;
  email: string;
  message: string;
  date: string;
}) => {
  const [messageObject, setMessageObject] = useState([
    {
      key: 'fullName',
      value: fullName,
    },
    {
      key: 'email',
      value: email,
    },
    {
      key: 'message',
      value: message,
    },
    {
      key: 'date',
      value: date,
    },
  ]);

  useEffect(() => {
    setMessageObject([
      {
        key: 'fullName',
        value: fullName,
      },
      {
        key: 'email',
        value: email,
      },
      {
        key: 'message',
        value: message,
      },
      {
        key: 'date',
        value: date,
      },
    ]);
  }, [fullName, email, message, date]);

  return (
    <div className="hidden lg:flex lg:flex-row lg:h-full lg:w-full lg:text-cl-muted lg:p-10 lg:border-c-border lg:border-l-2 lg:overflow-y-auto lg:mr-1">
      <div className="flex flex-col h-fit w-full break-words">
        <div>
          <span className="text-code-orange">const </span>
          <span className="text-code-pink">button = </span>
          <span className="text-code-soft-blue">document.</span>
          <span className="text-code-neon-green">querySelector</span>
          <span className="text-code-yellow">&#40;</span>
          <span className="text-code-soft-blue">&#39;</span>
          <span className="text-code-soft-green">#sendBtn</span>
          <span className="text-code-soft-blue">&#39;</span>
          <span className="text-code-yellow">&#41;</span>
          <span className="text-code-soft-blue">&#59;</span>
        </div>
        <br />
        <div>
          <span className="text-code-orange">const </span>
          <span className="text-code-pink">message = </span>
          <span className="text-code-soft-blue">&#123;</span>
        </div>
        <RenderMessageObject messageObject={messageObject} />
        <div>
          <span className="text-code-soft-blue">&#125;</span>
          <span className="text-code-soft-blue">&#59;</span>
        </div>
        <br />
        <div>
          <span className="text-code-pink">button.</span>
          <span className="text-code-neon-green">addEventListener</span>
          <span className="text-code-yellow">&#40;</span>
          <span className="text-code-soft-blue">&#39;</span>
          <span className="text-code-soft-green">click</span>
          <span className="text-code-soft-blue">&#39;</span>
          <span className="text-code-soft-blue">&#44; </span>
          <span className="text-code-orange">&#40;</span>
          <span className="text-code-orange">&#41; </span>
          <span className="text-code-orange">&#61;</span>
          <span className="text-code-orange">&#62; </span>
          <span className="text-code-soft-blue">&#123;</span>
        </div>
        <div>
          <span className="text-code-red ml-10">form</span>
          <span className="text-code-soft-blue">&#46;</span>
          <span className="text-code-neon-green">send</span>
          <span className="text-code-yellow">&#40;</span>
          <span className="text-code-blue">message</span>
          <span className="text-code-yellow">&#41;</span>
          <span className="text-code-soft-blue">&#59;</span>
        </div>
        <div>
          <span className="text-code-soft-blue">&#125;</span>
          <span className="text-code-yellow">&#41;</span>
          <span className="text-code-soft-blue">&#59;</span>
        </div>
      </div>
    </div>
  );
};

const RenderMessageObject = ({ messageObject }: { messageObject: any }) => {
  return (
    <>
      {messageObject.map((item: any) => (
        <div key={item.key} className="ml-10">
          <span className="text-code-green">{item.key}</span>
          <span className="text-code-soft-blue">&#58;</span>
          <span className="text-code-soft-blue"> &#39;</span>
          <span className="text-code-soft-green break-all">{item.value}</span>
          <span className="text-code-soft-blue">&#39;</span>
          <span className="text-code-soft-blue">&#44;</span>
        </div>
      ))}
    </>
  );
};
