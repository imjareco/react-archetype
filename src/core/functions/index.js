import ReactDOM from 'react-dom';

export const render = (component) => {
  ReactDOM.render(component, document.getElementById('root'));
};

export const setConfig = () => {
  window.addEventListener('unhandlerrejection', error => {
    error.preventDefault();
    if (process.env.NODE_ENV !== 'production') {
      console.warn('Unhandler promise rejection warning.', error);
    }
  });
};