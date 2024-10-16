import React, { useRef, useEffect } from 'react';

const WebView = (props) => {
    const { url } = props
    return (
        <div
            style={{
                // width: '100vw',
                height: '100vh',
                overflow: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <iframe
                src={url} // Remplacez par l'URL souhaitée
                style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    flexShrink: 0,
                }}
            />
        </div>
    );
};

export default WebView;