; (function ($) {
    // USE STRICT

    // Image validation and preview
    const fileTypes = [
        "image/apng",
        "image/bmp",
        "image/gif",
        "image/jpeg",
        "image/pjpeg",
        "image/png",
        "image/svg+xml",
        "image/tiff",
        "image/webp",
        "image/x-icon",
    ];

    function validFileType(file) {
        return fileTypes.includes(file.type);
    }

    function returnFileSize(number) {
        if (number < 1024) {
            return `${number} bytes`;
        } else if (number >= 1024 && number < 1048576) {
            return `${(number / 1024).toFixed(1)} KB`;
        } else if (number >= 1048576) {
            return `${(number / 1048576).toFixed(1)} MB`;
        }
    }

    const input = document.querySelector("#listing_thmb");
    const preview = document.querySelector(".preview");

    input.style.opacity = 0;
    input.addEventListener("change", updateImageDisplay);


    function updateImageDisplay() {
        while (preview.firstChild) {
            preview.removeChild(preview.firstChild);
        }

        const curFiles = input.files;
        if (curFiles.length === 0) {
            const para = document.createElement("p");
            para.textContent = "No files currently selected for upload";
            preview.appendChild(para);
            console.log(curFiles);
        } else {

            for (const file of curFiles) {
                const previewDetails = document.createElement("div");
                previewDetails.setAttribute('class', 'preview_details');

                const para = document.createElement("p");
                if (validFileType(file)) {
                
                    const image = document.createElement("img");
                    image.src = URL.createObjectURL(file);

                    previewDetails.appendChild(image);
                } else {
                    para.textContent = `File name ${file.name}: Not a valid file type. Update your selection.`;
                    previewDetails.appendChild(para);
                }

                preview.appendChild(previewDetails);
            }
        }
    }




})(jQuery);