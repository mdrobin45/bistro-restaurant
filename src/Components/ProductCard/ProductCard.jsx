import {
   Button,
   Card,
   CardBody,
   CardFooter,
   CardHeader,
   Typography,
} from "@material-tailwind/react";

const ProductCard = () => {
   return (
      <Card className="max-w-[24rem] overflow-hidden">
         <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 rounded-none">
            <img
               src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
               alt="ui/ux review check"
            />
         </CardHeader>
         <CardBody>
            <Typography className="text-center" variant="h4" color="blue-gray">
               UI/UX Review Check
            </Typography>
            <Typography
               variant="lead"
               className="mt-3 text-center font-light text-md text-text">
               Because it&apos;s about motivating the doers. Because I&apos;m
               here to follow my dreams and inspire others.
            </Typography>
         </CardBody>
         <CardFooter className="flex items-center justify-center">
            <Button className="bg-gray-100 border-b-2 transition-all hover:text-white border-secondary w-52 uppercase inline-block hover:bg-secondary text-primary text-md font-light py-3 px-4 rounded">
               Add To Cart
            </Button>
         </CardFooter>
      </Card>
   );
};

export default ProductCard;
