const generatePasscode = (length = 6) => {
    // Validate length
    if (!Number.isInteger(length) || length < 1 || length > 10) {
      throw new Error('Passcode length must be a number between 1 and 10');
    }
  
    const min = Math.pow(10, length - 1);
    const max = Math.pow(10, length) - 1;
  
    return Math.floor(min + Math.random() * (max - min + 1)).toString();
  };
  
  export default generatePasscode;