import { IonApp, IonRouterOutlet, setupIonicReact} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Page from './pages/Page';
import Login from './pages/Login';
import AddAlert from './pages/AddAlert';
import AddAlert2 from './pages/AddAlert2';
import AddAlert3 from './pages/AddAlert3';
import Local from './pages/Local';
import List from './pages/List';
import List2 from './pages/List2';
import ShowAlert from './pages/ShowAlert';
import Local2 from './pages/Local2';
import Page2 from './pages/Page2';




import { Redirect, Route } from 'react-router-dom';



/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
	<IonApp>
		<IonReactRouter>
			<IonRouterOutlet>
      <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/page">
            <Page />
          </Route>
          <Route exact path="/page2">
            <Page2 />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/addalert">
            <AddAlert />
          </Route>
          <Route exact path="/addalert2">
            <AddAlert2 />
          </Route>
          <Route exact path="/addalert3">
            <AddAlert3 />
          </Route>
          <Route exact path="/local">
            <Local />
          </Route>
          <Route exact path="/list">
            <List />
          </Route>
          <Route exact path="/showalert">
            <ShowAlert />
          </Route>
          <Route exact path="/local2">
            <Local2 />
          </Route>
          <Route exact path="/list2">
            <List2 />
          </Route>
			</IonRouterOutlet>
		</IonReactRouter>
	</IonApp>
);

export default App;



