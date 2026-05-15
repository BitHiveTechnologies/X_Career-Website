import { TrendingDownIcon, TrendingUpIcon } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { AdminDashboardStats } from "@/lib/api/types"

interface SectionCardsProps {
  stats?: AdminDashboardStats['overview']
  growth?: AdminDashboardStats['growth']
}

export function SectionCards({ stats, growth }: SectionCardsProps) {
  // Use real data if available, otherwise fall back to empty/loading state
  const totalRevenue = stats?.totalRevenue !== undefined 
    ? new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(stats.totalRevenue) 
    : "₹0.00"
  
  const revenueGrowth = growth?.revenue?.percentage !== undefined 
    ? `${growth.revenue.percentage > 0 ? '+' : ''}${growth.revenue.percentage}%` 
    : "0%"

  const newCustomers = growth?.users?.count !== undefined 
    ? growth.users.count.toLocaleString() 
    : "0"
  
  const customerGrowth = growth?.users?.percentage !== undefined 
    ? `${growth.users.percentage > 0 ? '+' : ''}${growth.users.percentage}%` 
    : "0%"

  const activeAccounts = stats?.activeUsers !== undefined 
    ? stats.activeUsers.toLocaleString() 
    : "0"
  
  const userGrowth = growth?.users?.percentage !== undefined 
    ? `${growth.users.percentage > 0 ? '+' : ''}${growth.users.percentage}%` 
    : "0%"

  const growthRate = growth?.revenue?.percentage !== undefined 
    ? `${growth.revenue.percentage}%` 
    : "0%"

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 lg:px-6">
      <Card className="bg-gradient-to-t from-primary/5 to-card dark:bg-card shadow-sm">
        <CardHeader className="relative">
          <CardDescription>Total Revenue</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums">
            {totalRevenue}
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="outline" className={`flex gap-1 rounded-lg text-xs ${(growth?.revenue?.percentage || 0) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {(growth?.revenue?.percentage || 0) >= 0 ? <TrendingUpIcon className="size-3" /> : <TrendingDownIcon className="size-3" />}
              {revenueGrowth}
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            {(growth?.revenue?.percentage || 0) >= 0 ? 'Trending up' : 'Trending down'} this month {(growth?.revenue?.percentage || 0) >= 0 ? <TrendingUpIcon className="size-4" /> : <TrendingDownIcon className="size-4" />}
          </div>
          <div className="text-muted-foreground">
            Revenue from subscriptions
          </div>
        </CardFooter>
      </Card>
      <Card className="bg-gradient-to-t from-primary/5 to-card dark:bg-card shadow-sm">
        <CardHeader className="relative">
          <CardDescription>New Customers</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums">
            {newCustomers}
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="outline" className={`flex gap-1 rounded-lg text-xs ${(growth?.users?.percentage || 0) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {(growth?.users?.percentage || 0) >= 0 ? <TrendingUpIcon className="size-3" /> : <TrendingDownIcon className="size-3" />}
              {customerGrowth}
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            {(growth?.users?.percentage || 0) >= 0 ? 'Trending up' : 'Trending down'} this period {(growth?.users?.percentage || 0) >= 0 ? <TrendingUpIcon className="size-4" /> : <TrendingDownIcon className="size-4" />}
          </div>
          <div className="text-muted-foreground">
            User registrations this month
          </div>
        </CardFooter>
      </Card>
      <Card className="bg-gradient-to-t from-primary/5 to-card dark:bg-card shadow-sm">
        <CardHeader className="relative">
          <CardDescription>Active Accounts</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums">
            {activeAccounts}
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
              <TrendingUpIcon className="size-3" />
              {userGrowth}
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Strong user retention <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">Active subscriptions</div>
        </CardFooter>
      </Card>
      <Card className="bg-gradient-to-t from-primary/5 to-card dark:bg-card shadow-sm">
        <CardHeader className="relative">
          <CardDescription>Growth Rate</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums">
            {growthRate}
          </CardTitle>
          <div className="absolute right-4 top-4">
            <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
              <TrendingUpIcon className="size-3" />
              {growthRate}
            </Badge>
          </div>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Steady performance <TrendingUpIcon className="size-4" />
          </div>
          <div className="text-muted-foreground">Meets growth projections</div>
        </CardFooter>
      </Card>
    </div>
  )
}

