import React from 'react';
import { SkeletonContainer, Shimmer } from './Skeleton.styles';

const Skeleton = ({ width, height, borderRadius = '4px', className }) => {
    return (
        <SkeletonContainer
            width={width}
            height={height}
            $borderRadius={borderRadius}
            className={className}
        >
            <Shimmer />
        </SkeletonContainer>
    );
};

export default Skeleton;