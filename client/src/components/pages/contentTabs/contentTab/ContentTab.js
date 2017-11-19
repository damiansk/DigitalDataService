import React from 'react';

const ContentTab = ({children, id, isActive}) => (
  <div className={`tab-pane fade ${isActive ? 'show active' : ''}`}
       id={`nav-${id}`}
       role="tabpanel"
       aria-labelledby={`nav-${id}-tab`}>
    {children}
  </div>
);

export default ContentTab;