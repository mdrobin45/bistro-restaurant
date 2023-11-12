import {
   Tab,
   TabPanel,
   Tabs,
   TabsBody,
   TabsHeader,
} from "@material-tailwind/react";
import { useSearchParams } from "react-router-dom";
import TabContent from "./TabContent";

const CategoryTab = () => {
   const [params, setParams] = useSearchParams({ category: "salad" });

   // Tab change handler
   const tabChangeHandler = (catName) => {
      setParams({ category: catName });
   };
   return (
      <Tabs value={params.get("category")}>
         <TabsHeader
            className="rounded-none w-2/4 mx-auto mt-20 mb-10 border-b border-blue-gray-50 bg-transparent p-0"
            indicatorProps={{
               className:
                  "bg-transparent border-b-2 border-primary shadow-none rounded-none",
            }}>
            <Tab onClick={() => tabChangeHandler("salad")} value="salad">
               SALAD
            </Tab>
            <Tab onClick={() => tabChangeHandler("pizza")} value="pizza">
               PIZZA
            </Tab>
            <Tab onClick={() => tabChangeHandler("soup")} value="soup">
               SOUPS
            </Tab>
            <Tab onClick={() => tabChangeHandler("dessert")} value="dessert">
               DESSERTS
            </Tab>
            <Tab onClick={() => tabChangeHandler("drinks")} value="drinks">
               DRINKS
            </Tab>
         </TabsHeader>
         <TabsBody>
            <TabPanel value={params.get("category")}>
               <TabContent catName={params.get("category")} />
            </TabPanel>
         </TabsBody>
      </Tabs>
   );
};

export default CategoryTab;
