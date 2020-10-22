import React from "react";
import MenuItem from "../menu-item/MenuItem";
import "./Directory.scss";
const Directory = () => {
  const section = [
    {
      title: "hats",
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/11/22/10/47/girl-1848947__340.jpg",
      id: 1,
      linkUrl: "hats",
    },
    {
      title: "hats",
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/11/23/15/26/fashion-1853507__340.jpg",
      id: 2,
      linkUrl: "",
    },
    {
      title: "hats",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/01/23/19/40/woman-2003647__340.jpg",
      id: 3,
      linkUrl: "",
    },
    {
      title: "hats",
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/03/23/04/01/beautiful-1274056__340.jpg",
      size: "large",
      id: 4,
      linkUrl: "",
    },
    {
      title: "hats",
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/11/16/10/28/two-girls-1828539__340.jpg",
      size: "large",
      id: 5,
      linkUrl: "",
    },
  ];
  return (
    <div className="directory-menu">
      {section.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

export default Directory;
