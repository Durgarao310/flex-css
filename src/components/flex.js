import React from 'react'
import { Box, Typography } from '@mui/material'
import Paper from '@mui/material/Paper'

const Flex = (props) => {
	return (
		<React.Fragment>
			<Box
				sx={{
					width: '100%',
					minHeight: '50vh',
					display: 'flex',
					alignItems: props.align,
					justifyContent: props.justify,
					flexDirection: props.direction,
					overflow: 'hidden'
				}}
			>
				<Paper elevation={3} sx={{ m: 1, overflow: 'hidden' }}>
					<Box
						sx={{
							p: 1.5,
							backgroundColor: '#047857',
							textAlign: 'center',
							minHeight: '100%',
							overflow: 'hidden'
						}}
					>
						<Typography sx={{ color: '#FFF', alignSelf: 'center' }}>
							box1
						</Typography>
					</Box>
				</Paper>

				<Paper elevation={3} sx={{ m: 1, overflow: 'hidden' }}>
					<Box
						sx={{
							padding: 2.5,
							backgroundColor: '#ef4444',
							textAlign: 'center',
							minHeight: '100%',
							overflow: 'hidden'
						}}
					>
						<Typography sx={{ color: '#FFF', alignSelf: 'center' }}>
							box2
						</Typography>
					</Box>
				</Paper>

				<Paper elevation={3} sx={{ m: 1, overflow: 'hidden' }}>
					<Box
						sx={{
							padding: 3.5,
							backgroundColor: '#581c87',
							textAlign: 'center',
							minHeight: '100%',
							overflow: 'hidden'
						}}
					>
						<Typography sx={{ color: '#FFF', alignSelf: 'center' }}>
							box3
						</Typography>
					</Box>
				</Paper>
			</Box>
		</React.Fragment>
	)
}

export default Flex
