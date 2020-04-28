const pies = [
  {
    type: 'apple',
    size: 'Family',
    crust: 'Lattice',
    price: 30,
    imageUrl: 'https://www.tasteofhome.com/wp-content/uploads/2017/10/Lattice-Topped-Apple-Pie_exps29543_OBD2777379A05_22_1bC_RMS-1.jpg',
    owner: 'luke',
    aLaMode: true
  },
  {
    type: 'Pecan',
    size: 'Person',
    crust: 'Basic Flaky',
    price: 3,
    imageUrl: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/10/8/2/FNM_110115-Butter-Pecan-Toffee-Pie-Recipe_s4x3.jpg.rend.hgtvcom.406.305.suffix/1444416988776.jpeg',
    owner: 'michael',
    aLaMode: false
  },
  {
    type: 'Blueberry',
    size: 'Regular',
    crust: 'crumb',
    price: 400,
    imageUrl: '',
    owner: 'matt',
    aLaMode: true
  },
  {
    type: 'Meat',
    size: 'Real Big',
    crust: 'Meat Crust',
    price: 1,
    imageUrl: '',
    owner: 'luke',
    aLaMode: true
  },
  {
    type: 'Pizza',
    size: 'XL',
    crust: 'Chese Stuff',
    price: 6,
    imageUrl: '',
    owner: 'michael',
    aLaMode: true
  },
  {
    type: 'Rhubarb',
    size: 'pie sized',
    crust: 'normal',
    price: 15,
    imageUrl: 'https://storcpdkenticomedia.blob.core.windows.net/media/recipemanagementsystem/media/recipe-media-files/recipes/retail/x17/20020-strawberry-rhubarb-pie-760x580.jpg?ext=.jpg',
    owner: 'matt',
    aLaMode: true
  },
  {
    type: 'Spankopita',
    size: 'Pan',
    crust: 'Phyllo',
    price: 200,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Spanakopita.jpg',
    owner: 'everybody',
    aLaMode: false
  },
]


const printToDom = (selector, textToPrint) =>{
  let selectedDiv = document.querySelector(selector);
  selectedDiv.innerHTML = textToPrint;
}


const buildPies = (pieCollection) => {
  let domString = '';

  for (let i = 0; i< pieCollection.length; i++){
    domString += `
    <div class="pie">
      <h2>${pieCollection[i].type}</h2>
      <img src="${pieCollection[i].imageUrl}" alt="image of ${pieCollection[i].type} pie">
      <p>This ${pieCollection[i].type} pie is a ${pieCollection[i].size} pie, it's owned by ${pieCollection[i].owner}, and has a ${pieCollection[i].crust} crust.</p>
      <h4>Price: ${pieCollection[i].price}</h4>
    </div>
  `;
      }
    printToDom('#pieContainer',domString)
    }

  const filterPiesEvent = (e) => {
    const buttonId = e.target.id
    if (buttonId === "all"){
      buildPies(pies) 
    }
    else{
    const tempPieCollection = []
    for (let i = 0; i< pies.length; i++){
      if (pies[i].owner === buttonId){
        tempPieCollection.push(pies[i])
      }
      buildPies(tempPieCollection)
  }}
}


 
  const clickEvents = () =>{
    document.querySelector("#luke").addEventListener('click', filterPiesEvent );
    document.querySelector("#michael").addEventListener('click', filterPiesEvent );
    document.querySelector("#matt").addEventListener('click', filterPiesEvent );
    document.querySelector("#all").addEventListener('click', filterPiesEvent );
  }







const init = () => {
  buildPies(pies);
  clickEvents()
}

init()
