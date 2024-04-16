export function generateUniqueId() {
  const timestamp = Date.now();
  const randomNumber = Math.floor(Math.random() * 10000); // Generate a random number between 0 and 9999
  return timestamp.toString() + randomNumber.toString();
}

export function toCamelCase(text: string) {
  return text
    .replace(/\w\S*/g, function (word) {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    })
    .replace(/\s+/g, "");
}

export const getIcon = (category: string) => {
  switch (category.toLocaleLowerCase()) {
    case "home":
      return "bi-house-door";
    case "work":
      return "bi-briefcase";
    case "personal":
      return "bi-person";
    case "other":
      
    return "bi-question-circle";
    default:
      
    return "bi-three-dots";
  }
}; 
