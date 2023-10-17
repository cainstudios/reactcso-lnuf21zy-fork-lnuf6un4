import React from "react";

const Card = () => {
    return (
        <div
            className="bg-gradient-to-b from-white to-f2f2f2 p-4 rounded-lg shadow"
        >
            <div>
                <img
                    src="https://example.com/image.jpg"
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