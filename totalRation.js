function totalRation(params, person, ration) {
  return (
    (params[0] +
      params[1] * person.weight +
      params[2] * person.height -
      params[3] * person.age) *
    ration
  ).toFixed(1);
}
