import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "../auth";

// Create the API
export const ordersApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getOrders: builder.query({
      query: ({ page }) => ({
        url: "admin/orders",
        params: {
          page: page,
          limit: 10
        }
      }),
      providesTags: ["Orders"],
    }),
    deleteOrder: builder.mutation({
      query: (id) => ({
        url: `admin/orders/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Orders"], // Invalidate 'Product' to refetch product list after deletion
    }),
    rejectOrder: builder.mutation({
      query: (id) => ({
        url: `admin/orders/${id}/reject`,
        method: "PUT",
      }),
      invalidatesTags: ["Orders"],
    }),
    confirmOrder: builder.mutation({
      query: (id) => ({
        url: `admin/orders/${id}/confirm`,
        method: "PUT",
      }),
      invalidatesTags: ["Orders"],
    }),
  }),
  keepUnusedDataFor: 60,
  refetchOnMountOrArgChange: 5,
});

export const {
  useGetOrdersQuery,
  useDeleteOrderMutation,
  useRejectOrderMutation,
  useConfirmOrderMutation,
} = ordersApi;
