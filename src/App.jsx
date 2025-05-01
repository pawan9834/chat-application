import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; 
import Navlinks from './components/Navlinks';
import ChatList from './components/ChatList';
import ChatBox from './components/ChatBox';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(); 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); 
      setLoading(false); 
    });

    return () => unsubscribe();
  }, [auth]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      {user ? (
        <div className="flex lg:flex-row flex-col items-start w-[100%]">
          <Navlinks />
          <ChatList />
          <ChatBox />
        </div>
      ) : (
        <div>
          {isLogin ? (
            <Login isLogin={isLogin} setIsLogin={setIsLogin} />
          ) : (
            <Register isLogin={isLogin} setIsLogin={setIsLogin} />
          )}
        </div>
      )}
    </div>
  );
};

export default App;