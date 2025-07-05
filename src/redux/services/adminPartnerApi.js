import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from '../auth';

export const partnerApi = createApi({
    reducerPath: 'partnerApi',
    baseQuery: baseQueryWithReauth,
    tagTypes: ['Partner'],
    endpoints: (builder) => ({
        getPartners: builder.query({
            query: ({ page = 1, limit = 10 } = {}) => ({
                url: 'admin/partners',
                params: { page, limit }
            }),
            providesTags: ['Partner'],
        }),
        createPartner: builder.mutation({
            query: (data) => ({
                url: 'admin/partners',
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['Partner'],
        }),
        editPartner: builder.mutation({
            query: ({ id, ...data }) => ({
                url: `admin/partners/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: ['Partner'],
        }),
        deletePartner: builder.mutation({
            query: (id) => ({
                url: `admin/partners/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Partner'],
        }),
    }),
    keepUnusedDataFor: 60,
    refetchOnMountOrArgChange: 5,
});

export const {
    useGetPartnersQuery,
    useCreatePartnerMutation,
    useEditPartnerMutation,
    useDeletePartnerMutation,
} = partnerApi;
