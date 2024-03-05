import React, { Component, useState, useRef, useEffect } from "react";
import { render } from "react-dom";
import { Stage, Text, Arrow, Layer, Image, Shape, Group, Rect } from "react-konva";
import useImage from "use-image";
import Brain from "assets/Brain.png";

const points = [10, 200, 100, 200];

const useCanvas = () => {
    const [image] = useImage(
        'https://i.ibb.co/NrZ5hXc/Brain.png'
        // Brain
        // "https://upload.wikimedia.org/wikipedia/commons/5/55/John_William_Waterhouse_A_Mermaid.jpg"
    );
    const [canvas, setCanvas] = React.useState(null);

    React.useEffect(() => {
        // do this only when image is loaded
        if (!image) {
            return;
        }
        var blurredRect = {
            x: 250,
            y: 250,
            height: 400,
            width: 400,
            spread: 100
        };
        const canvas = document.createElement("canvas");
        var ctx = canvas.getContext("2d");


        canvas.width = image.width;
        canvas.height = image.height;
        // first pass draw everything
        ctx.drawImage(image, 1, 1, 500, 500, 1, 1, 500, 500);
        // next drawings will be blurred
        // ctx.filter = "blur(" + blurredRect.spread + "px)";
        // draw the canvas over itself, cropping to our required rect
        // ctx.drawImage(
        //     canvas,
        //     blurredRect.x,
        //     blurredRect.y,
        //     blurredRect.width,
        //     blurredRect.height,
        //     blurredRect.x,
        //     blurredRect.y,
        //     blurredRect.width,
        //     blurredRect.height
        // );
        // draw the coloring (white-ish) layer, without blur
        // ctx.filter = "none"; // remove filter
        // ctx.fillStyle = "rgba(255,255,255,0.2)";
        // ctx.setLineDash([]);
        ctx.strokeStyle = "red";
        // ctx.beginPath();
        // ctx.roundRect(100, 30, 10, 10, 100);
        // ctx.roundRect(50, 70, 10, 10, 100);
        // ctx.roundRect(40, 110, 10, 10, 100);
        // ctx.roundRect(40, 150, 10, 10, 100);

        // ctx.roundRect(150, 40, 10, 10, 100);
        ctx.stroke();
        // ctx.fillRect(
        //   blurredRect.x,
        //   blurredRect.y,
        //   blurredRect.width,
        //   blurredRect.height
        // );

        setCanvas(canvas);
    }, [image]);

    return canvas;
};


const App = () => {
    const canvas = useCanvas();
    const divRef = useRef(null)
    const [dimensions, setDimensions] = useState({
        width: 0,
        height: 0
    })

    useEffect(() => {
        debugger
        if (divRef.current?.offsetHeight && divRef.current?.offsetWidth) {
            setDimensions({
                width: divRef.current.offsetWidth,
                height: divRef.current.offsetHeight
            })
        }
    }, [])


    return (
        <div ref={divRef} style={{ width: '100%', height: '100%' }}>
            <Stage x={1} y={1} width={dimensions.width} height={dimensions.height}>
                <Layer offsetX={dimensions.width/2} x={1} y={1} width={50} height={50}>
                    <Image image={canvas} />
                </Layer>
                <Layer x={1} y={1} width={50} height={50}>
                    <Arrow points={[1, 40, 40, 65]} fill="black" stroke="black" />
                </Layer>

                {/* <Arrow points={[1, 40, 40, 65]} fill="black" stroke="black" />

                <Arrow points={[10, 200, 100, 200]} fill="black" stroke="black" />
                <Arrow points={[10, 200, 100, 200]} fill="black" stroke="black" />
                <Arrow points={[10, 200, 100, 200]} fill="black" stroke="black" />
                <Arrow points={[10, 200, 100, 200]} fill="black" stroke="black" /> */}

                {/* <Layer>
                <Group
                    // rotation={shapeProps.rotation}
                    listening={false}
                    x={1}
                    y={1}
                    offset={{
                        x: 10 / 2,
                        y: 20 / 2
                    }}
                >
                    <Rect
                        // ref={"nameRefShape"}
                        height={80}
                        width={80} //this does not change as state change
                        cornerRadius={100}
                        fill="#000"
                        x={1}
                        y={2}
                    />
                    <Text
                        // ref={nameRef}
                        x={10 / 2 - 30 / 2}
                        y={20}
                        text={"shapeProps.name"}
                        ellipsis={true}
                        //height={20}
                        align="center"
                        verticalAlign="middle"
                        fontSize={13}
                        fontFamily="Calibri"
                        fill="#fff"
                        background="#000"
                        zIndex={3}
                    />
                </Group>
            </Layer> */}
            </Stage>
        </div>
    );
};

export default App