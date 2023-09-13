import React from 'react';

const SocialIcons: React.FC = () => {
  return (
    <div style={{ position: 'fixed', top: '10px', right: '10px' }}>
      <a href="https://github.com/rishabkumar7" target="_blank" rel="noopener noreferrer" style={{ margin: '0 5px' }}>
        <img src="/github.svg" alt="GitHub" width="40" height="40" />
      </a>
      <a href="https://twitter.com/rishabk7" target="_blank" rel="noopener noreferrer" style={{ margin: '0 5px' }}>
        <img src="/twitter.svg" alt="Twitter" width="40" height="40" />
      </a>
    </div>
  );
};

export default SocialIcons;