'use client';

export const FormSubmit = ({
  setFullName,
  setEmail,
  setMessage,
  setFormSubmitted,
}: {
  setFullName: (fullName: string) => void;
  setEmail: (email: string) => void;
  setMessage: (message: string) => void;
  setFormSubmitted: (formSubmitted: boolean) => void;
}) => {
  const sendNewMessage = () => {
    setFullName('');
    setEmail('');
    setMessage('');
    setFormSubmitted(false);
  };

  return (
    <div className="flex h-full w-full p-4 lg:p-10 justify-center items-center">
      <div className="flex flex-col items-center max-w-xs">
        <span className="text-2xl text-white">Thank you!</span>
        <span className="text-cl-muted text-center">
          Your message has been accepted. You will recieve answer really soon!
        </span>
        <button
          className="flex items-center min-h-[2.5rem] py-2 px-4 w-fit bg-c-ghost text-white rounded-lg focus:outline-none mt-4"
          onClick={sendNewMessage}
        >
          send-new-message
        </button>
      </div>
    </div>
  );
};
