import { TagTypes } from "../tagTypes";
import { baseApi } from "./baseApi";

const specialitiesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllSpecialities: build.query({
      query: () => ({
        url: "/specialities",
        method: "GET",
      }),
      providesTags: [TagTypes.specialities],
    }),
    createSpeciality: build.mutation({
      query: (data) => ({
        url: "/specialities",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
      invalidatesTags: [TagTypes.specialities],
    }),
    deleteSpeciality: build.mutation({
      query: (id) => ({
        url: `/specialities/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [TagTypes.specialities],
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateSpecialityMutation,
  useGetAllSpecialitiesQuery,
  useDeleteSpecialityMutation,
} = specialitiesApi;
