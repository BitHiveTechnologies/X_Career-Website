"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import { useIsMobile } from "@/hooks/use-mobile"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
const chartData = [
  { date: "2024-04-01", customers: 372 },
  { date: "2024-04-02", customers: 277 },
  { date: "2024-04-03", customers: 287 },
  { date: "2024-04-04", customers: 502 },
  { date: "2024-04-05", customers: 663 },
  { date: "2024-04-06", customers: 641 },
  { date: "2024-04-07", customers: 425 },
  { date: "2024-04-08", customers: 729 },
  { date: "2024-04-09", customers: 169 },
  { date: "2024-04-10", customers: 451 },
  { date: "2024-04-11", customers: 677 },
  { date: "2024-04-12", customers: 502 },
  { date: "2024-04-13", customers: 722 },
  { date: "2024-04-14", customers: 357 },
  { date: "2024-04-15", customers: 290 },
  { date: "2024-04-16", customers: 328 },
  { date: "2024-04-17", customers: 806 },
  { date: "2024-04-18", customers: 774 },
  { date: "2024-04-19", customers: 423 },
  { date: "2024-04-20", customers: 239 },
  { date: "2024-04-21", customers: 337 },
  { date: "2024-04-22", customers: 394 },
  { date: "2024-04-23", customers: 368 },
  { date: "2024-04-24", customers: 677 },
  { date: "2024-04-25", customers: 465 },
  { date: "2024-04-26", customers: 205 },
  { date: "2024-04-27", customers: 803 },
  { date: "2024-04-28", customers: 302 },
  { date: "2024-04-29", customers: 555 },
  { date: "2024-04-30", customers: 834 },
  { date: "2024-05-01", customers: 385 },
  { date: "2024-05-02", customers: 603 },
  { date: "2024-05-03", customers: 437 },
  { date: "2024-05-04", customers: 805 },
  { date: "2024-05-05", customers: 871 },
  { date: "2024-05-06", customers: 1018 },
  { date: "2024-05-07", customers: 688 },
  { date: "2024-05-08", customers: 359 },
  { date: "2024-05-09", customers: 407 },
  { date: "2024-05-10", customers: 623 },
  { date: "2024-05-11", customers: 605 },
  { date: "2024-05-12", customers: 437 },
  { date: "2024-05-13", customers: 357 },
  { date: "2024-05-14", customers: 938 },
  { date: "2024-05-15", customers: 853 },
  { date: "2024-05-16", customers: 738 },
  { date: "2024-05-17", customers: 919 },
  { date: "2024-05-18", customers: 665 },
  { date: "2024-05-19", customers: 415 },
  { date: "2024-05-20", customers: 407 },
  { date: "2024-05-21", customers: 222 },
  { date: "2024-05-22", customers: 201 },
  { date: "2024-05-23", customers: 542 },
  { date: "2024-05-24", customers: 514 },
  { date: "2024-05-25", customers: 451 },
  { date: "2024-05-26", customers: 383 },
  { date: "2024-05-27", customers: 880 },
  { date: "2024-05-28", customers: 423 },
  { date: "2024-05-29", customers: 208 },
  { date: "2024-05-30", customers: 620 },
  { date: "2024-05-31", customers: 408 },
  { date: "2024-06-01", customers: 378 },
  { date: "2024-06-02", customers: 880 },
  { date: "2024-06-03", customers: 263 },
  { date: "2024-06-04", customers: 819 },
  { date: "2024-06-05", customers: 228 },
  { date: "2024-06-06", customers: 544 },
  { date: "2024-06-07", customers: 693 },
  { date: "2024-06-08", customers: 705 },
  { date: "2024-06-09", customers: 918 },
  { date: "2024-06-10", customers: 355 },
  { date: "2024-06-11", customers: 242 },
  { date: "2024-06-12", customers: 912 },
  { date: "2024-06-13", customers: 211 },
  { date: "2024-06-14", customers: 806 },
  { date: "2024-06-15", customers: 657 },
  { date: "2024-06-16", customers: 681 },
  { date: "2024-06-17", customers: 995 },
  { date: "2024-06-18", customers: 277 },
  { date: "2024-06-19", customers: 631 },
  { date: "2024-06-20", customers: 858 },
  { date: "2024-06-21", customers: 379 },
  { date: "2024-06-22", customers: 587 },
  { date: "2024-06-23", customers: 1010 },
  { date: "2024-06-24", customers: 312 },
  { date: "2024-06-25", customers: 331 },
  { date: "2024-06-26", customers: 814 },
  { date: "2024-06-27", customers: 938 },
  { date: "2024-06-28", customers: 349 },
  { date: "2024-06-29", customers: 263 },
  { date: "2024-06-30", customers: 846 },
]

const chartConfig = {
  customers: {
    label: "Customers",
    color: "hsl(142, 76%, 36%)", // Green color
  },
} satisfies ChartConfig

export function ChartAreaInteractive() {
  const isMobile = useIsMobile()
  const [timeRange, setTimeRange] = React.useState("30d")

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d")
    }
  }, [isMobile])

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date)
    const referenceDate = new Date("2024-06-30")
    let daysToSubtract = 90
    if (timeRange === "30d") {
      daysToSubtract = 30
    } else if (timeRange === "7d") {
      daysToSubtract = 7
    }
    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - daysToSubtract)
    return date >= startDate
  })

  return (
    <Card className="@container/card">
      <CardHeader className="relative">
        <CardTitle>Total Customers</CardTitle>
        <CardDescription>
          <span className="@[540px]/card:block hidden">
            Total for the last 3 months
          </span>
          <span className="@[540px]/card:hidden">Last 3 months</span>
        </CardDescription>
        <div className="absolute right-4 top-4">
          <ToggleGroup
            type="single"
            value={timeRange}
            onValueChange={setTimeRange}
            variant="outline"
            className="@[767px]/card:flex hidden"
          >
            <ToggleGroupItem value="90d" className="h-8 px-2.5">
              Last 3 months
            </ToggleGroupItem>
            <ToggleGroupItem value="30d" className="h-8 px-2.5">
              Last 30 days
            </ToggleGroupItem>
            <ToggleGroupItem value="7d" className="h-8 px-2.5">
              Last 7 days
            </ToggleGroupItem>
          </ToggleGroup>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="@[767px]/card:hidden flex w-40"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="90d" className="rounded-lg">
                Last 3 months
              </SelectItem>
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillCustomers" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="hsl(142, 76%, 36%)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="hsl(142, 76%, 36%)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="customers"
              type="natural"
              fill="url(#fillCustomers)"
              stroke="hsl(142, 76%, 36%)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
