export function clearCookies(){
   // Obtém todos os cookies atuais
   const cookies = document.cookie.split(";");

   // Itera sobre os cookies e os remove definindo uma data de expiração no passado
   cookies.forEach((cookie) => {
      const parts = cookie.split("=");
      const name = parts[0].trim();
      document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
   });
}