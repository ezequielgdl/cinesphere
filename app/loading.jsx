import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="flex flex-col items-center md:min-hscreen md:px-3">
      <div className="max-w-[90%]">
        <Skeleton className="w-full tabs px-3 py-2">Loading...</Skeleton>
      </div>
    </main>
  );
}
