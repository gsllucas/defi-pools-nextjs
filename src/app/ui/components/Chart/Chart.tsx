import { LineChart } from '@mui/x-charts';
import chartJson from './tvl.json';
import { TimestampControllers } from './components/TimestampControllers/TimestampControllers';
import { timestampControllers } from './components/TimestampControllers/timestamp-controllers';
import { useEffect, useState, forwardRef, LegacyRef } from 'react';
import { toCurrency } from '@/app/utils/functions/functions';

export interface ChartProps {
  series: any[];
  xAxis: any[];
  yAxis?: any[];
  valueFormatter?: '$' | '%' | undefined;
  chartHeight?: number;
}

const hide = { display: 'none' };

export function Chart({
  series,
  xAxis,
  yAxis,
  valueFormatter,
  chartHeight = 250,
}: ChartProps) {
  const [period, setPeriod] = useState(timestampControllers[2].timestampDays);

  function setChartTimestamp(timestampDays: number) {
    setPeriod(timestampDays);
  }

  function getSeriesValueFormatter(value: number) {
    switch (valueFormatter) {
      case '$':
        return toCurrency(+value);
      case '%':
        return `${value.toFixed(2)}%`;
      default:
        return `${value}`;
    }
  }

  // console.log('xAxis', xAxis);
  // console.log('series', series);

  return (
    <>
      <LineChart
        xAxis={[{ data: xAxis.slice(0, period) }]}
        series={[
          {
            id: 'chart',
            data: series.slice(0, period),
            connectNulls: false,
            showMark: false,
            color: '#774af6',
            area: true,
            valueFormatter: (data) => getSeriesValueFormatter(data),
          },
        ]}
        sx={{
          transform: 'scale(1.25)',
          width: '100%',
          '.MuiLineElement-root': {
            stroke: '#774af6',
            strokeWidth: 1.5,
            transition: '1s',
          },
          '.MuiChartsAxisHighlight-root': { strokeWidth: 0 },
          '& .MuiAreaElement-series-chart': { fill: "url('#chartGradient')" },
          '.MuiChartsAxis-directionX': hide,
          '.MuiChartsAxis-directionY': hide,
        }}
        height={chartHeight}
      >
        <defs>
          <linearGradient id="chartGradient" gradientTransform="rotate(90)">
            <stop offset="5%" stopColor="#e2dcf4" />
            <stop offset="70%" stopColor="#fff" />
          </linearGradient>
        </defs>
      </LineChart>
      <TimestampControllers
        align="flex-end"
        setChartTimestamp={setChartTimestamp}
      />
    </>
  );
}
