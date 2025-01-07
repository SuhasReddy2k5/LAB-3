function mergeUserData(userDetails, userAddress, userPreferences){

    const mergedData = {
        ...userDetails,
        ...userAddress,
        ...userPreferences
};
return mergedData
}

const userDetails = {name: 'CVR', age: 25} 
const userAddress = {address: 'Mangalpally', city: 'Hyderabad'} 
const userPreferences = {theme: 'Engineering Edu', language: 'EN'}

const result = mergeUserData(userDetails, userAddress, userPreferences);
console.log(result); 