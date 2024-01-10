import { Button, Img, Input, Text } from "components";
import React from "react";
import { CloseSVG } from "../../assets/images";

const Header = (props) => {
  const [framevalue, setFramevalue] = React.useState("");

  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-6 items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-auto">
            <Text
              className="text-gray-900 text-xl font-bold w-auto"
              size="txtGalanoGrotesqueMedium20"
            >
              {props?.payouts}
            </Text>
          </div>
          <div className="flex flex-row gap-3 items-center justify-start w-auto">
            <Img
              className="h-3.5 w-3.5"
              src="images/img_outlinedhelp.svg"
              alt="outlinedhelp"
            />
            <Text
              className="text-gray-800 text-xs w-auto"
              size="txtGalanoGrotesqueRegular12"
            >
              {props?.howitworks}
            </Text>
          </div>
        </div>
        <Input
          name="frame"
          placeholder="Search features, tutorials, etc."
          value={framevalue}
          onChange={(e) => setFramevalue(e)}
          className="font-galanogrotesque p-0 placeholder:text-gray-600 sm:pr-5 text-[15px] text-gray-600 text-left w-full rounded-long"
          wrapClassName="bg-gray-100 flex pl-4 pr-[35px] py-2.5 rounded-md w-[95%] md:w-full"
          prefix={
            <Img
              className="cursor-pointer h-4 mr-2 my-px"
              src="images/img_search.svg"
              alt="search"
            />
          }
          suffix={
            <CloseSVG
              fillColor="#7f7f7f"
              className="cursor-pointer h-4 my-auto"
              onClick={() => setFramevalue("")}
              style={{
                visibility: framevalue?.length <= 0 ? "hidden" : "visible",
              }}
              height={16}
              width={16}
              viewBox="0 0 16 16"
            />
          }
        ></Input>
        <div className="flex flex-col items-start justify-end w-full">
          <div className="flex flex-row gap-3 items-start justify-start w-auto">
            <Button className="bg-gray-300 flex h-10 items-center justify-center p-2.5 rounded-[50%] w-10">
              <Img
                className="h-5"
                src="images/img_user_gray_800.svg"
                alt="user_One"
              />
            </Button>
            <Button className="bg-gray-300 flex h-10 items-center justify-center p-2.5 rounded-[50%] w-10">
              <Img src="images/img_favorite.svg" alt="favorite" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

Header.defaultProps = {
  payouts: "Payouts",
  howitworks: "How it works",
};

export default Header;
