import React from 'react';

const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav>Nav</nav>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};

export default PageContainer;
