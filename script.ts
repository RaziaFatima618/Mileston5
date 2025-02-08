// This function listens for the form submission and generates the resume
document.getElementById("Resume-Form")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const cnic = (document.getElementById("phoneNo") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const cellNo = (document.getElementById("cellNo") as HTMLInputElement).value;
    const address = (document.getElementById("address") as HTMLInputElement).value;

    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

    const fileInput = document.getElementById("picture") as HTMLInputElement;
    const file = fileInput.files ? fileInput.files[0] : null;
    let imageUrl: string | null = null;

    if (file) {
        const reader = new FileReader();
        reader.onloadend = function () {
            imageUrl = reader.result as string;
            displayResume(imageUrl);
        };
        reader.readAsDataURL(file);
    } else {
        displayResume(null);  // Display resume without image
    }

    function displayResume(imageUrl: string | null) {
        const resumeDisplay = document.getElementById("resume-display");
        if (resumeDisplay) {
            resumeDisplay.innerHTML = '';

            const resumeContent = `
                <h2 contenteditable="true">${name}</h2>
                ${imageUrl ? `<img src="${imageUrl}" alt="Profile Picture" style="width: 150px; border-radius: 50%;">` : ''}
                <p><strong>CNIC:</strong> <span contenteditable="true">${cnic}</span></p>
                <p><strong>Email:</strong> <span contenteditable="true">${email}</span></p>
                <p><strong>Cell No:</strong> <span contenteditable="true">${cellNo}</span></p>
                <p><strong>Address:</strong> <span contenteditable="true">${address}</span></p>

                <h3>Education:</h3>
                <p contenteditable="true">${education}</p>

                <h3>Experience:</h3>
                <p contenteditable="true">${experience}</p>

                <h3>Skills:</h3>
                <p contenteditable="true">${skills}</p>
            `;
            resumeDisplay.innerHTML = resumeContent;
        }
    }
});

const shareableLink = document.getElementById("shareable-link") as HTMLAnchorElement;
shareableLink?.addEventListener("click", () => {
    // Implement the shareable link functionality
    alert("Shareable link clicked!");
});

const downloadpdf = document.getElementById("download") as HTMLButtonElement;
downloadpdf?.addEventListener("click", () => {
    const { jsPDF } = window.jspdf;
    
    const doc = new jsPDF();

    // Get the resume content
    const resumeContent = document.getElementById("resume-display")?.innerText;

    if (resumeContent) {
        doc.text(resumeContent, 10, 10); // Add resume text to PDF
        doc.save('resume.pdf'); // Save the PDF
    }
});
