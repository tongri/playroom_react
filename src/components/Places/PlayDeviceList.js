import {Container, Grid} from '@mui/material'
import PlayDevice from './PlayDevice'

const PlayDeviceList = ({items, total, size, page}) => {

    return items.length ? (
        <>
            <Container maxWidth="xl" sx={{ mt: 5}} >
                <Grid container spacing={2}>
                    {items.map(playDevice => (
                        <Grid item key={playDevice.id}>
                            <PlayDevice {...playDevice} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    ) : (
        <p className="text-center">No play devices yet...</p>
    )
}

export default PlayDeviceList