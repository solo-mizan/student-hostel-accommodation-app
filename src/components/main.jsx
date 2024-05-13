"use client";

import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function Main() {
  const list = [
    {
      title: "RH Mess",
      img: "/1.jpeg",
      price: "2000 tk/month",
    },
    {
      title: "Orchid Mess",
      img: "/1.jpeg",
      price: "1750 tk/month",
    },
    {
      title: "Momota Nursing Home",
      img: "/1.jpeg",
      price: "2500 tk/month",
    },
    {
      title: "Khan Saheb Mess",
      img: "/1.jpeg",
      price: "1400 tk/month",
    },
    {
      title: "Lam Alif Mess",
      img: "/1.jpeg",
      price: "1600 tk/month",
    },
    {
      title: "Tijuni Mess",
      img: "/1.jpeg",
      price: "1400 tk/month",
    },
    {
      title: "Smart Home",
      img: "/1.jpeg",
      price: "1950 tk/month",
    },
    {
      title: "Smriti Nir",
      img: "/1.jpeg",
      price: "1200 tk/month",
    },
  ];

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="p-0 overflow-visible">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full h-[140px] object-cover"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="justify-between text-small">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
