import {
   Card,
   CardBody,
   CardHeader,
   Typography,
} from "@material-tailwind/react";

const FeaturedCard = ({ bgImage, title }) => {
   return (
      <Card
         shadow={false}
         className="relative grid h-full w-full max-w-[28rem] items-end justify-center overflow-hidden text-center">
         <CardHeader
            style={{
               backgroundImage: `url(${bgImage})`,
               backgroundPosition: "center center",
               backgroundSize: "cover",
            }}
            floated={false}
            shadow={false}
            color="transparent"
            className={`absolute inset-0 m-0 h-full w-full rounded-none`}>
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
         </CardHeader>
         <CardBody className="relative px-6 md:px-12">
            <Typography
               variant="h2"
               color="white"
               className="mb-6 text-2xl uppercase font-light leading-[1.5]">
               {title}
            </Typography>
         </CardBody>
      </Card>
   );
};

export default FeaturedCard;
