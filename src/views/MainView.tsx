import * as React from "react";
import { Input } from "../components/Input";

export function MainView() {
  return (
    <div>
      <Input
        labelText={"Email"}
        id={"email"}
        type={"text"}
        placeholder={"ingrese email"}
        require={true}
        borderRadius={"md"}
      />
    </div>
  );
}
