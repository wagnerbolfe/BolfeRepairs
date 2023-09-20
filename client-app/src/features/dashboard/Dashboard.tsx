import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import Chart from "react-apexcharts";
import { Header } from "../../app/layout/Header/Header";

const options = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.cyan[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  xaxis: {
    axisBorder: {
      color: theme.colors.cyan[600]
    },
    axisTicks: {
      color: theme.colors.cyan[600]
    },
    categories: [
      '2015',
      '2016',
      '2017',
      '2018',
      '2019',
      '2020',
      '2021',
      '2022',
      '2023',
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3
    }
  }
}

const series = [
  { name: 'series1', data: [5, 8, 13, 40, 100, 150, 200, 240, 400] }
]

export default function Dashboard() {

  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SimpleGrid flex='1' gap='4' minChildWidth='480px' alignItems='flex-start'>
          <Box
            p={["6", "8"]}
            bg="cyan.800"
            borderRadius={8}
          >
            <Text fontSize="lg" mb="4">Ordens</Text>
            <Chart options={options} series={series} type="area" height={240} />
          </Box>
          <Box
            p={["6", "8"]}
            bg="cyan.800"
            borderRadius={8}
          >
            <Text fontSize="lg" mb="4">Clientes</Text>
            <Chart options={options} series={series} type="bar" height={240} />
          </Box>
          <Box
            p={["6", "8"]}
            bg="cyan.800"
            borderRadius={8}
          >
            <Text fontSize="lg" mb="4">Máquinas</Text>
            <Chart options={options} series={series} type="bar" height={240} />
          </Box>
          <Box
            p={["6", "8"]}
            bg="cyan.800"
            borderRadius={8}
          >
            <Text fontSize="lg" mb="4">Marca</Text>
            <Chart options={options} series={series} type="area" height={240} />
          </Box>
        </SimpleGrid>

      </Flex>
    </Flex>
  )
}