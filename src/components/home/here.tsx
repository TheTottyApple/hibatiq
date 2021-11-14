import { Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Button from "@components/button";
import Container from "@components/container";
import ContainerInside from "@components/containerInside";
import { rounded } from "@styles/theme";
import NextLink from "@components/nextChakra";
import React from "react";

export default function Here() {
	return (
		<Container bg="brand.transparent" py="50px" mb="25px">
			<ContainerInside>
				<VStack spacing={-5}>
					<Flex
						justify="center"
						spacing={{ base: 0, lg: 10 }}
						flexDir={{ base: "column", lg: "row" }}
					>
						<Card
							title="Questions?"
							description="Check out our FAQ section for answers to general questions!"
							button="FAQ"
							href="/faq"
						/>
						<VStack
							rounded={rounded}
							bg="brand.transparent2"
							minH={300}
							my={{ base: 10, lg: 0 }}
							mx={{ base: 0, lg: 10 }}
							w="100%"
							justify="center"
							boxShadow="lg"
							p={10}
							backdropFilter="blur(5px)"
						>
							<Heading as="h1">Who are we?</Heading>
							<Text textAlign="center">
								We are a commercially registered company that
								specializes in trading and contracting!
							</Text>
							<NextLink href="/aboutus">
								<Button>About Us</Button>
							</NextLink>
						</VStack>
						<Card
							title="Get an estimate"
							description="We offer quick and fast estimates based on your needs!"
							button="Contact Us"
							href="/contactus"
						/>
					</Flex>
				</VStack>
			</ContainerInside>
		</Container>
	);
}

function Card({
	title,
	description,
	button,
	href,
}: {
	title: string;
	description: string;
	button: string;
	href: string;
}): JSX.Element {
	return (
		<VStack
			rounded={rounded}
			bg="brand.transparent2"
			minH={300}
			w="100%"
			justify="center"
			boxShadow="lg"
			p={10}
			backdropFilter="blur(5px)"
		>
			<Heading as="h1" color="brand.black">
				{title}
			</Heading>
			<Text textAlign="center">{description}</Text>
			<NextLink href={href}>
				<Button>{button}</Button>
			</NextLink>
		</VStack>
	);
}
