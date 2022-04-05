import { Box, Flex, Stack } from "@chakra-ui/react"
// import SimpleCenterHeaderPage from "../../../../components/PageHeaders/HeaderPageBigSize/SimpleCenterHeaderPage"
// import PageHeaderUserProfilWithBg from "../../../../components/PageHeaders/UserProfil/PageHeaderUserProfilWithBg"
// import LabelText from "../../../../components/Text/LabelText"

const pageHeaders = [
    { name: 'Page Header User Profil with background', id: 1 },
]

export const PageHeadersComponentPage = () => {
    return (
        <Stack spacing={4} mb={6} p={4} align="center">
            {/* <Box w="full" h={'400px'} p={4}>
                <SimpleCenterHeaderPage subTitle={'Page Headers'} />
            </Box>
            <Box w="full" py={4} maxW="1536px">
                <LabelText mb={2}>{pageHeaders[0].name}</LabelText>
                <Flex
                  w="full"
                  rounded='lg'
                  justifyContent={'center'}
                  boxShadow={'lg'}>
                    <PageHeaderUserProfilWithBg />
                </Flex>
            </Box> */}
            {/* <iframe src="/components/application/page-headers/page-header-user-profil-with-bg/index.tsx"></iframe> */}
        </Stack>
    )
}

export default PageHeadersComponentPage