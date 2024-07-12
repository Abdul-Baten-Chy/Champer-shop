import { Tproduct } from "@/Utills/type";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1" }),
  tagTypes: ["products", "product"],
  endpoints: (builder) => ({
    createProduct: builder.mutation<string, Partial<Tproduct>>({
      query: (data) => ({
        url: "/products",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["products"],
    }),
    getSingleProduct: builder.query<Tproduct, string>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    getAllProduct: builder.query<string, Partial<Tproduct>>({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      providesTags: ["products"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useCreateProductMutation,
  useGetAllProductQuery,
  useGetSingleProductQuery,
} = productApi;
