
import React from "react";

const Card = ({ image, title, price, }) => (
    <div className="bg-yellow-300 p-4 rounded-lg shadow-md  items-center  flex  flex-col gap-4 w-full ">
        <div className="w-[200px]  rounded-full">
            <img src={image} alt={title} className=" object-cover h-full w-full " />
        </div>
        <div className="w-full  items-center">
            <p className="text-gray-600  font-regular ">{title}</p>
            <p className="text-xl font-semibold it">${price}</p>

        </div>

    </div>
);

export default Card;

