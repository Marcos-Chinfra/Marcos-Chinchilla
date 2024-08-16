import React from "react";

import { MainView } from "../views/MainView";
import "./App.css";
import { ServicesView } from "../views/ServicesView";
import { VideoView } from "../views/VideoView";
import { ReviewView } from "../views/ReviewView";
import { StaffView } from "../views/StaffView";
import { MakeAppoinment } from "../views/MakeAppointment";
import { FooterView } from "../views/FooterView";

function App() {
  return (
    <div className="w-mainImageW">
      <MainView />
      <ServicesView />
      <VideoView />
      <ReviewView />
      <StaffView />
      <MakeAppoinment />
      <FooterView />
    </div>
  );
}

export default App;
