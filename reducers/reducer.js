const Reducer = (state, action) => {
  switch (action.type) {
    case 'GET_FOLDERS':
      return {
        ...state, 
        folders: action.payload
      }
    case 'CURRENT_FOLDER': 
      return {
        ...state,
        folderName: action.payload.folderName,
        folderId: action.payload.folderId,
      }
      default:
          return state;
  }
};

export default Reducer;