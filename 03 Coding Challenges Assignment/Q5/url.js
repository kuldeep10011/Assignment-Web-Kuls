function validateURL(input) {
    const urlRegex = /^(http:\/\/|https:\/\/)([a-zA-Z0-9\-\._~:/?#[\]@!\$&'\(\)\*\+,;=]+)\.([a-zA-Z]+)$/;
  
    if (urlRegex.test(input)) {
      console.log(`${input} is a valid URL.`);
    } else {
      console.log(`${input} is NOT a valid URL.`);
    }
  }
  
  // Test the function with sample inputs
  validateURL("http://www.example.com");
  validateURL("https://www.example.com");
  validateURL("http://123.45.67.89");
  validateURL("https://example");
  validateURL("ftp://www.example.com");