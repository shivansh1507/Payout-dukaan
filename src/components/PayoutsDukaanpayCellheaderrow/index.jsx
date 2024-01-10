import React from "react";

import { Img, Text } from "components";

const PayoutsDukaanpayCellheaderrow = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-1 items-center justify-start w-auto">
          <div className="flex flex-col items-center justify-start w-auto">
            <div className="flex flex-col items-center justify-start w-auto">
              <div className="flex flex-col items-start justify-center w-auto">
                <div className="flex flex-col items-center justify-start w-auto">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <Text
                      className="text-gray-800 text-sm w-auto"
                      size="txtGalanoGrotesqueMedium14"
                    >
                      {props?.dynamictext}
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {!!props?.triangleicon ? (
            <Img
              className="h-2 w-2"
              alt="triangleicon"
              src={props?.triangleicon}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

PayoutsDukaanpayCellheaderrow.defaultProps = { dynamictext: "Date" };

export default PayoutsDukaanpayCellheaderrow;
