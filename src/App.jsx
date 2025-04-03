
import { Flex } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { RecipeListPage } from './pages/RecipeListPage';
import { useState } from 'react';
import { RecipePage } from './pages/RecipePage';


export const App = () => {
  // Your state code here

  const [selectedItem, setSelectedItem] = useState();
  console.log("selecteditem", selectedItem)
return (
    // <Box>
    <>
      {/* <Flex> */}
      {selectedItem ? (
      <RecipePage item={selectedItem} clickFn={setSelectedItem} />
      ) : (
      <RecipeListPage clickFn={setSelectedItem} selectedItem={selectedItem}/>  
      )}
      {/* </Flex> */}
    {/* // </Box> */}
    </>
    );
  };
