import {
  Center,
  Image,
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Flex,
  Button,
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  
} from '@chakra-ui/react';
import { Tag } from '../components/RecipePage';

export const RecipePage = ({ item,  clickFn }) => {
  console.log("item", item)
 
  return (
    <Center bgColor="darkgreen.100" minH="100vh" bg="pink" flexDirection="column">
      {/* <Card borderRadius="xl" w="3xl" h="3xl"> */}
        {/* <CardBody> */}

           <Button w="fit-content" onClick={() => clickFn()}>
              Back to overview 
            </Button>
           
        <Text> name: {item.label} </Text>
        <Text> dish: {item.dishType}</Text>
        <Text>  diet: {item.dietLabel}</Text>
      
         <Flex gap={2}>
              {item.dietLabels.map((dietLabels) => (
                <Tag key={dietLabels}  size="md">
                  {dietLabels}
                </Tag>
              ))}
          </Flex>
<Text>Cautions:</Text>
            <Flex gap={2}>
              {item.cautions.map((cautions) => (
                <Tag key={cautions} size="md">
                  {cautions}
                </Tag>
              ))}
            </Flex>
<Text>Healthlabels:</Text>
            <Flex gap={2}>
                {item.healthLabels.filter((healthLabel) => ["Vegan", "Kosher"].includes(healthLabel)).map((healthLabels) => (
                    <Tag key={healthLabels} size="md">
                       {healthLabels}
                    </Tag>
                  ))}
                </Flex>
                
<TableContainer>
  <Table variant='simple'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>Recept</Th>
        <Th>Waarde</Th>

       </Tr>
    </Thead>
    <Tbody>
    {Object.keys(item.totalNutrients).map((key) => {
          const nutrient = item.totalNutrients[key];
          console.log("key:", key)
          console.log("nutrient:", nutrient)
          console.log("nutrient.label:", nutrient.label)
    
      return ( 
       
        <Tr>
        <Td>{nutrient.label}</Td>
        <Td>{Math.round(nutrient.quantity)} {nutrient.unit}</Td>
       
      </Tr>
 )
    })} 
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer> 
        
    <Image src={item.image}
          borderRadius= "lg"
          border='2px' borderColor='blue.300'
          height={100}
          width={180}/>
        
       {/* </CardBody> */}
      {/* </Card> */}
    </Center>
  );
};
