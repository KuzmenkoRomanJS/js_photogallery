export const getData = () => {
  return fetch('data.json')
    .then((data) => { 
      return data.json();
    });
};