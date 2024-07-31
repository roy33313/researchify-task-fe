export const INITIAL_TASKS = [
  { id: 1, text: "Design Changes", completed: false },
  { id: 2, text: "UI changes", completed: false },
  { id: 3, text: "Water plants", completed: false },
  { id: 4, text: "Feed the dog", completed: false },
  { id: 5, text: "Wash Bike", completed: false },
  { id: 6, text: "Get Groceries", completed: false },
  { id: 7, text: "Download Movie", completed: false },
];

export const STATUS_OPTIONS = [
  { value: "Completed", label: "Completed" },
  { value: "Not completed", label: "Not completed" },
  { value: "Postponed", label: "Postponed" },
  { value: "Cancelled", label: "Cancelled" },
];

export const API_URL = import.meta.env.VITE_API_URL;
