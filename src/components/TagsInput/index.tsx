import {
  Box,
  Tag,
  TagLabel,
  TagCloseButton,
  Flex,
  Text,
  forwardRef
} from '@chakra-ui/react'
import { Input } from 'components/Input'
import { FilterFormData } from 'components/Table/Filter'
import {
  ForwardRefRenderFunction,
  KeyboardEvent,
  useEffect,
  useState
} from 'react'
import { UseFormSetValue } from 'react-hook-form'

type TagsInputProps = {
  defaultTags?: string[]
  setValue: UseFormSetValue<FilterFormData>
}

const TagsInputBase: ForwardRefRenderFunction<
  HTMLInputElement,
  TagsInputProps
> = ({ defaultTags = [], setValue }, ref) => {
  const [tags, setTags] = useState<string[]>(defaultTags)

  function hanldeCreateTags(
    e: KeyboardEvent<HTMLInputElement> & { target: HTMLInputElement }
  ) {
    if (e.key !== 'Enter') return
    const value = e.target.value
    if (!value.trim()) return
    setTags([...tags, value])
    e.target.value = ''
  }

  function removeTag(index: number) {
    setTags(tags.filter((_, i) => i !== index))
  }

  useEffect(() => {
    setValue('tags', tags.join(';'))
  }, [tags, setValue])

  return (
    <Box borderRadius={8} bg="gray.700" p={4}>
      <Text mb={2}>Tags</Text>
      <input type="text" hidden ref={ref} />
      <Flex flexWrap="wrap" gap="10px">
        {tags.map((tag, index) => (
          <Tag colorScheme="green" key={index}>
            <TagLabel>{tag}</TagLabel>
            <TagCloseButton onClick={() => removeTag(index)} />
          </Tag>
        ))}
        <Input
          variant="unstyled"
          maxW="120px"
          name="tags"
          placeholder="Adicionar Tag..."
          onKeyDown={hanldeCreateTags}
        />
      </Flex>
    </Box>
  )
}

export const TagsInput = forwardRef(TagsInputBase)
