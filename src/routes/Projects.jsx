import { useEffect, useState, useRef } from 'react';
import Pagination from '../components/pagination/Pagination';
import ProjectsList from '../components/projects/ProjectsList';
import Banner from '../components/banner/Banner';

const Projects = () => {
    const [allRepos, setAllRepos] = useState([]);
    const [currentRepos, setCurrentRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(9);

    const projectsListRef = useRef(null);

    const url = 'https://api.github.com/users/andreeramosb/repos';
    const githubUsername = 'andreeramosb';
    const defaultBranch = 'main';
    const imageName = 'preview.png';

    const fetchRepos = async (apiUrl) => {
        try {
            const githubToken = import.meta.env.VITE_GITHUB_TOKEN; 
            const headers = {};
            if (githubToken) {
                headers['Authorization'] = `token ${githubToken}`;
            }

            const res = await fetch(apiUrl, {
                headers: headers,
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();

            const filteredData = data.filter(repo =>
                !repo.fork &&
                repo.name !== githubUsername
            );

            // Fetch languages for each repo concurrently
            const reposWithAllInfo = await Promise.all(
                filteredData.map(async (repo) => {
                    const projectImage = `https://raw.githubusercontent.com/${githubUsername}/${repo.name}/${defaultBranch}/${imageName}`;
                    
                    let languages = [];
                    try {
                        const langRes = await fetch(repo.languages_url, { headers });
                        if (langRes.ok) {
                            const langData = await langRes.json();
                            languages = Object.keys(langData); // Get language names
                        }
                    } catch (langErr) {
                        console.error(`Error fetching languages for ${repo.name}:`, langErr);
                    }
                    
                    return { ...repo, projectImage, allLanguages: languages }; // Add allLanguages
                })
            );

            setAllRepos(reposWithAllInfo);
        } catch (err) {
            console.error("Error fetching repositories:", err);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchRepos(url);
    }, []);

    useEffect(() => {
        const indexOfLastItem = currentPage * itemsPerPage;
        const indexOfFirstItem = indexOfLastItem - itemsPerPage;
        const reposToDisplay = allRepos.slice(indexOfFirstItem, indexOfLastItem);
        setCurrentRepos(reposToDisplay);
    }, [allRepos, currentPage, itemsPerPage]);

    const totalPages = Math.ceil(allRepos.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
            if (projectsListRef.current) {
                projectsListRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <div>
            <Banner
                text1="Projects 🧑‍💻💻"
                text3="Some of my Github projects"
                button={false}
            />
            <ProjectsList ref={projectsListRef} repo={currentRepos} isLoading={isLoading} />
            {!isLoading && allRepos.length > 0 && totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            )}
        </div>
    )
}

export default Projects;