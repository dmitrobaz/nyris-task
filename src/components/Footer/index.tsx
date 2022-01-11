import React, { useEffect, useState } from 'react';

import footerButton from '../../assets/img/footer-button.svg';

interface IFooter {
  config: any;
}

const Footer: React.FC<IFooter> = ({ config }): JSX.Element => {
  const [countResults, setCountResults] = useState<number>(0);

  useEffect(() => {
    setCountResults(config.length);
  }, [config]);
  return (
    <footer className="footer">
      <p className="footer-count-results">{countResults} results</p>
      <p className="footer-text">
        Didn’t find what you were looking for? Share your search with our{' '}
        <a className="footer-link" href="#">
          product experts.
        </a>
      </p>
      <button className="footer-button">
        <img src={footerButton} alt="" />
      </button>
    </footer>
  );
};

export default Footer;
