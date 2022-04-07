import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";

import { api } from "../services/api";

import "../styles/css/home.css";

function Home() {
  const [repoList, setRepoList] = useState([]);
  const [searchTerm, setSearchTerm] = useState<string>();
  const [isATagSearch, setIsATagSearch] = useState<boolean>(false);

  useEffect(() => {
    const handleGetPosts = async () => {
      let searchURL = "/tools";
      const filterBy = isATagSearch
        ? `?tags_like=${searchTerm}`
        : `?q=${searchTerm}`;

      if (searchTerm) {
        searchURL += filterBy;
      }

      console.log(searchURL);
      const response = await api.get(searchURL);

      if (response.status === 200) {
        setRepoList(response.data);
      } else {
        // error message ...
      }
    };

    handleGetPosts();
  }, [searchTerm]);

  return (
    <>
      <div className="main-content">
        <h1 className="test">Vuttr</h1>
        <h3>Very Useful Tools to Remember</h3>
        <nav className="search-bar-nav">
          <input
            type="search"
            name="search-repo"
            id="search-repo"
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <input
            type="checkbox"
            name="search-tags-select"
            id="sarch-tags-select"
            onChange={(event) => setIsATagSearch(event.target.checked)}
          />
          <label htmlFor="search-tags-select">search in tags only</label>
          <button className="add-button">Add</button>
        </nav>

        <ul className="repositories-list">
          {repoList.map((repo: any) => {
            return (
              <li key={repo.id}>
                <div>
                  <div>
                    <h1 className="repo-title">
                      <a href="#">{repo.title}</a>
                    </h1>
                    <button className="remove-repo">remove</button>
                  </div>
                  <p>{repo.description}</p>
                  <ul className="tags-list">
                    {repo.tags.map((tag: string) => (
                      <li className="tag">
                        <span>{tag}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Home;
