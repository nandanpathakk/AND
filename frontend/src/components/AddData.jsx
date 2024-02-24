import { useState } from "react";
import axios from "axios";
import { RiImageAddLine } from "react-icons/ri";

export default function AddData({postapi}) {
    const [issueImage, setIssueImage] = useState();
    const [issueName, setIssueName] = useState("");
    const [issueDesc, setIssueDesc] = useState("");
    const [issueLevel, setIssueLevel] = useState("");

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setIssueImage(file);
            };
        } else {
            alert("Please select an image file.");
        }
    };

    const handleSubmit = () => {
        if (!issueImage || !issueDesc || !issueName || !issueLevel){
            alert("Please fill all the fields");
            return;
        }

        const formData = new FormData();
        formData.append("issueImage", issueImage);
        formData.append("issue", issueName);
        formData.append("issueDesc", issueDesc);
        formData.append("issueLevel", issueLevel);

        axios.post(postapi, formData)
            .then(function (response) {
                console.log("data added successfully", response.data);
                setIssueImage("");
                setIssueName("");
                setIssueDesc("");
                setIssueLevel("");
            })
            .catch((error) => {
                console.log("error in posting data");
            });
    };

    return (
        <div>
            <div className="font-bold text-5xl mb-8 text-[#1F1D2B]">
                Enter Your Issue
            </div>
            <div className="flex items-center bg-[#79E777] p-7 rounded-xl">
                <div className="flex flex-col gap-5 m-5 w-[500px]">
                    <input
                        value={issueName}
                        onChange={(e) => setIssueName(e.target.value)}
                        className="border p-3 rounded-md" type="text" placeholder="Enter your Issue" />

                    <input
                        value={issueDesc}
                        onChange={(e) => setIssueDesc(e.target.value)}
                        className="border p-3 rounded-md" type="text" placeholder="Describe Your Issue" />

                    <input
                        value={issueLevel}
                        onChange={(e) => setIssueLevel(e.target.value)}
                        className="border p-3 rounded-md" type="text" placeholder="Enter Issue Level" />

                    <div className="flex justify-center">
                        <label
                            className="border border-black px-4 py-2 rounded-md  border-dashed flex items-center gap-3 hover:border-solid "
                            for="img">
                            <RiImageAddLine className="h-5 w-5" />
                            <p>Select Image</p>
                        </label>
                        <input type="file" id="img" name="img" accept="image/*"
                            onChange={handleFileChange}
                            className="hidden" />
                    </div>

                    <div className="flex justify-center items-center">
                        <button onClick={handleSubmit}
                            className="px-8 py-1 bg-black text-white hover:bg-white rounded-md hover:text-black">Submit</button>
                    </div>
                </div>

                <div>
                    {issueImage && <img src={URL.createObjectURL(issueImage)} alt="Issue Image" />}
                </div>
            </div>
        </div>
    );
}
