import { Link } from "react-router-dom";

const ButtonLink = ({ text, url }) => {
   return (
      <div className="mt-16 text-center">
         <Link
            to={url}
            className="bg-gray-100 border-b-2 transition-all hover:text-white border-secondary px-10 uppercase inline-block hover:bg-secondary text-primary text-md font-light py-3 rounded">
            {text}
         </Link>
      </div>
   );
};

export default ButtonLink;
