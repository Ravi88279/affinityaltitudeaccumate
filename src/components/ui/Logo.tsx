
import { Link } from "react-router-dom";

interface LogoProps {
  variant?: "full" | "compact";
  className?: string;
}

const Logo = ({ variant = "full", className = "" }: LogoProps) => {
  return (
    <Link
      to="/"
      className={`relative font-bold flex items-center hover:scale-105 transition-transform duration-300 ${className}`}
      aria-label="Affinity Altitude Accumate Logo"
    >
      <div className="flex items-center">
        <div className="mr-2 bg-apt-blue text-white rounded-md w-8 h-8 flex items-center justify-center text-xl font-bold">
          A
        </div>
        <div className="flex flex-col">
          <span className="text-apt-blue font-bold leading-tight">
            {variant === "full" ? "Affinity Altitude" : "Affinity"}
          </span>
          {variant === "full" && (
            <span className="text-apt-darkgray text-sm leading-tight">Accumate</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default Logo;
