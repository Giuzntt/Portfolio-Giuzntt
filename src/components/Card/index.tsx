import { FaReact } from "react-icons/fa";
import { IconType } from "react-icons/lib";

interface CardProps {
  skill: string;
  time: string;
  icon: React.ReactNode;
}

const Card = ({ skill, time, icon }: CardProps) => {
  return (
    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      {icon}

      <div className="p-6">
        <h5
          className="mb-2 text-2xl font-medium text-neutral-800 dark:text-neutral-50 text-center
                
                "
        >
          {skill}
        </h5>
        <p className="mb-4 text-xl text-gray-400 text-center">{time}</p>
      </div>
    </div>
  );
};

export default Card;
