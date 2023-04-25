import { Box, Center, Heading, Text, Stack, Avatar } from "@chakra-ui/react";

export default function Card(
  {
  title,
  desc,
  authorImage,
  authorName,
  publishDate,
  duration,
  blogImage,
  key
}
) {
  return (
    <Center py={6} m={3} key={key}>
      <Box
        maxW={"445px"}
        w={"full"}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
      >
        <Box
          h={"210px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          <img
            src={blogImage}
            alt="imageAlt"
          />
        </Box>
        <Stack>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"sm"}
            letterSpacing={1.1}
          >
            {title}
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {title}
          </Heading>
          <Text color={"gray.500"}>
            {desc}
          </Text>
        </Stack>
        <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
          <Avatar
            src={authorImage}
            alt={"Author"}
          />
          <Stack direction={"column"} spacing={0} fontSize={"sm"}>
            <Text fontWeight={600}>{authorName}</Text>
            <Text color={"gray.500"}>{publishDate}· {duration} read</Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
