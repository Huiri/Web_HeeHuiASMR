import React from 'react';
import {PromotionChannel, PromotionTitle, PromotionWrapper, VideoThumbnail, VideoWrapper, StyledLink} from "./styled";
import useFetch from "../../../hooks/useYoutube";

const PostVideoCard = ({param, offset, limit, page}) => {

    const videolist = useFetch("");
    //.slice(offset, offset + limit)

    return (
        <>
            {videolist &&
            videolist.map((i, idx) => {
                return (
                    <PromotionWrapper key={idx}>
                        <StyledLink to={`/detail/${i.id.videoId}`}  state={{ data: i.snippet }}>
                            <VideoWrapper>
                                <VideoThumbnail className={i} src={i.snippet.thumbnails.medium["url"]} alt=""/>
                                <PromotionTitle>{i.snippet.title}</PromotionTitle>
                                <PromotionChannel>{i.snippet.channelTitle}</PromotionChannel>

                            </VideoWrapper>
                        </StyledLink>
                    </PromotionWrapper>

                )
            })}
        </>
    );
};

export default PostVideoCard;