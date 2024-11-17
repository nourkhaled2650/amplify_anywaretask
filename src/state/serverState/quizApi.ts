import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";

interface IQuizRes {
  _id: string;
  title: string;
  course: string;
  Topic: string;
  dueDate: string;
  createdAt: Date;
  updatedAt: Date;
}

interface IQuizReq {
  title: string;
  course: string;
  Topic: string;
  dueDate: string;
}

export const quizApiSlice = createApi({
  reducerPath: "quiz",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    //get all quizzes
    getQuizzes: builder.query<IQuizRes[], void>({
      query: () => "/quizzes/",
    }),
    //get single quiz
    getQuiz: builder.query<IQuizRes, string>({
      query: (quizId) => `/quizzes/${quizId}`,
    }),
    //create quiz
    createQuiz: builder.mutation<IQuizRes, IQuizReq>({
      query: (newQuiz) => ({
        url: "/quizzes/",
        method: "POST",
        body: newQuiz,
      }),
    }),
    // delete quiz
    deleteQuiz: builder.mutation<void, string>({
      query: (quizId) => ({
        url: `/quizzes/${quizId}`,
        method: "DELETE",
      }),
    }),
    // update quiz
    updateQuiz: builder.mutation<
      IQuizRes,
      { quizId: string; updatedQuiz: Partial<IQuizReq> }
    >({
      query: ({ quizId, updatedQuiz }) => ({
        url: `/quiezzes/${quizId}`,
        method: "PATCH",
        body: updatedQuiz,
      }),
    }),
  }),
});

export const {
  useGetQuizzesQuery,
  useGetQuizQuery,
  useCreateQuizMutation,
  useDeleteQuizMutation,
  useUpdateQuizMutation,
} = quizApiSlice;
