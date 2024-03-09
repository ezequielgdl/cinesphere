import React from "react";
import { TabsContent } from "@/components/ui/tabs";
import { Badge } from "../ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import { Separator } from "../ui/separator";

const ReviewTabsContent = ({ reviews }) => {
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  return (
    <TabsContent value="reviews">
      {reviews.length > 0 ? (
        reviews.map((review) => {
          return (
            <div className="space-y-6 w-full mb-6" key={review.id}>
              <div className="flex space-x-3 items-center">
                <Avatar>
                  <AvatarImage
                    src={baseUrl + review.author_details.avatar_path}
                    alt="author avatar"
                  ></AvatarImage>
                  <AvatarFallback>{review.author.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <Badge className="tabs">Review by {review.author} </Badge>
                <span className="tabs">
                  {" "}
                  <em>
                    {review.author_details.rating}
                    /10
                  </em>
                </span>
              </div>
              <p className="m-1 overflow-hidden tracking-wide">
                {review.content}
              </p>
              <Separator />
            </div>
          );
        })
      ) : (
        <p className="tabs">No reviews available.</p>
      )}
    </TabsContent>
  );
};

export default ReviewTabsContent;
