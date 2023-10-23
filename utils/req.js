export async function sendUserData(data, route, method){
   const mensagem = {
      response: null,
      success: null,
      erro: null,
      login: null,
      accessToken: null,
      user: null,
      photo: null
   };

   try {
      const response = await fetch(`https://backend-tcc-tawny.vercel.app/${route}`, {
         method: method,
         mode: "cors",
         referrerPolicy: "no-referrer",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(data)
      });

      const responseData = await response.json();

      if(responseData.erro){
         mensagem["erro"] = responseData.erro;
         return mensagem;
      }

      switch(route){
         case "login":
            mensagem["login"] = responseData.login;
            mensagem["accessToken"] = responseData.accessToken;
            mensagem["user"] = responseData.user;
            mensagem["photo"] = responseData.photo;
         break;
         case "cadastrar":
            mensagem['response'] = responseData.response;
            mensagem['success'] = responseData.success;
         break;
      }

   } catch(e) {
      console.error("Error:", e);
   } finally {
      return mensagem;
   }
}