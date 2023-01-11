import React from 'react';
import { Stack, Box } from "@mui/material";
import { motion } from 'framer-motion';


import { ChannelCard, VideoCard, Loader } from "./";

const Videos = ({videos, direction}) => {
    if(!videos?.length) return <Loader />;

    return (
        <Stack gap={2} direction={direction || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" >
            {videos.map((item, idx) => (
                <Box  key={idx}>
                    <motion.div whileInView={{ scale: [0.5, 1] }} transition={{ duration: 0.5, ease: 'easeInOut' }}>
                        {item.id.videoId && <VideoCard video={item} /> }
                    </motion.div>
                    <motion.div whileInView={{ scale: [0.5, 1] }} transition={{ duration: 0.5, ease: 'easeInOut' }}>
                        {item.id.channelId && <ChannelCard channelDetail={item} />}
                    </motion.div>
                </Box>
            ))}
        </Stack>
    );
};

export default Videos;