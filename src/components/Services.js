import React from "react";

const Services = () => {
  const services = [
    {
      Image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_334305_small.svg?v=1682336123",
      text1: "1 Year",
      text2: "Warranty",
    },
    {
      Image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_334304_small.svg?v=1682336123",
      text1: "7-day",
      text2: "Replacement",
    },

    {
      Image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_334303_small.svg?v=1682336123",
      text1: "Free",
      text2: "Shipping",
    },
    {
      Image:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_334302_small.svg?v=1682336123",
      text1: "GST",
      text2: "Billing",
    },
  ];
  return (
    <div className=" rounded-md grid   grid-cols-2 md:grid-cols-4 justify-around  bg-gray-100 p-5 container m-auto">
      {services.map((item, index) => {
        return (
          <div key={index} className="flex-col flex items-center">
            <img src={item.Image} />
            <p>
              <span className="font-semibold">{item.text1} </span> {item.text2}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
