import React from "react";
import { GenericView } from "../containers/GenericView";
import { CardsReview, User } from "../components/CardsReview";

export function ReviewView() {
  const user: User = {
    img: "../public/img/imageUser.png",
    username: "Regina Miles",
    position: "Designer",
  };
  return (
    <div className="h-[591px] bg-review-background">
      <GenericView
        title={"What Clients Say"}
        paragraph={
          "Problems trying resolve the conflicts between the two major of Classical physics: Newtonian mechanics"
        }>
        <CardsReview
          userInfo={user}
          paragraph={
            "Slate helps you how many more days you need to work reach your finacial goal."
          }
          score={4}
        />
        <CardsReview
          userInfo={user}
          paragraph={
            "Slate helps you how many more days you need to work reach your finacial goal."
          }
          score={4}
        />
        <CardsReview
          userInfo={user}
          paragraph={
            "Slate helps you how many more days you need to work reach your finacial goal."
          }
          score={4}
        />
      </GenericView>
    </div>
  );
}
