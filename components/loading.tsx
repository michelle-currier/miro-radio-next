// import React from "react";
import Skeleton from "./skeleton";

export function Loading() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Skeleton className="w-[30ch] h-[1.25rem]" />
        <Skeleton className="w-[45ch] h-[1rem]" />
      </div>
    </div>
  );
}

export default Loading;
