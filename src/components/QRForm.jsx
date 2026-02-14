import React from 'react'

const QRForm = ({qrData, setQrData}) => {
  return (
    <div className='w-full max-w-md mt-8 text-white'>
        <input type="text"
        value={qrData}
        onChange={(e) => setQrData(e.target.value)}
        placeholder="Enter the text/url"
        className="p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
    </div>
  )
}

export default QRForm