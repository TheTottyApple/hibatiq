import { Box, Flex, Text, useToken } from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";
import Wave from "react-wavify";

// eslint-disable-next-line import/no-default-export
export default function Footer(): JSX.Element {
	const purple = useToken("colors", "brand.red");
	return (
		<Box as="footer">
			<Box zIndex={-1}>
				<Wave
					fill={purple}
					// paused
					options={{
						height: 120,
						amplitude: 9,
						speed: 0.5,
						points: 3,
					}}
				/>
			</Box>
			<Container bg="brand.red" mt="-8px">
				<ContainerInside pb={5}>
					<Flex
						justify="space-between"
						flexDir={{ base: "column", sm: "row" }}
						textAlign={{ base: "center", md: "left" }}
					></Flex>
				</ContainerInside>
			</Container>
			<Container bg="brand.red" py="10px">
				<ContainerInside>
					<Flex
						justify="space-between"
						align="center"
						color="text.200"
					>
						<Text>HibatIQ © 2021 All Rights Reserved</Text>
						<Text>
							<NextLink href="https://github.com/TheTottyApple/HibatIQ">
								Made with ❤️ by passionate developers
							</NextLink>
						</Text>
					</Flex>
				</ContainerInside>
			</Container>
		</Box>
	);
}
