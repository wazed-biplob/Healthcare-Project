import { IDoctor } from "@/app/(withDashboardLayout)/dashboard/admin/doctors/components/DoctorModal";
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
    getAllDoctors: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/doctor",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IDoctor[], meta) => ({
        doctors: response,
        meta,
      }),
      providesTags: [TagTypes.doctor],
    }),
    createDoctor: build.mutation({
      query: (data) => ({
        url: "/user/create-doctor",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
      invalidatesTags: [TagTypes.doctor],
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateSpecialityMutation,
  useGetAllSpecialitiesQuery,
  useDeleteSpecialityMutation,
  useCreateDoctorMutation,
  useGetAllDoctorsQuery,
} = specialitiesApi;
