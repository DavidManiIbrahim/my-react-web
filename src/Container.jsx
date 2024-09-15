import LionImage from './assets/pexels-ardit-mbrati-LION.png'

function Container() {

return (
    <main>
        <div className="image-container">
          <img src= {LionImage} alt="" />
        </div>
        <div className="text-container">
          <h1>LION</h1>
          <p>
          Lions in zoos serve as ambassadors for their species, promoting conservation and awareness while providing insights into their biology and behaviour</p>
        </div>
      </main>
);

}

export default Container