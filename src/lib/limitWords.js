/**
 * Limits a string to a specified number of words, adding an ellipsis if truncated.
 * @param {string} text - The input string.
 * @param {number} limit - The maximum number of words to show.
 * @returns {string} The truncated string.
 */
const limitWords = (text, limit) => {
  if (!text) return ''; // Handle null or undefined input

  // Split the text into an array of words (using spaces as delimiter)
  const words = text.trim().split(/\s+/);

  // If the word count is less than or equal to the limit, return the original text
  if (words.length <= limit) {
    return text;
  }

  // Slice the array to include only the first 'limit' words and join them back
  // Then append an ellipsis
  const truncatedText = words.slice(0, limit).join(' ') + '...';

  return truncatedText;
};

export default limitWords;