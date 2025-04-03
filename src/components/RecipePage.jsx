import { Tag as CTag } from '@chakra-ui/react';

export const Tag = ({ children, ...props }) => {
  return (
    <CTag
      p={0.3}
      size="sm"
      variant="solid"
      bgColor="blue.400" 
      color="white"
      {...props}
    >
      {children}
    </CTag>
  );
};
