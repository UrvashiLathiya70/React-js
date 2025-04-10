import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useRouter } from "next/navigation";

export default function CommonBack() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <div>
      <KeyboardBackspaceIcon onClick={handleBack} />
    </div>
  );
}
