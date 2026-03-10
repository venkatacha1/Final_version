
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function Hero3DCard() {
    return (
        <CardContainer className="inter-var" containerClassName="py-0 w-full h-full">
            <CardBody
                className="bg-transparent relative group/card w-full h-auto rounded-xl border-0">

                {/* Removed text items to focus on the image as requested */}

                <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full h-full">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl shadow-2xl"
                    >
                        <source src="/videos/cyberpunk-drone-video.mp4" type="video/mp4" />
                    </video>
                </CardItem>
            </CardBody>
        </CardContainer>
    );
}
