import { useEffect } from 'react'

import { Box, Spacer, Stack } from '@chakra-ui/react'

import { ChakraNextImage } from '@components'
import { useGenerateRandomPostText } from '@hooks'
import { useRandomPost } from '@lib'

import { PostContainerTags } from '../PostContainerTags'
import { PostTextarea } from '../PostTextarea'

export const PostContainerBody = () => {
  const generateRandomPostText = useGenerateRandomPostText()
  const post = useRandomPost()

  useEffect(() => {
    generateRandomPostText()
  }, [post])

  return (
    <Stack
      flex={1}
      data-tour="step-post-content"
      data-tour-mob="step-post-content"
      p={4}
      rounded="sm"
      borderWidth={1}
      fontSize="md"
      bg="white"
    >
      <PostTextarea />
      <PostContainerTags />
      <Spacer />
      {post?.image && (
        <Box
          rounded="md"
          overflow="hidden"
          borderColor="gray.300"
          borderWidth={1}
        >
          <ChakraNextImage ratio="twitter" h={'100%'} image={post.image.url} />
        </Box>
      )}
    </Stack>
  )
}
