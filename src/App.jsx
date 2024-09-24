import Item from './components/Item'
function App() {

  return (
    <div className='container'>
     <img className='image' src="src/Images/headerimg.jpeg" alt="Header" />
      <h1 className='header'>Jordan Favorites</h1>
      <div className='card-container'>
        <Item name="Concord's" image="src/Images/Jordan11.jpeg" desc = "Jordan 11s" website="https://stockx.com/air-jordan-11-retro-concord-2018?country=US&currencyCode=USD&size=12" ></Item>
        <Item name="Bred's" image="src/Images/Bred4s.jpeg" desc = "Jordan 4s" website="https://stockx.com/air-jordan-4-retro-bred-reimagined"></Item>
        <Item name="Fire Red" image="src/Images/FireRed5s.jpeg" desc = "Jordan 4s" website="https://stockx.com/air-jordan-5-retro-fire-red-silver-tongue-2020"></Item>
        <Item name="Gamma Blue" image="src/Images/Gamma Blue.jpeg" desc = "Jordan 11s" website="https://stockx.com/jordan-11-retro-gamma-blue"></Item>
        <Item name="Red Cement" image="src/Images/RedCement.webp" desc = "Jordan 3s" website="https://stockx.com/air-jordan-3-retro-black-cement-2018"></Item>
        <Item name="Shattered Backboards" image="src/Images/ShatteredBackBoards.jpeg" desc = "Jordan 1s" website="https://stockx.com/air-jordan-1-retro-high-shattered-backboard-3"></Item>
        <Item name="Unc" image="src/Images/Unc3s.jpeg" desc = "Jordan 3s" website="https://stockx.com/air-jordan-3-retro-unc-2020"></Item>
        <Item name="What The" image="src/Images/Whatthe5s.jpeg" desc = "Jordan 5s" website="https://stockx.com/air-jordan-5-retro-what-the"></Item>
        <Item name="Carmine" image="src/Images/Carmine.jpeg" desc = "Jordan 6s" website="https://stockx.com/air-jordan-6-retro-carmine-2020"></Item>
        <Item name="Chicago" image="src/Images/Chicago1s.jpeg" desc = "Jordan 1s" website="https://stockx.com/air-jordan-1-retro-high-og-chicago-reimagined-lost-and-found"></Item>
      </div>
    </div>
  )
}

export default App
