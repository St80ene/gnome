import Skeleton from "react-loading-skeleton";
import React from "react";
import { VideosCard,ThumbnailSkeleton } from "../Manage/styles";
import { VideoTitle } from "../Body/styles";

const SkeletonCard = () => {
  return (
    <>
      {Array(8)
        .fill()
        .map((item, index) => (
          <VideosCard key={index}>
            <ThumbnailSkeleton>
              <Skeleton height={"90%"} width={'100%'}/>
            </ThumbnailSkeleton>
            <VideoTitle>
            <Skeleton height={"80%"} width={'100%'}/>
            </VideoTitle>
          </VideosCard>
        ))}
    </>
  );
};

export default SkeletonCard;
