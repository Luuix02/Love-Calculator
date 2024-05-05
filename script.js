function calculateLove () {
  const nameOne = document.getElementById("name1").value
  const nameTwo = document.getElementById("name2").value

  const lovePercentage = nameOne && nameTwo ?
((nameOne + nameTwo).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 101) :
null;

const percentageResult = document.getElementById("result");
percentageResult.style.color = lovePercentage !== null ? "green" : "red";
percentageResult.textContent = lovePercentage !== null ? `Tienes un ${lovePercentage} de compatibilidad` : 'Por favor ingresa ambos nombres';



  
  
}