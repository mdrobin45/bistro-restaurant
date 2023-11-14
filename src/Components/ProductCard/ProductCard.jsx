import {
   Button,
   Card,
   CardBody,
   CardFooter,
   CardHeader,
   Typography,
} from "@material-tailwind/react";

const ProductCard = ({ name, recipe, image }) => {
   return (
      <Card className="max-w-[24rem] overflow-hidden">
         <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none">
            <img src={image} alt="ui/ux review check" />
         </CardHeader>
         <CardBody>
            <Typography className="text-center" variant="h4" color="blue-gray">
               {name}
            </Typography>
            <Typography
               variant="lead"
               className="mt-3 text-center font-light text-md text-text">
               {recipe}
            </Typography>
         </CardBody>
         <CardFooter className="flex items-center justify-center">
            <Button className="bg-gray-100 border-b-2 transition-all hover:text-white border-primary w-52 uppercase inline-block hover:bg-secondary text-primary text-md font-light py-3 px-4 rounded">
               Add To Cart
            </Button>
         </CardFooter>
      </Card>
   );
};

export default ProductCard;
