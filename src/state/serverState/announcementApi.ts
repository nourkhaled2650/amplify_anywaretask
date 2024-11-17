import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";

interface IAnnouncementRes {
  _id: string;
  author: string;
  role: string;
  message: string;
  createdAt: Date;
  updatedAt: Date;
}

interface IAnnouncementReq {
  author: string;
  role: string;
  message: string;
}

export const announcementApiSlice = createApi({
  reducerPath: "announcement",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    //get all announcements
    getAnnouncements: builder.query<IAnnouncementRes[], void>({
      query: () => "/announcements/",
    }),
    //get single announcement
    getAnnouncement: builder.query<IAnnouncementRes, string>({
      query: (announcementId) => `/announcements/${announcementId}`,
    }),
    //create announcement
    createAnnouncement: builder.mutation<IAnnouncementRes, IAnnouncementReq>({
      query: (newAnnouncement) => ({
        url: "/announcements/",
        method: "POST",
        body: newAnnouncement,
      }),
    }),
    // delete announcement
    deleteAnnouncement: builder.mutation<void, string>({
      query: (announcementId) => ({
        url: `/announcements/${announcementId}`,
        method: "DELETE",
      }),
    }),
    // update announcement
    updateAnnouncement: builder.mutation<
      IAnnouncementRes,
      { announcementId: string; updatedAnnouncement: Partial<IAnnouncementReq> }
    >({
      query: ({ announcementId, updatedAnnouncement }) => ({
        url: `/announcements/${announcementId}`,
        method: "PATCH",
        body: updatedAnnouncement,
      }),
    }),
  }),
});

export const {
  useGetAnnouncementsQuery,
  useGetAnnouncementQuery,
  useCreateAnnouncementMutation,
  useDeleteAnnouncementMutation,
  useUpdateAnnouncementMutation,
} = announcementApiSlice;
