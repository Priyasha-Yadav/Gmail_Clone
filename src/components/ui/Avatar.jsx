import React from 'react';

const Avatar = ({ src, alt, size, initials }) => {
  const fallbackText = initials || alt;

  return (
    <div
      style={{
        width: 40,
        height: 40,
        borderRadius: '50%',
        backgroundColor: '#ccc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        fontSize: '1.2rem',
        color: '#fff',
      }}
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      ) : (
        <span>{fallbackText}</span>
      )}
    </div>
  );
};

export default Avatar;
