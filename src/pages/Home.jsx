import Card from "../components/Card";
import { useEffect, useReducer } from "react";

function postsReducer(state, action) {
    switch (action.type) {
        case "FETCH_SUCCESS":
        return {
            ...state,
            posts: action.payload,
            isLoading: false,
            isError: false
        };
        case "FETCH_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true
            };
            default:
                return state;
    }
}

function Home() {
    
    const [state, dispatch]= useReducer(postsReducer, {
        posts: [],
        isLoading: true,
        isError: false
    });

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/posts?_limit=3"
                );
                if (!response.ok) {
                    throw new Error("ERROR ERROR!!!");
                }
                const data = await response.json();

                dispatch({
                    type: "FETCH_SUCCESS",
                    payload: data
                });
            } catch (error) {
                dispatch({ type: "FETCH_ERROR" });
            }
        }
        fetchPosts();
    },[]);



    return (
        <main>
            <h1>Welcome to NoteApp!</h1>
            <p>Think and Create!</p>

            <section>
                <h2>Recent Work</h2>

                {state.isLoading ? (
                    <p>Loading your notes...</p> 
                ) : state.isError ? (
                    <p>Sorry 'o' something went wrong!</p>
                ) : (

                <div className="card-list">
                    {state.posts.map((post) => (
                        <Card
                        key={post.id}
                        title={post.title}
                        description={post.body}
                        type="API Note"
                        />
                    ))}
                </div>
                 )}
            </section>
        </main>
    );
}

export default Home;