const Navigation = () =>{
    return(
        <nav className="container">
        <div className="logo">
          <img src="src/assets/brand_logo.png" alt="hello" />
        </div>
        <ul>
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button>Login</button>
      </nav>
    )
};
export default Navigation;