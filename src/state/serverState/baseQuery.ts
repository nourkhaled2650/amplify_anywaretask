import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000",
  prepareHeaders: (headers) => {
    // headers.set('Authorization', `Bearer ${sessionId}`);  TODO: implement authentication
    return headers;
  },
});
