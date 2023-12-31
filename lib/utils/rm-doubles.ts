export function removeDuplicates(arr) {
    // Create a new Set to store unique values
    const uniqueArr = new Set(arr);
    
    // Convert the Set back to an array
    const result = Array.from(uniqueArr);
    
    return result;
}