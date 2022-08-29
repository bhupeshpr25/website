import {
  Avatar,
  Center,
  Heading,
  IconButton,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function ModProfiles() {
  return (
    <>
      <Text
        textAlign="center"
        color="#138808"
        fontWeight="semibold"
        fontFamily="inter"
        fontSize="md"
        marginY={4}
      >
        Our Team
      </Text>
      <Heading
        fontFamily="inter"
        fontWeight="bold"
        color="#101828"
        textAlign="center"
        marginBottom={9}
        size="2xl"
      >
        Faces Behind DevsIndia
      </Heading>
      <Text
        fontFamily="inter"
        fontSize="lg"
        textAlign="center"
        color="#667085"
        marginBottom={20}
        paddingX={{ base: 10 }}
      >
        These are the people whose efforts led the community to where it is
        right now!
      </Text>

      {/* TODO: Refactor each of the moderator profile in to an individual component. */}
      <Center>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 8, md: 32 }}
        >
          {/* TODO: Add more information about the individual admins & moderators. */}
          <Avatar
            name="Bhupesh Varshney"
            size="xl"
            src="https://avatars.githubusercontent.com/u/34342551?v=4"
          />
          <Avatar
            name="Somraj Saha"
            size="xl"
            src="https://avatars.githubusercontent.com/u/31373860?v=4"
          />
          <Avatar
            name="Yash Sharan"
            size="xl"
            src="https://avatars.githubusercontent.com/u/52700320?v=4"
          />
          <Avatar
            name="Bhupesh Pradhan"
            size="xl"
            src="https://avatars.githubusercontent.com/u/76522149?v=4"
          />
        </Stack>
      </Center>
      {/* TODO: Add the rest of the moderator team member information. */}
    </>
  );
}

export default ModProfiles;
