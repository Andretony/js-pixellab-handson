var globalVariable = 'Ma aflu incontextul global';

if (true) {
  const localVariable = 'Ma aflu in contextul local';
  let globalVariable = 'NU ma aflu in contextul global';

  console.log(globalVariable);
  console.log(localVariable);
}
