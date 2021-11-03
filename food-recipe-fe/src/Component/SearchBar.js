import React, { userState } from 'react';
import '../css/SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

function SearchBar({ placehodler, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEnter(searchWord);
        const newFilter  = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });

        if(searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
        
    }

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    }

    return (
        <div className="search">
            <div className="searchInput">
                <input type="text" placeholder={placehodler} value={wordEntered} onChange={handleFilter}/>
                <div className="searchIcon">
                    {filteredData.length === 0? (
                        <SearchIcon /> 
                    ) : (
                        <CloseIcon id="clearBtn" onClick={clearInput}/>
                    )}
                    
                </div>
            </div>
            {filteredData.slice(0, 15).length != 0 && (
            <div className="dataResult">
                {filteredData.map((value, key) => {
                    return (
                    <a className="dataItem" href={value.link} targer="_blank">
                        <p>{value.name}</p> 
                    </a>
                    );
                })}
            </div>
            }
        </div>
    )
}

export default SearchBar;
