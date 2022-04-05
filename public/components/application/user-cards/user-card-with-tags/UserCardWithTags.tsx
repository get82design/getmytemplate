import {
    Avatar,
    AvatarBadge,
    Button,
    Container,
    Flex,
    Heading,
    HStack,
    Icon,
    Stack,
    Tag,
    Text
} from "@chakra-ui/react"
import ReactDOM from "react-dom";
import { GoCalendar, GoGlobe } from "react-icons/go"
import { MdEdit, MdVerified } from "react-icons/md"

type TagsProps = {
    name: string
}[]

type UserProps = {
    firstName: string
    lastName: string
    speciality: string
    city: string
    country: string
    month: string
    year: string
    image: string
}

type UserCardProps = {
    user: UserProps
    tags: TagsProps
}

export const UserCardWithTags = ({ user, tags }: UserCardProps) => {
    console.log('tags', tags)
    return <>
        <Container
          w="full"
          maxW="800px"
          rounded='lg'
          boxShadow="lg"
          bgColor="white"
          p={{base: 4, md: 8}}>
            <Stack direction={{base: 'column', md: 'row'}} spacing={12} align="top">
                <Avatar
                  src={user?.image ?? ''}
                  name={user?.firstName ?? ''}
                  size='2xl'>
                    <AvatarBadge
                      right={2}
                      bottom={2}
                      boxSize='0.75em'
                      bg='white'
                      border={'0px'}>
                        <Icon as={MdVerified} w={9} h={9} color='green.600' />
                    </AvatarBadge>
                </Avatar>
                <Stack spacing={8} w="full">
                    <Stack direction={{base: 'column', md: 'row'}} spacing={4}>
                        <Stack spacing={4} w="full">
                            <Stack spacing={0}>
                                <Heading
                                  fontSize={{ base: 'xl', md: "2xl" }}
                                  fontWeight='extrabold'>
                                    {user?.firstName} {user?.lastName}
                                </Heading>
                                <Text
                                  fontWeight={'light'}
                                  fontSize={{base: 'md', md: 'lg'}}>
                                    {user?.speciality}
                                </Text>
                            </Stack>
                            <Stack spacing={0} color={'gray.500'}>
                                <HStack spacing={2}>
                                    <Icon as={GoGlobe} />
                                    <Text fontWeight={'light'}>{user?.city}, {user?.country}</Text>
                                </HStack>
                                <HStack spacing={2}>
                                    <Icon as={GoCalendar} />
                                    <Text fontWeight={'light'}>{user?.month}, {user?.year}</Text>
                                </HStack>
                            </Stack>
                        </Stack>
                        <Flex w="full" justifyContent={'flex-end'}>
                            <Button
                              color="gray.600"
                              variant="outline"
                              leftIcon={<MdEdit />}>
                                Edit
                            </Button>
                        </Flex>
                    </Stack>
                    <Stack spacing={2} mt={4}>
                        <Heading fontSize='xl' color="gray.600">Compétences :</Heading>
                        <Flex justifyContent={'flex-start'} wrap={'wrap'} w="full">
                            {tags.map((tag, idx) => {
                                return (
                                    <Tag key={idx} mr={2} mb={2} size='lg'>
                                        {tag.name}
                                    </Tag>
                                )
                            })}
                        </Flex>
                    </Stack>
                </Stack>
            </Stack>
            
        </Container>
    </>
}

export default UserCardWithTags