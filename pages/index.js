import { useEffect, useState } from "react";

function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/felipe-alvs/repos", { method: "GET" })
            .then((response) => response.json())
            .then((response) => {
                setRepos(response);

                setIsLoading(false);
            })
            .catch((err) => {
                alert(err);
            })
    }, [])

    if (isLoading) {
        return (
            <div>
                <p>Carregando...</p>
            </div>
        )
    };

    return (
        <div>
            <h1>Meus repositórios</h1>

            <ul>
                {repos.map((repo) => {
                    return (
                        <li key={repo.id}>
                            <a href={repo.html_url} target="_blank">{repo.name}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Home;