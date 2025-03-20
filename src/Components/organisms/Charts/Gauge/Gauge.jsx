import * as React from 'react';
import Stack from '@mui/material/Stack';
import { Gauge } from '@mui/x-charts/Gauge';

export default function BasicGauges(props) {

    const {percent} = props;
  return (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
      <Gauge
       width={50}
        height={50}
         value={percent}
         sx={{
            "& text": { fill: "white", fontSize: "12px", fontWeight: "bold" }, // Изменение цвета текста
          }}
         />
    </Stack>
  );
}

