import React, { useState } from 'react';

const Upload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');
    const [aiImageUrl, setAiImageUrl] = useState('');
    const [loading, setLoading] = useState(false);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);

        // 이미지 미리보기 URL 생성
        const fileUrl = URL.createObjectURL(file);
        setPreviewUrl(fileUrl);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            alert("사진을 선택하세요!");
            return;
        }
        setLoading(true);
        const formData = new FormData();
        formData.append('image', selectedFile);

        try {
            const response = await fetch('/upload', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error('업로드 실패!!');
            }

            const data = await response.json();
            setUploadStatus(`업로드 성공! 경로: ${data.path}`);
            setAiImageUrl(data.ai_result);  // AI 결과로 반환된 이미지 URL 설정
            setLoading(false);

        } catch (error) {
            console.error('에러:', error);
            setUploadStatus('업로드 실패');
            setLoading(false);
        }
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = aiImageUrl;
        link.download = 'ai_image.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleReplay = () => {
        // 상태 초기화
        setSelectedFile(null);
        setPreviewUrl(null);
        setUploadStatus('');
        setAiImageUrl('');
        setLoading(false);
    };

    return (
        <div>
            <label htmlFor="lang">사진 선택 </label>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>업로드</button>
            
            {previewUrl && (
                <div className="image-container">
                    <h3>선택 사진:</h3>
                    <img src={previewUrl} alt="Preview" />
                </div>
            )}
            
            <p>{uploadStatus}</p>
            
            {loading && (
                <div className="loading-overlay">
                    <div className="spinner"></div>
                </div>
            )}
            
            {aiImageUrl && !loading && (
                <div className="result-overlay">
                    <div className="image-container">
                        <h3>결과물:</h3>
                        <img src={aiImageUrl} alt="AI Processed" className="result-image" />
                        <div className="button-container">
                            <button onClick={handleDownload} className="download-button">이미지 저장</button>
                            
                        </div>
                    </div>
              </div>
            )}
        </div>
);
};

export default Upload;