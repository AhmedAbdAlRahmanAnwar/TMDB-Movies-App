import {useLocation} from "react-router-dom";

const Pagination = ({setPage, currentPage, searchPage, numberOfPages}) => {
    const location = useLocation();

    const previous = () => {
        if (location.state) {
            searchPage > 1 && setPage(searchPage - 1, true)
        } else {
            currentPage > 1 && setPage(currentPage - 1, false)
        }
    }

    const next = () => {
        if (location.state) {
            searchPage < numberOfPages && setPage(searchPage + 1, true)
        } else {
            currentPage < numberOfPages && setPage(currentPage + 1, false)
        }
    }

    return (
        <div className="btn-group my-12">
            <button className="btn" onClick={previous}>«</button>
            <button className="btn">Page {location.state ? searchPage : currentPage}</button>
            <button className="btn" onClick={next}>»</button>
        </div>
    );
};

export default Pagination;