export function groupBy(xs, keys=[]) {
    return xs.reduce(function(rv, x) {
        keys.forEach(key=>{
            rv[key] =(rv[key]||{})
            rv[key][x[key]] = rv[key][x[key]] || []
            rv[key][x[key]].push(x);
        })
      return rv;
    }, {});
  };