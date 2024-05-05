function calculateLove () {
  const nameOne = document.getElementById("name1").value
  const nameTwo = document.getElementById("name2").value

  const lovePorcentage = nameOne && nameTwo ?
((nameOne + nameTwo).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % 101) :
null;

const porcentageResult = document.getElementById("result");
porcentageResult.style.color = lovePorcentage !== null ? "green" : "red";
porcentageResult.textContent = lovePorcentage !== null ? `Tienes un ${lovePorcentage} de compatibilidad` : 'Por favor ingresa ambos nombres';



  
  
}