function validateLinkedInURL(url) {
    const pattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;
    return pattern.test(url);
  }
  
  // Test the function with some sample URLs
  const sampleURLs = [
    "https://www.linkedin.com/in/john_doe",
    "https://www.linkedin.com/in/jane-doe123",
    "https://www.linkedin.com/in/jo_hn1234",
    "https://www.linkedin.com/in/1234",
    "https://www.linkedin.com/in/abcdefghijklmnopqrstuvwxyz",
    "https://www.linkedin.com/in/joe%20doe"
  ];
  
  sampleURLs.forEach(url => {
    if (validateLinkedInURL(url)) {
      console.log(`${url} is a valid LinkedIn profile URL.`);
    } else {
      console.log(`${url} is not a valid LinkedIn profile URL.`);
    }
  });