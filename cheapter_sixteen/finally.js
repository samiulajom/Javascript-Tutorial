try {
  console.log(`I am line number:1`);
  throw new Error(`AMI ERROR .AMY VOY PAO!`);
  console.log(`I am line number:2`);
  console.log(`I am line number:3`);
} catch(e){
  console.log(e.message);
  console.log(`This is a custom error!`);//!CUSTOM ERROR DEOWA JAY.AI JNNO catch er sthe kisu(parametter ) na dileo hobe
} finally {
  console.log(`Ami karur e dar dari na. Ami exicution hoboi.`);
}
