export function generateUniqueId() {
    const timestamp = Date.now();
    const randomNumber = Math.floor(Math.random() * 10000); // Generate a random number between 0 and 9999
    return timestamp.toString() + randomNumber.toString();
  }