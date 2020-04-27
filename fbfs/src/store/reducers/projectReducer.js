const initState = {
  projects: [
    { id: 1, title: "cook for me", content: "la la la la la" },
    { id: 2, title: "sleep with me", content: "qwertty" },
    { id: 2, title: "laugh out loud", content: "lol dood" },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("created project", action.project);
  }

  return state;
};

export default projectReducer;
