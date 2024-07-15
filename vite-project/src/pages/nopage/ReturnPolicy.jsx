import React from 'react';

const ReturnPolicy = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Return Policy</h1>
      <p style={styles.paragraph}>
        At Dara Paridhan, we strive to ensure that our customers are completely satisfied with their purchases. If you are not entirely satisfied with your purchase, we're here to help.
      </p>
      <ul style={styles.list}>
        <li>
          <strong>1. Return Eligibility</strong>
          <ul>
            <li>Items must be returned within 2 days of the purchase date.</li>
            <li>Items must be unused, in the same condition that you received them, and in the original packaging.</li>
            <li>A receipt or proof of purchase is required for all returns.</li>
          </ul>
        </li>
        <li>
          <strong>2. Return Process</strong>
          <ul>
            <li>To initiate a return, please contact our customer service at 9660152146.</li>
            <li>Once your return is approved, you will receive a return authorization and instructions on how and where to send your item.</li>
            <li>Please do not send your purchase back to the manufacturer unless instructed.</li>
          </ul>
        </li>
        <li>
          <strong>3. Refunds</strong>
          <ul>
            <li>Once we receive your item, we will inspect it and notify you of the status of your refund.</li>
            <li>If your return is approved, we will initiate a refund to your original method of payment. The credit will be applied within 3 days, depending on your card issuer's policies.</li>
          </ul>
        </li>
        <li>
          <strong>4. Shipping Costs</strong>
          <ul>
            <li>You will be responsible for paying your own shipping costs for returning your item. Shipping costs are non-refundable.</li>
            <li>If you receive a refund, the cost of return shipping will be deducted from your refund.</li>
            <li>For exchanges, we will cover the shipping costs for sending the replacement item.</li>
          </ul>
        </li>
        <li>
          <strong>5. Contact Us</strong>
          <ul>
            <li>If you have any questions on how to return your item, please contact us at:</li>
            <li>Dara Paridhan, Kanoi Park, Kuchaman City, Nagaur, Rajasthan</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'left',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    margin: '20px auto',
    maxWidth: '800px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  heading: {
    fontSize: '2.5em',
    marginBottom: '20px',
    color: '#333',
  },
  paragraph: {
    fontSize: '1.2em',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'none',
    paddingLeft: '0',
    lineHeight: '1.8',
  },
};

export default ReturnPolicy;
