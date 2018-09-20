import * as React from 'react';
import { css, injectGlobal } from 'emotion';
import { Route } from 'react-router';

import Footer from '../components/Footer';
import FooterItem from '../components/FooterItem';
import Header from '../components/Header';

import Overview from './overview';
import Programm from './programm';
import Reports from './reports';


injectGlobal`
  body {
    margin: 0;
    padding: 0;

    font-family: 'Roboto', sans-serif;
    text-rendering: optimizeLegibility;
    font-feature-settings: 'liga';    
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  #app {
    display: flex;
    flex-flow: column nowrap;

    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

const theme = {
  root: css`
    label: Content;
    flex: 1;
    position: relative;
  `,
};

interface State {
  sidebarOpen: boolean
}


export default function Application() {
  return (
    <>
      <Header>
        <Route path="" exact render={() => 'Übersicht'} />
        <Route path="/reports" render={() => 'Reports'} />
        <Route path="/programm" render={() => 'Programmierung'} />
      </Header>
      <div className={theme.root}>
        <Route component={Overview} path="" exact />
        <Route component={Reports} path="/reports" />
        <Route component={Programm} path="/programm" />
      </div>
      <Footer>
        <FooterItem caption="Übersicht" exact icon="dashboard" to="" />
        <FooterItem caption="Reports" icon="assessment" to="/reports" />
        <FooterItem caption="Programmierung" icon="settings" to="/programm" />
      </Footer>
      
    </>
  );
}
