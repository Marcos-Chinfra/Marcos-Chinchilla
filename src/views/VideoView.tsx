import * as React from "react";
import { VideoContainer } from "../containers/VideoContainer";

export function VideoView() {
  return (
    <div className="h-[759px] bg-video-main relative">
      <VideoContainer
        title={"Who We Are"}
        paragraph={
          "Problems trying resolve the conflicts between the two major of Classical physics: Newtonian mechanics"
        }
      />
      <div className="h-[350px] w-full bg-gradient-to-r from-main_button_color to-video-part absolute bottom-0"></div>
    </div>
  );
}
