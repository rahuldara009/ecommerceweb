import React from 'react';

const NoPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <p style={styles.paragraph}>
      Welcome to Dara Paridhan Center! We are an offline store specializing in women's wear, offering a wide variety of high-quality clothing in different color combinations. Located in Kuchaman City, Nagaur, Rajasthan, our shop is dedicated to providing our customers with the best shopping experience. Thank you for visiting us, and we look forward to serving you!
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    borderRadius: '10px',
    margin: '20px auto',
    maxWidth: '800px',
  },
  heading: {
    fontSize: '2em',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '1.2em',
    lineHeight: '1.6',
  },
};

export default NoPage;
