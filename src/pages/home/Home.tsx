

const Home = () => {
  const handle = () => {
    alert('Home page loaded');
  }
  return (
    <div>Home
      <button onClick={handle}>Click Me</button>
      <p>Welcome to the home page!</p>
    </div>
  )
}

export default Home