import { useState } from 'react';
import { Space, Breadcrumb, Menu, theme } from 'antd';
import Header from './components/Header';
import Home from './pages/Home';
import CreateBuild from './pages/CreateBuild';
import Explore from './pages/Explore';
import './App.css';
import { Link } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';

function App() {
  const [user, setUser] = useState("New User")

    let element = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/create",
      element: <CreateBuild user={user}/>
    },
    {
      path: "/explore",
      element: <Explore />
    },
  ])

  return (
    <div className='App'>
          <Header user={ user }/>
          <div style={{display: "flex", flexDirection: "row"}} className='content'> 
            <Menu
             className='menu'
             items={[
              { label: <Link to="/">Home</Link>},
              { label: <Link to="/explore">Explore Builds</Link>},
              { label: <Link to="/create">Create New Build</Link>},
              { label: "Profile"},
              { label: "Help"},
             ]}
            >
            </Menu>
            {element}

          </div>

    </div>
  )
}

export default App
