import Flex from './components/flex'
import { Container, Grid, Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'

function App() {
	const [direction, setDirection] = useState('row')
	const [justify, setJustify] = useState('center')
	const [align, setAlign] = useState('center')
	return (
		<React.Fragment>
			<Container maxWidth="lg">
				<Box
					sx={{
						position: 'fixed',
						right: 0,
						bottom: 0,
						color: '#374151',
						display: 'flex',
						alignItems: 'center',
						mx: 2
					}}
				>
					<pre>developed by: </pre>
					<a href="https://github.com/Durgarao310"> Durgarao310</a>
				</Box>
				<Grid container spacing={4}>
					<Grid item xs={12} sm={12} md={6} lg={6}>
						<Box
							sx={{
								backgroundColor: '#e7e5e4',
								alignItems: 'center',
								justifyContent: 'center',
								display: 'flex',
								mt: 4,
								overflow: 'hidden'
							}}
						>
							<Flex
								direction={direction}
								justify={justify}
								align={align}
							/>
						</Box>
					</Grid>
					<Grid item xs={12} sm={12} md={6} lg={6}>
						<Box sx={{ py: 3 }}>
							{/* Direction */}
							<Box sx={{ pb: 3 }}>
								<Box>
									<Typography
										variant="h6"
										sx={{ color: '#4a148c' }}
									>
										Flex-Direction
									</Typography>
								</Box>
								<Box>
									<FormControl>
										<RadioGroup
											row
											aria-labelledby="demo-row-radio-buttons-group-label"
											name="row-radio-buttons-group"
											value={direction}
											defaultValue={direction}
											onChange={(e) =>
												setDirection(e.target.value)
											}
										>
											<FormControlLabel
												value="row"
												control={<Radio />}
												label="Row"
											/>
											<FormControlLabel
												value="column"
												control={<Radio />}
												label="Column"
											/>
											<FormControlLabel
												value="row-reverse"
												control={<Radio />}
												label="Row-Reverse"
											/>
											<FormControlLabel
												value="column-reverse"
												control={<Radio />}
												label="Column-Reverse"
											/>
										</RadioGroup>
									</FormControl>
								</Box>
							</Box>

							{/* justifyContent */}
							<Box sx={{ pb: 3 }}>
								<Box>
									<Typography
										variant="h6"
										sx={{ color: '#4a148c' }}
									>
										Justify-Content
									</Typography>
								</Box>
								<Box>
									<FormControl>
										<RadioGroup
											row
											aria-labelledby="demo-row-radio-buttons-group-label"
											name="row-radio-buttons-group"
											value={justify}
											defaultValue={justify}
											onChange={(e) =>
												setJustify(e.target.value)
											}
										>
											<FormControlLabel
												value="flex-start"
												control={<Radio />}
												label="Flex-Start"
											/>
											<FormControlLabel
												value="center"
												control={<Radio />}
												label="Center"
											/>
											<FormControlLabel
												value="flex-end"
												control={<Radio />}
												label="Flex-End"
											/>
											<FormControlLabel
												value="space-between"
												control={<Radio />}
												label="Space-Between"
											/>
											<FormControlLabel
												value="space-evenly"
												control={<Radio />}
												label="Space-Evenly"
											/>
											<FormControlLabel
												value="space-around"
												control={<Radio />}
												label="Space-Around"
											/>
										</RadioGroup>
									</FormControl>
								</Box>
							</Box>
							{/* alignItems */}
							<Box>
								<Box>
									<Typography
										variant="h6"
										sx={{ color: '#4a148c' }}
									>
										Align-Items
									</Typography>
								</Box>
								<Box>
									<FormControl>
										<RadioGroup
											row
											aria-labelledby="demo-row-radio-buttons-group-label"
											name="row-radio-buttons-group"
											value={align}
											defaultValue={align}
											onChange={(e) =>
												setAlign(e.target.value)
											}
										>
											<FormControlLabel
												value="flex-start"
												control={<Radio />}
												label="Flex-Start"
											/>
											<FormControlLabel
												value="center"
												control={<Radio />}
												label="Center"
											/>
											<FormControlLabel
												value="flex-end"
												control={<Radio />}
												label="Flex-End"
											/>
											<FormControlLabel
												value="stretch"
												control={<Radio />}
												label="Stretch"
											/>
											<FormControlLabel
												value="baseline"
												control={<Radio />}
												label="Baseline"
											/>
										</RadioGroup>
									</FormControl>
								</Box>
							</Box>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</React.Fragment>
	)
}

export default App
