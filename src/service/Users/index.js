import api from "../axios";

const useUsersApi = {
	getProfile: async (date = "MuhammadAmin04") =>
		api.get(`/users/${date}`, { cache: "force-cache" }),
	paginateFollowers: async (num = 1) =>
		api.get(`/users/${"MuhammadAmin04"}/followers?page=${num}`),
	paginateFollowings: async (num = 1) =>
		api.get(`/users/${"MuhammadAmin04"}/following?page=${num}`),
	repostories: async (date = "MuhammadAmin04") =>
		api.get(`/users/${date}/repos`),
	stars: async (date = "MuhammadAmin04") => api.get(`/users/${date}/starred`),
};

export default useUsersApi;