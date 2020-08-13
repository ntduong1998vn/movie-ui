import React from 'react'
import { useState } from 'react'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {storeKeywords} from "../redux/movie/actions"
function SearchBox(props) {
    const [searchTerm, setSearchTerm] = useState("");
  
    function handleSubmit(e) {
        // console.log("submit")
        e.preventDefault();
        let keyword = "title:*"+searchTerm+'*'
        props.history.push({ pathname: `/tim-kiem`});
        props.storeKeywords(keyword)
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

const ShowTheLocationWithRouter = withRouter(SearchBox);
const mapStateToProps = ({  }) => {
  };
  
export default connect(
    mapStateToProps,
    {
        storeKeywords
    }
  )(ShowTheLocationWithRouter);

