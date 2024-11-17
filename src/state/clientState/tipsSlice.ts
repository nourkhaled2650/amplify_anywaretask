import { createSlice } from "@reduxjs/toolkit";

export interface Tip {
  id: number;
  text: string;
  author: string;
}

interface TipsState {
  tips: Tip[];
  showAll: boolean;
}

const initialState: TipsState = {
  tips: [
    {
      id: 1,
      text: "The best way to predict the future is to create it.",
      author: "Peter Drucker",
    },
    {
      id: 2,
      text: "Success is not the key to happiness. Happiness is the key to success.",
      author: "Albert Schweitzer",
    },
    {
      id: 3,
      text: "Don’t watch the clock; do what it does. Keep going.",
      author: "Sam Levenson",
    },
    {
      id: 4,
      text: "Success usually comes to those who are too busy to be looking for it.",
      author: "Henry David Thoreau",
    },
    {
      id: 5,
      text: "Opportunities don't happen, you create them.",
      author: "Chris Grosser",
    },
    {
      id: 6,
      text: "Don't wish it were easier; wish you were better.",
      author: "Jim Rohn",
    },
    {
      id: 7,
      text: "I find that the harder I work, the more luck I seem to have.",
      author: "Thomas Jefferson",
    },
    {
      id: 8,
      text: "Success is walking from failure to failure with no loss of enthusiasm.",
      author: "Winston Churchill",
    },
    {
      id: 9,
      text: "The only limit to our realization of tomorrow is our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      id: 10,
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },
  ],
  showAll: false,
};

const tipsSlice = createSlice({
  name: "tips",
  initialState,
  reducers: {
    toggleShowAll(state) {
      state.showAll = !state.showAll;
    },
  },
});

export const { toggleShowAll } = tipsSlice.actions;
export default tipsSlice.reducer;
