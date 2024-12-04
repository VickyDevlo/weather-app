import { Alert, Button } from "@/components/ui";
import { AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, MapPin } from "lucide-react";
import React from "react";

export const AlertMsg = ({
  title,
  desc,
  onClick,
  btnText = "",
  type = "",
  icon = null,
}) => {
  return (
    <Alert variant="destructive">
      {type === "error" && <AlertCircle className="h-4 w-4" />}
      <AlertTitle className="font-bold text-xl tracking-tight">
        {title}
      </AlertTitle>
      <AlertDescription className="flex flex-col gap-4">
        <p className="font-semibold">{desc}</p>
        <Button onClick={onClick} variant="outline" className="w-fit">
          {icon}
          {btnText}
        </Button>
      </AlertDescription>
    </Alert>
  );
};
