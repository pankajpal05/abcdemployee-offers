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
      className={`max-w-[var(--breakpoint-large)] scroll-mt-20 md:scroll-mt-15 mx-auto px-4 py-20 lg:px-10 lg:py-25 ${extraClasses}`}
      id={id}
    >
      {children}
    </div>
  );
};

export default MaxWidthContainer;

