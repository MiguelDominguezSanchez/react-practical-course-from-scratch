import { HiCalendar } from 'react-icons/hi'
import { Box, Flex, Text, Spacer, Tag, Button, Icon } from '@chakra-ui/react'

// import dayjs from 'dayjs'
// import 'dayjs/locale/es'

import { formatDistance, subDays } from 'date-fns'

import { format, compareAsc } from 'date-fns'

export function LaunchItem(launch) {
	return (
		<Box bg='gray.100' p={4} m={4} borderRadius='lg'>
			<Flex display='flex'>
				<Text fontSize='2x1'>
					Mission <strong>{launch.mission_name}</strong>({launch.launch_year})
				</Text>
				<Spacer />
				<Tag p={2} colorScheme={launch.launch_success ? 'green' : 'red'}>
					{launch.launch_success ? 'Success' : 'Failure'}
				</Tag>
			</Flex>

			<Flex align='center'>
				<Icon as={HiCalendar} color='gray.500' />{' '}
				<Text fontSize='sm' ml={1} color='gray.500'>
					{/* {dayjs(launch.launch_date_local).local('es').format('D MMMM, YYYY')} */}
					{/* {formatDistance(subDays(new Date(), 3), new Date(), {
						addSuffix: true,
					})} */}
					{format(new Date(2014, 1, 11), 'MM/dd/yyyy')}
				</Text>
			</Flex>

			<Button mt={2} colorScheme='purple'>
				More Details
			</Button>
		</Box>
	)
}
