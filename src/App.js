import { Provider } from 'react-redux';
// import { Provider } from '../src/myLib/reactRedux';
import ReduxPage from './pages/ReduxPage';
import ReactReduxPage from './pages/ReactReduxPage'; //uesless 
import HookReactRedux from './pages/HookReactRedix';
import ReduxToolkit from './pages/ReduxToolkit';
// import { store } from './store/index'
import store  from './store/reduxToolkit';
function App() {
  return (
    <div>
      <ReduxPage />
      <Provider store={store}>
        <div>
          {/* <ReactReduxPage ownProps={'i am own props'} /> */}
          {/* <HookReactRedux /> */}
          <ReduxToolkit/>
        </div>

      </Provider>
     


    </div>
  );
}

export default App;
