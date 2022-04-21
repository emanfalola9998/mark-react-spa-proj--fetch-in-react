import { useState } from "react";

interface dogInterface {
  message: string;
  status: string
}

function App() {
  // const [joke, setJoke] = useState<Joke>();
  const [dogImages, setDogImages] = useState<dogInterface[]>([])

  const handleDogPicture = async () => {
    const response = await fetch(
      "https://dog.ceo/api/breeds/image/random"
    );
    const jsonBody: dogInterface= await response.json();
    setDogImages([...dogImages, jsonBody]);
    /// we spread our dogImages and we add on the jsonBody which has all our images
  };


  // const handledogImages = () => {
  //   setDogImages([...dogImages, joke])
  // }


  // const handleGetJoke = () => {
  //   fetch("https://jokestemp.neillbogie.repl.co/jokes/general/random")
  //     .then((response) => response.json())
  //     .then((jsonBody: Joke[]) => setJoke(jsonBody[0]));
  // };

  // const arrayOfImages = joke?.message.map((oneJoke) => (<><li><img src={oneJoke} alt=''/></li></>))

  
    return (
      <div> 
      <h1>Joke app</h1>
      {dogImages ?
          (
            <><ul>
              {dogImages.map((oneDog) => <img key={oneDog.message} src={oneDog.message} alt="" />)}
            </ul><hr /><button onClick={handleDogPicture}>Get another Dog Picture</button></>):
            (<><p>
            Click the button to trigger a <code>fetch</code> that gets a random
            joke from an API!
          </p><button onClick={handleDogPicture}>Get another Dog Picture</button></>
            )}
      </div>
    );
   
    
      
    
  
}

export default App;
