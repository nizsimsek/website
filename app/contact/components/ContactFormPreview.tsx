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
      <h1>Contact Form Preview</h1>
    </div>
  );
};
