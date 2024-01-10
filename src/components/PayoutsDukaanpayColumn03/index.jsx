import React from "react";

import { Text } from "components";

const PayoutsDukaanpayColumn03 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start w-auto">
          <div className="flex flex-col items-center justify-start w-auto">
            <div className="flex flex-col items-start justify-center w-auto">
              <div className="flex flex-col items-center justify-start w-auto">
                <div className="flex flex-col items-center justify-start w-auto">
                  {!!props?.dynamictext ? (
                    <Text
                      className="text-gray-800 text-sm w-auto"
                      size="txtGalanoGrotesqueRegular14Gray800"
                    >
                      {props?.dynamictext}
                    </Text>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PayoutsDukaanpayColumn03.defaultProps = {};

export default PayoutsDukaanpayColumn03;
