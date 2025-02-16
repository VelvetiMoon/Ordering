import { useState } from "react";

export default function FileUploader() {
    const [file, setFile] = useState(null);
    const [status, setStatus] = useState('idle'); // 'idle', 'uploading', 'success', or 'error'

    function handleFileChange(e) {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    }

    function uploadFile() {
        if (!file) return;

        setStatus('uploading'); // Set status to uploading
        setTimeout(() => {
            // Simulate a successful upload
            setStatus('success');
        }, 2000);
    }

    return (
        <div className="space-y-4">
            <input type="file" onChange={handleFileChange} />
            {file && (
                <div className="mb-4 text-sm">
                    <p>File name: {file.name}</p>
                    <p>Size: {(file.size / 1024).toFixed(2)} KB</p>
                    <p>Type: {file.type}</p>
                </div>
            )}
            {file && status === 'idle' && (
                <button onClick={uploadFile} className="px-4 py-2 bg-blue-500 text-white rounded">
                    Upload
                </button>
            )}
            {status === 'uploading' && <p>Uploading...</p>}
            {status === 'success' && <p className="text-green-500">File uploaded successfully!</p>}
            {status === 'error' && <p className="text-red-500">Failed to upload file.</p>}
        </div>
    );
}
