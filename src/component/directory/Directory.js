import React from "react";
import MenuItem from "../menu-item/MenuItem";
import "./Directory.scss";
import { createStructuredSelector } from "reselect";
import { selectDirectoryReducer } from "./directory-selectore";
import { connect } from "react-redux";
const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectoryReducer,
});
export default connect(mapStateToProps)(Directory);
