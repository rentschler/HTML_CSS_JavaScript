function downloadSvg() {
    const svg = document.querySelector("svg");
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    // Set canvas dimensions to match SVG element
    canvas.width = svg.width.baseVal.value;
    canvas.height = svg.height.baseVal.value;

    // Create a new image and load the SVG data URL
    const image = new Image();
    image.src = "data:image/svg+xml;base64," + btoa(new XMLSerializer().serializeToString(svg));

    // Wait for the image to load
    image.onload = function () {
        // Draw the image on the canvas
        context.drawImage(image, 0, 0);

        // Create a PNG data URL from the canvas
        const pngDataUrl = canvas.toDataURL("image/png");

        // Create a link element and click it to download the PNG file
        const link = document.createElement("a");
        link.download = "chart.png";
        link.href = pngDataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
}