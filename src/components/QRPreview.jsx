import React from "react";
import QRCode from "react-qr-code";

const QRPreview = ({ value }) => {
  if (!value) return null;

  return (
    <div className="mt-8 p-6 bg-white rounded-2xl shadow-lg">
      <QRCode value={value} size={200} />
    </div>
  );
};

export default QRPreview;
