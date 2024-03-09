import React from "react";
import { TabsContent } from "../ui/tabs";
import { Badge } from "../ui/badge";

const DetailsTabsContent = ({ details }) => {
  return (
    <TabsContent value="details">
      <div className="flex flex-wrap items-center w-full mb-2">
        <p className="tag">Studio:</p>
        {details.production_companies.map((company) => {
          return (
            <Badge key={company.id} className="m-1 tabs">
              {company.name}
            </Badge>
          );
        })}
      </div>
      <div className="flex items-center mb-2">
        <p className="tag">Countries:</p>
        {details.production_countries.map((country, i) => {
          return (
            <Badge className="m-1 tabs" key={i}>
              {country.name}
            </Badge>
          );
        })}
      </div>
      <div className="flex items-center">
        <p className="tag">Language:</p>
        {details.spoken_languages.map((language, i) => {
          return (
            <Badge className="m-1 tabs" key={i}>
              {language.name}
            </Badge>
          );
        })}
      </div>
    </TabsContent>
  );
};

export default DetailsTabsContent;
