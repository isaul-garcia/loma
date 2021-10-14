import React, { useEffect } from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import WebFont from 'webfontloader';
import { Home, CustomizeLoma } from './pages';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['IBM Plex Sans KR']
      }
    });
   }, []);

  return (
    <>
      <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/loma" exact component={Home} /> 
        <Route path="/CustomizeLoma" exact component={CustomizeLoma} /> 
      </Switch>
    </Router>
    </>
  );
}

export default App;
