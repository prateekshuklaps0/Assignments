import axios from "axios";
import "./App.css";
import React, { useReducer, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

function App() {
  const [topicInpVal, setTopicInpVal] = useState("");
  const [activeArticle, setActiveArticle] = useState("");
  const [states, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "POST_LOADING" });
    try {
      const response = await axios.post(`${API_URL}/scrape`, {
        topic: topicInpVal,
      });
      const data = response?.data;

      console.log("data", data);
      dispatch({ type: "POST_SUCCESS", payload: response?.data || [] });
    } catch (error) {
      dispatch({ type: "POST_ERROR" });
      console.log("error", error);
    }
  };

  const GetArticle = async (id: String) => {
    dispatch({ type: "GET_LOADING" });
    try {
      const response = await axios.get(`${API_URL}/articles?id=${id}`);
      const data = response?.data;

      console.log("data", data);
      dispatch({ type: "GET_SUCCESS", payload: response?.data || {} });
    } catch (error) {
      dispatch({ type: "GET_ERROR" });
      console.log("error", error);
    }
  };

  return (
    <div id="App">
      <nav>Scrapper</nav>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="topicInp"
          value={topicInpVal}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTopicInpVal(e.target.value)
          }
        />
        <button type="submit">
          {states?.isPostLoading ? "Loading" : "Go"}
        </button>
      </form>

      <div>
        {!states?.isPostLoading &&
          states?.articlesData.length > 0 &&
          states?.articlesData?.map((articleItem: any, articleInd: number) => (
            <div key={articleItem?.id + articleInd}>
              <div>
                <h2
                  onClick={() => {
                    setActiveArticle(articleItem?.id);
                    GetArticle(articleItem?.id);
                  }}
                >
                  {articleItem?.title}
                </h2>

                {activeArticle == articleItem?.id && (
                  <div>
                    <div>
                      {states?.isGetLoading && <h3>Loading Article Info</h3>}
                      {!states?.isGetLoading &&
                        states?.currentArticle?.title && (
                          <div>
                            {states?.currentArticle?.author && (
                              <div>
                                Author :
                                {states?.currentArticle?.authorImg && (
                                  <img
                                    src={states?.currentArticle?.authorImg}
                                    alt={states?.currentArticle?.author}
                                  />
                                )}
                                <p>{states?.currentArticle?.author}</p>
                              </div>
                            )}
                            <div>
                              {states?.currentArticle?.date && (
                                <p>{states?.currentArticle?.date}</p>
                              )}
                              {states?.currentArticle?.likes && (
                                <p>{states?.currentArticle?.likes}</p>
                              )}
                            </div>

                            <a
                              href={states?.currentArticle?.link}
                              target="_blank"
                            >
                              Read
                            </a>
                          </div>
                        )}
                    </div>

                    <img
                      src={states?.currentArticle?.img}
                      alt={states?.currentArticle?.title}
                      width="250px"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;

const initialState = {
  isPostLoading: false,
  isPostError: false,
  isGetLoading: false,
  isGetError: false,
  articlesData: [],
  currentArticle: {},
};

const reducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case "POST_LOADING": {
      return {
        ...state,
        isPostLoading: true,
        isPostError: false,
        isGetLoading: false,
        isGetError: false,
      };
    }
    case "POST_ERROR": {
      return {
        ...state,
        isPostLoading: false,
        isPostError: true,
        isGetLoading: false,
        isGetError: false,
      };
    }
    case "GET_LOADING": {
      return {
        ...state,
        isGetLoading: true,
        isGetError: false,
        isPostLoading: false,
        isPostError: false,
        currentArticle: {},
      };
    }
    case "GET_ERROR": {
      return {
        ...state,
        isGetLoading: false,
        isGetError: true,
        isPostLoading: false,
        isPostError: false,
      };
    }
    case "POST_SUCCESS": {
      return {
        ...state,
        isPostLoading: false,
        articlesData: payload,
      };
    }
    case "GET_SUCCESS": {
      return {
        ...state,
        isGetLoading: false,
        currentArticle: payload,
      };
    }

    default:
      break;
  }
};
