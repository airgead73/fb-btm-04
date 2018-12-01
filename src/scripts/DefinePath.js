const DefinePath = (currentPath) => {
  if(currentPath === "/work") {
    return "work";
  } else {
    return currentPath.slice(6);
  }
};

export default DefinePath;
