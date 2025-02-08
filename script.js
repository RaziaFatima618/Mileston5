var _a;
(_a = document.getElementById("Resume-Form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var cnic = document.getElementById("phoneNo").value; // Fixed ID
    var email = document.getElementById("email").value;
    var cellNo = document.getElementById("cellNo").value; // Fixed ID
    var address = document.getElementById("address").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var fileInput = document.getElementById("picture");
    var file = fileInput.files ? fileInput.files[0] : null;
    var imageUrl = null;
    if (file) {
        var reader_1 = new FileReader();
        reader_1.onloadend = function () {
            imageUrl = reader_1.result;
            displayResume(imageUrl);
        };
        reader_1.readAsDataURL(file);
    }
    else {
        displayResume(null); // Display resume without image
    }
    function displayResume(imageUrl) {
        var resumeDisplay = document.getElementById("resume-display");
        if (resumeDisplay) {
            resumeDisplay.innerHTML = '';
            var resumeContent = "\n                <h2>".concat(name, "</h2>\n                ").concat(imageUrl ? "<img src=\"".concat(imageUrl, "\" alt=\"Profile Picture\" style=\"width: 150px; border-radius: 50%;\">") : '', "\n                <p><strong>CNIC:</strong> ").concat(cnic, "</p>\n                <p><strong>Email:</strong> ").concat(email, "</p>\n                <p><strong>Cell No:</strong> ").concat(cellNo, "</p>\n                <p><strong>Address:</strong> ").concat(address, "</p>\n                \n                <h3>Education:</h3>\n                <p>").concat(education, "</p>\n\n                <h3>Experience:</h3>\n                <p>").concat(experience, "</p>\n\n                <h3>Skills:</h3>\n                <p>").concat(skills, "</p>\n            ");
            resumeDisplay.innerHTML = resumeContent;
        }
    }
});
import { jsPDF } from "jspdf";

var shareableLink = document.getElementById("shareable-link");
shareableLink === null || shareableLink === void 0 ? void 0 : shareableLink.addEventListener("click", function () {
    // Implement the shareable link functionality
    alert("Shareable link clicked!");
});
var downloadpdf = document.getElementById("download");
downloadpdf === null || downloadpdf === void 0 ? void 0 : downloadpdf.addEventListener("click", function () {
    // Implement PDF download functionality
    alert("Download PDF clicked!");
});
