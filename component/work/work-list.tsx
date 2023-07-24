import { Work } from '@/models';
import { Box, Divider, Skeleton } from '@mui/material';
import React, { Fragment } from 'react';
import WorkCard from './work-card';
import WorkSkeleton from './work-skeleton';

export interface WorkListProps {
  workList: Work[],
  loadding?: boolean
}

export default function WorkList({ workList, loadding }: WorkListProps) {
  if (loadding) return (
    <Box>
      {Array.from({ length: 4 }).map((_, index) => (
        <>
          <WorkSkeleton />
          <Divider sx={{ my: 3 }} />
        </>
      ))
      }
    </Box >
  )

  if (workList.length === 0) return (
    <Box>
      NO DATA
    </Box>
  )
  return (
    <Box>
      {
        workList && workList.length && workList.map((work) => (
          <Fragment key={work.id}>
            <WorkCard work={work} />
            <Divider sx={{ my: 3 }} />
          </Fragment>
        ))
      }
    </Box>
  );
}
