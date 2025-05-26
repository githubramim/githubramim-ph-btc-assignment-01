function downloadPDF() {
  const link = document.createElement("a");
  link.href = "CV_Tanvir_Bin_Faruk_Ramim.pdf"; 
  link.download = "CV_Tanvir_Bin_Faruk_Ramim.pdf"; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
