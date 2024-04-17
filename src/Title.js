import React from 'react';

const Title = () => {

    const containerStyle = {
        position: 'fixed',
        left: '50%',
        top: '40%',
        transform: 'translate(-50%, -50%)',
        background: 'linear-gradient(to right, #f9858d, #f492ff)',
        borderRadius: '15px',
        padding: '20px 20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        zIndex: 900,
        height: '300px',
        width: '700px',
        minWidth: '300px',
        maxWidth: '80%',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      };

    const titleStyle = {
        position: 'fixed',
        top: '15%',
        width: '100%',
        textAlign: 'center',
        fontSize: '2em',
        color: '#555555',
        fontFamily: 'Arial, sans-serif',
        textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
    };

    const subtitleStyle = {
        position: 'fixed',
        top: '39%',
        width: '100%',
        textAlign: 'center',
        fontSize: '1.5em',
        color: '#555555',
        fontFamily: 'Arial, sans-serif'
    };

    return (
        <div style={containerStyle}>
            <div style={titleStyle}>
                又是一年，一个朱小哟的破壳日要到了！！
            </div>
            <div style={subtitleStyle}>
                ↓Until 朱晨昕++;
            </div>
        </div>
    );
};

export default Title;
