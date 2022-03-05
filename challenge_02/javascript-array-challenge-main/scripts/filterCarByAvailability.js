
//Muhamad Rizaludin FSW-114

function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log('sebeleum filter :',cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  // looping untuk memfilter data berdasarkan availablity true
  for (let i = 0; i < cars.length; i++) {
    let element = cars[i];
    if (element.available == true) {
      result.push(element);
    }
  }

  //menampilkan hasil filter berdasarkan property available = true di console
  console.log('result filter :',result);

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
