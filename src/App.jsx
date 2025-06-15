import React, { useState } from 'react';
import './App.css';

const CHECK_MARK = "✅";
const CROSS_MARK = "❌";

/**
 * Validates an Ethereum wallet address.
 * Criteria:
 * 1. Must start with "0x".
 * 2. Must be exactly 42 characters long.
 * 3. Must contain only hexadecimal characters (0-9, a-f, A-F) after "0x".
 *
 * @param {string} addressStr The Ethereum address string to validate.
 * @returns {boolean} True if the address is valid, False otherwise.
 */
const isValidEthereumAddress = (addressStr) => {
  if (typeof addressStr !== 'string') {
    return false;
  }
  // Regex checks for 0x prefix, 40 hexadecimal characters, and total length of 42.
  return /^0x[a-fA-F0-9]{40}$/.test(addressStr);
};

function App() {
  const [inputText, setInputText] = useState('0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B,0x742d35Cc6634C0532925a3b844Bc454e4438f44e');
  const [validationResults, setValidationResults] = useState([]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleClear = () => {
    setInputText('');
    setValidationResults([]);
  };

  const handleValidate = () => {
    if (!inputText.trim()) {
      setValidationResults([]);
      return;
    }

    // Split by newline or comma, then trim and filter out empty strings
    const potentialAddresses = inputText
      .split(/[\n,]+/) // Split by one or more newlines or commas
      .map(addr => addr.trim())
      .filter(addr => addr.length > 0);

    const results = potentialAddresses.map((addr, index) => ({
      id: `${addr}-${index}`, // Simple unique key
      originalText: addr,
      isValid: isValidEthereumAddress(addr),
    }));
    setValidationResults(results);
  };

  const validAddresses = validationResults
    .filter(result => result.isValid)
    .map(result => result.originalText);

  return (
    <div className="container">
      <h1>Ethereum Wallet Validator</h1>

      <div className="input-section">
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder="e.g., 0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B,0x742d35Cc6634C0532925a3b844Bc454e4438f44e"
          rows="5"
        />
        <div className="action-buttons">
          <button onClick={handleValidate} className="button-primary">Validate Addresses</button>
          <button onClick={handleClear} className="button-secondary">Clear</button>
        </div>
      </div>

      {validationResults.length > 0 && (
        <div className="results-section">
          <h2>Validation Results:</h2>
          <ul>
            {validationResults.map(result => (
              <li key={result.id} className={result.isValid ? 'valid' : 'invalid'}>
                {result.isValid ? CHECK_MARK : CROSS_MARK}{' '}
                {result.isValid ? 'Valid' : 'Invalid'} —{' '}
                <span className="address-text">{result.originalText}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {validAddresses.length > 0 && (
        <div className="copy-section">
          <h2>Valid Addresses</h2>
          
          <h3>One per line:</h3>
          <textarea
            readOnly
            value={validAddresses.join('\n')}
            rows={Math.min(5, validAddresses.length)}
            className="copy-textarea"
          />

          <h3>Comma-separated:</h3>
          <textarea
            readOnly
            value={validAddresses.join(',')}
            rows="2"
            className="copy-textarea"
          />
        </div>
      )}
      {validationResults.length > 0 && validAddresses.length === 0 && (
         <p className="info-message">No valid Ethereum addresses found in the provided list.</p>
      )}
    </div>
  );
}

export default App;
