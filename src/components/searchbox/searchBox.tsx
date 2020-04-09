import React from "react";
import "./searchBox.css"

export const SearchBox = ({placeHolder, changeHandler}: { placeHolder: string, changeHandler: any }) => {
    return <input
        type="search"
        placeholder={placeHolder}
        className="search"
        onChange={changeHandler}
    />
};