'use client';

export const ContactFormPreview = ({
  fullName,
  email,
  message,
}: {
  fullName: string;
  email: string;
  message: string;
}) => {

  return (
    <div
      className="hidden lg:hidden lg:flex-col lg:h-full lg:w-full lg:text-c-muted lg:px-4 xl:px-10 lg:border-c-border lg:border-l-2"
    >
      <div className="flex flex-col h-auto my-2">
        <label className="flex items-center h-auto my-2" htmlFor="full-name">
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
      <div className="flex flex-col h-auto my-2">
        <label className="flex items-center h-auto my-2" htmlFor="email">
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
      <div className="flex flex-col h-auto my-2">
        <label className="flex items-center h-auto my-2" htmlFor="message">
          _message:
        </label>
        <textarea
          className="flex items-center p-2 w-full bg-c-darker border-2 border-c-border rounded-lg text-c-muted hover:border-c-muted focus:border-c-muted focus:outline-none"
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
        className="flex items-center h-10 p-4  my-2 w-fit bg-c-ghost text-white rounded-lg focus:outline-none"
        type="submit"
      >
        submit-message
      </button>
    </div>
  );
};
