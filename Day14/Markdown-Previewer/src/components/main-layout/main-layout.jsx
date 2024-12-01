import React from 'react';
import './main-layout.css';

const MainLayout = ({ children }) => {
  return <main className="mainLayout">{children}</main>;
};

MainLayout.Column = ({ children }) => {
  return <div className="mainLayout__col">{children}</div>;
};

export default MainLayout;
