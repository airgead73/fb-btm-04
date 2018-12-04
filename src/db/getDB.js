import models from './models.js';

const getDB = (currentSelected) => {
    switch(currentSelected) {
      case 'all':
        return models.getAll();
      case 'sculpture':
        return models.getForm('sculpture');
      case 'abstract':
        return models.getCategory('abstract');
      case 'wildlife':
        return models.getCategory('wildlife');
      case 'figure':
        return models.getCategory('figure');
      case 'portrait':
        return models.getCategory('portrait');
      case 'painting':
        return models.getForm('painting');
      case 'drawing':
        return models.getForm('drawing');
      default:
        break;
    }
  }

  export default getDB;
  