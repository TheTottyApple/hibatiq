import {
	Box,
	Flex,
	Heading,
	HStack,
} from "@chakra-ui/react";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import NextLink from "@components/nextChakra";

// eslint-disable-next-line import/no-default-export
export default function Header(): JSX.Element {

	return (
		<>
			<Container
				bg="brand.purple.light"
				as="header"
				py={3}
				w="100%"
				position="fixed"
				zIndex={1000}
				backdropFilter="blur(5px)"
			>
				<ContainerInside>
					<Flex
						justify="space-between"
						align="center"
						flexDir={{ base: "column", md: "row" }}
					>
						<NextLink href="/" mb={{ base: 2, md: 0 }}>
							<Flex justify="center" align="center">
								<Heading size="md" color="white" ml={2.5}>
									HibatIQ
								</Heading>
							</Flex>
						</NextLink>
						<HStack
							spacing={3}
							fontSize={{
								base: 11,
								sm: 14,
								md: "initial",
							}}
						>
							<NextLink href="/">Home</NextLink>
							<NextLink href="/About">About Us</NextLink>
							<NextLink href="/FAQ">FAQ</NextLink>
							<NextLink href="/contact">Contact Us</NextLink>
						</HStack>
					</Flex>
				</ContainerInside>
			</Container>
			<Box w="100%" h="50px" />
		</>
	);
}
