import { MessageContainer } from "@/shared/components/MessageContainer";
import { NotFoundIcon } from "@/shared/icons";
import React from "react";

const Page = () => {
  return (
    <MessageContainer
      iconComponent={<NotFoundIcon />}
      title="Page Not Found"
      text="The page you are looking for does not exit."
      buttonText="Back to Home"
      link="/"
    />
  );
};

export default Page;
