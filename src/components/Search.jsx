import React from 'react';


const Search = (props) => {
    const { searchTerms, changeHandler, submitHandler } = props;
    return (
        
            <form className="row" onSubmit={submitHandler}>
                <div className="col-sm-6">
                    <div className="row">
                    <label htmlFor="category" className="col-sm-4">Search for:</label>
                    <select name="category" className="col-sm-8 form-control" onChange={changeHandler} value={searchTerms.category}>
                        <option value="people">people</option>
                        <option value="planets">planets</option>
                        {/* <option value="films">films</option>
                        <option value="starships">starships</option>
                        <option value="vehicles">vehicles</option>
                        <option value="species">species</option> */}
                    </select>
                    </div>
                    <div className="col-sm-6">
                        <div className="row">
                        <div className="col-sm-7 row">
                            <label htmlFor="id" className="col-sm-4">ID</label>
                            <input type="number" name="id" className="col-sm-8 form-control" onChange={changeHandler} value={searchTerms.id}/>
                        </div>
                        <div className="col-sm-7">
                            <input type="submit" value="Search" className="col-sm-12 btn btn-primary"/>
                        </div>
                        </div>
                    </div>
                </div>
            </form>
            
    );
};
export default Search;