import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
	reducerPath: "shazamCoreApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://shazam-core.p.rapidapi.com/v1",
		prepareHeaders: (headers) => {
			headers.set(
				"X-RapidAPI-Key",
				"e796ad7b1bmsh648085b11607197p1073e2jsn69a489ec8dab"
			);

			return headers;
		},
	}),
	endpoints: (builder) => ({
		getTopCharts: builder.query({ query: () => "/charts/world" }),
	}),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
