import { useRef, useState } from "react";



function Drawings() {

    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [brushSize, setBrushSize] = useState(5);
    const [isErasing, setIsErasing] = useState(false);

    const [drawings, setDrawings] = useState(() => {
        const saved = localStorage.getItem("savedDrawings");

        return saved ? JSON.parse(saved) : [];
    });

function startDrawing(event) {
    setIsDrawing(true);

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.beginPath();
    context.moveTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
}    

function draw(event) {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.lineTo(event.nativeEvent.offsetX, event.nativeEvent.offsetY);
    context.lineWidth = brushSize;
    context.globalCompositeOperation = isErasing ? "destination-out" : "source-over";
    context.stroke();
}

function stopDrawing() {
    setIsDrawing(false);
}

function clearCanvas() {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    context.clearRect(0, 0, canvas.width, canvas.height);
}

function saveDrawing() {
    const canvas = canvasRef.current;

    const drawingImage = canvas.toDataURL();

    const savedDrawings = JSON.parse(
        localStorage.getItem("savedDrawings") || "[]"
    );

    savedDrawings.push({
        id: Date.now(),
        image: drawingImage
    });

    localStorage.setItem("savedDrawings",  JSON.stringify(savedDrawings));
    setDrawings(savedDrawings);
    console.log("Drawing saved!", savedDrawings);
}
    return (
        <main>
            <h1>Your Drawings</h1>
            <p>Let your creativity flow!</p>
        <section>
            <h2>Drawing Canvas</h2>

            <div>
                <button onClick={() => setBrushSize(3)}>
                    petite!
                </button>

                <button onClick={() => setBrushSize(7)}>
                    Medium!
                </button>

                <button onClick={() => setBrushSize(12)}>
                    Large!
                </button>

                <button onClick={() => setIsErasing(!isErasing)}>
                    {isErasing ? "Draw" : "Eraser"}
                </button>

                <button onClick={clearCanvas}>
                    Clear
                </button>

                <button onClick={saveDrawing}>
                    Save
                </button>
            </div>

            <canvas 
            ref={canvasRef}
            width={600}
            height={400}
            style={{border: "2px solid black" }}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            ></canvas>
        </section>    
        </main>
    );
}
export default Drawings;