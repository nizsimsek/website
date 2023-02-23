'use client';

export const ContactForm = ({
  fullName,
  email,
  message,
  setFullName,
  setEmail,
  setMessage,
  setFormSubmitted,
}: {
  fullName: string;
  email: string;
  message: string;
  setFullName: (fullName: string) => void;
  setEmail: (email: string) => void;
  setMessage: (message: string) => void;
  setFormSubmitted: (formSubmitted: boolean) => void;
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFullName('');
    setEmail('');
    setMessage('');
    setFormSubmitted(true);

    e.currentTarget.reset();
  };

  return (
    <form
      className="flex flex-col h-full w-full p-4 text-c-muted lg:p-10"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col h-auto mb-4">
        <label className="flex items-center h-auto mb-2" htmlFor="full-name">
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
      <div className="flex flex-col h-auto mb-4">
        <label className="flex items-center h-auto mb-2" htmlFor="email">
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
      <div className="flex flex-col h-auto mb-4">
        <label className="flex items-center h-auto mb-2" htmlFor="message">
          _message:
        </label>
        <textarea
          className="flex items-center p-2 w-full bg-c-darker border-2 border-c-border rounded-lg text-c-muted hover:border-c-muted focus:border-c-muted focus:outline-none break-all"
          name="message"
          title="Please enter your message"
          maxLength={5000}
          required
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          rows={5}
        />
      </div>
      <button
        className="flex items-center min-h-[2.5rem] py-2 px-4 mb-2 w-fit bg-c-ghost text-white rounded-lg focus:outline-none"
        type="submit"
      >
        submit-message
      </button>
    </form>
  );
};
