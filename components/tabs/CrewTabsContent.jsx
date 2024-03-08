import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Badge } from "../ui/badge";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "../ui/hover-card";

const CrewTabsContent = ({ crew }) => {
  return (
    <TabsContent value="crew" className="tabs">
      {crew.length > 0 ? (
        crew.map((member) => {
          return (
            <HoverCard key={member.id}>
              <HoverCardTrigger>
                <Badge className="m-1">{member.name}</Badge>
              </HoverCardTrigger>
              <HoverCardContent key={member.id}>{member.job}</HoverCardContent>
            </HoverCard>
          );
        })
      ) : (
        <p>No crew info available.</p>
      )}
    </TabsContent>
  );
};

export default CrewTabsContent;
