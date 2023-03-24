export const fetchData = (author, setBlog, setIsPending) => {

  fetch('https://jsonplaceholder.typicode.com/todos/')

    .then(response => {

      console.log(response); // Restituisce l'oggetto intero di risposta del server 
      
      if (!response.ok) {

        throw Error ("We could not fetch data");
      
        
      } else {
        
        return response.json(); // Parsing dei dati JSON in oggetto Javascript grazie all'oggetto response e al suo metodo json
      }
      
    })
    
    .then(data => { // Ricezione dell'oggetto Javascript

      // Mappiamo i nuovi blog (oggetti Javascript) aggiungendo la proprietà autore
      const itemsWithAuthor = data.map(item => {
        
        // Scegli un nome casuale dall'array author
        const randomAuthor = author[Math.floor(Math.random() * author.length)];
        
        // Crea un nuovo oggetto con la proprietà autore
        return {
          ...item,
          author: randomAuthor
        };

      });
      
      setBlog(itemsWithAuthor); 
      setIsPending(false);

    })

    .catch(error => {

      setIsPending(false);
      console.log(error);   // Tutto l'errore
      console.log(error.message); // Solo messaggio di errore
      
    });

}

export const randomUserId = () => {

  const randomNumber = Math.random(Math.ceil * 100).toString();
  const nowDate = Date.now().toString()
  const randomUserId = randomNumber + nowDate

  return randomUserId
  
}