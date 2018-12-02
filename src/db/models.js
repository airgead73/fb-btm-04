import works from './db_works.js';

const models = {
  getAll: () => {
    return works;
  },
  getForm: form => {
    let resultsArr = [];
    works.forEach(function(work, index) {
      let newWork = {};
      if(work.form === form) {
        newWork.src = work.src;
        newWork.alt = work.alt;
        newWork.caption = work.caption;
        newWork.width = work.width;
        newWork.height = work.height;
        resultsArr.push(newWork);
      } else return;
    });

    return resultsArr;

  },
  getCategory: category => {
    let resultsArr = [];
    works.forEach(function(work, index) {
      let newWork = {};
      if(work.category === category) {
        newWork.src = work.src;
        newWork.alt = work.alt;
        newWork.caption = work.caption;
        newWork.width = work.width;
        newWork.height = work.height;
        resultsArr.push(newWork);
      } else return;
    });

    return resultsArr;

  },
  searchWorks: (form, category) => {
    let resultsArr = [];
    works.forEach(function(work, index) {
      let newWork = {};
      if(work.form === form && work.category === category) {
        newWork.src = work.src;
        newWork.alt = work.alt;
        newWork.caption = work.caption;
        newWork.width = work.width;
        newWork.height = work.height;
        resultsArr.push(newWork);
      } else return;
    });

    return resultsArr;

  }

};

export default models;
