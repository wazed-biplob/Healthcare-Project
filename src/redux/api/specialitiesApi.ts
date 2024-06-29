import { baseApi } from "./baseApi";

const specialitiesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSpeciality: build.mutation({
      query: (data) => ({
        url: "/specialities",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useCreateSpecialityMutation } = specialitiesApi;
