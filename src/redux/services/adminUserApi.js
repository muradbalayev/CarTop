import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQueryWithReauth } from '../auth';

// Create the API
export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({
        getUser: builder.query({
            query: ({page, deleted, name}) => ({
                url: 'admin/users',
                params: {
                    name: name,
                    deleted: deleted,
                    page: page,
                    limit: 20
                }
            }),
            providesTags: ['User'],
        }),
        restoreUser: builder.mutation({
            query: (id) => ({
                url: `admin/users/restore/${id}`,
                method: 'POST',
            }),
            invalidatesTags: ['User'],
        }),
        deleteUser: builder.mutation({
            query: ({id, reason}) => ({
                url: `admin/users/delete/${id}`,
                method: 'POST',
                body: { reason },
            }),
            invalidatesTags: ['User'],
        }),
        blockUser: builder.mutation({
            query: ({id, reason}) => ({
                url: `admin/users/block/${id}`,
                method: 'POST',
                body: { reason },
            }),
            invalidatesTags: ['User'],
        }),
        unblockUser: builder.mutation({
            query: (id) => ({
                url: `admin/users/unblock/${id}`,
                method: 'POST',
            }),
            invalidatesTags: ['User'],
        }),
        permanentDeleteUser: builder.mutation({
            query: (id) => ({
                url: `admin/users/permanent-delete/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['User'],
        }),
        userPhotoDelete: builder.mutation({
            query: (id) => ({
                url: `admin/users/photo/delete/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['User'],
        }),
    }),
    keepUnusedDataFor: 60,
    refetchOnMountOrArgChange: 5
});

export const { useGetUserQuery, useRestoreUserMutation, useDeleteUserMutation, useBlockUserMutation, useUnblockUserMutation, usePermanentDeleteUserMutation, useUserPhotoDeleteMutation } = userApi;
