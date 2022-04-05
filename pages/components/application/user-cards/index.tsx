import { Box, Center, Flex, Grid, GridItem, Stack } from "@chakra-ui/react"
import UserCardWithTags from "../../../../public/components/application/user-cards/user-card-with-tags/UserCardWithTags"
// import UserCardSimple from "../../../../components/Cards/UserCard/UserCardSimple"
// import UserCardWithRating from "../../../../components/Cards/UserCard/UserCardWithRating"
// import UserCardWithTags from "../../../../components/Cards/UserCard/UserCardWithTags"
// import SimpleCenterHeaderPage from "../../../../components/PageHeaders/HeaderPageBigSize/SimpleCenterHeaderPage"
// import LabelText from "../../../../components/Text/LabelText"

const userCards = [
    { name: 'User card with tags', id: 1 },
    { name: 'User card with rating', id: 2},
    { name: 'User card grid', id: 3}
]

const users = [
    {
        firstName: 'Kent',
        lastName: 'Dodds',
        pseudo: 'KentDDD',
        speciality: 'Developpeur Front-End',
        city: 'Toulouse',
        country: 'France',
        month: 'Juillet',
        year: '2022',
        desc: '',
        image: "/images/avatar-one.jpg",
        followers: 25,
        tags: [
            { name: 'Productivity' },
            { name: 'Creativity' },
            { name: 'Design' },
            { name: 'Work' },
        ],
    },
    {
        firstName: 'Kimberly',
        lastName: 'Paul',
        pseudo: 'KimDesign',
        speciality: 'Graphic Designer',
        city: 'Montpellier',
        country: 'France',
        month: 'Juillet',
        year: '2022',
        image: "/images/avatar-two.jpg",
        desc: "Bonjour, je suis graphiste et développeur web professionnel. Je suis membre de l'équipe Evolving [connectez-vous pour afficher l'URL] et j'ai une expérience...",
        followers: 52,
        tags: [
            { name: 'Adobe Photoshop' },
            { name: 'UX/UI' },
            { name: 'Page de destination' },
            { name: 'Création de sites web' },
        ],
    },
    {
        firstName: 'John',
        lastName: 'Douglas',
        pseudo: 'DoggyGlas',
        speciality: 'ManagerProduct',
        city: 'Paris',
        country: 'France',
        month: 'Juillet',
        year: '2022',
        image: "/images/avatar-three.jpg",
        desc: "Bonjour, je suis graphiste et développeur web professionnel. Je suis membre de l'équipe Evolving [connectez-vous pour afficher l'URL] et j'ai une expérience...",
        followers: 47,
        tags: [
            { name: 'Adobe Photoshop' },
            { name: 'UX/UI' },
            { name: 'Page de destination' },
            { name: 'Création de sites web' },
        ],
    }
]

export const UserCardsComponentPage = () => {
    return (
        <Stack spacing={4} mb={6} p={4}>
            {/* <Box w="full" h={'400px'} p={4}>
                <SimpleCenterHeaderPage subTitle={'User Cards'} />
            </Box> */}
            <Box w="full" py={4}>
                {/* <LabelText mb={2}>{userCards[0].name}</LabelText> */}
                <Flex
                  w="full"
                  rounded='lg'
                  justifyContent={'center'}
                  bgColor="gray.100"
                  py={12}
                  px={4}
                  boxShadow='inner'>
                    <UserCardWithTags tags={users[0].tags} user={users[0]} />
                    {/* <div id="user-card-with-tags"></div> */}
                </Flex>
            </Box>
            {/* <Box w="full" py={4}>
                <LabelText mb={2}>{userCards[1].name}</LabelText>
                <Flex
                  w="full"
                  rounded='lg'
                  justifyContent={'center'}
                  bgColor="gray.100"
                  py={12}
                  px={4}
                  boxShadow='inner'>
                    <UserCardWithRating tags={users[1].tags} user={users[1]} />
                </Flex>
            </Box>
            <Box w="full" py={4}>
                <LabelText mb={2}>{userCards[2].name}</LabelText>
                <Flex
                  w="full"
                  rounded='lg'
                  justifyContent={'center'}
                  bgColor="gray.100"
                  py={12}
                  px={4}
                  boxShadow='inner'>
                    <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={4}>
                        {users.map((user, idx) => {
                            return (
                                <GridItem key={idx} colSpan={1}>
                                    <UserCardSimple user={user} />
                                </GridItem>
                            )
                        })}
                    </Grid>
                </Flex>
            </Box> */}
        </Stack>
    )
}

export default UserCardsComponentPage