import { Center, Heading, Text, Image, Box, Flex, Grid, Input} from '@chakra-ui/react';
import { data } from '../utils/data';
import { Tag } from '../components/RecipePage';
import {  } from '@chakra-ui/icons';
import { useState, useEffect } from 'react';

export const RecipeListPage = ({clickFn, selectedRecipe }) => {
  const [appel, appelinstellen]= useState ("")
  const [ gevondenRecepten, zoekRecept]= useState ([])
  useEffect(() => {}, [ selectedRecipe ]);

  console.log(data.hits);
  console.log("appel", appel)
  console.log("gevondenRecepten", gevondenRecepten)
  
  const zoekFunctie = (event) => {
    console.log("event:", event.target.value)
    appelinstellen(event.target.value)
    filterFunctie(event.target.value)
  };

  const filterFunctie = (zoekwaarde) => {
    console.log("zoekwaarde:", zoekwaarde)
    console.log("data.hits.recipe", data.hits.recipe)
    const gefilterd = data.hits.filter((item) =>
      // console.log("item.recipe.label", item.recipe.label)
      item.recipe.label.includes(zoekwaarde)
      );
      console.log("gefilterd", gefilterd)
      zoekRecept(gefilterd);
  };

return (
  <Center flexDir="column" bg="lightgreen" >
      {/* <RecipeListPage clickFn={clickFn} item={item} key={item.id} /> */}
<Input type="text" name="name" value= {appel} onChange={zoekFunctie} />

  <Grid
    templateColumns="repeat(auto-fit, minmax(300px, 1fr)) " 
    gap={4} 
    w="100%"
  >
      {gevondenRecepten.map(({ recipe }) => {
        
console.log("recept:", recipe)

return(
    
      <Box boxSize= "300px" height="100%"bg= "blue.100" 
      borderRadius="lg"onClick={() => clickFn(recipe)} >
        <Image src={recipe.image}
          borderRadius= "lg"
          border='2px' borderColor='blue.300'        
          height={100}
          width={180}/>

        <Text> name: {recipe.label} </Text>
        
        <Text> dish: {recipe.dishType}</Text>
        <Text> diet: {recipe.dietLabel}</Text> 
        
        <Flex gap={2}>
              {recipe.dietLabels.map((dietLabels) => (
                <Tag key={dietLabels} size="md">
                  {dietLabels}
                </Tag>
                ))}
               </Flex>
        <Text>Cautions:</Text>
        <Flex gap={2}>
                {recipe.cautions.map((cautions) => (
                    <Tag key={cautions} size="md">
                       {cautions}
                    </Tag>
                  ))}
              </Flex>
            <Text>Healthlabels:</Text>   
                <Flex gap={2}>
                {recipe.healthLabels.filter((healthLabel) => ['Kosher','Vegan','Vegetarian','Gluten-Free'].includes(healthLabel)).map((healthLabels) => (
                    <Tag key={healthLabels} size="md">
                       {healthLabels}
                    </Tag>
                  ))}
                </Flex>
               
              
      </Box>
      )
      })}
      </Grid>
    </Center>
   
   );
};

// const Recipe = () => {
//   const [isClicked, setIsClicked] = useState(false);

//   const handleClick = () => {
//     setIsClicked(true);
//     // Je kunt hier ook andere acties toevoegen zoals navigeren naar een andere pagina
//     alert("Recept is aangeklikt!");
//   };

//   return (
//     <div>
//       <h1>Recept: Pasta Carbonara</h1>
//       <button onClick={handleClick}>
//         Klik om het recept te bekijken
//       </button>
//       {isClicked && <p>Hier is het recept: ...</p>}
//     </div>
//   );
// };

// function RecipeChecker() {
//   const [input, setInput] = useState("");
//   const [filteredRecipes, setFilteredRecipes] = useState([]);

//   const handleSearch = () => {
//     const result = Recipe.filter(recipe => recipe.name.toLowerCase().includes(input.toLowerCase())
//     );
//     setFilteredRecipes(result);
//   };

//   return (
//     <div style={{ padding: "100px" }}>
//       <h1>Recipe Searcher</h1>
//       <input
//         type="text"
//         placeholder="Enter recipe name"
//         value={input}
//         onChange={(e) => setInput(e.target.value)} />
//       <button onClick={handleSearch}>Search Recipe</button>
//       <div>
//         {filteredRecipes.map((recipe, index) => (
//           <div key={index} style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
//             <h2>{recipe.name}</h2>
//             <img src={recipe.image} alt={recipe.name} style={{ width: "150px" }} />
//             <p>Ingredients: {recipe.ingredients.join(", ")}</p>
//             <p>Meal Type: {recipe.mealType}</p>
//             <p>Dish Type: {recipe.dishType}</p>
//             {recipe.dietLabels.length > 0 ? (
//               <p>Diet Labels: {recipe.dietLabels.join(", ")}</p>
//             ) : (
//               <p style={{ color: "orange" }}>⚠ No specific diet labels available.</p>
//             )}
//             {recipe.allergens.length > 0 && (
//               <p style={{ color: "red", fontWeight: "bold" }}>⚠ Warning: Contains {recipe.allergens.join(", ")}</p>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default RecipeChecker;


    