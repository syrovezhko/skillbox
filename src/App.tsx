import { Async } from 'react-async';
import './App.scss';
import Aside from './aside/Aside';
import Header from './header/Header';
import Main from './main/Main';
import { observer } from 'mobx-react-lite';
import content from './store/content';

const fetchData = () =>
  // TODO
  fetch('http://localhost:3001/posts')
    .then((res) => (res.ok ? res : Promise.reject(res)))
    .then((res) => res.json());

const App = observer(() => {
  return (
    <Async promiseFn={fetchData}>
      {({ data, error, isLoading }) => {
        if (isLoading) return 'Loading...';
        if (error) return `Something went wrong: ${error.message}`;
        if (data) {
          content.data = data;
          return (
            <>
              <Header />
              <Aside />
              <Main />
            </>
          );
        }
      }}
    </Async>
  );
});

export default App;
