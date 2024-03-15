import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Badge } from "../ui/badge";

const CastTabsContent = ({ cast }) => {
  return (
    <TabsContent value="cast">
      {cast.length > 0 ? (
        cast.map((member) => {
          return (
            <Badge className="m-1 tabs" key={member.id + "cast"}>
              {member.name}
            </Badge>
          );
        })
      ) : (
        <p className="tabs">No cast available.</p>
      )}
    </TabsContent>
  );
};

export default CastTabsContent;
