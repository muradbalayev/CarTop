import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from '../auth';

// Create the API
export const partnerApi = createApi({
    reducerPath: 'partnerApi',
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        getPartner: builder.query({
            query: ({page, deleted, name}) => ({
                url: 'admin/partners',
                params: {
                    name: name,
                    deleted: deleted,
                    page: page,
                    limit: 20
                }
            }),
            providesTags: ['Partner'],
        }),
        restorePartner: builder.mutation({
            query: (id) => ({
                url: `admin/partners/restore/${id}`,
                method: 'POST',
            }),
            invalidatesTags: ['Partner'],
        }),
        deletePartner: builder.mutation({
            query: ({id, reason}) => ({
                url: `admin/partners/delete/${id}`,
                method: 'POST',
                body: { reason },
            }),
            invalidatesTags: ['Partner'],
        }),
        blockPartner: builder.mutation({
            query: ({id, reason}) => ({
                url: `admin/partners/block/${id}`,
                method: 'POST',
                body: { reason },
            }),
            invalidatesTags: ['Partner'],
        }),
        unblockPartner: builder.mutation({
            query: (id) => ({
                url: `admin/partners/unblock/${id}`,
                method: 'POST',
            }),
            invalidatesTags: ['Partner'],
        }),
        permanentDeletePartner: builder.mutation({
            query: (id) => ({
                url: `admin/partners/permanent-delete/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Partner'],
        }),
        partnerPhotoDelete: builder.mutation({
            query: (id) => ({
                url: `admin/partners/photo/delete/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Partner'],
        }),
    }),
    keepUnusedDataFor: 60,
    refetchOnMountOrArgChange: 5
});

export const { useGetPartnerQuery, useRestorePartnerMutation, useDeletePartnerMutation, useBlockPartnerMutation, useUnblockPartnerMutation, usePermanentDeletePartnerMutation, usePartnerPhotoDeleteMutation } = partnerApi;
