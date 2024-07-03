import { IMeta } from "@/types";
import { TagTypes } from "../../../redux/tagTypes";
import { baseApi } from "./baseApi";

export const scheduleApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSchedule: build.mutation({
      query: (data) => ({
        url: "/schedule",
        method: "POST",
        data,
      }),
      invalidatesTags: [TagTypes.schedule],
    }),
    getAllSchedules: build.query({
      query: (args: Record<string, any>) => ({
        url: "/schedule",
        method: "GET",
        params: args,
      }),
      transformResponse: (response: [], meta: IMeta) => ({
        schedules: response,
        meta,
      }),
      providesTags: [TagTypes.schedule],
    }),
    deleteSchedule: build.mutation({
      query: (id) => ({
        url: `/schedule/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TagTypes.schedule],
    }),
  }),
});

export const {
  useCreateScheduleMutation,
  useGetAllSchedulesQuery,
  useDeleteScheduleMutation,
} = scheduleApi;
