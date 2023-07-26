// Merge Intervals (Moderate):
// Given an array of intervals intervals where intervals[i] = [start_i, end_i], merge all overlapping intervals and return the merged intervals.

function merge(intervals) {
    if (intervals.length <= 1) {
      return intervals;
    }
  
    intervals.sort((a, b) => a[0] - b[0]);
  
    const mergedIntervals = [intervals[0]];
  
    for (let i = 1; i < intervals.length; i++) {
      const currentInterval = intervals[i];
      const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];
  
      if (currentInterval[0] <= lastMergedInterval[1]) {
        lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
      } else {
        mergedIntervals.push(currentInterval);
      }
    }
  
    return mergedIntervals;
  }
  
  // Example usage:
  const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
  const mergedIntervals = merge(intervals);
  console.log(mergedIntervals); // Output: [[1, 6], [8, 10], [15, 18]]
  