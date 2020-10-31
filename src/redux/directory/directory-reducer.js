const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl:
        "https://threadcurve.com/wp-content/uploads/2020/06/black-woman-hat-june112020.jpg",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl:
        "https://www.fashion.ie/wp-content/uploads/2020/02/How-to-style-men%E2%80%99s-casual-jackets-this-summer-2020.jpg",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl:
        "https://ae01.alicdn.com/kf/H81fb0dcba3ba404a8402abd397736fadg.jpg_q50.jpg",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "mens",
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/11/29/01/34/fashion-1866574_960_720.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/mens",
    },
    {
      title: "womens",
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/11/16/10/28/two-girls-1828539__340.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/womens",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
