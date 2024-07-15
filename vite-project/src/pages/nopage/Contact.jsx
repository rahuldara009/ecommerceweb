import React from 'react';

const Contact = () => {
    const containerStyle = {
        backgroundColor: '#f0f0f0', // Light gray background color
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        color: '#000', // Black text
    };

    const overlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'rgba(255, 255, 255, 0.6)', // White semi-transparent background for blur effect
        backdropFilter: 'blur(10px)', // Blur effect
    };

    const contentStyle = {
        position: 'relative',
        background: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
        padding: '20px',
        borderRadius: '10px',
        textAlign: 'center',
        maxWidth: '500px',
        width: '100%',
        zIndex: 1, // Ensure the content is above the overlay
    };

    const headingStyle = {
        fontSize: '2rem',
        marginBottom: '10px',
    };

    const textStyle = {
        fontSize: '1.1rem',
        marginBottom: '10px',
        lineHeight: '1.6',
    };

    return (
        <div style={containerStyle}>
            <div style={overlayStyle}></div>
            <div style={contentStyle}>
                <h2 style={headingStyle}>Contact Us</h2>
                <p style={textStyle}>Visit us at our shop location:</p>
                <address style={textStyle}>
                    <strong>Dara Paridhan Center</strong><br />
                    Near Kanoi Park <br />
                   Kuchaman City<br />
                    Phone:9660152146<br />
                   
                </address>
            </div>
        </div>
    );
};

export default Contact;
