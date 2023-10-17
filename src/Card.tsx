import React from "react";
const imagesrc="https://images.unsplash.com/photo-1697377389156-5624773d1a21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80";
const Card = () => {
    return (
        <div
            className="bg-gradient-to-b from-white to-f2f2f2 p-4 rounded-lg shadow"
        >
            <div >
                <img
                    src={imagesrc}
                    alt="Card Image"
                    className="w-full rounded-lg"
                />
            </div>
            <div className="mt-4">
                <h4 className="mb-0 text-16 font-bold">Category Text</h4>
                <h2 className="my-2 text-24 font-bold">Title Text</h2>
                <p className="mb-0 text-14">Content</p>
            </div>
        </div>
    );
};

export default Card;

const CardGlassmorph = () => {
    return (
        <div className="w-400 h-200 bg-opacity-20 backdrop-filter blur-10 rounded-10 flex flex-row overflow-hidden">
            <div className="flex-1 flex items-center justify-center">
                <img src={imagesrc} alt="Image" className="w-150 h-150 object-cover rounded-50% m-20" />
            </div>
            <div className="flex-2 flex flex-col justify-center">
                <h2 className="text-white text-20 m-10">Category</h2>
                <h1 className="text-white text-24 m-10">Title</h1>
                <p className="text-white text-16 m-10">Content</p>
            </div>
        </div>
    );
};

export {CardGlassmorph};