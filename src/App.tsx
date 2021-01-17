import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.scss';

import WrapperPage from './pages/WrapperPage';
import StaticBarChartPage from './pages/StaticBarChartPage';
import ScatterGraphPage from './pages/ScatterGraphPage';
import ColumnRangePage from './pages/ColumnRangePage';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
        <Switch>
          <Route exact path="/" component={WrapperPage} />
          <Route exact path="/bar-chart" component={StaticBarChartPage} />
          <Route exact path="/scatter-graph" component={ScatterGraphPage} />
          <Route exact path="/column-range" component={ColumnRangePage} />
        </Switch>
    </Router>
  );
}

export default App;
