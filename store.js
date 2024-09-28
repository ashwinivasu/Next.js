import create from 'zustand';

const store = create((set) => ({
  startDate: new Date(),
  endDate: null,
  recurrencePattern: 'daily',
  setRecurrencePattern: (pattern) => set({ recurrencePattern: pattern }),
  setStartDate: (date) => set({ startDate: date }),
  setEndDate: (date) => set({ endDate: date }),
}));

export default store;