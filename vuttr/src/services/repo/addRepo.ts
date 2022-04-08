import RepoModel from "../../models/RepoModel";
import { api } from "../api";

async function addRepo(props: RepoModel) {
  const { toolDescription, toolLink, toolName, toolTags } = props;

  const repoBody = {
    title: toolName,
    link: toolLink,
    description: toolDescription,
    tags: toolTags,
  };
  const response = await api.post("/tools", repoBody);

  if (response.status === 201) {
    return {
      status: response.status,
      message: "Your tool was successfully added!",
    };
  }
  return {
    status: response.status,
    message: "We couldn't to add you tool... try it later!",
  };
}

export default addRepo;
