import { Suspense } from 'react';
import './App.css';
import Users from './Users';
import Posts from './PostCard';
// import Counter from './counter';

const usersDataPromise = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return data;
};
const postData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return data;
};

function App() {
  // function handleClick() {
  //   alert('Button was clicked.')
  // }
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Users usersDataPromise={usersDataPromise()}></Users>
      </Suspense>
      <Suspense fallback={<p>Post Data Loading...</p>}>
        <Posts postData = {postData()}></Posts>
      </Suspense>

      {/* <Counter></Counter> */}

      {/* <button onClick={handleClick}>Click Me </button> */}
    </>
  );
}

export default App;
