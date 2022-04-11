import React, { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import RepoModel from "../models/RepoModel";

import { api } from "../services/api";

import "../styles/css/home.css";
import AddPopUp from "../components/AddPopUp";
import addRepo from "../services/repo/addRepo";
import ConfirmationPopUp from "../components/ConfirmationPopUp";
import removeRepo from "../services/repo/removeRepo";

function Home() {
  const [repoList, setRepoList] = useState([]);
  const [searchTerm, setSearchTerm] = useState<string>();
  const [isATagSearch, setIsATagSearch] = useState<boolean>(false);

  const [showAddPopUp, setShowAddPopUp] = useState<boolean>(false);

  const [confirmationPopUpTitle, setConfirmationPopUpTitle] =
    useState<string>("");
  const [confirmationPopUpDescription, setConfirmationPopUpDescription] =
    useState<string>("");

  const [confirmationPopUpButtons, setConfirmationPopUpButtons] = useState<any>(
    {
      confirm: "Ok",
      cancel: "Cancel",
    }
  );

  const [confirmationPopUpCbFunction, setConfirmationPopUpCbFunction] =
    useState<() => void>();

  const [showConfirmationPopUp, setShowConfirmationPopUp] =
    useState<boolean>(false);

  useEffect(() => {
    const handleGetPosts = async () => {
      let searchURL = "/tools";
      const filterBy = isATagSearch
        ? `?tags_like=${searchTerm}`
        : `?q=${searchTerm}`;

      if (searchTerm) {
        searchURL += filterBy;
      }
      const response = await api.get(searchURL);
      setRepoList(response.data);
    };

    handleGetPosts();
  }, [searchTerm, confirmationPopUpCbFunction]);

  async function handleAddPopUp(props: RepoModel) {
    const { toolName, toolLink, toolDescription, toolTags } = props;

    await addRepo({
      toolName,
      toolLink,
      toolDescription,
      toolTags,
    });
  }

  return (
    <>
      <AddPopUp
        handleSubmit={handleAddPopUp}
        setShowPopUp={setShowAddPopUp}
        showPopUp={showAddPopUp}
      />

      <ConfirmationPopUp
        title={confirmationPopUpTitle}
        description={confirmationPopUpDescription}
        buttonsText={{
          confirm: confirmationPopUpButtons.confirm,
          cancel: confirmationPopUpButtons.cancel,
        }}
        cbFunction={confirmationPopUpCbFunction}
        setShowPopUp={setShowConfirmationPopUp}
        showPopUp={showConfirmationPopUp}
      />
      <div className="main-content">
        <div className="content-wrapper">
          <h1 className="header-1">Vuttr</h1>
          <h3 className="header-5">Very Useful Tools to Remember</h3>
          <nav className="search-bar-nav">
            <div className="search-inputs">
              <input
                type="search"
                name="search-repo"
                id="search-repo"
                onChange={(event) => setSearchTerm(event.target.value)}
                className="default-input"
              />
              <input
                type="checkbox"
                name="search-tags-select"
                id="search-tags-select"
                className="checkbox"
                onChange={(event) => setIsATagSearch(event.target.checked)}
              />
              <label htmlFor="search-tags-select" className="body-small">
                search in tags only
              </label>
            </div>
            <div>
              <button
                className="button-primary-neutral"
                onClick={() => setShowAddPopUp(true)}
              >
                Add
              </button>
            </div>
          </nav>

          <ul className="repositories-list">
            {repoList.length ? (
              repoList.map((repo: any) => {
                return (
                  <li key={repo.id} className="repo card">
                    <div>
                      <div className="top-content">
                        <h1 className="repo-title header-2">
                          <a href={repo.link}>{repo.title}</a>
                        </h1>
                        <button
                          className="button-primary-danger"
                          onClick={() => {
                            setConfirmationPopUpTitle(
                              `Do you want to remove ${repo.title}?`
                            );
                            setConfirmationPopUpDescription(
                              `If you remove ${repo.title} I'll never recover its content!`
                            );

                            setConfirmationPopUpButtons({
                              confirm: "Remove",
                              cancel: "Cancel",
                            });

                            setConfirmationPopUpCbFunction(async () => {
                              await removeRepo(repo.id);
                            });
                            setShowConfirmationPopUp(true);
                          }}
                        >
                          remove
                        </button>
                      </div>
                      <p className="body-small">{repo.description}</p>
                      <ul className="tags-list">
                        {repo.tags.map((tag: string) => (
                          <li className="tag">
                            <span className="body-smallest">{`#${tag}`}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              })
            ) : (
              <h1 className="header-1">No repositories here!</h1>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
