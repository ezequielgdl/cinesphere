import React from "react";
import { Separator } from "./ui/separator";
import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";

const renderStarIcons = (voteAverage) => {
  switch (true) {
    case voteAverage >= 0 && voteAverage < 2:
      return (
        <>
          <StarFilledIcon key={1} />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </>
      );
    case voteAverage >= 2 && voteAverage < 4:
      return (
        <>
          <StarFilledIcon key={1} />
          <StarFilledIcon key={2} />
          <StarIcon />
          <StarIcon />
          <StarIcon />
        </>
      );
    case voteAverage >= 4 && voteAverage < 7.5:
      return (
        <>
          <StarFilledIcon key={1} />
          <StarFilledIcon key={2} />
          <StarFilledIcon key={3} />
          <StarIcon />
          <StarIcon />
        </>
      );
    case voteAverage >= 7.5 && voteAverage < 8.5:
      return (
        <>
          <StarFilledIcon key={1} />
          <StarFilledIcon key={2} />
          <StarFilledIcon key={3} />
          <StarFilledIcon key={4} />
          <StarIcon />
        </>
      );
    case voteAverage >= 8.5 && voteAverage <= 10:
      return (
        <>
          <StarFilledIcon key={1} />
          <StarFilledIcon key={2} />
          <StarFilledIcon key={3} />
          <StarFilledIcon key={4} />
          <StarFilledIcon key={5} />
        </>
      );
    default:
      return null;
  }
};

const AverageRating = ({ details }) => {
  return (
    <div className="w-1/4 flex justify-center pt-4">
      <div>
        <h3 className="tabs">Average Rating</h3>
        <Separator />
        <div className="flex items-center space-x-1">
          <span>{details.vote_average.toFixed(1)}</span>
          <span className="flex text-primary">
            {renderStarIcons(details.vote_average)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AverageRating;
