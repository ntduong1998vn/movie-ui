import React from 'react'
import { useState } from 'react'
import { withRouter } from "react-router-dom";

function SearchBox(props) {
    const [searchTerm, setSearchTerm] = useState("");
  
    function handleSubmit(e) {
        console.log("submit")
        e.preventDefault();
        props.history.push({ pathname: `/tim-kiem?title=${searchTerm}` });
    }

    function handleChange(e) {
        setSearchTerm(e.target.value);
    }



    return (
        <form className="header__search">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="header__search-content">
                            <input
                                type="text"
                                placeholder="Nhập tên bộ phim cần tìm"
                                onChange={handleChange}
                            />
                            <button type="button" onClick={handleSubmit}>Tìm</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}


export default withRouter(SearchBox)

