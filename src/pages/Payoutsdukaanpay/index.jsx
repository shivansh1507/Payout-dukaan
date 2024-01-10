import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Input, List, Radio, SelectBox, Text } from "components";
import PayoutsDukaanpayCellheaderrow from "components/PayoutsDukaanpayCellheaderrow";
import PayoutsDukaanpayColumn03 from "components/PayoutsDukaanpayColumn03";
import PayoutsDukaanpayPagination from "components/PayoutsDukaanpayPagination";
import PayoutsDukaanpayRowframe2282 from "components/Header/Header";

import { CloseSVG } from "../../assets/images";

const lastMonthOptionsList = [
  { label: "December", value: "December" },
  { label: "January", value: "January" },
  { label: "Feburary", value: "Feburary" },
];

const PayoutsdukaanpayPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-5 w-5"
          src="images/img_navbaricon_white_a700.svg"
          alt="navbaricon"
        />
      ),
      label: "Home",
    },
    {
      icon: (
        <Img
          className="h-5 w-5"
          src="images/img_navbaricon_white_a700_20x20.svg"
          alt="navbaricon_One"
        />
      ),
      label: "Orders",
    },
    {
      icon: (
        <Img
          className="h-5 w-5"
          src="images/img_navbaricon_20x20.svg"
          alt="navbaricon_Two"
        />
      ),
      label: "Products",
    },
    {
      icon: (
        <Img
          className="h-5 mb-0.5 w-5"
          src="images/img_navbaricon_1.svg"
          alt="navbaricon_Three"
        />
      ),
      label: "Delivery",
    },
    {
      icon: (
        <Img className="h-5 mb-0.5 w-5" src="images/img_user.svg" alt="user" />
      ),
      label: "Marketing",
    },
    {
      icon: (
        <Img
          className="h-5 mb-0.5 w-5"
          src="images/img_navbaricon.svg"
          alt="navbaricon_Four"
        />
      ),
      label: "Analytics",
    },
    {
      icon: (
        <Img
          className="h-5 mb-[3px] w-5"
          src="images/img_navbaricon_2.svg"
          alt="navbaricon_Five"
        />
      ),
      label: "Payouts",
      href: "/payoutsdukaanpay",
      active: window.location.pathname === "/payoutsdukaanpay",
    },
    {
      icon: (
        <Img
          className="h-5 w-5"
          src="images/img_navbaricon_3.svg"
          alt="navbaricon_Six"
        />
      ),
      label: "Discounts",
    },
    {
      icon: (
        <Img
          className="h-5 w-5"
          src="images/img_navbaricon_4.svg"
          alt="navbaricon_Seven"
        />
      ),
      label: "Audience",
    },
    {
      icon: (
        <Img
          className="h-5 mb-0.5 w-5"
          src="images/img_navbaricon_5.svg"
          alt="navbaricon_Eight"
        />
      ),
      label: "Appearance",
    },
    {
      icon: (
        <Img
          className="h-5 mb-0.5 w-5"
          src="images/img_navbaricon_6.svg"
          alt="navbaricon_Nine"
        />
      ),
      label: "Plugins",
    },
  ];
  const [framevalue, setFramevalue] = React.useState("");
  const [inputsearchfielvalue, setInputsearchfielvalue] = React.useState("");
  const payoutsDukaanpayCellheaderrowPropList = [
    { dynamictext: "Transaction ID" },
    { dynamictext: "Order amount" },
    { dynamictext: "Transaction fees" },
    { dynamictext: "Refunds" },
    { dynamictext: "Total" },
  ];

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-inter items-center justify-end mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar
            onClick={() => collapseSidebar(!collapsed)}
            className="!sticky !w-56 bg-blue_gray-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]"
          >
            <div className="flex flex-row gap-3 items-center justify-start mt-4 mx-auto w-48">
              <div className="relative w-10">
                <div className="bg-white-A700 h-10 m-auto rounded w-10"></div>
                <Img
                  className="absolute h-[39px] inset-[0] justify-center m-auto object-cover rounded w-[39px]"
                  src="images/img_image.png"
                  alt="image"
                />
              </div>
              <div className="flex flex-col gap-1 items-start justify-center w-full">
                <Text
                  className="text-[15px] text-white-A700 w-full"
                  size="txtInterMedium15"
                >
                  Nishyan
                </Text>
                <Text
                  className="text-[13px] text-white-A700_a2 underline w-full"
                  size="txtGalanoGrotesqueRegular13"
                >
                  Visit store
                </Text>
              </div>
              <Img
                className="h-5 w-5"
                src="images/img_arrowdown.svg"
                alt="arrowdown"
              />
            </div>
            <Menu
              menuItemStyles={{
                button: {
                  padding: "6px 6px 6px 15px",
                  gap: "12px",
                  color: "#ffffffa2",
                  fontWeight: 500,
                  fontSize: "14px",
                  borderRadius: "4px",
                  [`&:hover, &.ps-active`]: {
                    color: "#ffffff",
                    backgroundColor: "#ffffff19 !important",
                  },
                },
              }}
              className="flex flex-col items-center justify-start mb-[31px] mt-3.5 pt-[9px] px-2 w-[93%]"
            >
              <div className="flex flex-col gap-[4.08px] items-center justify-start w-full">
                {sideBarMenu?.map((menu, i) => (
                  <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </div>
              <div className="flex flex-col items-center justify-start mt-[338px] pb-[15px] w-full">
                <MenuItem
                  icon={
                    <Img
                      className="h-6 mt-2 w-6"
                      src="images/img_outlinewallet.svg"
                      alt="outlinewallet"
                    />
                  }
                >
                  <Text className="text-[13px] w-auto">Available credits</Text>
                </MenuItem>
              </div>
            </Menu>
          </Sidebar>
          <div className="flex flex-1 flex-col font-galanogrotesque gap-8 items-center justify-start md:px-5 w-full">
            <PayoutsDukaanpayRowframe2282 className="bg-white-A700 border-b border-blue_gray-100 border-solid flex md:flex-col flex-row gap-4 items-center justify-start max-w-[1216px] sm:px-5 px-8 py-3 w-full" />
            <div className="flex flex-col gap-8 items-start justify-start max-w-6xl w-full">
              <div className="flex flex-col gap-6 items-start justify-start w-full">
                <div className="flex flex-row md:gap-10 items-center justify-between w-full">
                  <Text
                    className="text-gray-900 text-xl w-auto"
                    size="txtGalanoGrotesqueMedium20"
                  >
                    Overview
                  </Text>
                  <div className="flex sm:flex-1 flex-col items-center justify-start w-auto sm:w-full">
                    <SelectBox
                      className="bg-white-A700 border border-blue_gray-100 border-solid px-3.5 py-2 rounded text-base text-gray-800 text-left w-full"
                      placeholderClassName="text-gray-800"
                      indicator={
                        <Img
                          className="h-4 mr-[0] w-4"
                          src="images/img_arrowdown_gray_800.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="groupFiftyTwo"
                      options={lastMonthOptionsList}
                      isSearchable={false}
                      placeholder="Last Month"
                    />
                  </div>
                </div>
                <div className="flex md:flex-col flex-row gap-5 items-start justify-start w-full">
                  <List
                    className="md:flex-1 sm:flex-col flex-row gap-[19px] grid md:grid-cols-1 grid-cols-2 w-[67%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="hover:cursor-pointer flex flex-col items-center justify-center rounded-lg hover:shadow-bs shadow-bs hover:w-full w-full">
                      <div className="bg-blue-800 flex flex-col items-start justify-start p-5 rounded-lg w-full">
                        <div className="flex flex-col gap-4 items-start justify-start w-full">
                          <div className="flex flex-row gap-4 items-center justify-between w-full">
                            <Radio
                              value="NEXTPAYOUT"
                              className="sm:pr-5 text-base text-left text-white-A700"
                              inputClassName="mr-[5px]"
                              checked={false}
                              name="nextpayout"
                              label="NEXT PAYOUT"
                              id="NEXTPAYOUT"
                            ></Radio>
                            <Text
                              className="text-sm text-white-A700 w-auto"
                              size="txtGalanoGrotesqueRegular14"
                            >
                              {" "}
                              by Today, 04:00 PM
                            </Text>
                          </div>
                          <div className="flex flex-row gap-4 items-center justify-between w-full">
                            <Text
                              className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700 w-auto"
                              size="txtGalanoGrotesqueMedium32"
                            >
                              ₹2,312.23
                            </Text>
                            <div className="flex flex-row items-center justify-start w-auto">
                              <div className="flex flex-col items-start justify-start w-auto">
                                <Text
                                  className="text-base text-white-A700 underline w-auto"
                                  size="txtGalanoGrotesqueMedium16"
                                >
                                  23 orders
                                </Text>
                              </div>
                              <Img
                                className="h-6 w-6"
                                src="images/img_arrowright.svg"
                                alt="arrowright"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="hover:cursor-pointer flex flex-col items-center justify-center hover:shadow-bs hover:w-full w-full">
                      <div className="bg-white-A700 flex flex-col items-start justify-start p-5 rounded-lg shadow-bs w-full">
                        <div className="flex flex-col gap-4 items-start justify-start w-full">
                          <Radio
                            value="PENDINGAMOUNT"
                            className="sm:pr-5 text-base text-gray-800 text-left"
                            inputClassName="mr-[5px]"
                            checked={false}
                            name="pendingamount"
                            label="PENDING AMOUNT"
                            id="PENDINGAMOUNT"
                          ></Radio>
                          <div className="flex flex-row gap-4 items-center justify-between w-full">
                            <Text
                              className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-auto"
                              size="txtGalanoGrotesqueMedium32Gray900"
                            >
                              ₹92,312.20
                            </Text>
                            <div className="flex flex-row items-center justify-start w-auto">
                              <div className="flex flex-col items-start justify-start w-auto">
                                <Text
                                  className="text-base text-blue-800 underline w-auto"
                                  size="txtGalanoGrotesqueMedium16Blue800"
                                >
                                  13 orders
                                </Text>
                              </div>
                              <Img
                                className="h-6 w-6"
                                src="images/img_arrowright_blue_800.svg"
                                alt="arrowright"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </List>
                  <div className="flex flex-1 flex-col items-center justify-center w-full">
                    <div className="bg-white-A700 flex flex-col items-start justify-start p-5 rounded-lg shadow-bs w-full">
                      <div className="flex flex-col gap-4 items-start justify-start w-full">
                        <Radio
                          value="AMOUNTPROCESSED"
                          className="sm:pr-5 text-base text-gray-800 text-left"
                          inputClassName="mr-[5px]"
                          checked={false}
                          name="amountprocessedOne"
                          label="AMOUNT PROCESSED"
                          id="AMOUNTPROCESSED"
                        ></Radio>
                        <div className="flex flex-col items-center justify-between w-full">
                          <div className="flex flex-col items-center justify-between w-full">
                            <Text
                              className="md:text-3xl sm:text-[28px] text-[32px] text-gray-900 w-auto"
                              size="txtGalanoGrotesqueMedium32Gray900"
                            >₹23,92,312.19
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5 items-start justify-start w-auto md:w-full">
                <Text
                  className="text-gray-900 text-xl w-auto"
                  size="txtGalanoGrotesqueMedium20"
                >
                  Payouts
                </Text>
                <div className="bg-white-A700 flex flex-col h-[1144px] md:h-auto items-end justify-start max-w-6xl pb-6 pt-3 px-3 rounded-lg shadow-bs w-full">
                  <div className="flex flex-col gap-3 items-end justify-start w-auto md:w-full">
                    <div className="flex sm:flex-col flex-row gap-3 items-center justify-between w-full">
                      <div className="flex sm:flex-1 flex-col items-start justify-start w-[248px] sm:w-full">
                        <Input
                          name="inputsearchfiel"
                          placeholder="Order ID or transaction ID"
                          value={inputsearchfielvalue}
                          onChange={(e) => setInputsearchfielvalue(e)}
                          className="p-0 placeholder:text-gray-500 sm:pr-5 text-gray-500 text-left text-sm w-full"
                          wrapClassName="bg-white-A700 border border-blue_gray-100 border-solid flex pl-4 pr-[34px] py-[11px] rounded w-full"
                          prefix={
                            <Img
                              className="cursor-pointer h-3.5 mr-2 my-px"
                              src="images/img_search_gray_500.svg"
                              alt="search"
                            />
                          }
                          suffix={
                            <CloseSVG
                              fillColor="#999999"
                              className="cursor-pointer h-3.5 my-auto"
                              onClick={() => setInputsearchfielvalue("")}
                              style={{
                                visibility:
                                  inputsearchfielvalue?.length <= 0
                                    ? "hidden"
                                    : "visible",
                              }}
                              height={14}
                              width={14}
                              viewBox="0 0 14 14"
                            />
                          }
                        ></Input>
                      </div>
                      <div className="flex flex-col font-inter items-center justify-start w-auto">
                        <div className="flex flex-col items-center justify-start w-auto">
                          <div className="flex flex-row gap-4 items-center justify-end w-auto">
                            <div className="flex flex-col items-center justify-start w-auto">
                              <Button
                                className="bg-white-A700 border border-blue_gray-100 border-solid cursor-pointer flex items-center justify-center min-w-[79px] px-[11px] py-2 rounded"
                                rightIcon={
                                  <Img
                                    className="h-4 mt-px mb-0.5 ml-1.5"
                                    src="images/img_share.svg"
                                    alt="share"
                                  />
                                }
                              >
                                <div className="text-base text-gray-800 text-left">
                                  Sort
                                </div>
                              </Button>
                            </div>
                            <Button className="border border-blue_gray-100 border-solid flex h-9 items-center justify-center p-2 rounded w-9">
                              <Img
                                className="h-5"
                                src="images/img_download.svg"
                                alt="download"
                              />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-100 flex md:flex-col flex-row gap-10 items-center justify-start max-w-[1128px] px-3 py-2.5 rounded w-full">
                      <List
                        className="md:flex-1 sm:flex-col flex-row gap-10 grid grid-cols-2 w-[26%] md:w-full"
                        orientation="horizontal"
                      >
                        <PayoutsDukaanpayCellheaderrow
                          className="flex flex-col gap-[-1px] items-start justify-center w-[122px]"
                          triangleicon="images/img_triangleicon.svg"
                        />
                        <PayoutsDukaanpayCellheaderrow
                          className="flex flex-col gap-[-1px] items-start justify-center w-[122px]"
                          dynamictext="Status"
                        />
                      </List>
                      <List
                        className="md:flex-1 sm:flex-col flex-row gap-10 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 w-[71%] md:w-full"
                        orientation="horizontal"
                      >
                        {payoutsDukaanpayCellheaderrowPropList.map(
                          (props, index) => (
                            <React.Fragment
                              key={`PayoutsDukaanpayCellheaderrow${index}`}
                            >
                              <PayoutsDukaanpayCellheaderrow
                                className="flex flex-col gap-[-1px] items-start justify-center w-[122px]"
                                {...props}
                              />
                            </React.Fragment>
                          ),
                        )}
                      </List>
                    </div>
                  </div>
                  <List
                    className="flex flex-col gap-px items-center w-full"
                    orientation="vertical"
                  >
                    <div className="bg-white-A700 flex flex-1 flex-col h-12 md:h-auto items-center justify-start max-w-[1128px] px-3 py-3.5 w-full">
                      <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col font-inter gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col font-galanogrotesque gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[124px]" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[124px]" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-32" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[122px]" />
                        </div>
                        <Img
                          className="h-px w-full"
                          src="images/img_divider.svg"
                          alt="divider"
                        />
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col h-12 md:h-auto items-center justify-start max-w-[1128px] px-3 py-3.5 w-full">
                      <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col font-inter gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col font-galanogrotesque gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[124px]" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[124px]" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-32" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[122px]" />
                        </div>
                        <Img
                          className="h-px w-full"
                          src="images/img_divider.svg"
                          alt="divider"
                        />
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col h-12 md:h-auto items-center justify-start max-w-[1128px] px-3 py-3.5 w-full">
                      <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col font-inter gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col font-galanogrotesque gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[124px]" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[124px]" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-32" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[122px]" />
                        </div>
                        <Img
                          className="h-px w-full"
                          src="images/img_divider.svg"
                          alt="divider"
                        />
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col h-12 md:h-auto items-center justify-start max-w-[1128px] px-3 py-3.5 w-full">
                      <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col font-inter gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col font-galanogrotesque gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[124px]" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[124px]" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-32" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[122px]" />
                        </div>
                        <Img
                          className="h-px w-full"
                          src="images/img_divider.svg"
                          alt="divider"
                        />
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col h-12 md:h-auto items-center justify-start max-w-[1128px] px-3 py-3.5 w-full">
                      <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col font-inter gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col font-inter gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[124px]" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[124px]" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-32" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[122px]" />
                        </div>
                        <Img
                          className="h-px w-full"
                          src="images/img_divider.svg"
                          alt="divider"
                        />
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col h-12 md:h-auto items-center justify-start max-w-[1128px] px-3 py-3.5 w-full">
                      <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col font-inter gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col font-galanogrotesque gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[124px]" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[124px]" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-32" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[122px]" />
                        </div>
                        <Img
                          className="h-px w-full"
                          src="images/img_divider.svg"
                          alt="divider"
                        />
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col h-12 md:h-auto items-center justify-start max-w-[1128px] px-3 py-3.5 w-full">
                      <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col font-inter gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col font-galanogrotesque gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[124px]" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[124px]" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-32" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[122px]" />
                        </div>
                        <Img
                          className="h-px w-full"
                          src="images/img_divider.svg"
                          alt="divider"
                        />
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col h-12 md:h-auto items-center justify-start max-w-[1128px] px-3 py-3.5 w-full">
                      <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col font-inter gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col font-galanogrotesque gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[124px]" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[124px]" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-32" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[122px]" />
                        </div>
                        <Img
                          className="h-px w-full"
                          src="images/img_divider.svg"
                          alt="divider"
                        />
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col h-12 md:h-auto items-center justify-start max-w-[1128px] px-3 py-3.5 w-full">
                      <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col font-inter gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col font-galanogrotesque gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[124px]" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[124px]" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-32" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[122px]" />
                        </div>
                        <Img
                          className="h-px w-full"
                          src="images/img_divider.svg"
                          alt="divider"
                        />
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col h-12 md:h-auto items-center justify-start max-w-[1128px] px-3 py-3.5 w-full">
                      <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col font-inter gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col font-galanogrotesque gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[124px]" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[124px]" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-32" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[122px]" />
                        </div>
                        <Img
                          className="h-px w-full"
                          src="images/img_divider.svg"
                          alt="divider"
                        />
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col h-12 md:h-auto items-center justify-start max-w-[1128px] px-3 py-3.5 w-full">
                      <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col font-inter gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col font-galanogrotesque gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[124px]" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[124px]" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-32" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[122px]" />
                        </div>
                        <Img
                          className="h-px w-full"
                          src="images/img_divider.svg"
                          alt="divider"
                        />
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col h-12 md:h-auto items-center justify-start max-w-[1128px] px-3 py-3.5 w-full">
                      <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col font-inter gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col font-galanogrotesque gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[124px]" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[124px]" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-32" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[122px]" />
                        </div>
                        <Img
                          className="h-px w-full"
                          src="images/img_divider.svg"
                          alt="divider"
                        />
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col h-12 md:h-auto items-center justify-start max-w-[1128px] px-3 py-3.5 w-full">
                      <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col font-inter gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col font-galanogrotesque gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[124px]" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[124px]" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-32" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[122px]" />
                        </div>
                        <Img
                          className="h-px w-full"
                          src="images/img_divider.svg"
                          alt="divider"
                        />
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col h-12 md:h-auto items-center justify-start max-w-[1128px] px-3 py-3.5 w-full">
                      <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col font-inter gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col font-galanogrotesque gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[124px]" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[124px]" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-32" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[122px]" />
                        </div>
                        <Img
                          className="h-px w-full"
                          src="images/img_divider.svg"
                          alt="divider"
                        />
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col h-12 md:h-auto items-center justify-start max-w-[1128px] px-3 py-3.5 w-full">
                      <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col font-inter gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col font-galanogrotesque gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[124px]" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[124px]" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-32" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[122px]" />
                        </div>
                        <Img
                          className="h-px w-full"
                          src="images/img_divider.svg"
                          alt="divider"
                        />
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col h-12 md:h-auto items-center justify-start max-w-[1128px] px-3 py-3.5 w-full">
                      <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col font-inter gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col font-galanogrotesque gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[124px]" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[124px]" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-32" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[122px]" />
                        </div>
                        <Img
                          className="h-px w-full"
                          src="images/img_divider.svg"
                          alt="divider"
                        />
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col h-12 md:h-auto items-center justify-start max-w-[1128px] px-3 py-3.5 w-full">
                      <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col font-inter gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col font-galanogrotesque gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[124px]" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[124px]" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-32" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[122px]" />
                        </div>
                        <Img
                          className="h-px w-full"
                          src="images/img_divider.svg"
                          alt="divider"
                        />
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col h-12 md:h-auto items-center justify-start max-w-[1128px] px-3 py-3.5 w-full">
                      <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col font-inter gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col font-galanogrotesque gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[124px]" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[124px]" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-32" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[122px]" />
                        </div>
                        <Img
                          className="h-px w-full"
                          src="images/img_divider.svg"
                          alt="divider"
                        />
                      </div>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col h-12 md:h-auto items-center justify-start max-w-[1128px] px-3 py-3.5 w-full">
                      <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col font-inter gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col font-galanogrotesque gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[124px]" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[124px]" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-32" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-col font-galanogrotesque gap-[-1px] items-end justify-center w-[122px]" />
                        </div>
                        <Img
                          className="h-px w-full"
                          src="images/img_divider.svg"
                          alt="divider"
                        />
                      </div>
                    </div>
                  </List>
                  <div className="flex flex-col gap-6 items-center justify-center w-auto md:w-full">
                    <div className="bg-white-A700 flex flex-col h-12 md:h-auto items-center justify-start max-w-[1128px] px-3 py-3.5 w-full">
                      <div className="flex flex-col gap-3.5 items-center justify-start w-full">
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col gap-[-1px] items-start justify-center w-full" />
                          <PayoutsDukaanpayColumn03 className="bg-white-A700 flex flex-1 flex-col font-inter gap-[-1px] items-start justify-center w-full" />
                          <List
                            className="md:flex-1 sm:flex-col flex-row font-galanogrotesque gap-10 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 w-[71%] md:w-full"
                            orientation="horizontal"
                          >
                            {new Array(5).fill({}).map((props, index) => (
                              <React.Fragment
                                key={`PayoutsDukaanpayColumn03${index}`}
                              >
                                <PayoutsDukaanpayColumn03
                                  className="bg-white-A700 flex flex-col gap-[-1px] items-start justify-center sm:ml-[0] w-full"
                                  {...props}
                                />
                              </React.Fragment>
                            ))}
                          </List>
                        </div>
                        <Img
                          className="h-px w-full"
                          src="images/img_divider.svg"
                          alt="divider"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col font-inter items-center justify-center w-auto md:w-full">
                      <div className="flex flex-col items-center justify-center w-auto md:w-full">
                        <div className="flex flex-col items-center justify-center w-auto md:w-full">
                          <div className="flex flex-col items-center justify-start w-auto md:w-full">
                            <PayoutsDukaanpayPagination className="flex md:flex-col flex-row gap-6 items-center justify-start w-auto md:w-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PayoutsdukaanpayPage;
