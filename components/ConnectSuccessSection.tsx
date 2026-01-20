/* file: components/ConnectSuccessSection.tsx */
import React from 'react';
import './ConnectSuccess.css'; // Import file CSS vừa tạo ở bước 1

export const ConnectSuccessSection: React.FC = () => {
  return (
    <section className="connect-success-section">
      {/* Lớp nền lưới chấm */}
      <div className="bg-grid"></div>

      {/* Khu vực hiệu ứng */}
      <div className="interaction-area">
        
        {/* Vòng ngoài cùng */}
        <div className="pulse-ring ring-large">
          <div className="ring-dot"></div>
        </div>

        {/* Vòng giữa */}
        <div className="pulse-ring ring-medium">
          <div className="ring-dot"></div>
        </div>

        {/* Vòng trong cùng */}
        <div className="pulse-ring ring-small">
          <div className="ring-dot"></div>
        </div>

        {/* Thẻ trung tâm */}
        <div className="center-card">
          <div className="card-title">CLICK CONFIRM</div>
          <div className="card-subtitle">ATTENDANCE</div>
        </div>
      </div>
    </section>
  );
};
