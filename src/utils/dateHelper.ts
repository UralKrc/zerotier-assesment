// Function to format a timestamp into a readable date string
export const formatDate = (timestamp: number): string => {
  return new Date(timestamp).toLocaleString();
};
