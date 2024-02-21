
import UserInfo from '../components/UserInfo';

const usersData = [
    {
      id: 1,
      name: "mahesh babu",
      email: "maheshbabu@gmail.com",
      
    },
    {
      id: 2,
      name: "shekhar",
      email: "shekhar@gmail.com",
     
    },
    
  ];;

const Home = () => {
  return (
    <div>
      <h1>Your Web App</h1>
      <UserInfo users={usersData} />
    </div>
  );
};

export default Home;
