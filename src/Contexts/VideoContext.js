import React, { createContext } from "react";

export const VideoContext = createContext();

export const VideoContextProvider = (props) => {
  const videos = [
    {
      id: 584,
      imageURL:
        "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNoaWxkcmVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      url: "https://www.videvo.net/video/dummy/584/",
      title: "just a game",
      tags: ["games"],
    },
    {
      id: 372,
      imageURL:
        "https://images.unsplash.com/photo-1615627121117-e3278bc8b1db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNwYWNlc2hpcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      url: "https://www.videvo.net/video/children-s-space/545/",
      title: "children's space",
      tags: ["children", "space"],
    },
    {
      id: 546,
      imageURL:
        "https://images.unsplash.com/photo-1581312453873-fdda0296e5f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      url: "https://www.videvo.net/video/teddy-bears-at-beach/546/",
      title: "teddy bears at the beach",
      tags: ["teddy bears", "beach"],
    },
    {
      id: 549,
      imageURL:
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpbGRyZW4lMjB0b3lzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      url: "https://www.videvo.net/video/childrens-toys-1/549/",
      title: "children's toys",
      tags: ["children", "toys"],
    },
    {
      id: 586,
      imageURL:
        "https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpbGRyZW4lMjBwbGF5aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      url: "https://www.videvo.net/video/hop-scotch/586/",
      title: "hop scotch",
      tags: ["children", "games"],
    },
    {
      id: 554,
      imageURL:
        "https://images.unsplash.com/photo-1581312742770-ce89199554af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      url: "https://www.videvo.net/video/floating-teddy-bears/554/",
      title: "floating teddy bears",
      tags: ["teddy bears"],
    },
  ];

  return (
    <VideoContext.Provider value={videos}>
      {props.children}
    </VideoContext.Provider>
  );
};
