import { Icon, Link as ChakraLink, LinkProps, Text } from '@chakra-ui/react'
import { ActiveLink } from 'components/ActiveLink'
import { ElementType } from 'react'

interface NavLinkProps extends LinkProps {
  icon: ElementType
  children: string
  href: string
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink
        display="flex"
        _hover={{
          color: 'yellow.400'
        }}
        {...rest}
      >
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  )
}
