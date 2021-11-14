import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";

const spacing = 20;

export default function Intro() {
	return (
		<Container>
			<ContainerInside>
				<Flex justify="center" align="center" mt={50}>
					<Box maxW="60ch" textAlign="left" my={`${spacing}px`}>
						<Heading>
							A solution for your construction needs
						</Heading>
						<Text my="10px">
							HibatIQ specializes in construction, electrical, and
							mechanical works. Some of our projects inclde
							schools, WTPS, roads, and pipelines.
						</Text>
						{/* <NextLink href="/notes">
							<Button>Get Free Help</Button>
						</NextLink> */}
					</Box>

					<Box textAlign="left" my={`${spacing}px`}>
						<Image
							maxW="300px"
							src="/a.png"
							alt="bob the builder lol"
							display={{ base: "block", md: "block" }}
						/>
					</Box>
				</Flex>
			</ContainerInside>
		</Container>
	);
}
