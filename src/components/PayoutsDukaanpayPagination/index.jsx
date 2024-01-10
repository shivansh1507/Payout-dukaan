import React from "react";

import { Button, Img, Text } from "components";

const PayoutsDukaanpayPagination = (props) => {
  return (
    <>
      <div className={props.className}>
        <Button
          className="bg-white-A700 border border-blue_gray-100 border-solid cursor-pointer flex items-center justify-center min-w-[100px] pl-[5px] pr-[11px] py-1.5 rounded"
          leftIcon={
            <Img
              className="h-[18px] mr-1.5 my-px"
              src="images/img_arrowleft.svg"
              alt="arrow_left"
            />
          }
        >
          <div className="font-inter font-medium text-center text-gray-800 text-sm">
            {props?.leftdrawable}
          </div>
        </Button>
        <div className="flex sm:flex-col flex-row gap-2 items-start justify-start w-auto sm:w-full">
          <div className="flex flex-col h-7 md:h-auto items-center justify-center py-0.5 rounded w-7">
            <Text
              className="text-center text-gray-800 text-sm w-full"
              size="txtInterRegular14"
            >
              {props?.columnzero}
            </Text>
          </div>
          <div className="flex flex-col h-7 md:h-auto items-center justify-center py-0.5 rounded w-7">
            <Text
              className="text-center text-gray-800 text-sm w-full"
              size="txtInterRegular14"
            >
              {props?.columnzeroOne}
            </Text>
          </div>
          <Button className="bg-blue-800 cursor-pointer font-inter font-medium h-7 py-1 rounded text-center text-sm text-white-A700 w-7">
            {props?.ten}
          </Button>
          <div className="flex flex-col h-7 md:h-auto items-center justify-center py-0.5 rounded w-7">
            <Text
              className="text-center text-gray-800 text-sm w-full"
              size="txtInterRegular14"
            >
              {props?.columnzeroTwo}
            </Text>
          </div>
          <div className="flex flex-col h-7 md:h-auto items-center justify-center py-0.5 rounded w-7">
            <Text
              className="text-center text-gray-800 text-sm w-full"
              size="txtInterRegular14"
            >
              {props?.columnzeroThree}
            </Text>
          </div>
          <div className="flex flex-col h-7 md:h-auto items-center justify-center py-0.5 rounded w-7">
            <Text
              className="text-center text-gray-800 text-sm w-full"
              size="txtInterRegular14"
            >
              {props?.columnzeroFour}
            </Text>
          </div>
          <div className="flex flex-col h-7 md:h-auto items-center justify-center py-0.5 rounded w-7">
            <Text
              className="text-center text-gray-800 text-sm w-full"
              size="txtInterRegular14"
            >
              {props?.columnzeroFive}
            </Text>
          </div>
          <div className="flex flex-col h-7 md:h-auto items-center justify-center py-0.5 rounded w-7">
            <Text
              className="text-center text-gray-800 text-sm w-full"
              size="txtInterRegular14"
            >
              {props?.columnzeroSix}
            </Text>
          </div>
          <div className="flex flex-col h-7 md:h-auto items-center justify-center py-0.5 rounded w-7">
            <Text
              className="text-center text-gray-800 text-sm w-full"
              size="txtInterRegular14"
            >
              {props?.columnzeroSeven}
            </Text>
          </div>
          <div className="flex flex-col h-7 md:h-auto items-center justify-center py-0.5 rounded w-7">
            <Text
              className="text-center text-gray-800 text-sm w-full"
              size="txtInterRegular14"
            >
              {props?.columnzeroEight}
            </Text>
          </div>
          <div className="flex flex-col h-7 md:h-auto items-center justify-center py-0.5 rounded w-7">
            <Text
              className="text-center text-gray-800 text-sm w-full"
              size="txtInterRegular14"
            >
              {props?.columnzeroNine}
            </Text>
          </div>
        </div>
        <Button
          className="bg-white-A700 border border-blue_gray-100 border-solid cursor-pointer flex items-center justify-center min-w-[74px] pl-[11px] pr-[5px] py-1.5 rounded"
          rightIcon={
            <Img
              className="h-[18px] ml-1.5 my-px"
              src="images/img_arrowright_gray_800.svg"
              alt="arrow_right"
            />
          }
        >
          <div className="font-inter font-medium text-center text-gray-800 text-sm">
            {props?.next}
          </div>
        </Button>
      </div>
    </>
  );
};

PayoutsDukaanpayPagination.defaultProps = {
  leftdrawable: "Previous",
  columnzero: "1",
  columnzeroOne: "...",
  ten: "10",
  columnzeroTwo: "11",
  columnzeroThree: "12",
  columnzeroFour: "13",
  columnzeroFive: "14",
  columnzeroSix: "15",
  columnzeroSeven: "16",
  columnzeroEight: "17",
  columnzeroNine: "18",
  next: "Next",
};

export default PayoutsDukaanpayPagination;
