import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContactButton: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex gap-2.5 items-center py-2.5 pr-2.5 pl-6 rounded-[100px] max-md:pl-5 max-md:mt-10 bg-[linear-gradient(110deg,#c7f57a,45%,#a7e667,55%,#c7f57a)] bg-[length:200%_100%] animate-background-shine cursor-pointer"
      onClick={() => navigate('/contact')}
    >
      {/* Text with responsive font size */}
      <div className="text-lg font-medium text-zinc-900 max-md:text-base max-sm:text-sm">
        Contact Us
      </div>

      {/* Icon container with responsive sizing */}
      <div className="flex items-center justify-center w-12 h-12 p-3.5 bg-lime-200 rounded-full max-md:w-10 max-md:h-10 max-sm:w-8 max-sm:h-8">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/594a20aac012298c0f756894eef7b61a94047ef9e2bfa89b1d953a65e109b371?placeholderIfAbsent=true&apiKey=1ad6ef4f635049338116bebe894737a1"
          className="object-contain w-5 aspect-square max-md:w-4 max-sm:w-3"
          alt="Contact Icon"
        />
      </div>
    </div>
  );
};

export default ContactButton;
