import { Box, Skeleton } from "@mui/material";
const SkeletonContainer = () => {
    return(
        <Box sx={{display: "flex", margin: 'auto', justifyContent: 'center'}}>
            <Skeleton animation="wave" sx={{margin: 2}} width={400} height={400}/>
            <Skeleton animation="wave" sx={{margin: 2}} width={400} height={400}/>
            <Skeleton animation="wave" sx={{margin: 2}} width={400} height={400}/>
        </Box>
    )
}

export default SkeletonContainer;