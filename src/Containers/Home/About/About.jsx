import Cover from "../../../Components/Cover/Cover";
import image from "../../../assets/home/chef-service.jpg";

const About = () => {
   return (
      <div>
         <Cover
            title="Bistro Boss"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
            bgImage={image}
         />
      </div>
   );
};

export default About;
