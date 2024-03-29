import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Badge } from "../ui/badge";

const GenresTabsContent = ({ genres }) => {
  return (
    <TabsContent value="genre">
      {genres.length > 0 ? (
        genres.map((genre) => {
          return (
            <Badge key={genre.id + "genre"} className="m-1 tabs">
              {genre.name}
            </Badge>
          );
        })
      ) : (
        <p className="tabs">No genres available.</p>
      )}
    </TabsContent>
  );
};

export default GenresTabsContent;
