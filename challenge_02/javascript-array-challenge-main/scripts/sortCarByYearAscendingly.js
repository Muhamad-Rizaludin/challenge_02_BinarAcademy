//Muhamad Rizaludin FSW-114

function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log('sebelum Ascending :',cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars]; // mengambil nilai array of object cars

  // Tulis code-mu disini

  /*result.sort ini berfungsi untuk menyorting array of object dari cars dimana 
  didalamnya terdapat local function dengan parameter a dan b */

  result.sort(function(a, b){

    //year disini merupakan property dari array of object cars
    let yearA = a.year, yearB = b.year;
    const hasil = yearA - yearB;
    return hasil;

  });
  
  //menampilkan hasil result Ascending berdasarkan property year di console
  console.log('result Ascending :',result);

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}