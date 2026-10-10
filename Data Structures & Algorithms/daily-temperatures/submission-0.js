class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        // 1. Create an answer array, default to 0
    const result = new Array(temperatures.length).fill(0);
    
    // 2. The stack will store INDICES
    const stack = [];

    // 3. Loop through all days
    for (let i = 0; i < temperatures.length; i++) {
        const currentTemp = temperatures[i];

        // 4. Check if this temp is warmer than the day(s) on the stack
        //    We use stack[stack.length - 1] to "peek" at the top index
        while (stack.length > 0 && currentTemp > temperatures[stack[stack.length - 1]]) {
            
            // 5. It is! We found the answer for the day on the stack.
            const prevDayIndex = stack.pop();
            
            // Calculate the wait time and put it in the answer
            result[prevDayIndex] = i - prevDayIndex;
        }

        // 6. Push the current day's INDEX onto the stack to wait
        stack.push(i);
    }
    
    // Any indices left on the stack never found a warmer day, 
    // so their result[index] correctly stays 0.
    return result;
    }
}
