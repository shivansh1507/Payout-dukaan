import React from "react";

const sizeClasses = {
  txtGalanoGrotesqueRegular14Gray800: "font-galanogrotesque font-normal",
  txtGalanoGrotesqueMedium14: "font-galanogrotesque font-medium",
  txtGalanoGrotesqueMedium16: "font-galanogrotesque font-medium",
  txtGalanoGrotesqueRegular14: "font-galanogrotesque font-normal",
  txtGalanoGrotesqueRegular13: "font-galanogrotesque font-normal",
  txtGalanoGrotesqueRegular12: "font-galanogrotesque font-normal",
  txtInterMedium14: "font-inter font-medium",
  txtGalanoGrotesqueMedium32: "font-galanogrotesque font-medium",
  txtInterMedium15: "font-inter font-medium",
  txtGalanoGrotesqueMedium20: "font-galanogrotesque font-medium",
  txtGalanoGrotesqueMedium32Gray900: "font-galanogrotesque font-medium",
  txtGalanoGrotesqueMedium16Blue800: "font-galanogrotesque font-medium",
  txtInterRegular13: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
