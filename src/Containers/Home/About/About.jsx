import bgImage from "../../../assets/home/chef-service.jpg";
const About = () => {
   return (
      <div
         style={{ backgroundImage: `url(${bgImage})` }}
         className="py-20 px-10">
         <div className="bg-white p-10 text-center w-4/5 mx-auto">
            <h2 className="text-4xl font-light pb-2">Bistro Boss</h2>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Necessitatibus, libero accusamus laborum deserunt ratione dolor
               officiis praesentium! Deserunt magni aperiam dolor eius dolore
               at, nihil iusto ducimus incidunt quibusdam nemo.
            </p>
         </div>
      </div>
   );
};

export default About;
