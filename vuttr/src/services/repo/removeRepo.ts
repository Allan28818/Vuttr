import { api } from "../api";

async function removeRepo(id: string) {
  const response = await api.delete(`/tools/${id}`);

  if (response.status === 200) {
    return {
      status: response.status,
      message: "Your repository was successfully delete!",
    };
  }

  return {
    status: response.status,
    message: "We couldn't remove you repository!",
  };
}

export default removeRepo;
