const clouds = [0, 1, 0, 0, 0, 1, 0]

function jumpingOnClouds(clouds) {
  let current;
  const result = [];

  for (let i = 0; i < clouds.length; i++){
    if (!current && clouds[i] === 0) {
      current = i;
      result.push(i);
    }

    if(current === i) {      
      if (clouds[current + 1] === 0 && clouds[current + 2 ] === 0) {
        result.push(current + 2)
        current = current + 2
      } else {
        if (clouds[current + 1] === 0) {
          result.push(current + 1)
          current = current + 1;
        }
        
        if (clouds[current + 2] === 0) {
          result.push(current + 2)
          current = current + 2
        }
      }
    }

  }

  return {
    minimumHops: result.length,
    hops: result
  }
}

const result = jumpingOnClouds(clouds)
console.log(result.hops)
console.log(result.minimumHops)