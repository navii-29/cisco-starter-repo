import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './IPInfo.css'; // Import CSS file for styling

const IPInfo = ({ version }) => {
  const [ipAddress, setIpAddress] = useState('');

  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const response = await axios.get(`https://api${version === 'ipv6' ? '6' : ''}.ipify.org?format=json`);
        setIpAddress(response.data.ip);
      } catch (error) {
        console.error('Error fetching IP address:', error);
      }
    };

    fetchIpAddress();
  }, [version]);

  return (
    <div className="ip-info">
      <h3>Your Public {version.toUpperCase()} Address</h3>
      <p>{ipAddress}</p>
    </div>
  );
};

export default IPInfo;
