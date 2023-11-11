const Cover = ({ title, description, bgImage }) => {
   return (
      <div
         style={{ backgroundImage: `url(${bgImage})` }}
         className="py-40 px-10">
         <div className="bg-gray-900 bg-opacity-30 text-white p-20 text-center w-4/5 mx-auto">
            <h2 className="text-4xl font-light pb-2">{title}</h2>
            <p>{description}</p>
         </div>
      </div>
   );
};

export default Cover;
