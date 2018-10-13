class Element{
  constructor(name, buildYear)
  {
    this.name = name
    this.buildYear = buildYear
  }
}

class Park extends Element{
  constructor(name, buildYear, area, numTrees)
  {
    super(name, buildYear)
    this.area = area;
    this.numTrees = numTrees
  }

  treeDensity()
  {
    const density = this.numTrees/this.area
    console.log(`${this.name} has a tree density of ${density} trees per sq km.`);
  }
}

class Street extends Element{
  constructor(name, buildYear, length, size = 3)
  {
    super(name, buildYear)
    this.length = length
    this.size = size
  }

  classifyStreet()
  {
    const classification = new Map();
    classification.set(1, 'tiny')
    classification.set(2, 'small')
    classification.set(3, 'normal')
    classification.set(4, 'big')
    classification.set(5, 'huge')
    console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street`);
  }
}

const allParks = [new Park('Green Park', 1987, 0.2, 215), new Park('National Park', 1988, 2.9, 2971)]

const allStreets = [new Street('North Street', 1988, 1.1), new Street('West Street', 1987, 2.1, 4)]

function calc(arr)
{
  const sum = arr.reduce((prev, cur) => prev + cur, 0)

  //console.log(sum);

  return [sum, sum/arr.length]
}


function reportParks(p)
{
  console.log('----PARKS REPORT----');

  //density
  p.forEach(cur => cur.treeDensity())

  //Average Age
  const ages = p.map(el => new Date().getFullYear() - el.buildYear)
  const [totalAge, averageAge] = calc(ages)
  console.log(`Our ${p.length} parks have an average age of ${averageAge} years`);

  //Which park has more than 1000 treeDensity
  const i = p.map(el => el.numTrees).findIndex(el => el >1000)
  console.log(`${p[i].name} has more than 1000 trees`);




}

function reportStreets(s)
{
  console.log('----STREET REPORT----');


  //Total and average length of the town's trees

  const [totalLength, averageLength] = calc(s.map(el => el.length))
  console.log(`Our ${s.length} streets have averageLength of ${averageLength} km and total length is ${totalLength} km`);


  //Classify streets
  s.forEach(el => el.classifyStreet())
}

reportParks(allParks)
reportStreets(allStreets)
