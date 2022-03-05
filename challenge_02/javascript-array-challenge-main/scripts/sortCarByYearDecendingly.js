//Muhamad Rizaludin FSW-114

function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log('sebelum Descending :',cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  //tulis code mu disini

  /*result.sort ini berfungsi untuk menyorting array of object dari cars dimana 
  didalamnya terdapat local function dengan parameter a dan b */

  result.sort(function(a, b){
    
    //year disini merupakan property dari array of object cars
    let yearA = a.year, yearB = b.year;
    const hasil = yearB - yearA;
    return hasil;

  });

  //menampilkan hasil result Descending berdasarkan property year di console
  console.log('result Descending :',result);
  
  // Rubah code ini dengan array hasil sorting secara ascending
   return result;
}
