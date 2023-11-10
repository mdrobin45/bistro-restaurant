const SectionHeader = ({ title, subtitle }) => {
   return (
      <div className="text-center py-6">
         <p className="text-primary italic">---{subtitle}---</p>
         <h2 className="py-4 text-4xl uppercase font-light border-y-2 w-[20rem] mx-auto mt-4">
            {title}
         </h2>
      </div>
   );
};

export default SectionHeader;
