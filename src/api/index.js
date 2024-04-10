import Chance from 'chance';

const chance = Chance();

const fakeUserData = ()=>{
  const name = chance.name({ middle: true });
  // console.log(name,'faker');
  return name;
}

export {
  fakeUserData
}

