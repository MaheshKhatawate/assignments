/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  // replace method removes the spaces \s -> spaces +(all) and g means global and toLowerCase converts to the
  // lowercase
  str1 = str1.replace("/\s+g","").toLowerCase()
  str2 = str2.replace("/\s+g","").toLowerCase()

  // If length is not equal then there will never match
  if(str1.length!==str2.length) return false;

  // Split converts the string into array of characters
  // Sort sorts the array
  // Join joins the array and converts it into string
  return str1.split("").sort().join("")===str2.split("").sort().join("")
}

module.exports = isAnagram;
