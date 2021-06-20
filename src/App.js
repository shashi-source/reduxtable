import { useState,useEffect } from 'react';
import './App.css';
import Table from './components/ui/Table';
import './components/style/table.css'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store'
import AddForm from './components/ui/AddForm';
import EditForm from './components/ui/EditForm';

function App() {
  // const [themecolor,setthemecolor]= useState(false)

  // useEffect(() => {
  //   setTimeout(()=>{
  //     setthemecolor(true)
  //   },5000)
  // },[])
  // primary={themecolor}

  return (
    <Provider store={store}>
     <div className="App">
      <Table />
      <AddForm/>
      <EditForm/>
    </div>
    </Provider>
  );
}

export default App;



/*
 <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Table} />
          <Route path="/addform" exact component={AddForm} />
          <Route path="/editform/:id" exact component={EditForm} />
        </Switch>
      </div>
      </Router>
*/