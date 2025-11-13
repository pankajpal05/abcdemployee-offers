import React, { ReactNode } from "react";

interface MaxWidthContainerProps {
  children: ReactNode;
  id?: string;
  extraClasses?: string;
}

const MaxWidthContainer: React.FC<MaxWidthContainerProps> = ({
  children,
  id,
  extraClasses = "",
}) => {
  return (
    <div
      className={`max-w-[var(--breakpoint-large)] scroll-mt-20 md:scroll-mt-15 mx-auto px-5 py-10 md:px-10 md:py-15 ${extraClasses}`}
      id={id}
    >
      {children}
    </div>
  );
};

export default MaxWidthContainer;

