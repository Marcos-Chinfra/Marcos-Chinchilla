import React from "react";
import { GenericView } from "../containers/GenericView";
import { CardStaff, Networks } from "../components/CardStaff";

export function StaffView() {
  const netws: Networks = {
    facebook: "../public/icons/networks/facebook.svg",
    instagram: "../public/icons/networks/instagram.svg",
    twitter: "../public/icons/networks/twitter.svg",
  };
  return (
    <div>
      <GenericView
        title={"Meet Our Attorneys"}
        paragraph={
          "Problems trying to resolve the conflict between  the tow major realms of Classical physics: Newtonian mechanics"
        }>
        <CardStaff
          networksContant={netws}
          image={"../public/img/staff/staff1.png"}
          position={"Layer & ceo"}
          name={"Ashley Fletcher"}
        />
        <CardStaff
          networksContant={netws}
          image={"../public/img/staff/staff2.png"}
          position={"Layer & ceo"}
          name={"Rodney Stratton"}
        />
        <CardStaff
          networksContant={netws}
          image={"../public/img/staff/staff3.png"}
          position={"Layer civil law"}
          name={"Avie Beaton"}
        />
      </GenericView>
    </div>
  );
}
