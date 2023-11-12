import {
   Tab,
   TabPanel,
   Tabs,
   TabsBody,
   TabsHeader,
} from "@material-tailwind/react";
import queryString from "query-string";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import TabContent from "./TabContent";

const CategoryTab = () => {
   const [params, setParams] = useSearchParams();
   const navigate = useNavigate();
   const location = useLocation();

   const catName = queryString.parse(location.search).category;

   // Tab change handler
   const tabChangeHandler = (catName) => {
      let currentQuery = {};
      if (params) {
         currentQuery = queryString.parse(params.toString);

         const updateQuery = { ...currentQuery, category: catName };
         const url = queryString.stringifyUrl({
            url: "/shop",
            query: updateQuery,
         });
         navigate(url);
      }
   };
   return (
      <Tabs value={catName}>
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
            <TabPanel value={catName}>
               <TabContent catName={catName} />
            </TabPanel>
         </TabsBody>
      </Tabs>
   );
};

export default CategoryTab;
