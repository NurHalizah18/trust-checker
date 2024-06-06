import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { useDropzone } from "react-dropzone";
import "./CheckerStyle.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Checker = () => {
    const [fileInfo, setFileInfo] = useState(null);

    const onDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        setFileInfo({
            fileName: file.name,
            fileType: file.type,
            fileSize: (file.size / (1024 * 1024)).toFixed(2) + " MB",
            verificationDate: new Date().toLocaleDateString(),
            verificationTime: new Date().toLocaleTimeString(),
            verificationResult: "File orifinates from a strusted source"
        });
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    useEffect(() => {
        setFileInfo({
        });
    }, []);

    return (
        <div>
            { <Navbar/>}
            <div className="checker-container">
                <h1>File Authenticity</h1>
                <p>Verifying the Authenticity of a Web Page File</p>
                <p>
                    <span><FontAwesomeIcon icon={faCheckCircle} style={{color: 'green', marginRight: '3px'}} />Free  </span>
                    <span><FontAwesomeIcon icon={faCheckCircle} style={{color: 'green', marginRight: '3px'}} />Online  </span>
                    <span><FontAwesomeIcon icon={faCheckCircle} style={{color: 'green', marginRight: '3px'}} />No Limits  </span>
                </p>
                <div className="checker-upload-container">
                    <div className="upload-section">
                        <div {...getRootProps({ className: 'dropzone'})}>
                            <input {...getInputProps()}/>
                            <h4>Upload File</h4>
                            <p>Drag and drop
                                <br/>
                                your file here, or
                            </p>
                            <button>Select File</button>
                        </div>
                    </div>

                    {fileInfo && (
                            <div className="file-info">
                                <h2>Possible Sources</h2>
                                <div className="file-info-row">
                                    <label>Source of Origin</label>
                                    <input type="text" value="Uploaded from user's device" readOnly />
                                </div>
                                <div className="file-info-row">
                                    <label>Verification Date</label>
                                    <input type="text" value={fileInfo.verificationDate} readOnly />
                                </div>
                                <div className="file-info-row">
                                    <label>Verification Time</label>
                                    <input type="text" value={fileInfo.verificationTime} readOnly />
                                </div>
                                <div className="file-info-row">
                                    <label>Verification Result</label>
                                    <input type="text" value={fileInfo.verificationResult} readOnly />
                                </div>
                                <div className="file-info-bawah">
                                    <div className="file-info-row-bawah">
                                        <label>File Name</label>
                                        <input type="text" value={fileInfo.fileName} readOnly />
                                    </div>
                                    <div className="file-info-row-bawah">
                                        <label>File Type</label>
                                        <input type="text" value={fileInfo.fileType} readOnly />
                                    </div>
                                    <div className="file-info-row-bawah">
                                        <label>File Size</label>
                                        <input type="text" value={fileInfo.fileSize} readOnly />
                                    </div>
                                    <div className="file-info-row-bawah">
                                        <label>Next Step</label>
                                        <input type="text" value="You can confirm the authenticity of this file." readOnly />
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
            </div>

        </div>
    )
}

export default Checker;